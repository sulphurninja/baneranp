# ANP Privado - Premium Real Estate Landing Page

A world-class, high-converting landing page for ANP Privado luxury residences at Baner, Pune. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Design Philosophy

- **Ultra-premium aesthetic** inspired by legendary creative studios
- **Conversion-optimized** with strategic CTAs and lead capture forms
- **Mobile-first responsive** design that looks stunning on all devices
- **Subtle animations** using Framer Motion for enhanced UX
- **Clean architecture** with reusable components and structured data

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Database:** MongoDB (for lead capture)
- **Icons:** Lucide React

## 📋 Features

### Landing Page Sections

1. **Hero Section** - Aspirational headline with key highlights and CTAs
2. **Quick Lead Capture Strip** - Sticky inline form for immediate engagement
3. **Overview Section** - Project story and key facts
4. **Residences Section** - Configuration cards (3/4/5 BHK)
5. **Amenities Section** - Filterable amenity showcase
6. **Floor Plans Section** - Interactive floor plan viewer
7. **Gallery Section** - Masonry-style image gallery
8. **Location Section** - Map integration and connectivity highlights
9. **Pricing Section** - Transparent pricing table with FAQs
10. **Testimonials Section** - Social proof from residents
11. **About Developer Section** - Credibility and trust building
12. **Contact Section** - Comprehensive lead capture form

### Key Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Sticky header with scroll effects
- ✅ Multiple lead capture forms (inline + full)
- ✅ MongoDB integration for lead storage
- ✅ Form validation with error handling
- ✅ Animated components with Framer Motion
- ✅ SEO optimized with proper metadata
- ✅ Accessible and semantic HTML
- ✅ Performance optimized

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ installed
- MongoDB account (MongoDB Atlas recommended)
- npm or yarn package manager

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Copy the example file
cp env.example .env.local
```

Edit `.env.local` and add your MongoDB connection string:

```env
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/anp_privado?retryWrites=true&w=majority
```

**Getting MongoDB URI:**
1. Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier available)
3. Click "Connect" → "Connect your application"
4. Copy the connection string and replace `<password>` with your database password

### Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 4: Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
latest/
├── app/
│   ├── api/
│   │   └── leads/
│   │       └── route.ts          # Lead capture API endpoint
│   ├── globals.css               # Global styles & Tailwind
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main landing page
├── components/
│   ├── AmenityCard.tsx           # Amenity display component
│   ├── ConfigurationCard.tsx     # Configuration/unit card
│   ├── Footer.tsx                # Footer with links & info
│   ├── Header.tsx                # Sticky navigation header
│   └── LeadForm.tsx              # Lead capture forms (inline & full)
├── lib/
│   ├── data.ts                   # All static data & constants
│   └── mongodb.ts                # MongoDB connection utility
├── types/
│   └── index.ts                  # TypeScript type definitions
├── public/                       # Static assets (add images here)
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

## 🖼️ Adding Your Images

Replace placeholder images in these locations:

### 1. Hero Section
- Path: `/public/images/hero-banner.jpg`
- Recommended size: 1920x1080px
- Update in: `app/page.tsx` (Hero Section)

### 2. Configuration Images
- Path: `/public/images/configurations/`
- Files: `3bhk.jpg`, `4bhk.jpg`, `5bhk.jpg`, etc.
- Recommended size: 800x600px
- Update in: `lib/data.ts` (configurations array)

### 3. Amenity Images
- Path: `/public/images/amenities/`
- Recommended size: 600x400px
- Update in: `lib/data.ts` (amenities array)

### 4. Floor Plans
- Path: `/public/images/floorplans/`
- Files: `3bhk.jpg`, `4bhk.jpg`, etc.
- Recommended size: 1200x900px
- Update in: `lib/data.ts` (floorPlans array)

### 5. Gallery Images
- Path: `/public/images/gallery/`
- Various sizes for masonry layout
- Update in: `app/page.tsx` (Gallery Section)

### 6. About Section
- Path: `/public/images/team.jpg` or `/public/images/office.jpg`
- Recommended size: 800x600px
- Update in: `app/page.tsx` (About Section)

## 🗺️ Adding Google Maps

In `app/page.tsx`, find the Location Section and replace the map placeholder:

```tsx
// Replace this placeholder div:
<div className="text-center">
  <MapPin className="w-16 h-16 text-charcoal-400 mx-auto mb-4" />
  <p className="text-charcoal-600 font-medium">Google Maps Integration</p>
