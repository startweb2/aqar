import {
  NavLinkItem,
  MetricItem,
  RoomDetail,
  ResidenceUnit,
  FloorPlanTypology,
  AmenityItem,
  MonographImage,
  NearbyDestination,
  VipServiceItem,
  ComparisonSpecRow,
} from '../types';

export const BRAND_LOGO_URL =
  'https://lh3.googleusercontent.com/aida/AEtjO1UUweNbl8BjUcUK8V9eb0TiD1obYH-LyyT9iwH2Xe0MtH70FuEPcxr174_nW6CPHEcgSka6pxAucdNx1O0XLFk6HaXNjGcZABjdHV6lftl_H1w35gYp-H3ubXKm9UTcCIxxWcovMCF5-5vn_21bLXbNh2a_B_U9l0gtNvBKQOeptNdD0BU6jSN8g87YSOVMwOfvy_EfcwiW__0Kl6VX8UnOeDLxG264fca5MMXROwWdi1qCndLtCbvOL0o';

export const HERO_BACKGROUND_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCwRJjO2VK0ekg2c7i3rggz-E_SSWzcDCUmmoZLx_Els-Vf4PV_mcdmcXMj0mLxfhcycyDDNYn2Zk-nPesFqpv_mtNrlSAxtwTGISzWzIb9bEIUG3FKq8_YLh7XmsCZxTE_2YmvBn--49vyIjWIXa0H6p8R5FsfMPNP03VXyVBqPFladnB2HAUN9FWQibf_GS4aFULvWQlsFgaE5l-zXcruiwE-nAGwMo5Vjz-HwQZI411UfwEwhO3_';

export const BALCONY_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCf6dz4L0RioCk16ZqPnK-e4ezvZ-OPPSt2GS9N4fC1j3pGgR9iENwxQafa5lSLI6mw1YvD686PIv4Kea4DyljwqxOEo3-Gw8Kbd6HM4fHW69fvku0nOE-xl2RgRZLpeo0Lv92qZ75DgMPyGkzEDXXkgPU4PDmsYaBMtHRwCONRIrZ0KwJFgAFBAVxVckxFb1qqcknYSv8SBLHq1jI7Av7hlRb_NHwh8rGy8Gqu4sZy8Do_YE2IFs2G';

export const NAV_LINKS: readonly NavLinkItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Residences', path: '/residences' },
  { label: 'Floor Plans', path: '/floor-plans' },
  { label: 'Contact', path: '/contact' },
];

export const HERO_METRICS: readonly MetricItem[] = [
  { label: 'DESTINATION', value: 'New Alamein, Egypt' },
  { label: 'ORIENTATION', value: 'Panoramic Sea Views' },
  { label: 'ATMOSPHERE', value: 'Mediterranean Sanctuary' },
];

export const HERO_STATS_CARD: readonly MetricItem[] = [
  { label: 'HORIZON OUTLOOK', value: 'Unobstructed 270°', subtitle: 'Pristine turquoise waters' },
  { label: 'DEVELOPMENT STATUS', value: 'Exclusive Releases', subtitle: 'Phased private handover' },
];

export const BALCONY_STATS: readonly MetricItem[] = [
  { label: 'SHORELINE DISTANCE', value: '0.0m', subtitle: 'Direct Waterfront' },
  { label: 'TOWER ORIENTATION', value: '100%', subtitle: 'Frontal Sea Facing' },
];

