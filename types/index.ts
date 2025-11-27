// Type definitions for ANP Privado landing page

export interface Configuration {
  id: string;
  name: string;
  type: string;
  carpetArea: {
    min: number;
    max: number;
  };
  price: {
    starting: number;
  };
  features: string[];
  image?: string;
}

export interface Amenity {
  id: string;
  name: string;
  description: string;
  category: 'wellness' | 'social' | 'sports' | 'kids' | 'convenience';
  icon: string;
  image?: string;
}

export interface FloorPlan {
  id: string;
  configuration: string;
  carpetArea: number;
  facing: string;
  tower: string;
  image: string;
  pdfUrl?: string;
}

export interface LocationHighlight {
  id: string;
  name: string;
  distance: string;
  time: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  image?: string;
}

export interface LeadFormData {
  name: string;
  mobile: string;
  email?: string;
  interestedIn: string;
  buyingFor?: string;
  message?: string;
  consent: boolean;
  source?: string;
  timestamp?: Date;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'elevation' | 'interior' | 'amenity' | 'lifestyle';
  label?: string;
}

