# ANP Privado - Complete Setup Guide

This guide will walk you through setting up and customizing the ANP Privado landing page.

## 📦 Initial Setup (5 minutes)

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including Next.js, Tailwind CSS, Framer Motion, MongoDB driver, and Lucide icons.

### Step 2: Set Up MongoDB

#### Option A: MongoDB Atlas (Recommended - Free)

1. Go to [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Click "Try Free" and create an account
3. Create a new cluster:
   - Choose "FREE" tier (M0)
   - Select a cloud provider and region closest to you
   - Click "Create Cluster"
4. Wait for cluster to be created (2-3 minutes)
5. Click "Connect" on your cluster
6. Add your IP address (or use 0.0.0.0/0 for testing)
7. Create a database user with username and password
8. Choose "Connect your application"
9. Copy the connection string

#### Option B: Local MongoDB

If you have MongoDB installed locally:
```
mongodb://localhost:27017/anp_privado
```

### Step 3: Configure Environment Variables

1. Copy the example file:
   ```bash
   cp env.example .env.local
   ```

2. Open `.env.local` and add your MongoDB URI:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/anp_privado?retryWrites=true&w=majority
   ```
   
   Replace:
   - `username` with your MongoDB username
   - `password` with your MongoDB password
   - `cluster` with your cluster name

### Step 4: Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You should see the landing page! 🎉

## 🖼️ Adding Your Images (15 minutes)

### Organize Your Media Kit

Create these folders in the `public` directory:

```bash
mkdir -p public/images/configurations
mkdir -p public/images/amenities
mkdir -p public/images/floorplans
mkdir -p public/images/gallery
```

### Image Requirements

| Section | Folder | Recommended Size | Format |
|---------|--------|------------------|--------|
| Hero Banner | `/public/images/` | 1920x1080px | JPG |
| Building Exterior | `/public/images/` | 1200x1500px | JPG |
| Configurations | `/public/images/configurations/` | 800x600px | JPG |
| Amenities | `/public/images/amenities/` | 600x400px | JPG |
| Floor Plans | `/public/images/floorplans/` | 1200x900px | JPG/PNG |
| Gallery | `/public/images/gallery/` | Various | JPG |
| Team/Office | `/public/images/` | 800x600px | JPG |

### Update Image Paths

#### 1. Hero Section Images

Edit `app/page.tsx`, find the Hero Section (~line 80):

```tsx
// Replace this:
<div className="aspect-[4/5] bg-gradient-to-br from-charcoal-700 to-charcoal-500" />

// With this:
<img 
  src="/images/hero-building.jpg" 
  alt="ANP Privado Building" 
  className="w-full h-full object-cover" 
/>
```

#### 2. Configuration Images

Edit `lib/data.ts`, add image paths to configurations:

```typescript
export const configurations: Configuration[] = [
  {
    id: '3bhk',
    name: '3 BHK Simplex',
    // ... other properties
    image: '/images/configurations/3bhk.jpg', // Add this line
  },
  // ... repeat for other configurations
];
```

Then update `components/ConfigurationCard.tsx` (~line 25):

```tsx
// Replace placeholder with:
<img 
  src={config.image} 
  alt={config.name} 
  className="w-full h-full object-cover" 
/>
```

#### 3. Gallery Images

Edit `app/page.tsx`, find Gallery Section (~line 700):

```tsx
// Replace placeholder divs with actual images:
<img 
  src={`/images/gallery/gallery-${item}.jpg`} 
  alt={`Gallery ${item}`} 
  className="w-full h-full object-cover" 
/>
```

## 🗺️ Adding Google Maps (5 minutes)

### Get Google Maps Embed Code

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for "PAN Card Club Road, Baner, Pune"
3. Click the "Share" button
4. Click "Embed a map" tab
5. Copy the iframe code

### Update Location Section

Edit `app/page.tsx`, find Location Section (~line 750):

```tsx
// Replace the placeholder div with:
<iframe
  src="YOUR_GOOGLE_MAPS_EMBED_URL"
  width="100%"
  height="500"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-2xl"
/>
```

## ✏️ Customizing Content (20 minutes)

### Update Project Information

Edit `lib/data.ts`:

#### 1. Project Facts

```typescript
export const projectFacts = {
  location: 'Your actual address',
  landArea: 'Actual land area',
  configurations: 'Your configurations',
  startingPrice: 'Your starting price',
  possession: 'Your possession date',
  towers: 'Number of towers',
  floors: 'Number of floors',
  units: 'Total units',
  openSpace: 'Open space percentage',
  clubhouseArea: 'Clubhouse area',
};
```

#### 2. Configurations

Update each configuration with actual:
- Carpet areas
- Prices
- Features
- Images

#### 3. Amenities

Add/remove/modify amenities to match your project:

```typescript
{
  id: 'unique-id',
  name: 'Amenity Name',
  description: 'Brief description',
  category: 'wellness' | 'social' | 'sports' | 'kids' | 'convenience',
  icon: 'IconName', // From Lucide React
}
```

Available icons: Check [Lucide Icons](https://lucide.dev/)

#### 4. Location Highlights

Update distances and times:

```typescript
{
  id: 'unique-id',
  name: 'Landmark Name',
  distance: '2.5 km',
  time: '5 mins',
  icon: 'IconName',
}
```

#### 5. Pricing Data

Update with actual pricing:

```typescript
{
  configuration: '3 BHK Simplex',
  carpetArea: '1450 - 1650 sq.ft.',
  startingPrice: '₹2.7 Cr*',
}
```

### Update Contact Information

Edit `components/Footer.tsx` (~line 60):

```tsx
<a href="tel:+919876543210">+91 YOUR_PHONE_NUMBER</a>
<a href="mailto:sales@anpprivado.com">your-email@domain.com</a>
```

### Update RERA Information

Edit `components/Footer.tsx` (~line 120):

```tsx
<strong>RERA Disclaimer:</strong> This project is registered under RERA 
(Registration Number: YOUR_ACTUAL_RERA_NUMBER).
```

## 🎨 Customizing Design (10 minutes)

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  champagne: {
    // Your primary accent color
    50: '#fdfbf7',
    // ... generate shades using tools like:
    // https://uicolors.app/create
    600: '#YOUR_COLOR',
  },
}
```

### Change Fonts

Edit `app/layout.tsx`:

```typescript
import { Your_Font } from 'next/font/google'

const yourFont = Your_Font({ 
  subsets: ['latin'],
  variable: '--font-display',
})
```

Browse fonts: [Google Fonts](https://fonts.google.com/)

### Adjust Animations

Edit animation speeds in `tailwind.config.ts`:

```typescript
animation: {
  'fade-up': 'fadeUp 0.6s ease-out', // Change duration
}
```

## 📧 Setting Up Lead Notifications (Optional)

### Email Notifications

1. Install email service:
   ```bash
   npm install nodemailer
   # or
   npm install @sendgrid/mail
   ```

2. Add to `.env.local`:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   ```

3. Edit `app/api/leads/route.ts`, add after line 50:

```typescript
// Send email notification
await sendEmail({
  to: process.env.SALES_EMAIL,
  subject: `New Lead: ${body.name}`,
  html: `
    <h2>New Lead from Website</h2>
    <p><strong>Name:</strong> ${body.name}</p>
    <p><strong>Mobile:</strong> ${body.mobile}</p>
    <p><strong>Email:</strong> ${body.email}</p>
    <p><strong>Interested In:</strong> ${body.interestedIn}</p>
    <p><strong>Message:</strong> ${body.message}</p>
  `,
});
```

### SMS Notifications

1. Sign up for SMS service (Twilio, MSG91, etc.)
2. Add credentials to `.env.local`
3. Add SMS sending logic in `app/api/leads/route.ts`

## 🚀 Deploying to Production

### Deploy to Vercel (Easiest)

1. Push code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Add environment variables:
   - `MONGODB_URI`
   - Any other secrets
6. Click "Deploy"

Your site will be live in ~2 minutes! 🎉

### Custom Domain

1. In Vercel dashboard, go to "Settings" → "Domains"
2. Add your domain (e.g., anpprivado.com)
3. Update DNS records as instructed
4. Wait for DNS propagation (5-30 minutes)

## 🔒 Security Checklist

Before going live:

- [ ] Change all placeholder content
- [ ] Add actual RERA registration number
- [ ] Secure the leads API endpoint (add authentication)
- [ ] Set up MongoDB IP whitelist
- [ ] Enable rate limiting
- [ ] Add Google Analytics
- [ ] Test all forms
- [ ] Test on mobile devices
- [ ] Check page load speed
- [ ] Verify all links work
- [ ] Add SSL certificate (automatic with Vercel)

## 📊 Testing Lead Capture

### Test the Form

1. Fill out the contact form
2. Check MongoDB to see if lead was saved:
   - Go to MongoDB Atlas
   - Click "Browse Collections"
   - Select "anp_privado" database
   - View "leads" collection

### View Leads via API

```bash
curl http://localhost:3000/api/leads
```

Or open in browser:
```
http://localhost:3000/api/leads
```

## 🐛 Troubleshooting

### "Cannot connect to MongoDB"

- Check your MongoDB URI in `.env.local`
- Verify IP whitelist in MongoDB Atlas
- Ensure database user has correct permissions

### "Images not loading"

- Check file paths are correct
- Ensure images are in `public` folder
- Verify image file names match exactly (case-sensitive)

### "Tailwind styles not working"

- Restart development server: `npm run dev`
- Clear Next.js cache: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### "Form not submitting"

- Check browser console for errors
- Verify MongoDB connection
- Check API route in Network tab

## 📞 Need Help?

Common resources:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [MongoDB Documentation](https://docs.mongodb.com/)

---

**You're all set! 🚀**

Your premium landing page is ready to convert visitors into leads.

