// Country configuration for international sites
// Each country has completely different content, not just translations

export interface CountryConfig {
  code: string;
  name: string;
  locale: string;
  currency: string;
  currencySymbol: string;
  phone: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  mapCoordinates: {
    lat: number;
    lng: number;
  };
  socialLinks: {
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
  };
  businessHours: string;
  headerMenu: {
    label: string;
    href: string;
  }[];
  footerLinks: {
    title: string;
    links: { label: string; href: string }[];
  }[];
}

export const countryConfigs: Record<string, CountryConfig> = {
  'us': {
    code: 'us',
    name: 'United States',
    locale: 'en-US',
    currency: 'USD',
    currencySymbol: '$',
    phone: '+1 (555) 123-4567',
    email: 'usa@phantomhealthcare.com',
    address: {
      line1: '123 Medical Equipment Drive',
      line2: 'Suite 100',
      city: 'Houston',
      state: 'Texas',
      country: 'United States',
      postalCode: '77001',
    },
    mapCoordinates: {
      lat: 29.7604,
      lng: -95.3698,
    },
    socialLinks: {
      facebook: 'https://facebook.com/phantomhealthcareusa',
      linkedin: 'https://linkedin.com/company/phantomhealthcareusa',
    },
    businessHours: 'Mon-Fri: 8:00 AM - 6:00 PM CST',
    headerMenu: [
      { label: 'Home', href: '/us' },
      { label: 'About Us', href: '/us/about' },
      { label: 'Products', href: '/us/products' },
      { label: 'Services', href: '/us/services' },
      { label: 'Locations', href: '/us/locations' },
      { label: 'Contact', href: '/us/contact' },
    ],
    footerLinks: [
      {
        title: 'Products',
        links: [
          { label: 'MRI Scanners', href: '/us/products/mri' },
          { label: 'CT Scanners', href: '/us/products/ct' },
          { label: 'PET-CT', href: '/us/products/pet-ct' },
        ],
      },
      {
        title: 'Services',
        links: [
          { label: 'AMC Contracts', href: '/us/services/amc' },
          { label: 'Installation', href: '/us/services/installation' },
          { label: 'Training', href: '/us/services/training' },
        ],
      },
    ],
  },

  'ae': {
    code: 'ae',
    name: 'United Arab Emirates',
    locale: 'en-AE',
    currency: 'AED',
    currencySymbol: 'د.إ',
    phone: '+971 4 123 4567',
    email: 'uae@phantomhealthcare.com',
    address: {
      line1: 'Dubai Healthcare City',
      line2: 'Building 27, Office 301',
      city: 'Dubai',
      state: 'Dubai',
      country: 'United Arab Emirates',
      postalCode: '00000',
    },
    mapCoordinates: {
      lat: 25.2048,
      lng: 55.2708,
    },
    socialLinks: {
      facebook: 'https://facebook.com/phantomhealthcareuae',
      linkedin: 'https://linkedin.com/company/phantomhealthcareuae',
    },
    businessHours: 'Sun-Thu: 9:00 AM - 6:00 PM GST',
    headerMenu: [
      { label: 'Home', href: '/ae' },
      { label: 'About Us', href: '/ae/about' },
      { label: 'Products', href: '/ae/products' },
      { label: 'Services', href: '/ae/services' },
      { label: 'Locations', href: '/ae/locations' },
      { label: 'Contact', href: '/ae/contact' },
    ],
    footerLinks: [
      {
        title: 'Products',
        links: [
          { label: 'MRI Scanners', href: '/ae/products/mri' },
          { label: 'CT Scanners', href: '/ae/products/ct' },
          { label: 'Cath Lab', href: '/ae/products/cath-lab' },
        ],
      },
      {
        title: 'Services',
        links: [
          { label: 'AMC Contracts', href: '/ae/services/amc' },
          { label: 'Installation', href: '/ae/services/installation' },
        ],
      },
    ],
  },

  'uk': {
    code: 'uk',
    name: 'United Kingdom',
    locale: 'en-GB',
    currency: 'GBP',
    currencySymbol: '£',
    phone: '+44 20 7123 4567',
    email: 'uk@phantomhealthcare.com',
    address: {
      line1: '45 Medical Centre Road',
      line2: 'Floor 3',
      city: 'London',
      state: 'Greater London',
      country: 'United Kingdom',
      postalCode: 'EC1A 1BB',
    },
    mapCoordinates: {
      lat: 51.5074,
      lng: -0.1278,
    },
    socialLinks: {
      linkedin: 'https://linkedin.com/company/phantomhealthcareuk',
      twitter: 'https://twitter.com/phantomhcuk',
    },
    businessHours: 'Mon-Fri: 9:00 AM - 5:30 PM GMT',
    headerMenu: [
      { label: 'Home', href: '/uk' },
      { label: 'About Us', href: '/uk/about' },
      { label: 'Products', href: '/uk/products' },
      { label: 'Services', href: '/uk/services' },
      { label: 'Locations', href: '/uk/locations' },
      { label: 'Contact', href: '/uk/contact' },
    ],
    footerLinks: [
      {
        title: 'Products',
        links: [
          { label: 'MRI Scanners', href: '/uk/products/mri' },
          { label: 'CT Scanners', href: '/uk/products/ct' },
        ],
      },
      {
        title: 'Services',
        links: [
          { label: 'Maintenance', href: '/uk/services/maintenance' },
          { label: 'Installation', href: '/uk/services/installation' },
        ],
      },
    ],
  },

  'au': {
    code: 'au',
    name: 'Australia',
    locale: 'en-AU',
    currency: 'AUD',
    currencySymbol: 'A$',
    phone: '+61 2 1234 5678',
    email: 'australia@phantomhealthcare.com',
    address: {
      line1: '100 Medical Equipment Lane',
      line2: 'Level 5',
      city: 'Sydney',
      state: 'New South Wales',
      country: 'Australia',
      postalCode: '2000',
    },
    mapCoordinates: {
      lat: -33.8688,
      lng: 151.2093,
    },
    socialLinks: {
      linkedin: 'https://linkedin.com/company/phantomhealthcareau',
    },
    businessHours: 'Mon-Fri: 8:30 AM - 5:00 PM AEST',
    headerMenu: [
      { label: 'Home', href: '/au' },
      { label: 'About Us', href: '/au/about' },
      { label: 'Products', href: '/au/products' },
      { label: 'Services', href: '/au/services' },
      { label: 'Contact', href: '/au/contact' },
    ],
    footerLinks: [
      {
        title: 'Products',
        links: [
          { label: 'MRI Systems', href: '/au/products/mri' },
          { label: 'CT Systems', href: '/au/products/ct' },
        ],
      },
      {
        title: 'Services',
        links: [
          { label: 'Service Contracts', href: '/au/services/contracts' },
        ],
      },
    ],
  },

  'fr': {
    code: 'fr',
    name: 'France',
    locale: 'fr-FR',
    currency: 'EUR',
    currencySymbol: '€',
    phone: '+33 1 23 45 67 89',
    email: 'france@phantomhealthcare.com',
    address: {
      line1: '15 Rue de la Santé',
      line2: 'Bâtiment A',
      city: 'Paris',
      state: 'Île-de-France',
      country: 'France',
      postalCode: '75013',
    },
    mapCoordinates: {
      lat: 48.8566,
      lng: 2.3522,
    },
    socialLinks: {
      linkedin: 'https://linkedin.com/company/phantomhealthcarefr',
    },
    businessHours: 'Lun-Ven: 9h00 - 18h00 CET',
    headerMenu: [
      { label: 'Accueil', href: '/fr' },
      { label: 'À Propos', href: '/fr/about' },
      { label: 'Produits', href: '/fr/products' },
      { label: 'Services', href: '/fr/services' },
      { label: 'Contact', href: '/fr/contact' },
    ],
    footerLinks: [
      {
        title: 'Produits',
        links: [
          { label: 'IRM', href: '/fr/products/mri' },
          { label: 'Scanner', href: '/fr/products/ct' },
        ],
      },
      {
        title: 'Services',
        links: [
          { label: 'Maintenance', href: '/fr/services/maintenance' },
        ],
      },
    ],
  },
};

// Helper function to get country config
export function getCountryConfig(countryCode: string): CountryConfig | null {
  return countryConfigs[countryCode.toLowerCase()] || null;
}

// Get all valid country codes
export function getValidCountryCodes(): string[] {
  return Object.keys(countryConfigs);
}
