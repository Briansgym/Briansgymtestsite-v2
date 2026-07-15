export const SITE = {
  name: "Brian's Gym",
  tagline: "Sedalia's #1 Fitness Facility",
  url: 'https://briansgym.com',
  description:
    "Brian's Gym is Sedalia's #1 fitness facility — 26,000 sq ft, 24-hour key card access, Kid Zone childcare, functional turf, personal training, and SilverSneakers. Locally owned 20+ years.",
  address: {
    street: '1020 Thompson Blvd',
    city: 'Sedalia',
    state: 'MO',
    zip: '65301',
  },
  phone: '660-829-0997',
  phoneHref: 'tel:+16608290997',
  email: 'info@briansgym.com',
  geo: { lat: 38.7045, lng: -93.2283 },
  facilitySize: '26,000 sq ft',
  yearsInBusiness: '20+',
  social: {
    facebook: 'https://www.facebook.com/BriansGymSedalia/',
    instagram: 'https://www.instagram.com/briansgym24hr/',
    youtube: 'https://www.youtube.com/@briansgym',
    youtubeEmbed: 'https://www.youtube.com/embed/5NGfTQFhOtI',
    googleMaps: 'https://maps.app.goo.gl/yN1KRxpkgQSYnM127',
  },
  paymentMethods: ['Credit/Debit Cards', 'ACH/Bank Draft', 'PayPal', 'Cash (In-Person)'],
  formspree: {
    contact: 'https://formspree.io/f/xqevnqya',
    trial: 'https://formspree.io/f/xzdlorrv',
  },
  annualLinks: {
    single: 'https://briansgym.com/product/1-year-single-membership/',
    couples: 'https://briansgym.com/product/1-year-couples-membership/',
  },
};

export const HOURS = [
  { day: 'Monday – Thursday', hours: '7:00am–11:00am & 4:00pm–9:00pm', note: 'Staffed' },
  { day: 'Friday', hours: '8:00am–2:00pm', note: 'Staffed' },
  { day: 'Saturday', hours: '8:00am–2:00pm', note: 'Staffed' },
  { day: 'Sunday', hours: 'Key Card Access Only', note: 'Unstaffed' },
];

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Membership', href: '/membership' },
  { label: 'Personal Training', href: '/personal-training' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const FAQS = [
  {
    q: 'What are your hours?',
    a: 'All members enjoy 24-hour key card access. Our staffed hours are Monday–Thursday 7:00am–11:00am & 4:00pm–9:00pm, Friday 8:00am–2:00pm, and Saturday 8:00am–2:00pm. Sunday is key card access only.',
  },
  {
    q: 'Do I need to sign a contract?',
    a: 'No — we offer non-agreement month-to-month memberships with no contract. We also offer $8 day passes and $35 14-day passes if you prefer no commitment at all.',
  },
  {
    q: 'Is there childcare / a Kid Zone?',
    a: 'Yes! Our Kid Zone childcare area is available as a $20/mo add-on that covers 2 children, with each additional child at $15/mo. We are the only gym in Sedalia offering on-site childcare.',
  },
  {
    q: 'How do I access the gym after hours?',
    a: 'Every member receives a key card/fob. Simply scan it at the door to enter any time, day or night, 24 hours a day.',
  },
  {
    q: 'Do you offer military, senior, or teacher discounts?',
    a: 'Yes — we offer discounts for Military, Law Enforcement, Firefighters, Teachers, and Seniors. Valid ID is required. Contact us at info@briansgym.com to learn more.',
  },
  {
    q: 'What is the enrollment fee?',
    a: 'Enrollment is a one-time $50 fee. There is also a $35 annual maintenance fee per account (not per member).',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes! We offer a free 3-day trial pass with no commitment and no credit card required. It’s the best way to experience everything Brian’s Gym has to offer.',
  },
  {
    q: 'How do I sign up for personal training?',
    a: 'Contact us or call 660-829-0997 to schedule a free interview with one of our certified trainers. New members can take advantage of our special: 3 sessions for $75.',
  },
  {
    q: 'Do you accept SilverSneakers / Healthy Contributions?',
    a: 'Yes, we accept both SilverSneakers and Healthy Contributions. We are the only gym in Sedalia to do so. Contact us to verify your eligibility.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'For non-agreement memberships, we require 30 days notice. For agreement memberships, the terms are outlined in your agreement. Contact us any time to discuss your options.',
  },
];
