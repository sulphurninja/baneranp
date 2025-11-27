# Image Placeholders Reference

This document lists all image placeholders in the project and where to replace them with actual images from your media kit.

## 📍 Image Locations & Specifications

### 1. Hero Section

**Location:** `app/page.tsx` (Line ~80)

```tsx
// Current placeholder:
<div className="w-full h-full bg-gradient-to-br from-charcoal-800 to-charcoal-600" />

// Replace with:
<img src="/images/hero-banner.jpg" alt="ANP Privado" className="w-full h-full object-cover" />
```

**Image specs:**
- **File:** `public/images/hero-banner.jpg`
- **Size:** 1920x1080px (landscape)
- **Content:** Exterior view of building or lifestyle shot
- **Format:** JPG (optimized)

---

**Location:** `app/page.tsx` (Line ~150)

```tsx
// Current placeholder:
<div className="aspect-[4/5] bg-gradient-to-br from-charcoal-700 to-charcoal-500" />

// Replace with:
<img src="/images/hero-building.jpg" alt="ANP Privado Building" className="w-full h-full object-cover" />
```

**Image specs:**
- **File:** `public/images/hero-building.jpg`
- **Size:** 1200x1500px (portrait)
- **Content:** Building elevation/facade
- **Format:** JPG (optimized)

---

### 2. Configuration Cards

**Location:** `components/ConfigurationCard.tsx` (Line ~25)

```tsx
// Current placeholder:
<div className="absolute inset-0 flex items-center justify-center">
  <Home className="w-20 h-20 text-charcoal-300" />
</div>

// Replace with:
<img src={config.image} alt={config.name} className="w-full h-full object-cover" />
```

**Then update:** `lib/data.ts` - Add image property to each configuration:

```typescript
{
  id: '3bhk',
  name: '3 BHK Simplex',
  // ... other properties
  image: '/images/configurations/3bhk.jpg',
}
```

**Image specs:**
- **Files:** 
  - `public/images/configurations/3bhk.jpg`
  - `public/images/configurations/3bhk-large.jpg`
  - `public/images/configurations/4bhk.jpg`
  - `public/images/configurations/4bhk-large.jpg`
  - `public/images/configurations/5bhk-duplex.jpg`
- **Size:** 800x600px each
- **Content:** Interior renders or floor plan previews
- **Format:** JPG (optimized)

---

### 3. Floor Plans

**Location:** `app/page.tsx` (Line ~550)

```tsx
// Current placeholder:
<div className="w-full aspect-[4/3] bg-gradient-to-br from-charcoal-200 to-charcoal-100 rounded-lg flex items-center justify-center">
  <Building2 className="w-32 h-32 text-charcoal-400" />
</div>

// Replace with:
<img src={selectedFloorPlan.image} alt={selectedFloorPlan.configuration} className="w-full h-auto" />
```

**Image specs:**
- **Files:**
  - `public/images/floorplans/3bhk.jpg`
  - `public/images/floorplans/3bhk-large.jpg`
  - `public/images/floorplans/4bhk.jpg`
  - `public/images/floorplans/4bhk-large.jpg`
  - `public/images/floorplans/5bhk-duplex.jpg`
- **Size:** 1200x900px each
- **Content:** Detailed floor plan drawings
- **Format:** JPG or PNG (PNG preferred for floor plans)

**Also create PDFs:**
- `public/downloads/3bhk-floorplan.pdf`
- `public/downloads/4bhk-floorplan.pdf`
- etc.

---

### 4. Gallery Section

**Location:** `app/page.tsx` (Line ~650)

```tsx
// Current placeholder:
<div className={`bg-gradient-to-br from-charcoal-300 to-charcoal-500 ...`} />

// Replace with:
<img src={`/images/gallery/gallery-${item}.jpg`} alt={`Gallery ${item}`} className="w-full h-full object-cover" />
```

**Image specs:**
- **Files:** `public/images/gallery/gallery-1.jpg` through `gallery-9.jpg`
- **Sizes:** 
  - Items 1 & 5: 1600x1000px (large, spans 2 columns)
  - Others: 800x800px (square)
- **Content:** Mix of:
  - Exterior elevations
  - Interior renders (lobby, sample flat)
  - Amenity renders
  - Night views
  - Lifestyle shots
- **Format:** JPG (optimized)

**Naming convention:**
```
gallery-1.jpg  → Exterior elevation (large)
gallery-2.jpg  → Lobby interior
gallery-3.jpg  → Living room render
gallery-4.jpg  → Amenity (pool/gym)
gallery-5.jpg  → Night view (large)
gallery-6.jpg  → Bedroom render
gallery-7.jpg  → Clubhouse
gallery-8.jpg  → Terrace/balcony
gallery-9.jpg  → Lifestyle shot
```

---

### 5. Location Section

