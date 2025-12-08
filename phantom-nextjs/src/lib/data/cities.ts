// Indian cities data for SEO location pages
// This data will be used by /locations/[city]/ pages

export interface CityData {
  slug: string;
  name: string;
  state: string;
  region: 'North' | 'South' | 'East' | 'West' | 'Central';
  tier: 1 | 2 | 3; // Metro tier
  phone: string;
  email: string;
  address: {
    line1: string;
    line2?: string;
    landmark?: string;
    pincode: string;
  };
  mapCoordinates: {
    lat: number;
    lng: number;
  };
  nearbyHospitals: string[]; // For SEO content
  serviceAreas: string[]; // Nearby cities we serve
  seoKeywords: string[]; // City-specific keywords
}

export const cities: Record<string, CityData> = {
  // TIER 1 - Major Metros
  mumbai: {
    slug: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    region: 'West',
    tier: 1,
    phone: '+91-22-4000-XXXX',
    email: 'mumbai@phantomhealthcare.in',
    address: {
      line1: 'Office 501, Trade Centre',
      line2: 'Bandra Kurla Complex',
      landmark: 'Near BKC Metro Station',
      pincode: '400051',
    },
    mapCoordinates: { lat: 19.0760, lng: 72.8777 },
    nearbyHospitals: ['Kokilaben Hospital', 'Lilavati Hospital', 'Hinduja Hospital', 'Tata Memorial'],
    serviceAreas: ['Thane', 'Navi Mumbai', 'Kalyan', 'Panvel', 'Vasai-Virar'],
    seoKeywords: ['MRI machine Mumbai', 'CT scanner dealers Mumbai', 'medical equipment suppliers Mumbai'],
  },

  delhi: {
    slug: 'delhi',
    name: 'Delhi',
    state: 'Delhi NCR',
    region: 'North',
    tier: 1,
    phone: '+91-11-4000-XXXX',
    email: 'delhi@phantomhealthcare.in',
    address: {
      line1: '2nd Floor, Nehru Place',
      line2: 'Commercial Complex',
      landmark: 'Near Nehru Place Metro',
      pincode: '110019',
    },
    mapCoordinates: { lat: 28.6139, lng: 77.2090 },
    nearbyHospitals: ['AIIMS', 'Safdarjung Hospital', 'Max Hospital', 'Fortis Hospital'],
    serviceAreas: ['Gurgaon', 'Noida', 'Faridabad', 'Ghaziabad', 'Greater Noida'],
    seoKeywords: ['MRI machine Delhi', 'CT scanner suppliers Delhi NCR', 'refurbished MRI Delhi'],
  },

  bangalore: {
    slug: 'bangalore',
    name: 'Bangalore',
    state: 'Karnataka',
    region: 'South',
    tier: 1,
    phone: '+91-80-4000-XXXX',
    email: 'bangalore@phantomhealthcare.in',
    address: {
      line1: 'Tech Park Tower, 4th Floor',
      line2: 'Whitefield Main Road',
      landmark: 'Near ITPL',
      pincode: '560066',
    },
    mapCoordinates: { lat: 12.9716, lng: 77.5946 },
    nearbyHospitals: ['Manipal Hospital', 'Apollo Hospital', 'Narayana Health', 'Fortis Hospital'],
    serviceAreas: ['Mysore', 'Mangalore', 'Hubli', 'Belgaum', 'Tumkur'],
    seoKeywords: ['MRI scanner Bangalore', 'CT scan machine Bengaluru', 'medical imaging equipment Karnataka'],
  },

  chennai: {
    slug: 'chennai',
    name: 'Chennai',
    state: 'Tamil Nadu',
    region: 'South',
    tier: 1,
    phone: '+91-44-4000-XXXX',
    email: 'chennai@phantomhealthcare.in',
    address: {
      line1: 'Anna Salai, 3rd Floor',
      line2: 'Express Towers',
      landmark: 'Near Gemini Flyover',
      pincode: '600002',
    },
    mapCoordinates: { lat: 13.0827, lng: 80.2707 },
    nearbyHospitals: ['Apollo Hospital', 'MIOT Hospital', 'Fortis Malar', 'Vijaya Hospital'],
    serviceAreas: ['Coimbatore', 'Madurai', 'Salem', 'Trichy', 'Vellore'],
    seoKeywords: ['MRI machine Chennai', 'CT scanner dealers Tamil Nadu', 'refurbished imaging equipment Chennai'],
  },

  hyderabad: {
    slug: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    region: 'South',
    tier: 1,
    phone: '+91-40-4000-XXXX',
    email: 'hyderabad@phantomhealthcare.in',
    address: {
      line1: 'HITEC City, Tower B',
      line2: 'Cyber Towers',
      landmark: 'Near Shilparamam',
      pincode: '500081',
    },
    mapCoordinates: { lat: 17.3850, lng: 78.4867 },
    nearbyHospitals: ['Apollo Hospital', 'KIMS Hospital', 'Yashoda Hospital', 'Continental Hospital'],
    serviceAreas: ['Secunderabad', 'Warangal', 'Karimnagar', 'Nizamabad', 'Vijayawada'],
    seoKeywords: ['MRI scanner Hyderabad', 'CT scan equipment Telangana', 'medical imaging Hyderabad'],
  },

  kolkata: {
    slug: 'kolkata',
    name: 'Kolkata',
    state: 'West Bengal',
    region: 'East',
    tier: 1,
    phone: '+91-33-4000-XXXX',
    email: 'kolkata@phantomhealthcare.in',
    address: {
      line1: 'Salt Lake Sector V',
      line2: 'IT Hub Building',
      landmark: 'Near Technopolis',
      pincode: '700091',
    },
    mapCoordinates: { lat: 22.5726, lng: 88.3639 },
    nearbyHospitals: ['AMRI Hospital', 'Fortis Hospital', 'Apollo Gleneagles', 'Medica Hospital'],
    serviceAreas: ['Howrah', 'Durgapur', 'Asansol', 'Siliguri', 'Kharagpur'],
    seoKeywords: ['MRI machine Kolkata', 'CT scanner West Bengal', 'medical equipment suppliers Kolkata'],
  },

  // TIER 2 - Major Cities
  pune: {
    slug: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    region: 'West',
    tier: 2,
    phone: '+91-20-4000-XXXX',
    email: 'pune@phantomhealthcare.in',
    address: {
      line1: 'Hinjewadi IT Park',
      line2: 'Phase 2, Tower 3',
      landmark: 'Near Infosys Campus',
      pincode: '411057',
    },
    mapCoordinates: { lat: 18.5204, lng: 73.8567 },
    nearbyHospitals: ['Ruby Hall Clinic', 'Sahyadri Hospital', 'Jupiter Hospital', 'KEM Hospital'],
    serviceAreas: ['Nashik', 'Solapur', 'Kolhapur', 'Satara', 'Ahmednagar'],
    seoKeywords: ['MRI scanner Pune', 'CT machine dealers Pune', 'refurbished medical equipment Pune'],
  },

  ahmedabad: {
    slug: 'ahmedabad',
    name: 'Ahmedabad',
    state: 'Gujarat',
    region: 'West',
    tier: 2,
    phone: '+91-79-4000-XXXX',
    email: 'ahmedabad@phantomhealthcare.in',
    address: {
      line1: 'SG Highway',
      line2: 'Iscon Arcade, 5th Floor',
      landmark: 'Near Iscon Temple',
      pincode: '380054',
    },
    mapCoordinates: { lat: 23.0225, lng: 72.5714 },
    nearbyHospitals: ['Sterling Hospital', 'Apollo Hospital', 'Zydus Hospital', 'CIMS Hospital'],
    serviceAreas: ['Surat', 'Vadodara', 'Rajkot', 'Gandhinagar', 'Bhavnagar'],
    seoKeywords: ['MRI machine Ahmedabad', 'CT scanner Gujarat', 'medical imaging equipment Ahmedabad'],
  },

  jaipur: {
    slug: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    region: 'North',
    tier: 2,
    phone: '+91-141-4000-XXXX',
    email: 'jaipur@phantomhealthcare.in',
    address: {
      line1: 'Vaishali Nagar',
      line2: 'Business Park, Block A',
      landmark: 'Near Jaipur Hospital',
      pincode: '302021',
    },
    mapCoordinates: { lat: 26.9124, lng: 75.7873 },
    nearbyHospitals: ['Narayana Hospital', 'Fortis Hospital', 'SMS Hospital', 'Sawai Man Singh Hospital'],
    serviceAreas: ['Jodhpur', 'Udaipur', 'Kota', 'Ajmer', 'Bikaner'],
    seoKeywords: ['MRI scanner Jaipur', 'CT machine Rajasthan', 'medical equipment suppliers Jaipur'],
  },

  lucknow: {
    slug: 'lucknow',
    name: 'Lucknow',
    state: 'Uttar Pradesh',
    region: 'North',
    tier: 2,
    phone: '+91-522-4000-XXXX',
    email: 'lucknow@phantomhealthcare.in',
    address: {
      line1: 'Gomti Nagar',
      line2: 'Vibhuti Khand, Block B',
      landmark: 'Near Sahara Ganj Mall',
      pincode: '226010',
    },
    mapCoordinates: { lat: 26.8467, lng: 80.9462 },
    nearbyHospitals: ['Medanta Hospital', 'SGPGI', 'KGMU', 'Apollo Hospital'],
    serviceAreas: ['Kanpur', 'Varanasi', 'Allahabad', 'Agra', 'Gorakhpur'],
    seoKeywords: ['MRI machine Lucknow', 'CT scanner UP', 'medical imaging equipment Lucknow'],
  },

  indore: {
    slug: 'indore',
    name: 'Indore',
    state: 'Madhya Pradesh',
    region: 'Central',
    tier: 2,
    phone: '+91-731-4000-XXXX',
    email: 'indore@phantomhealthcare.in',
    address: {
      line1: 'Vijay Nagar',
      line2: 'Crystal IT Park',
      landmark: 'Near C21 Mall',
      pincode: '452010',
    },
    mapCoordinates: { lat: 22.7196, lng: 75.8577 },
    nearbyHospitals: ['Bombay Hospital', 'CHL Hospital', 'Medanta Hospital', 'Apollo Hospital'],
    serviceAreas: ['Bhopal', 'Ujjain', 'Dewas', 'Ratlam', 'Gwalior'],
    seoKeywords: ['MRI machine Indore', 'CT scanner Madhya Pradesh', 'refurbished MRI Indore'],
  },

  chandigarh: {
    slug: 'chandigarh',
    name: 'Chandigarh',
    state: 'Chandigarh',
    region: 'North',
    tier: 2,
    phone: '+91-172-4000-XXXX',
    email: 'chandigarh@phantomhealthcare.in',
    address: {
      line1: 'Sector 17',
      line2: 'SCO 25-26',
      landmark: 'Near Parade Ground',
      pincode: '160017',
    },
    mapCoordinates: { lat: 30.7333, lng: 76.7794 },
    nearbyHospitals: ['PGIMER', 'Fortis Hospital', 'Max Hospital', 'Alchemist Hospital'],
    serviceAreas: ['Mohali', 'Panchkula', 'Ludhiana', 'Jalandhar', 'Amritsar'],
    seoKeywords: ['MRI scanner Chandigarh', 'CT machine Punjab', 'medical equipment Chandigarh Tricity'],
  },

  bhopal: {
    slug: 'bhopal',
    name: 'Bhopal',
    state: 'Madhya Pradesh',
    region: 'Central',
    tier: 2,
    phone: '+91-755-4000-XXXX',
    email: 'bhopal@phantomhealthcare.in',
    address: {
      line1: 'MP Nagar Zone 1',
      line2: 'DB City Mall Road',
      landmark: 'Near DB Mall',
      pincode: '462011',
    },
    mapCoordinates: { lat: 23.2599, lng: 77.4126 },
    nearbyHospitals: ['AIIMS Bhopal', 'Hamidia Hospital', 'Bansal Hospital', 'Chirayu Hospital'],
    serviceAreas: ['Indore', 'Jabalpur', 'Gwalior', 'Sagar', 'Rewa'],
    seoKeywords: ['MRI machine Bhopal', 'CT scanner MP', 'medical imaging Bhopal'],
  },

  patna: {
    slug: 'patna',
    name: 'Patna',
    state: 'Bihar',
    region: 'East',
    tier: 2,
    phone: '+91-612-4000-XXXX',
    email: 'patna@phantomhealthcare.in',
    address: {
      line1: 'Boring Road',
      line2: 'Fraser Road Junction',
      landmark: 'Near Gandhi Maidan',
      pincode: '800001',
    },
    mapCoordinates: { lat: 25.5941, lng: 85.1376 },
    nearbyHospitals: ['AIIMS Patna', 'PMCH', 'Paras HMRI', 'Medanta Hospital'],
    serviceAreas: ['Muzaffarpur', 'Gaya', 'Bhagalpur', 'Darbhanga', 'Ranchi'],
    seoKeywords: ['MRI scanner Patna', 'CT machine Bihar', 'medical equipment suppliers Bihar'],
  },

  kochi: {
    slug: 'kochi',
    name: 'Kochi',
    state: 'Kerala',
    region: 'South',
    tier: 2,
    phone: '+91-484-4000-XXXX',
    email: 'kochi@phantomhealthcare.in',
    address: {
      line1: 'Infopark SEZ',
      line2: 'Phase 1, Tower 2',
      landmark: 'Near Kakkanad',
      pincode: '682042',
    },
    mapCoordinates: { lat: 9.9312, lng: 76.2673 },
    nearbyHospitals: ['Aster Medcity', 'Lakeshore Hospital', 'KIMS Hospital', 'Amrita Hospital'],
    serviceAreas: ['Trivandrum', 'Kozhikode', 'Thrissur', 'Kannur', 'Kollam'],
    seoKeywords: ['MRI machine Kochi', 'CT scanner Kerala', 'medical imaging equipment Ernakulam'],
  },

  // TIER 3 - Emerging Cities (High Potential)
  nagpur: {
    slug: 'nagpur',
    name: 'Nagpur',
    state: 'Maharashtra',
    region: 'Central',
    tier: 3,
    phone: '+91-712-4000-XXXX',
    email: 'nagpur@phantomhealthcare.in',
    address: {
      line1: 'IT Park, Parsodi',
      line2: 'MIHAN SEZ',
      landmark: 'Near Airport',
      pincode: '441108',
    },
    mapCoordinates: { lat: 21.1458, lng: 79.0882 },
    nearbyHospitals: ['Orange City Hospital', 'Wockhardt Hospital', 'AIIMS Nagpur', 'Care Hospital'],
    serviceAreas: ['Chandrapur', 'Amravati', 'Akola', 'Yavatmal', 'Wardha'],
    seoKeywords: ['MRI scanner Nagpur', 'CT machine Vidarbha', 'medical equipment Nagpur'],
  },

  coimbatore: {
    slug: 'coimbatore',
    name: 'Coimbatore',
    state: 'Tamil Nadu',
    region: 'South',
    tier: 3,
    phone: '+91-422-4000-XXXX',
    email: 'coimbatore@phantomhealthcare.in',
    address: {
      line1: 'Race Course Road',
      line2: 'Near Brookefields Mall',
      pincode: '641018',
    },
    mapCoordinates: { lat: 11.0168, lng: 76.9558 },
    nearbyHospitals: ['KMCH', 'PSG Hospital', 'Kovai Medical Center', 'GEM Hospital'],
    serviceAreas: ['Salem', 'Erode', 'Tirupur', 'Ooty', 'Pollachi'],
    seoKeywords: ['MRI machine Coimbatore', 'CT scanner Coimbatore', 'medical imaging Tamil Nadu'],
  },

  surat: {
    slug: 'surat',
    name: 'Surat',
    state: 'Gujarat',
    region: 'West',
    tier: 3,
    phone: '+91-261-4000-XXXX',
    email: 'surat@phantomhealthcare.in',
    address: {
      line1: 'Ring Road',
      line2: 'Vesu, Near Yogi Chowk',
      pincode: '395007',
    },
    mapCoordinates: { lat: 21.1702, lng: 72.8311 },
    nearbyHospitals: ['KIMS Hospital', 'Unique Hospital', 'Mahavir Hospital', 'BAPS Hospital'],
    serviceAreas: ['Vadodara', 'Bharuch', 'Vapi', 'Navsari', 'Valsad'],
    seoKeywords: ['MRI scanner Surat', 'CT machine Gujarat', 'medical equipment Surat'],
  },

  visakhapatnam: {
    slug: 'visakhapatnam',
    name: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    region: 'South',
    tier: 3,
    phone: '+91-891-4000-XXXX',
    email: 'vizag@phantomhealthcare.in',
    address: {
      line1: 'Dwaraka Nagar',
      line2: 'Main Road',
      pincode: '530016',
    },
    mapCoordinates: { lat: 17.6868, lng: 83.2185 },
    nearbyHospitals: ['Care Hospital', 'Apollo Hospital', 'KIMS Hospital', 'Seven Hills Hospital'],
    serviceAreas: ['Vijayawada', 'Rajahmundry', 'Kakinada', 'Guntur', 'Nellore'],
    seoKeywords: ['MRI machine Vizag', 'CT scanner Andhra Pradesh', 'medical imaging Visakhapatnam'],
  },

  vadodara: {
    slug: 'vadodara',
    name: 'Vadodara',
    state: 'Gujarat',
    region: 'West',
    tier: 3,
    phone: '+91-265-4000-XXXX',
    email: 'vadodara@phantomhealthcare.in',
    address: {
      line1: 'Alkapuri',
      line2: 'Near Inox Multiplex',
      pincode: '390007',
    },
    mapCoordinates: { lat: 22.3072, lng: 73.1812 },
    nearbyHospitals: ['Sterling Hospital', 'Bhailal Amin Hospital', 'Baroda Heart Hospital'],
    serviceAreas: ['Anand', 'Bharuch', 'Godhra', 'Dahod', 'Chhota Udepur'],
    seoKeywords: ['MRI scanner Vadodara', 'CT machine Baroda', 'medical equipment Gujarat'],
  },

  rajkot: {
    slug: 'rajkot',
    name: 'Rajkot',
    state: 'Gujarat',
    region: 'West',
    tier: 3,
    phone: '+91-281-4000-XXXX',
    email: 'rajkot@phantomhealthcare.in',
    address: {
      line1: 'Kalawad Road',
      line2: 'Near Crystal Mall',
      pincode: '360005',
    },
    mapCoordinates: { lat: 22.3039, lng: 70.8022 },
    nearbyHospitals: ['Apollo Hospital', 'Wockhardt Hospital', 'Sterling Hospital'],
    serviceAreas: ['Jamnagar', 'Junagadh', 'Bhavnagar', 'Morbi', 'Surendranagar'],
    seoKeywords: ['MRI machine Rajkot', 'CT scanner Saurashtra', 'medical imaging Rajkot'],
  },
};

