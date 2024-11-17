export const SITE_CONFIG = {
    name: 'FastTrack Courier',
    description: 'Fast and reliable courier services worldwide',
    url: 'https://fasttrack.com',
    keywords: ['courier', 'delivery', 'shipping', 'logistics'],
  }
  
  export const CONTACT_INFO = {
    email: 'contact@fasttrack.com',
    phone: '+1 234 567 8900',
    address: '123 Delivery Street, Shipping City, 12345',
  }
  
  export const SOCIAL_LINKS = {
    facebook: 'https://facebook.com/fasttrack',
    twitter: 'https://twitter.com/fasttrack',
    instagram: 'https://instagram.com/fasttrack',
    linkedin: 'https://linkedin.com/company/fasttrack',
  }
  
  export const NAVIGATION_LINKS = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Tracking', href: '/tracking' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]
  
  export const SERVICES = [
    {
      title: 'Express Delivery',
      description: 'Same-day delivery for urgent packages',
      icon: 'express-icon',
      features: ['24/7 Service', 'Real-time Updates', 'Priority Handling'],
    },
    {
      title: 'International Shipping',
      description: 'Worldwide delivery with customs handling',
      icon: 'international-icon',
      features: ['200+ Countries', 'Customs Clearance', 'Package Insurance'],
    },
    {
      title: 'Business Solutions',
      description: 'Tailored logistics for businesses',
      icon: 'business-icon',
      features: ['Bulk Shipping', 'API Integration', 'Dedicated Support'],
    },
  ]

  export const services = [
    {
      title: 'Express Delivery',
      price: '49',
      features: [
        'Same-day delivery',
        'Real-time tracking',
        'Insurance included',
        'Priority handling',
        'Door-to-door service'
      ],
      isPopular: true,
    },
    {
      title: 'Standard Shipping',
      price: '29',
      features: [
        '2-3 day delivery',
        'Track & trace',
        'Basic insurance',
        'Regular handling',
        'Pickup points available'
      ],
      isPopular: false,
    },
    {
      title: 'Economy',
      price: '19',
      features: [
        '3-5 day delivery',
        'Basic tracking',
        'Optional insurance',
        'Standard handling',
        'Flexible pickup options'
      ],
      isPopular: false,
    },
  ]

  
  export const processSteps = [
    {
      title: 'Book',
      description: 'Schedule your pickup online or through our mobile app',
      icon: '📦',
    },
    {
      title: 'Pack',
      description: 'We collect your package and ensure secure packaging',
      icon: '🚚',
    },
    {
      title: 'Track',
      description: 'Monitor your shipment with real-time tracking',
      icon: '📍',
    },
    {
      title: 'Deliver',
      description: 'We ensure safe and timely delivery to the destination',
      icon: '✅',
    },
  ]
  