export const ROOM_DETAILS: readonly RoomDetail[] = [
  {
    id: 'salon',
    title: 'The Grand Reception Salon',
    category: '01 / SALON',
    description:
      'Honed Navona travertine underfoot, bespoke recessed reveal ceiling architecture, and custom walnut acoustic paneling create an ambiance of subdued timeless prestige.',
    specs: [
      { label: 'Clear Ceiling Height', value: '3.40m' },
      { label: 'Kitchen Joinery', value: 'Italian Poliform' },
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCcZWP_jvw0r26npEjDHxFg_Gm5uto8z61dXwYufkXkeSCce8TZGnRtpSpub8Bc9oW1QEuOQrzFTnIwYNKuUotWhvmwiWM5uppekd9-FdyJbpWD_A6VuGrTk6yr_VW5FqaN5csnAWwVsSYQjxQo4gonKbdjsP4p3fwcZQkL_Z2t6oOz4lhXUZOEu7lxdkK25GHh1uxuQn6puL-2FMsw5QquEpvNfJDGLfCnA0lJTyCdX0El9kV5vz27',
  },
  {
    id: 'outdoor',
    title: 'Sea Terrace & Sky Lounge',
    category: '02 / OUTDOOR',
    description:
      'Frameless architectural glass balustrade extending 3.2m with heated plunge pool and seamless indoor-outdoor entertaining deck overlooking the Mediterranean tide.',
    specs: [
      { label: 'Cantilever Depth', value: '3.20m' },
      { label: 'Deck Flooring', value: 'Brushed Teak & Stone' },
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB98x95pRYdJErTat_srv-BUFr6oPZRR92hK9Cy90vJ605_Dv_4b-x084OQwgEmFx9pfJViieGlWOSHCEUiKhopBY1XrVSNauiO14pR_9ptXnYg8xcvHXFYtaWX5ITs8WfD6VNfdVGrdudrmQLL5nHeVn_vp8C-HdLPeV4Dl98ZhQatwwQZrCD5KtPApVWSeqPvpNDfnTRSwWNdx2jpECCEitDIUNLt0E8DAhhBeqXm0cJ-jzMkkAL3',
  },
  {
    id: 'culinary',
    title: 'Gourmet Chef Kitchen',
    category: '03 / CULINARY',
    description:
      'Monolithic Italian Calacatta marble island with integrated Sub-Zero and Miele appliances, sommelier wine reserve, and discreet chef prep pantry.',
    specs: [
      { label: 'Island Cladding', value: 'Calacatta Marble' },
      { label: 'Appliance Suite', value: 'Sub-Zero & Miele' },
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAbEO1kqEk1bRuAH2fAIy1llFOhOxtuiSiioVyRBZ92X6krz9GqYP3u2lnS8VfJx9kTOaNZhi7ULsniPTl7r4_7SpolifYa3QlYQdGWCgdLHXZEWmB893FHrWdoOtB1v2K7hZ59QgLRcM9O0LxMNlJu7Rzp_6oBL3WssQ4UJRm5G0btVRuynSWxbnjt0LWsRDzOEbzx5yvWOcGFDiEcX3qgNdzAWtWGddrHXzQhY_98Eux4C-SKN5_D',
  },
  {
    id: 'suite',
    title: 'Primary Master Wing',
    category: '04 / PRIVATE',
    description:
      'A private sanctuary featuring sunrise loggias, custom oak dressing salons, and spa-grade bookmatched travertine ensuite with sea-view freestanding soaking tub.',
    specs: [
      { label: 'Wing Area', value: '54 m²' },
      { label: 'Ensuite Tub', value: 'Monolithic Composite' },
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDAWlgv9iKM5ErIXPjnFihvX2pgNVeDbSjFr30XvmviqJxKJHwJeF3ucDKD1LFIc9hBDlEoEn5PL1bVbi5XktDhWwgKjbVc_vtLgZItQ_iaS6eqqJECTx7xmmpaDgsIbACvlqA_lL7w-v7zvTamYVcESiLTiWy4PboVjNiz2KSXx0R0QIaZdnjOGNJlhMMznXsf2L1wBFMOJvB3lkMdto55hSjpHnqZf0hndU4qnqfNaOIKXBfwmzSy',
  },
];

export const RESIDENCE_UNITS: readonly ResidenceUnit[] = [
  {
    id: '1bed',
    title: 'One Bedroom',
    typology: 'Coastal Residence',
    tagline: 'Typology 01 • Coastal Sanctuary',
    description:
      'An intimate sanctuary bathed in natural Mediterranean light, featuring seamless indoor-outdoor living and an open-concept salon. Engineered with double-glazed acoustic curtain walls, handcrafted European walnut joinery, and private sunrise loggias.',
    footprint: '88 m²',
    footprintSqFt: '947 SQ.FT',
    layout: '1 Bed • 1.5 Baths',
    exposure: 'North-East Morning Light',
    terrace: '18 m² Terrace',
    floorLevels: 'Floor 04 — 18',
    startingPrice: 'POA · Tier I',
    ceilingHeight: '3.35 Meters',
    privateElevator: 'Direct Access Bay',
    kitchenFitout: 'Poliform & Miele',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBocrKUc91HaUgqo6oPzWBSyv--RoTVFXzddJL6HTjtKqZSFkU3Ga64y-rN0j3IoEARh7tDZ4k2FvI2KIOGPmiEKD04DWWLUGYmtF02rBeJudIYopxtyiDEelcVe8Hv6DvYCVP0_WXtbHGBQGutXsLcOc6SkwUSIAEfW_aJiAMdYfnq7Lo8x4XlBRP3NRqr-E7mgJVwl69GkYvt5xmFQZOJU4w5RSBEZP9SPDaq62Aqf_ItzAMOFmwx',
    floorPlanHref: '/floor-plans',
  },
  {
    id: '2bed',
    title: 'Two Bedroom',
    typology: 'Signature Residence',
    tagline: 'Typology 02 • Featured Architectural Highlight',
    description:
      'Balanced proportions and expansive entertaining areas framed by uninterrupted horizon views. A dramatic corner living salon offers 270-degree Mediterranean exposures with a signature cantilevered terrace that suspends you directly above the tidal surge.',
    footprint: '156 m²',
    footprintSqFt: '1,679 SQ.FT',
    layout: '2 Beds • 2.5 Baths',
    exposure: 'North & West Golden Hour Sunset',
    terrace: '34 m² Wraparound',
    floorLevels: 'Floor 12 — 28',
    startingPrice: 'POA · Tier II',
    ceilingHeight: '3.40 Meters',
    privateElevator: 'Direct Foyer Access',
    kitchenFitout: 'Poliform & Gaggenau',
    featuredBadge: 'Unrestricted Sea Corner',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB1skedRgaymOtfpFbb1MvS6tqbfBxM08YnjK4NUSObZ3Zpe2nOfG5tsBoBZGUwpUKeXyaVloocFt2aNus3Ao8Xv-w1835LHRh9rl2CLzI8rLD4hRG8PF6YjL18R0K5vF2-0GlzK5mESWmu1V-RdVNd0vTW9DWL2DRieOu48Wi3lyfoxmGuED0k1OcAd3DKovpA-yv3ayTksKRFCyV6mjQ4et9cdndU72x5s_wuLX_rSCCCRegrDuKv',
    floorPlanHref: '/floor-plans',
  },
  {
    id: '3bed',
    title: 'Three Bedroom',
    typology: 'Horizon Residence',
    tagline: 'Typology 03 • Estate in the Sky',
    description:
      'Crafted for family living and coastal entertaining, with split bedroom wings for absolute acoustic privacy. Features an expansive open-flow salon, private secondary family lounge, staff quarters, and a dedicated outdoor kitchen framed by the sea.',
    footprint: '228 m²',
    footprintSqFt: '2,454 SQ.FT',
    layout: '3 Beds • 3.5 Baths',
    exposure: 'Full Sea Frontal Panoramic',
    terrace: '52 m² Outer Terrace with Plunge Pool',
    floorLevels: 'Floor 20 — 36',
    startingPrice: 'POA · Tier III',
    ceilingHeight: '3.50 Meters',
    privateElevator: 'Direct Dual Entry',
    kitchenFitout: 'Custom Italian & Sub-Zero',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB98x95pRYdJErTat_srv-BUFr6oPZRR92hK9Cy90vJ605_Dv_4b-x084OQwgEmFx9pfJViieGlWOSHCEUiKhopBY1XrVSNauiO14pR_9ptXnYg8xcvHXFYtaWX5ITs8WfD6VNfdVGrdudrmQLL5nHeVn_vp8C-HdLPeV4Dl98ZhQatwwQZrCD5KtPApVWSeqPvpNDfnTRSwWNdx2jpECCEitDIUNLt0E8DAhhBeqXm0cJ-jzMkkAL3',
    floorPlanHref: '/floor-plans',
  },
  {
    id: 'penthouse',
    title: 'Four Bedroom',
    typology: 'Royal Sky Penthouse',
    tagline: 'Typology 04 • Crown Architectural Tier',
    description:
      'The pinnacle of Mediterranean high-rise living. Unrivaled scale, private infinity pool, and bespoke architectural finishes. Crowned with dramatic double-height 6-meter living volume and a 360-degree rooftop deck with uninterrupted horizons across the New Alamein coastal skyline.',
    footprint: '410 m²',
    footprintSqFt: '4,413 SQ.FT',
    layout: '4 Beds • 5.0 Baths',
    exposure: '360° Panoramas (Sea & Marina)',
    terrace: '124 m² Private Rooftop with Lap Pool',
    floorLevels: 'Levels 42 — 44 (Duplex)',
    startingPrice: 'POA · Bespoke Tier',
    ceilingHeight: '6.00m Double-Height',
    privateElevator: 'Dual Biometric Lifts',
    kitchenFitout: 'Dual Show & Prep Kitchens',
    featuredBadge: 'Crown Duplex Trophy Asset',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBwtHtKJIAwBFznToUdU9MGRi3pWUYY8aSDQsmxbUNon4jSjNsGzdLrVDaeLodPiIrkyTPhYTTiwYkuQ5PR31OPKgMdnkpjQ3SoEckkcntwPNexB7_U4tWwXjnCyFp6ipkg3Dq0rxdzyB8GHIdjuL7G4xRowaTzpJC9PzvhOCXwoW-Ic49cfVvNuy1lxXECeyHHbfj-zIqe7kjiK4gXDT2SC7TbQIxv-K7MvY1v7zDYO38z0ZRdzhl7',
    floorPlanHref: '/floor-plans',
  },
];

export const AMENITIES_LIST: readonly AmenityItem[] = [
  {
    id: 'lagoon',
    title: 'The Horizon Infinity Lagoon',
    category: 'PODIUM WATER DECK',
    description:
      'Suspended 40 meters above the beach, this 75-meter temperature-controlled infinity pool merges directly into the sea horizon, complemented by private cabanas and poolside mixology.',
    badge: '75m Infinity Deck',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAsPcm9yiig9xwYf2UurZ8aW8m2GRFwOF2cRcVhcuma86bSdAMQgF1DwnYeIl5ekESWld_Ko1S-uA2wpb00t4YKpmlX2tRoqyyDFtHYDJvMiNMhQJ8rJ41grfb07dX3h0vIbD_g0F_HgH3kICBVsQk5sK2hRIOPq2x6EcAe7af-dg_s4k0R1OBTihJesKuzlI8EDsnVDR93X-Hmzh96rFUwn1hgdfBDPW1l2rfDYQNG9TVhMAzBtE-o',
  },
  {
    id: 'marina',
    title: 'Private Marina Promenade',
    category: 'NAUTICAL ACCESS',
    description:
      'Direct resident access to private marina slips, deep-water yacht berths, and bespoke charter concierge.',
    badge: 'Superyacht Berths',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAouMleRsvQdZEqKEcYOcBHONZHHyYKkQAN6Vsp5suAQv9xN22LKd64b6iwrMyS8-53KwgGbMzvHnfl9pFSvmMgfMY0flk5ZMAb7sPdSPMNCcUq9xaFUDxCs9RgSyunmbuTa6bKNyoPWvHs9GCvk57WLOEfJjg4tvNTNSG4XTErJLpi_1XlqG9SbBVtdhpflH8KNir3twV_m3OQfedbweURt7kWl8qOpWqMTbxIJLHyIEHlDSiypauA',
  },
  {
    id: 'spa',
    title: 'Talise Thalasso Spa',
    category: 'WELLNESS & VITALITY',
    description:
      'Seawater vitality pools, cryotherapy suites, Finnish saunas, and holistic beachfront yoga pavilions.',
    badge: 'Holistic Sanctuary',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSBiE8kaA3CNec9ECgPqLm6aIxZ9dxEHa3jvJt5vsczgpSF4WdIoLn03imhD8WeIaW2WMWmi5UXqUExlLrIQjorul9yzow3qHuHvL6KvsrCIVCXjYZDJod5qp0VkwMfPwoBsJolSeI8F7N0qzSa8gM0yBJZCG_zRILt0l6JWcV0wpTS04H8l8hnm9N5QvEqSZ77WdOZb1CLAmrfWYo5bEbY8QpecQhJEnWTCIqJ2FMSUrmZbWo9YdD',
  },
];

export const MONOGRAPH_GALLERY: readonly MonographImage[] = [
  {
    id: 'twilight',
    title: 'Twilight Reflections on the Shore',
    category: 'FACADE GEOMETRY',
    caption: 'Curved undulating glass balconies with subtle golden downlighting over calm waters.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC5uy3BviU1zdEyntBQsXlLBLuJsOntBAz4ORl3Xh-Z9pxdyF57fY7JCELuqH4gSo6HgwErG1u18Jx-45IxnEWA9Sf93g_ma8bXFJZ-pViUPI0_xqmervo3UcHY5yNtJcmFaLqG_yOC7H5bKl_vwdINl5W8r5CvRjSZe3kOGoVtpvR3rfamZk7UHDbf3CPFaQFlBYNt44OBsa4iVrKjoAtti7FL3ru3ZTSEwlCpXXY9gNxRyf-JHoQh',
  },
  {
    id: 'tub',
    title: 'Travertine Freestanding Tub',
    category: 'SANCTUARY BATH',
    caption: 'Bookmatched Italian travertine stone with direct ocean sunset perspective.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4gIC4QlJKpUOjt8wfp_EuoTNcsPB-6PVBUKclX6deqIkiZBznDB4i03Tl7swUJynJLqb5BldVgQJtwsvTkxlaU8yiCBw64K7kts8VaTHgmSTh6hzJd6XFQz07TtPyYO6FEZGPEDlNDJ4NEeexmR6hTmTVmrniDV6nx3xz7cG_4r2-bpDaDSONiTTDCdIogDpUums695RdjW3wA6DW-9PA-84xIXf5XIvoJDFiqSpzVqz3ZzYMC4gu',
  },
  {
    id: 'brass',
    title: 'Brushed Champagne Brass',
    category: 'BESPOKE DETAILS',
    caption: 'Handcrafted metallic hardware celebrating precision coastal engineering.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAbEO1kqEk1bRuAH2fAIy1llFOhOxtuiSiioVyRBZ92X6krz9GqYP3u2lnS8VfJx9kTOaNZhi7ULsniPTl7r4_7SpolifYa3QlYQdGWCgdLHXZEWmB893FHrWdoOtB1v2K7hZ59QgLRcM9O0LxMNlJu7Rzp_6oBL3WssQ4UJRm5G0btVRuynSWxbnjt0LWsRDzOEbzx5yvWOcGFDiEcX3qgNdzAWtWGddrHXzQhY_98Eux4C-SKN5_D',
  },
  {
    id: 'starlight',
    title: 'The Starlight Sky Observatory',
    category: 'LEVEL 40',
    caption: 'Open-air sky lounge with fire pit and boundless horizon views.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDXsNQRPJddfll4mFO1TcS1cwNSsB2mTRM3k8MpifejrFPNalL81l3QtKK0tALsEmirlPZI1hGMH_0zSd_p5YmcjvCw6kYEgkc6GvtYBZTMXTDrj-YUYPHC-4xVb-t2q8c8GX_fWm-HFZPLppc9S-TeW_u6LNKhru7DbvXLpE-cnWW-bwfnm2lVACrTahovcebotFspIwWGDSoeskIYwLqKAvZQSrRetZOiNQ7D5d4zPARn0TKNlPjr',
  },
  {
    id: 'beach-club',
    title: 'Private Resident Beach Club',
    category: 'MEDITERRANEAN COAST',
    caption: 'Pristine 400-meter private sand shore with serviced cabanas.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDkm3mXjN6Gpe7D7Jd-adMsjRviwMpEjYpcWwHiP5_oGEG_RvZh9JkRmMfnF_7VmKIahUSyzLB_7rny9Ncn-ZngMqtsOHlATjmW0BjW0RAlnCktv_MyAp5NRwr-AV5J4B0gccsDQkThyq745LKsvANrIGhR2o4lwHySuPxFGzptcFNFzeP59yGZq42XVSMkZFq8XrczWvUWvvtglepya9fKMQRl9A6F1ddzvMt2lf7Yb_PMjmX6u63K',
  },
];

export const NEARBY_DESTINATIONS: readonly NearbyDestination[] = [
  {
    number: '01',
    name: 'Alamein International Marina',
    description: 'Berthing for superyachts up to 120m, deep-water berths, and gourmet promenade dining.',
    distanceTime: '3 MIN WALK',
  },
  {
    number: '02',
    name: 'The Heritage City & Opera',
    description: 'Historic architecture, open-air amphitheater, fine art galleries, and Roman theater.',
    distanceTime: '4 MIN DRIVE',
  },
  {
    number: '03',
    name: 'Alamein International Airport',
    description: 'Seamless international private jet terminal and scheduled global flights.',
    distanceTime: '20 MIN DRIVE',
  },
  {
    number: '04',
    name: 'Championship Golf Course',
    description: '18-hole coastal links course with Mediterranean ocean hazards.',
    distanceTime: '8 MIN DRIVE',
  },
];

export const FLOOR_PLAN_TYPOLOGIES: readonly FloorPlanTypology[] = [
  {
    id: '1bed',
    name: '1 Bedroom',
    series: 'Series A-01',
    areaM2: 88,
    floorRange: 'Floors 04 to 18 • Type A',
    description: 'Intimate coastal pied-à-terre featuring seamless flow to a private sunrise loggia.',
    features: [
      { title: 'Acoustic Glass Wall', desc: 'Double-glazed facade with direct morning light' },
      { title: 'Private Sunrise Loggia', desc: '18 m² sheltered terrace' },
      { title: 'Ensuite Bedroom', desc: 'Walk-in wardrobe and rain shower' },
    ],
    cadastre: {
      builtAreaM2: 88,
      builtAreaSqFt: 947,
      internalLivingM2: 70,
      internalPct: 80,
      terraceM2: 18,
      terracePct: 20,
      ceilingHeight: '3.35 m Clear',
      exposure: 'North-East Shoreline',
      parkingBays: 1,
    },
    roomDimensions: [
      { name: 'Living & Dining Salon', areaM2: 32.5 },
      { name: 'Master Bedroom Suite', areaM2: 24.0 },
      { name: 'Ensuite Bathroom', areaM2: 8.5 },
      { name: 'Gourmet Kitchenette', areaM2: 10.0 },
      { name: 'Sunrise Loggia', areaM2: 18.0 },
    ],
    materials: [
      { category: 'Main Flooring', material: 'European Oak Flooring' },
      { category: 'Stone Work', material: 'Honed Navona Travertine' },
      { category: 'Hardware', material: 'Champagne Brass' },
      { category: 'Glazing', material: 'Low-E Double Acoustic' },
    ],
    isometricImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnGd-mp-BklYmsd3fYsVcDuKu_VvWyab6f-GlvOLHVKhJzjNt3A0svj0-SO67iyEJ3evinUKhpJG9VdIHsoTNOYJyXbvprqOMoyaConmHespP_akp7rkFZ7QGRy1AYlFiTTmNmpY2Og3C91ZR51wJbAbxyA_WxETDrlOgFuIEvmqNX9s0SAO4tjmcOQJ43h-46nsGNekJLOGtej7E4W_AzQIfkcFkqvzd4yWtEvLhle5u-p4DfR4FJ',
    blueprintImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnGd-mp-BklYmsd3fYsVcDuKu_VvWyab6f-GlvOLHVKhJzjNt3A0svj0-SO67iyEJ3evinUKhpJG9VdIHsoTNOYJyXbvprqOMoyaConmHespP_akp7rkFZ7QGRy1AYlFiTTmNmpY2Og3C91ZR51wJbAbxyA_WxETDrlOgFuIEvmqNX9s0SAO4tjmcOQJ43h-46nsGNekJLOGtej7E4W_AzQIfkcFkqvzd4yWtEvLhle5u-p4DfR4FJ',
    roomPreviews: [
      {
        roomNumber: '01',
        title: 'Panoramic Living Salon',
        subtitle: '3.4m curtain wall with seamless sea outlook',
        areaM2: 32.5,
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuA0t57QrRS-B-QxtI6CavG4ZX-3gWkpjJksi_k6aHKJE8xN1Dfn38f3gcU_AU8qi4G4r8OG7e5bNB01T57n3PxcmLqsVh-VsNQUxUMj5suxNAGkIJ0chJWwgVklsycVNtkacAixb8GoiQJLeU2kmB_kClp_mXJfCt-6nj6h7n3t_zmsflNwMcS7aLawlRED-mJwXWjvtUx-ps66WaSoiPhsrtcXcbg6JV3LXM4-FhDU0DVBjt__xXzz',
      },
      {
        roomNumber: '02',
        title: 'Primary Master Suite',
        subtitle: 'Linen finishes & ocean breeze loggia',
        areaM2: 24.0,
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDAWlgv9iKM5ErIXPjnFihvX2pgNVeDbSjFr30XvmviqJxKJHwJeF3ucDKD1LFIc9hBDlEoEn5PL1bVbi5XktDhWwgKjbVc_vtLgZItQ_iaS6eqqJECTx7xmmpaDgsIbACvlqA_lL7w-v7zvTamYVcESiLTiWy4PboVjNiz2KSXx0R0QIaZdnjOGNJlhMMznXsf2L1wBFMOJvB3lkMdto55hSjpHnqZf0hndU4qnqfNaOIKXBfwmzSy',
      },
    ],
  },
  {
    id: '2bed',
    name: '2 Bedroom',
    series: 'Series B-02',
    areaM2: 156,
    floorRange: 'Floors 12 to 28 • Type B',
    description:
      'Configured for expansive dual-living with seamless fluid transition from the great salon out to an uninterrupted Mediterranean seascape.',
    features: [
      { title: 'Panoramic Glass Curtain', desc: '3.4m floor-to-ceiling thermal acoustic facade' },
      { title: 'Wraparound Sea Terrace', desc: '28 m² sheltered outdoor entertaining area' },
      { title: 'Ocean Ensuite Bath', desc: 'Freestanding soaking tub overlooking the coast' },
      { title: 'Gourmet Chef Island', desc: 'Monolithic Italian Calacatta marble center' },
    ],
    cadastre: {
      builtAreaM2: 156,
      builtAreaSqFt: 1679,
      internalLivingM2: 128,
      internalPct: 82,
      terraceM2: 28,
      terracePct: 18,
      ceilingHeight: '3.40 m Clear',
      exposure: 'North-West Shoreline',
      parkingBays: 2,
    },
    roomDimensions: [
      { name: 'Grand Salon & Dining', areaM2: 42.4 },
      { name: 'Master Bedroom Suite', areaM2: 34.2 },
      { name: 'Master Ensuite & Wardrobe', areaM2: 12.6 },
      { name: 'Bedroom Two (Ensuite)', areaM2: 24.0 },
      { name: 'Gourmet Open Kitchen', areaM2: 14.8 },
      { name: 'Powder Room & Foyer', areaM2: 5.2 },
      { name: 'Curved Sea Terrace', areaM2: 28.0 },
    ],
    materials: [
      { category: 'Main Flooring', material: 'European Oak Herringbone' },
      { category: 'Stone Work', material: 'Bianco Carrara Marble' },
      { category: 'Hardware', material: 'Brushed Champagne Brass' },
      { category: 'Glazing', material: 'Solar-Acoustic Double Low-E' },
    ],
    isometricImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnGd-mp-BklYmsd3fYsVcDuKu_VvWyab6f-GlvOLHVKhJzjNt3A0svj0-SO67iyEJ3evinUKhpJG9VdIHsoTNOYJyXbvprqOMoyaConmHespP_akp7rkFZ7QGRy1AYlFiTTmNmpY2Og3C91ZR51wJbAbxyA_WxETDrlOgFuIEvmqNX9s0SAO4tjmcOQJ43h-46nsGNekJLOGtej7E4W_AzQIfkcFkqvzd4yWtEvLhle5u-p4DfR4FJ',
    blueprintImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnGd-mp-BklYmsd3fYsVcDuKu_VvWyab6f-GlvOLHVKhJzjNt3A0svj0-SO67iyEJ3evinUKhpJG9VdIHsoTNOYJyXbvprqOMoyaConmHespP_akp7rkFZ7QGRy1AYlFiTTmNmpY2Og3C91ZR51wJbAbxyA_WxETDrlOgFuIEvmqNX9s0SAO4tjmcOQJ43h-46nsGNekJLOGtej7E4W_AzQIfkcFkqvzd4yWtEvLhle5u-p4DfR4FJ',
    roomPreviews: [
      {
        roomNumber: '01',
        title: 'Panoramic Living Salon',
        subtitle: '3.4m curtain wall with seamless sea outlook',
        areaM2: 42.4,
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuA0t57QrRS-B-QxtI6CavG4ZX-3gWkpjJksi_k6aHKJE8xN1Dfn38f3gcU_AU8qi4G4r8OG7e5bNB01T57n3PxcmLqsVh-VsNQUxUMj5suxNAGkIJ0chJWwgVklsycVNtkacAixb8GoiQJLeU2kmB_kClp_mXJfCt-6nj6h7n3t_zmsflNwMcS7aLawlRED-mJwXWjvtUx-ps66WaSoiPhsrtcXcbg6JV3LXM4-FhDU0DVBjt__xXzz',
      },
      {
        roomNumber: '02',
        title: 'Master Suite & Dressing',
        subtitle: 'Integrated Italian wardrobes & ocean view bed',
        areaM2: 34.2,
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDAWlgv9iKM5ErIXPjnFihvX2pgNVeDbSjFr30XvmviqJxKJHwJeF3ucDKD1LFIc9hBDlEoEn5PL1bVbi5XktDhWwgKjbVc_vtLgZItQ_iaS6eqqJECTx7xmmpaDgsIbACvlqA_lL7w-v7zvTamYVcESiLTiWy4PboVjNiz2KSXx0R0QIaZdnjOGNJlhMMznXsf2L1wBFMOJvB3lkMdto55hSjpHnqZf0hndU4qnqfNaOIKXBfwmzSy',
      },
      {
        roomNumber: '03',
        title: 'Sea-Facing Ensuite Bath',
        subtitle: 'Freestanding soaking tub overlooking sunset',
        areaM2: 12.6,
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDHT6yeeIEVzEaypJFEdjwmAkwZkt6ATqi6jK97qS6iu4lozTf9NhRpTflxsvNriEzfhntF3QgjCIevhcEZxWth7gGBD0j-gIWoMi9k35LEzRK3uwAGWyEB2EY08F9cpfEoDdITDg9qvy3zVXNlKsAdLL-jAlY4u0zBR3_R2SXuW14Z9Y87GXZ2ScGDVkBlNz_APwWdHSyklCyvdRgDdzOwCXaFr7n3X_10IFueUp02axxxUPXKKhlO',
      },
      {
        roomNumber: '04',
        title: 'Curved Sea Terrace',
        subtitle: 'Deep sheltered al fresco outdoor living',
        areaM2: 28.0,
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCo0jgz9VTI5UWZuTWA5ARp5Vti8ebqHse_AhUP-bXLALJeXzV-gYNVXfLDSQyq0j8q8SGiSdAt-bSLmn1Np6A2EULOoGgRYx_h_eNI3UDukBIfUEChUJj-73rmdhYdBwdOIrrW1e3SlVCu70EytjzcVQERbKb6UR-eDKnURxxv0DuHVS6Qm-kcCJ0S7ZpdxIdlKc-Sw3q4CC1oCy_4iwMGQ1oebFxhslan14oqkzASWgqt1D5vi5Wr',
      },
    ],
  },
  {
    id: '3bed',
    name: '3 Bedroom',
    series: 'Series C-03',
    areaM2: 228,
    floorRange: 'Floors 20 to 36 • Type C',
    description:
      'Estate in the Sky with dedicated staff quarters, secondary family lounge, and private heated plunge pool on terrace.',
    features: [
      { title: 'Private Plunge Pool', desc: 'Heated infinity plunge pool on outer terrace' },
      { title: 'Acoustic Rating', desc: 'STC 58 Decibel split wing separation' },
      { title: 'Staff Quarters', desc: 'Private ensuite staff room with service access' },
      { title: '54 m² Master Wing', desc: 'Corner master suite with dual walk-in closets' },
    ],
    cadastre: {
      builtAreaM2: 228,
      builtAreaSqFt: 2454,
      internalLivingM2: 176,
      internalPct: 77,
      terraceM2: 52,
      terracePct: 23,
      ceilingHeight: '3.50 m Clear',
      exposure: 'Full Frontal Sea View',
      parkingBays: 2,
    },
    roomDimensions: [
      { name: 'Formal Salon & Dining', areaM2: 58.0 },
      { name: 'Family TV Lounge', areaM2: 22.0 },
      { name: 'Master Bedroom Wing', areaM2: 54.0 },
      { name: 'Bedroom Two (Ensuite)', areaM2: 26.0 },
      { name: 'Bedroom Three (Ensuite)', areaM2: 24.0 },
      { name: 'Chef Kitchen & Scullery', areaM2: 18.0 },
      { name: 'Outdoor Pool Terrace', areaM2: 52.0 },
    ],
    materials: [
      { category: 'Main Flooring', material: 'Honed Navona Travertine' },
      { category: 'Stone Work', material: 'Statuario Marble' },
      { category: 'Hardware', material: 'Brushed Champagne Brass' },
      { category: 'Glazing', material: 'Triple-Pane Acoustic Glazing' },
    ],
    isometricImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnGd-mp-BklYmsd3fYsVcDuKu_VvWyab6f-GlvOLHVKhJzjNt3A0svj0-SO67iyEJ3evinUKhpJG9VdIHsoTNOYJyXbvprqOMoyaConmHespP_akp7rkFZ7QGRy1AYlFiTTmNmpY2Og3C91ZR51wJbAbxyA_WxETDrlOgFuIEvmqNX9s0SAO4tjmcOQJ43h-46nsGNekJLOGtej7E4W_AzQIfkcFkqvzd4yWtEvLhle5u-p4DfR4FJ',
    blueprintImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnGd-mp-BklYmsd3fYsVcDuKu_VvWyab6f-GlvOLHVKhJzjNt3A0svj0-SO67iyEJ3evinUKhpJG9VdIHsoTNOYJyXbvprqOMoyaConmHespP_akp7rkFZ7QGRy1AYlFiTTmNmpY2Og3C91ZR51wJbAbxyA_WxETDrlOgFuIEvmqNX9s0SAO4tjmcOQJ43h-46nsGNekJLOGtej7E4W_AzQIfkcFkqvzd4yWtEvLhle5u-p4DfR4FJ',
    roomPreviews: [
      {
        roomNumber: '01',
        title: 'Formal Ocean Salon',
        subtitle: 'Direct horizon view with dual aspect glass',
        areaM2: 58.0,
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuA0t57QrRS-B-QxtI6CavG4ZX-3gWkpjJksi_k6aHKJE8xN1Dfn38f3gcU_AU8qi4G4r8OG7e5bNB01T57n3PxcmLqsVh-VsNQUxUMj5suxNAGkIJ0chJWwgVklsycVNtkacAixb8GoiQJLeU2kmB_kClp_mXJfCt-6nj6h7n3t_zmsflNwMcS7aLawlRED-mJwXWjvtUx-ps66WaSoiPhsrtcXcbg6JV3LXM4-FhDU0DVBjt__xXzz',
      },
      {
        roomNumber: '02',
        title: 'Terrace Plunge Pool Deck',
        subtitle: 'Sunken glass infinity edge pool overlooking sea',
        areaM2: 52.0,
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCo0jgz9VTI5UWZuTWA5ARp5Vti8ebqHse_AhUP-bXLALJeXzV-gYNVXfLDSQyq0j8q8SGiSdAt-bSLmn1Np6A2EULOoGgRYx_h_eNI3UDukBIfUEChUJj-73rmdhYdBwdOIrrW1e3SlVCu70EytjzcVQERbKb6UR-eDKnURxxv0DuHVS6Qm-kcCJ0S7ZpdxIdlKc-Sw3q4CC1oCy_4iwMGQ1oebFxhslan14oqkzASWgqt1D5vi5Wr',
      },
    ],
  },
  {
    id: 'penthouse',
    name: '4 Bed Sky Penthouse',
    series: 'Series D-Crown',
    areaM2: 410,
    floorRange: 'Levels 42 to 44 • Duplex',
    description:
      'The pinnacle trophy asset of Alamein Towers with dramatic 6.0m double-height volume, private 12m infinity lap pool, and 360-degree rooftop deck.',
    features: [
      { title: '6.0m Double-Height Volume', desc: 'Monumental architectural living gallery' },
      { title: '12m Infinity Lap Pool', desc: 'Private rooftop lap pool overlooking Mediterranean' },
      { title: 'Dual Biometric Lifts', desc: 'Discreet and secure direct penthouse foyer' },
      { title: '4 Private Secured Bays', desc: 'Enclosed private garage with EV charging' },
    ],
    cadastre: {
      builtAreaM2: 410,
      builtAreaSqFt: 4413,
      internalLivingM2: 286,
      internalPct: 70,
      terraceM2: 124,
      terracePct: 30,
      ceilingHeight: '6.00 m Double-Height',
      exposure: '360° Coastal & Marina Panorama',
      parkingBays: 4,
    },
    roomDimensions: [
      { name: 'Double-Height Grand Atrium', areaM2: 95.0 },
      { name: 'Presidential Master Suite', areaM2: 68.0 },
      { name: 'Secondary Suites (x3)', areaM2: 78.0 },
      { name: 'Private Sky Office & Library', areaM2: 25.0 },
      { name: 'Dual Kitchens & Wine Cellar', areaM2: 30.0 },
      { name: 'Rooftop Terrace & 12m Pool', areaM2: 124.0 },
    ],
    materials: [
      { category: 'Main Flooring', material: 'Bookmatched Travertine & Oak' },
      { category: 'Stone Work', material: 'Belgian Black & Calacatta' },
      { category: 'Hardware', material: 'Bespoke Brushed Bronze' },
      { category: 'Glazing', material: 'Acoustic Marine Structural Glass' },
    ],
    isometricImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnGd-mp-BklYmsd3fYsVcDuKu_VvWyab6f-GlvOLHVKhJzjNt3A0svj0-SO67iyEJ3evinUKhpJG9VdIHsoTNOYJyXbvprqOMoyaConmHespP_akp7rkFZ7QGRy1AYlFiTTmNmpY2Og3C91ZR51wJbAbxyA_WxETDrlOgFuIEvmqNX9s0SAO4tjmcOQJ43h-46nsGNekJLOGtej7E4W_AzQIfkcFkqvzd4yWtEvLhle5u-p4DfR4FJ',
    blueprintImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnGd-mp-BklYmsd3fYsVcDuKu_VvWyab6f-GlvOLHVKhJzjNt3A0svj0-SO67iyEJ3evinUKhpJG9VdIHsoTNOYJyXbvprqOMoyaConmHespP_akp7rkFZ7QGRy1AYlFiTTmNmpY2Og3C91ZR51wJbAbxyA_WxETDrlOgFuIEvmqNX9s0SAO4tjmcOQJ43h-46nsGNekJLOGtej7E4W_AzQIfkcFkqvzd4yWtEvLhle5u-p4DfR4FJ',
    roomPreviews: [
      {
        roomNumber: '01',
        title: 'Double-Height Grand Atrium',
        subtitle: '6-meter glass volume facing the open sea',
        areaM2: 95.0,
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuA0t57QrRS-B-QxtI6CavG4ZX-3gWkpjJksi_k6aHKJE8xN1Dfn38f3gcU_AU8qi4G4r8OG7e5bNB01T57n3PxcmLqsVh-VsNQUxUMj5suxNAGkIJ0chJWwgVklsycVNtkacAixb8GoiQJLeU2kmB_kClp_mXJfCt-6nj6h7n3t_zmsflNwMcS7aLawlRED-mJwXWjvtUx-ps66WaSoiPhsrtcXcbg6JV3LXM4-FhDU0DVBjt__xXzz',
      },
      {
        roomNumber: '02',
        title: '360° Private Sky Deck',
        subtitle: '12m infinity lap pool with full horizon views',
        areaM2: 124.0,
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCo0jgz9VTI5UWZuTWA5ARp5Vti8ebqHse_AhUP-bXLALJeXzV-gYNVXfLDSQyq0j8q8SGiSdAt-bSLmn1Np6A2EULOoGgRYx_h_eNI3UDukBIfUEChUJj-73rmdhYdBwdOIrrW1e3SlVCu70EytjzcVQERbKb6UR-eDKnURxxv0DuHVS6Qm-kcCJ0S7ZpdxIdlKc-Sw3q4CC1oCy_4iwMGQ1oebFxhslan14oqkzASWgqt1D5vi5Wr',
      },
    ],
  },
];

export const COMPARISON_SPECS: readonly ComparisonSpecRow[] = [
  {
    specification: 'TOTAL INTERIOR AREA',
    oneBed: '88 m² / 947 sq.ft',
    twoBed: '156 m² / 1,679 sq.ft',
    threeBed: '228 m² / 2,454 sq.ft',
    penthouse: '410 m² / 4,413 sq.ft',
  },
  {
    specification: 'CLEAR CEILING HEIGHT',
    oneBed: '3.35 Meters',
    twoBed: '3.40 Meters',
    threeBed: '3.50 Meters',
    penthouse: '6.00m Double-Height',
  },
  {
    specification: 'TERRACE DEPTH / AREA',
    oneBed: '2.4m depth / 18 m²',
    twoBed: '3.2m cantilever / 34 m²',
    threeBed: '3.8m deep / 52 m²',
    penthouse: 'Wraparound Deck / 124 m²',
  },
  {
    specification: 'PRIVATE LIFT ACCESS',
    oneBed: 'Keycard High-Speed Bay',
    twoBed: 'Direct Foyer Access',
    threeBed: 'Direct Dual Entry',
    penthouse: 'Biometric Private Foyer',
  },
  {
    specification: 'SECURED PARKING BAYS',
    oneBed: '1 Allocated Bay',
    twoBed: '2 Allocated Bays',
    threeBed: '2 Allocated Bays + EV',
    penthouse: '4 Enclosed Private Box',
  },
  {
    specification: 'PRIVATE WATER FEATURE',
    oneBed: '—',
    twoBed: 'Optional Spa Jacuzzi',
    threeBed: 'Heated Plunge Pool',
    penthouse: '12m Infinity Lap Pool',
  },
  {
    specification: 'FLOOR LEVELS',
    oneBed: 'Levels 04 — 18',
    twoBed: 'Levels 08 — 28',
    threeBed: 'Levels 20 — 36',
    penthouse: 'Levels 42 — 44 (Sky Duplex)',
  },
];

export const VIP_SERVICES: readonly VipServiceItem[] = [
  {
    number: '01',
    title: 'Discreet Chauffeur Transfers',
    description:
      'Private vehicular transfers arranged from Borg El Arab (HBE), Cairo International (CAI), or El Alamein International (DBB) airports directly to our reception dock.',
  },
  {
    number: '02',
    title: 'Exclusive Yacht Docking',
    description:
      'Guest berths available at the Alamein Marina for yacht arrivals with tender transfer service to the private viewing suite.',
  },
  {
    number: '03',
    title: 'Bespoke 3D Holographic Model',
    description:
      'Experience the masterplan in high-fidelity physical and digital scale within the waterfront pavilion projection studio.',
  },
];

import { Language } from './translations';
import {
  HERO_METRICS_AR,
  HERO_STATS_CARD_AR,
  BALCONY_STATS_AR,
  ROOM_DETAILS_AR,
  RESIDENCE_UNITS_AR,
  AMENITIES_LIST_AR,
  MONOGRAPH_GALLERY_AR,
  NEARBY_DESTINATIONS_AR,
  FLOOR_PLAN_TYPOLOGIES_AR,
  COMPARISON_SPECS_AR,
  VIP_SERVICES_AR,
} from './mockDataAr';

export function getResidenceUnits(lang: Language = 'en'): readonly ResidenceUnit[] {
  return lang === 'ar' ? RESIDENCE_UNITS_AR : RESIDENCE_UNITS;
}

export function getAmenities(lang: Language = 'en'): readonly AmenityItem[] {
  return lang === 'ar' ? AMENITIES_LIST_AR : AMENITIES_LIST;
}

export function getMonographGallery(lang: Language = 'en'): readonly MonographImage[] {
  return lang === 'ar' ? MONOGRAPH_GALLERY_AR : MONOGRAPH_GALLERY;
}

export function getNearbyDestinations(lang: Language = 'en'): readonly NearbyDestination[] {
  return lang === 'ar' ? NEARBY_DESTINATIONS_AR : NEARBY_DESTINATIONS;
}

export function getRoomDetails(lang: Language = 'en'): readonly RoomDetail[] {
  return lang === 'ar' ? ROOM_DETAILS_AR : ROOM_DETAILS;
}

export function getFloorPlanTypologies(lang: Language = 'en'): readonly FloorPlanTypology[] {
  return lang === 'ar' ? FLOOR_PLAN_TYPOLOGIES_AR : FLOOR_PLAN_TYPOLOGIES;
}

export function getComparisonSpecs(lang: Language = 'en'): readonly ComparisonSpecRow[] {
  return lang === 'ar' ? COMPARISON_SPECS_AR : COMPARISON_SPECS;
}

export function getVipServices(lang: Language = 'en'): readonly VipServiceItem[] {
  return lang === 'ar' ? VIP_SERVICES_AR : VIP_SERVICES;
}

export function getHeroMetrics(lang: Language = 'en'): readonly MetricItem[] {
  return lang === 'ar' ? HERO_METRICS_AR : HERO_METRICS;
}

export function getHeroStatsCard(lang: Language = 'en'): readonly MetricItem[] {
  return lang === 'ar' ? HERO_STATS_CARD_AR : HERO_STATS_CARD;
}

export function getBalconyStats(lang: Language = 'en'): readonly MetricItem[] {
  return lang === 'ar' ? BALCONY_STATS_AR : BALCONY_STATS;
}

