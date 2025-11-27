import { Configuration, Amenity, LocationHighlight, Testimonial, FloorPlan } from '@/types';

// Project Configurations
export const configurations: Configuration[] = [
  {
    id: '3bhk',
    name: '3 BHK',
    type: '3 BHK',
    carpetArea: { min: 1309, max: 1309 },
    price: { starting: 26100000 },
    features: [
      'All corner apartments',
      'Spacious living and dining area',
      'Master bedroom with premium finishes',
      'Private balconies with panoramic views',
    ],
    image: '/2.jpeg',
  },
  {
    id: '3bhk-large',
    name: '3 BHK Large',
    type: '3 BHK',
    carpetArea: { min: 1489, max: 1489 },
    price: { starting: 26100000 },
    features: [
      'All corner apartments',
      'Expansive living spaces',
      'All bedrooms with attached bathrooms',
      'Premium modular kitchen',
    ],
    image: '/3.jpeg',
  },
  {
    id: '4bhk',
    name: '4 BHK',
    type: '4 BHK',
    carpetArea: { min: 1855, max: 1855 },
    price: { starting: 39800000 },
    features: [
      'All corner apartments',
      'Grand entrance foyer',
      'Four spacious bedrooms with ensuites',
      'Separate study/home office',
    ],
    image: '/4.jpeg',
  },
  {
    id: '4bhk-large',
    name: '4 BHK Large',
    type: '4 BHK',
    carpetArea: { min: 2306, max: 2306 },
    price: { starting: 39800000 },
    features: [
      'All corner apartments',
      'Palatial living and entertainment spaces',
      'Master suite with walk-in wardrobe',
      'Large private terraces',
    ],
    image: '/5.jpeg',
  },
];

// Amenities
export const amenities: Amenity[] = [
  {
    id: 'infinity-pool',
    name: 'Infinity Pool',
    description: 'Temperature-controlled infinity pool with panoramic city views',
    category: 'wellness',
    icon: 'Waves',
  },
  {
    id: 'clubhouse',
    name: 'Curated Clubhouse',
    description: 'Multi-purpose clubhouse with lounge, library, and co-working spaces',
    category: 'social',
    icon: 'Home',
  },
  {
    id: 'fitness-center',
    name: 'State-of-the-Art Gym',
    description: 'Fully equipped fitness center with personal training services',
    category: 'wellness',
    icon: 'Dumbbell',
  },
  {
    id: 'spa',
    name: 'Wellness Spa',
    description: 'Rejuvenating spa with steam, sauna, and massage rooms',
    category: 'wellness',
    icon: 'Sparkles',
  },
  {
    id: 'yoga-deck',
    name: 'Yoga & Meditation Deck',
    description: 'Serene outdoor spaces for yoga and mindfulness practices',
    category: 'wellness',
    icon: 'Heart',
  },
  {
    id: 'tennis-court',
    name: 'Tennis Court',
    description: 'Professional-grade tennis court with flood lighting',
    category: 'sports',
    icon: 'Trophy',
  },
  {
    id: 'basketball',
    name: 'Basketball Court',
    description: 'Full-size basketball court for competitive play',
    category: 'sports',
    icon: 'CircleDot',
  },
  {
    id: 'kids-play',
    name: 'Children\'s Play Zone',
    description: 'Safe and engaging play areas designed for different age groups',
    category: 'kids',
    icon: 'Baby',
  },
  {
    id: 'senior-lounge',
    name: 'Senior Citizen Lounge',
    description: 'Comfortable spaces with reading areas and indoor games',
    category: 'social',
    icon: 'Users',
  },
  {
    id: 'jogging-track',
    name: 'Jogging Track',
    description: 'Landscaped jogging and cycling track through lush greenery',
    category: 'sports',
    icon: 'Footprints',
  },
  {
    id: 'banquet',
    name: 'Banquet Hall',
    description: 'Elegant banquet spaces for private celebrations',
    category: 'social',
    icon: 'PartyPopper',
  },
  {
    id: 'business-center',
    name: 'Business Center',
    description: 'Professional meeting rooms and conference facilities',
    category: 'convenience',
    icon: 'Briefcase',
  },
  {
    id: 'concierge',
    name: '24/7 Concierge',
    description: 'Dedicated concierge services for all your needs',
    category: 'convenience',
    icon: 'Bell',
  },
  {
    id: 'security',
    name: 'Advanced Security',
    description: '3-tier security with CCTV surveillance and access control',
    category: 'convenience',
    icon: 'Shield',
  },
  {
    id: 'parking',
    name: 'Smart Parking',
    description: 'Automated parking management with ample visitor parking',
    category: 'convenience',
    icon: 'Car',
  },
];