// Helper functions
export function getCityData(citySlug: string): CityData | null {
  return cities[citySlug.toLowerCase()] || null;
}

export function getAllCitySlugs(): string[] {
  return Object.keys(cities);
}

export function getCitiesByRegion(region: CityData['region']): CityData[] {
  return Object.values(cities).filter(city => city.region === region);
}

export function getCitiesByTier(tier: CityData['tier']): CityData[] {
  return Object.values(cities).filter(city => city.tier === tier);
}

export function getCitiesByState(state: string): CityData[] {
  return Object.values(cities).filter(city => 
    city.state.toLowerCase() === state.toLowerCase()
  );
}

// Product categories for city pages
export const productCategories = [
  { slug: 'mri', name: 'MRI Machines', icon: '🧲' },
  { slug: 'ct', name: 'CT Scanners', icon: '📡' },
  { slug: 'pet-ct', name: 'PET-CT Scanners', icon: '⚛️' },
  { slug: 'cath-lab', name: 'Cath Lab', icon: '❤️' },
  { slug: 'dexa', name: 'DEXA / Bone Densitometer', icon: '🦴' },
  { slug: 'gamma-camera', name: 'Gamma Camera / SPECT', icon: '☢️' },
  { slug: 'c-arm', name: 'C-Arm', icon: '🦿' },
];

export function getCategoryData(categorySlug: string) {
  return productCategories.find(cat => cat.slug === categorySlug) || null;
}
