# 🚀 Quick Start Guide - ANP Privado

Get your landing page running in **5 minutes**!

## Step 1: Install Dependencies (2 min)

```bash
npm install
```

Wait for installation to complete...

## Step 2: Set Up MongoDB (2 min)

### Option A: MongoDB Atlas (Free, Recommended)

1. Go to: https://www.mongodb.com/cloud/atlas
2. Click "Try Free" → Sign up
3. Create a FREE cluster (M0)
4. Click "Connect" → "Connect your application"
5. Copy the connection string

### Option B: Use This Test Database (For Testing Only)

```
mongodb+srv://test:test123@cluster0.mongodb.net/anp_privado_test
```

## Step 3: Create Environment File (30 sec)

Create a file named `.env.local` in the `latest` folder:

```env
MONGODB_URI=your_mongodb_connection_string_here
```

Paste your MongoDB URI from Step 2.

## Step 4: Start the Server (30 sec)

```bash
npm run dev
```

## Step 5: Open in Browser

Go to: **http://localhost:3000**

You should see your landing page! 🎉

---

## ✅ Quick Test

1. Scroll through the page
2. Click on navigation links
3. Fill out the contact form at the bottom
4. Submit and check for success message

---

## 🖼️ Next Steps

### Add Your Images

The page currently shows placeholders. To add real images:

1. Create folders:
```bash
mkdir -p public/images/configurations
mkdir -p public/images/floorplans
mkdir -p public/images/gallery
```

2. Copy your images to these folders

3. See `IMAGE_PLACEHOLDERS.md` for detailed instructions

### Update Content

Edit `lib/data.ts` to change:
- Prices
- Configurations
- Amenities
- Location details
- Contact information

---

## 🆘 Troubleshooting

### "Cannot connect to MongoDB"
- Check your `.env.local` file exists
- Verify the MongoDB URI is correct
- Make sure there are no extra spaces

### "Module not found"
- Run `npm install` again
- Delete `node_modules` and run `npm install`

### "Port 3000 already in use"
- Stop other apps using port 3000
- Or use: `npm run dev -- -p 3001`

---

## 📚 Full Documentation

For detailed setup and customization:
- `README.md` - Complete documentation
- `SETUP_GUIDE.md` - Step-by-step guide
- `IMAGE_PLACEHOLDERS.md` - Image guide
- `IMPLEMENTATION_NOTES.md` - Technical details

---

## 🎯 Ready to Deploy?

When you're ready to go live:

1. Push to GitHub
2. Connect to Vercel (free)
3. Add environment variables
4. Deploy!

See `README.md` for deployment instructions.

---

**Need Help?** Check the troubleshooting section in `SETUP_GUIDE.md`

**Have Questions?** All documentation is in the project folder.

---

🎉 **You're all set! Happy building!**