// Location Highlights
export const locationHighlights: LocationHighlight[] = [
  {
    id: 'jupiter-hospital',
    name: 'Jupiter Hospital',
    distance: '2.5 km',
    time: '5 mins',
    icon: 'Hospital',
  },
  {
    id: 'pune-airport',
    name: 'Pune International Airport',
    distance: '15 km',
    time: '25 mins',
    icon: 'Plane',
  },
  {
    id: 'hinjewadi',
    name: 'Hinjewadi IT Park',
    distance: '8 km',
    time: '15 mins',
    icon: 'Building2',
  },
  {
    id: 'mumbai-highway',
    name: 'Mumbai-Pune Expressway',
    distance: '5 km',
    time: '8 mins',
    icon: 'Highway',
  },
  {
    id: 'phoenix-mall',
    name: 'Phoenix Market City',
    distance: '3 km',
    time: '7 mins',
    icon: 'ShoppingBag',
  },
  {
    id: 'schools',
    name: 'Premium International Schools',
    distance: '1-3 km',
    time: '5-10 mins',
    icon: 'GraduationCap',
  },
  {
    id: 'pune-station',
    name: 'Pune Railway Station',
    distance: '12 km',
    time: '20 mins',
    icon: 'Train',
  },
  {
    id: 'restaurants',
    name: 'Fine Dining & Cafes',
    distance: '500m',
    time: '2 mins',
    icon: 'UtensilsCrossed',
  },
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Rajesh Mehta',
    role: 'Investor',
    location: 'Mumbai',
    quote: 'ANP Privado represents the perfect blend of luxury and investment potential. The location at PAN Card Club Road is unbeatable, and the attention to detail in design is remarkable.',
  },
  {
    id: 'testimonial-2',
    name: 'Priya Sharma',
    role: 'Homeowner',
    location: 'Baner Resident',
    quote: 'Moving to ANP Privado has been transformative for our family. The amenities are world-class, and the sense of community here is wonderful. It truly feels like coming home to a private resort.',
  },
  {
    id: 'testimonial-3',
    name: 'Vikram Patel',
    role: 'NRI Investor',
    location: 'San Francisco',
    quote: 'As an NRI looking for premium real estate in Pune, ANP Privado stood out immediately. The transparency in pricing and the quality of construction gave me complete confidence in my investment.',
  },
];

// Floor Plans
export const floorPlans: FloorPlan[] = [
  {
    id: 'fp-3bhk',
    configuration: '3 BHK',
    carpetArea: 1309,
    facing: 'All Corner Units',
    tower: '9 Meditative Towers',
    image: '/3bhkfloorplan.png',
    pdfUrl: '/downloads/3bhk-floorplan.pdf',
  },
  {
    id: 'fp-3bhk-large',
    configuration: '3 BHK Large',
    carpetArea: 1489,
    facing: 'All Corner Units',
    tower: '9 Meditative Towers',
    image: '/3bhkfloorplan.png',
    pdfUrl: '/downloads/3bhk-large-floorplan.pdf',
  },
  {
    id: 'fp-4bhk',
    configuration: '4 BHK',
    carpetArea: 1855,
    facing: 'All Corner Units',
    tower: '9 Meditative Towers',
    image: '/4bhkfloorplan.png',
    pdfUrl: '/downloads/4bhk-floorplan.pdf',
  },
  {
    id: 'fp-4bhk-large',
    configuration: '4 BHK Large',
    carpetArea: 2306,
    facing: 'All Corner Units',
    tower: '9 Meditative Towers',
    image: '/4bhkfloorplan.png',
    pdfUrl: '/downloads/4bhk-large-floorplan.pdf',
  },
];

// Project Facts
export const projectFacts = {
  location: 'PAN Card Club Road, Baner, Pune',
  landArea: '10 Acres',
  configurations: 'Exclusive 3 & 4 BHK Homes',
  startingPrice: '₹2.61 Cr* onwards',
  possession: 'Possession Within 4 Years',
  towers: '9 Meditative Towers',
  floors: 'Multi-storey',
  units: 'All Corner Apartments',
  openSpace: 'Expansive Green Spaces',
  clubhouseArea: '50,000 sq.ft. Indoor Clubhouse',
  amenities: '65+ Rare Amenities',
  wonders: '10 Acres of Wonders',
  reraNumber: 'MahaRERA No.: P52100002500',
};

// Pricing Table Data
export const pricingData = [
  {
    configuration: '3 BHK',
    carpetArea: '1309 sq.ft.',
    startingPrice: '₹2.61 Cr* AI',
  },
  {
    configuration: '3 BHK Large',
    carpetArea: '1489 sq.ft.',
    startingPrice: '₹2.61 Cr* AI',
  },
  {
    configuration: '4 BHK',
    carpetArea: '1855 sq.ft.',
    startingPrice: '₹3.98 Cr* AI',
  },
  {
    configuration: '4 BHK Large',
    carpetArea: '2306 sq.ft.',
    startingPrice: '₹3.98 Cr* AI',
  },
];

// Payment Plan FAQs
export const paymentFAQs = [
  {
    question: 'What is the token amount required?',
    answer: 'The token amount is ₹5,00,000 which is adjustable against the total consideration. This amount secures your preferred unit.',
  },
  {
    question: 'What are the payment slabs?',
    answer: 'We offer flexible payment plans: 20% on booking, 30% during construction linked to milestones, 40% on possession, and 10% on registration. Custom payment plans are available for investors.',
  },
  {
    question: 'Which banks provide home loans for this project?',
    answer: 'We have tie-ups with leading banks including HDFC, ICICI, SBI, Axis Bank, and Kotak Mahindra Bank. Our relationship managers can help you get pre-approved loans at competitive rates.',
  },
  {
    question: 'Are there any special offers for early bookings?',
    answer: 'Yes, we have exclusive launch offers including preferential pricing, waiver on certain charges, and complimentary upgrades. Contact us for current offers.',
  },
];