</div>

// With actual Google Maps iframe:
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%"
  height="500"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

**Getting Google Maps Embed Code:**
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for "PAN Card Club Road, Baner, Pune"
3. Click "Share" → "Embed a map"
4. Copy the iframe code

## 📊 Lead Management

### Viewing Leads

Leads are stored in MongoDB. Access them via:

**API Endpoint:**
```
GET http://localhost:3000/api/leads
```

**Query Parameters:**
- `limit` - Number of leads per page (default: 50)
- `skip` - Number of leads to skip (for pagination)

**Example:**
```bash
curl http://localhost:3000/api/leads?limit=10&skip=0
```

### Lead Data Structure

```typescript
{
  name: string;
  mobile: string;
  email?: string;
  interestedIn: string;
  buyingFor?: string;
  message?: string;
  consent: boolean;
  source: string;
  timestamp: Date;
  status: 'new' | 'contacted' | 'qualified' | 'closed';
}
```

### Security Note

⚠️ **IMPORTANT:** The GET endpoint for leads is currently unprotected. Before deploying to production:

1. Add authentication middleware
2. Implement role-based access control
3. Use environment variables for API keys
4. Set up proper CORS policies

## 🔗 Integrating with CRM/Email/SMS

### Email Notifications

Add email sending logic in `app/api/leads/route.ts`:

```typescript
// After inserting lead
await sendEmail({
  to: 'sales@anpprivado.com',
  subject: 'New Lead from Website',
  body: `New lead: ${leadData.name} - ${leadData.mobile}`,
});
```

Recommended services:
- SendGrid
- AWS SES
- Resend
- Nodemailer with SMTP

### SMS Notifications

Add SMS sending logic in `app/api/leads/route.ts`:

```typescript
// After inserting lead
await sendSMS({
  to: leadData.mobile,
  message: 'Thank you for your interest in ANP Privado. Our team will contact you shortly.',
});
```

Recommended services:
- Twilio
- MSG91
- AWS SNS
- Gupshup

### CRM Integration

Add webhook/API call in `app/api/leads/route.ts`:

```typescript
// After inserting lead
await fetch('https://your-crm.com/api/leads', {
  method: 'POST',
  headers: { 'Authorization': `Bearer ${process.env.CRM_API_KEY}` },
  body: JSON.stringify(leadData),
});
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change the color palette:

```typescript
colors: {
  champagne: {
    // Your accent color
    600: '#c9a26e',
    // ... other shades
  },
  charcoal: {
    // Your neutral color
    900: '#3d3d3d',
    // ... other shades
  },
}
```

### Typography

Change fonts in `app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({ subsets: ['latin'] })
```

### Content

Update all content in `lib/data.ts`:
- Configurations
- Amenities
- Location highlights
- Testimonials
- Project facts
- Pricing data

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

- **Netlify:** Similar to Vercel
- **AWS Amplify:** For AWS ecosystem
- **DigitalOcean App Platform:** For more control
- **Self-hosted:** Use `npm run build` and serve with PM2/Nginx

## 📱 Performance Optimization

### Images

1. Use Next.js Image component for optimization:
```tsx
import Image from 'next/image'

<Image
  src="/images/hero.jpg"
  alt="ANP Privado"
  width={1920}
  height={1080}
  priority
/>
```

2. Compress images before uploading:
- Use [TinyPNG](https://tinypng.com/)
- Or [ImageOptim](https://imageoptim.com/)

### Fonts

Fonts are already optimized using Next.js font optimization.

### Analytics

Add Google Analytics or other analytics in `app/layout.tsx`:

```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
```

## 🔒 Security Checklist

Before going live:

- [ ] Add authentication to lead viewing endpoint
- [ ] Set up CORS policies
- [ ] Enable rate limiting on API routes
- [ ] Validate all form inputs server-side
- [ ] Use HTTPS in production
- [ ] Set up MongoDB IP whitelist
- [ ] Add CSP headers
- [ ] Enable Next.js security headers

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🤝 Support

For technical support or customization requests, contact your development team.

---

**Built with ❤️ for ANP Privado**
