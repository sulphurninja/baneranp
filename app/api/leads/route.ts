import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { LeadFormData } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body: LeadFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.mobile || !body.interestedIn) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate mobile number (basic validation)
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(body.mobile)) {
      return NextResponse.json(
        { error: 'Invalid mobile number' },
        { status: 400 }
      );
    }

    // Validate email if provided
    if (body.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(body.email)) {
        return NextResponse.json(
          { error: 'Invalid email address' },
          { status: 400 }
        );
      }
    }

    // Check consent
    if (!body.consent) {
      return NextResponse.json(
        { error: 'Consent is required' },
        { status: 400 }
      );
    }

    // Connect to database
    const db = await getDatabase();
    const leadsCollection = db.collection('leads');

    // Prepare lead data
    const leadData = {
      ...body,
      timestamp: new Date(),
      status: 'new',
      source: body.source || 'website',
    };

    // Insert lead
    const result = await leadsCollection.insertOne(leadData);

    // TODO: Add email notification logic here
    // TODO: Add SMS notification logic here
    // TODO: Add CRM integration here

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Our team will contact you within 10 minutes.',
        leadId: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving lead:', error);
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve leads (protected - add authentication in production)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '50');
    const skip = parseInt(searchParams.get('skip') || '0');

    // TODO: Add authentication check here
    // For now, this is open - SECURE THIS IN PRODUCTION

    const db = await getDatabase();
    const leadsCollection = db.collection('leads');

    const leads = await leadsCollection
      .find({})
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    const total = await leadsCollection.countDocuments();

    return NextResponse.json({
      success: true,
      leads,
      total,
      page: Math.floor(skip / limit) + 1,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}