**Location:** `app/page.tsx` (Line ~750)

```tsx
// Current placeholder:
<div className="text-center">
  <MapPin className="w-16 h-16 text-charcoal-400 mx-auto mb-4" />
  <p>Google Maps Integration</p>
</div>

// Replace with:
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%"
  height="500"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-2xl"
/>
```

**Setup:**
1. Go to Google Maps
2. Search "PAN Card Club Road, Baner, Pune"
3. Click Share → Embed a map
4. Copy iframe src URL

---

### 6. About Developer Section

**Location:** `app/page.tsx` (Line ~950)

```tsx
// Current placeholder:
<div className="aspect-[4/3] bg-gradient-to-br from-charcoal-200 to-charcoal-400 rounded-2xl overflow-hidden shadow-xl">
  <div className="w-full h-full flex items-center justify-center">
    <Building2 className="w-32 h-32 text-charcoal-500" />
  </div>
</div>

// Replace with:
<img src="/images/team-office.jpg" alt="ANP Team" className="w-full h-full object-cover" />
```

**Image specs:**
- **File:** `public/images/team-office.jpg`
- **Size:** 800x600px
- **Content:** Team photo, office, or relationship manager
- **Format:** JPG (optimized)

---

## 🎨 Amenity Images (Optional Enhancement)

If you want to add images to amenity cards:

**Update:** `lib/data.ts`

```typescript
{
  id: 'infinity-pool',
  name: 'Infinity Pool',
  description: '...',
  category: 'wellness',
  icon: 'Waves',
  image: '/images/amenities/pool.jpg', // Add this
}
```

**Then update:** `components/AmenityCard.tsx`

Add image display above or beside the content.

**Image specs:**
- **Files:** `public/images/amenities/*.jpg`
- **Size:** 600x400px each
- **Format:** JPG (optimized)

---

## 📦 Folder Structure

Create this folder structure in `public/`:

```
public/
├── images/
│   ├── hero-banner.jpg
│   ├── hero-building.jpg
│   ├── team-office.jpg
│   ├── configurations/
│   │   ├── 3bhk.jpg
│   │   ├── 3bhk-large.jpg
│   │   ├── 4bhk.jpg
│   │   ├── 4bhk-large.jpg
│   │   └── 5bhk-duplex.jpg
│   ├── floorplans/
│   │   ├── 3bhk.jpg
│   │   ├── 3bhk-large.jpg
│   │   ├── 4bhk.jpg
│   │   ├── 4bhk-large.jpg
│   │   └── 5bhk-duplex.jpg
│   ├── gallery/
│   │   ├── gallery-1.jpg
│   │   ├── gallery-2.jpg
│   │   ├── ... (up to 9)
│   │   └── gallery-9.jpg
│   └── amenities/ (optional)
│       ├── pool.jpg
│       ├── gym.jpg
│       └── ... (others)
└── downloads/
    ├── 3bhk-floorplan.pdf
    ├── 4bhk-floorplan.pdf
    ├── 5bhk-floorplan.pdf
    └── brochure.pdf (optional)
```

---

## 🖼️ Image Optimization Tips

### Before uploading images:

1. **Resize** to recommended dimensions
2. **Compress** using:
   - [TinyPNG](https://tinypng.com/) - Free, excellent compression
   - [ImageOptim](https://imageoptim.com/) - Mac app
   - [Squoosh](https://squoosh.app/) - Google's web app
3. **Target file sizes:**
   - Hero images: < 300KB
   - Configuration/Gallery: < 150KB
   - Floor plans: < 200KB
   - Thumbnails: < 100KB

### Using Next.js Image Component (Recommended)

For better performance, replace `<img>` tags with Next.js `<Image>`:

```tsx
import Image from 'next/image'

<Image
  src="/images/hero-banner.jpg"
  alt="ANP Privado"
  width={1920}
  height={1080}
  priority
  className="w-full h-full object-cover"
/>
```

Benefits:
- Automatic optimization
- Lazy loading
- Responsive images
- WebP conversion

---

## ✅ Checklist

Use this checklist when adding images:

- [ ] Hero banner image added
- [ ] Hero building image added
- [ ] All 5 configuration images added
- [ ] All 5 floor plan images added
- [ ] All 9 gallery images added
- [ ] Team/office image added
- [ ] Google Maps iframe added
- [ ] Floor plan PDFs added
- [ ] All images compressed
- [ ] All images tested on mobile
- [ ] All alt texts updated
- [ ] Image paths verified in code

---

## 🚀 Quick Test

After adding images, test by:

1. Running `npm run dev`
2. Opening http://localhost:3000
3. Scrolling through entire page
4. Checking each section loads correctly
5. Testing on mobile (Chrome DevTools)
6. Verifying no broken images (404s in Network tab)

---

**Need help?** Refer to SETUP_GUIDE.md for detailed instructions.

