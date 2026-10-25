import {
  ResidenceUnit,
  FloorPlanTypology,
  AmenityItem,
  MonographImage,
  NearbyDestination,
  VipServiceItem,
  ComparisonSpecRow,
  RoomDetail,
  MetricItem,
} from '../types';

export const HERO_METRICS_AR: readonly MetricItem[] = [
  { label: 'الوجهة الجغرافية', value: 'العلمين الجديدة، مصر' },
  { label: 'الرؤية والاتجاه', value: 'إطلالات بحرية بانورامية' },
  { label: 'الأجواء والسكينة', value: 'ملاذ البحر المتوسط الفاخر' },
];

export const HERO_STATS_CARD_AR: readonly MetricItem[] = [
  { label: 'أفق الرؤية البحرية', value: 'مفتوح 270° بالكامل', subtitle: 'مياه فيروزية لا متناهية' },
  { label: 'المرحلة التطويرية', value: 'إصدارات حصرية خاصة', subtitle: 'تسليم مرحلي متميز' },
];

export const BALCONY_STATS_AR: readonly MetricItem[] = [
  { label: 'المسافة إلى الشاطئ', value: '0.0 م', subtitle: 'مواجهة بحرية مباشرة' },
  { label: 'نسبة الوحدات المطلة', value: '100%', subtitle: 'إطلالة بحرية كاملة' },
];

export const ROOM_DETAILS_AR: readonly RoomDetail[] = [
  {
    id: 'salon',
    title: 'صالون الاستقبال الملكي',
    category: '01 / الصالون الرئيسي',
    description:
      'أرضيات رخام ترافرتين نافونا المصقول، وأسقف ذات إنارة مخفية بارتفاعات معمارية، وتكسيات خشب جوز أمريكي عازل للصوت تعكس أجواءً استثنائية من الهيبة والوقار الخالد.',
    specs: [
      { label: 'ارتفاع السقف الصافي', value: '3.40 م' },
      { label: 'الخزائن والتجهيزات', value: 'Poliform إيطالية' },
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCcZWP_jvw0r26npEjDHxFg_Gm5uto8z61dXwYufkXkeSCce8TZGnRtpSpub8Bc9oW1QEuOQrzFTnIwYNKuUotWhvmwiWM5uppekd9-FdyJbpWD_A6VuGrTk6yr_VW5FqaN5csnAWwVsSYQjxQo4gonKbdjsP4p3fwcZQkL_Z2t6oOz4lhXUZOEu7lxdkK25GHh1uxuQn6puL-2FMsw5QquEpvNfJDGLfCnA0lJTyCdX0El9kV5vz27',
  },
  {
    id: 'outdoor',
    title: 'التراس البحري والسكاي لاونج',
    category: '02 / التراس الخارجي',
    description:
      'درابزين زجاجي إنشائي نقي بدون فواصل يمتد بعمق 3.2 متر مع مسبح استرخاء مدفأ وسطح خشبي يندمج بسلاسة مع المساحات الداخلية بإطلالة مفتوحة على مد وجزر البحر المتوسط.',
    specs: [
      { label: 'عمق بروز التراس', value: '3.20 م' },
      { label: 'أرضيات التراس', value: 'خشب تيك وحجر طبيعي' },
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB98x95pRYdJErTat_srv-BUFr6oPZRR92hK9Cy90vJ605_Dv_4b-x084OQwgEmFx9pfJViieGlWOSHCEUiKhopBY1XrVSNauiO14pR_9ptXnYg8xcvHXFYtaWX5ITs8WfD6VNfdVGrdudrmQLL5nHeVn_vp8C-HdLPeV4Dl98ZhQatwwQZrCD5KtPApVWSeqPvpNDfnTRSwWNdx2jpECCEitDIUNLt0E8DAhhBeqXm0cJ-jzMkkAL3',
  },
  {
    id: 'culinary',
    title: 'مطبخ الشيف الفاخر',
    category: '03 / المطبخ والاستقبال',
    description:
      'جزيرة مركزية من كتلة رخام كالاكاتا الإيطالي متجانسة العروق، مجهزة بأحدث أجهزة Sub-Zero و Miele العالمية، مع ركن مشروبات مخصص ومطبخ تحضيري مغلق لخدمة الولائم.',
    specs: [
      { label: 'كسوة الجزيرة المركزية', value: 'رخام كالاكاتا فاخر' },
      { label: 'باقة الأجهزة المدمجة', value: 'Sub-Zero & Miele' },
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAbEO1kqEk1bRuAH2fAIy1llFOhOxtuiSiioVyRBZ92X6krz9GqYP3u2lnS8VfJx9kTOaNZhi7ULsniPTl7r4_7SpolifYa3QlYQdGWCgdLHXZEWmB893FHrWdoOtB1v2K7hZ59QgLRcM9O0LxMNlJu7Rzp_6oBL3WssQ4UJRm5G0btVRuynSWxbnjt0LWsRDzOEbzx5yvWOcGFDiEcX3qgNdzAWtWGddrHXzQhY_98Eux4C-SKN5_D',
  },
  {
    id: 'suite',
    title: 'جناح الماستر الملكي',
    category: '04 / الجناح الخاص',
    description:
      'ملاذ شخصي متكامل يضم شرفة شروق شمس خاصة، وخزائن ملابس مدمجة من خشب البلوط، وحمام سبا فاخر مكسو بحجر الترافرتين المتناظر مع حوض استحمام مستقل يطل مباشرة على مياه البحر.',
    specs: [
      { label: 'مساحة الجناح الرئيسي', value: '54 م²' },
      { label: 'حوض الاستحمام', value: 'حجري مستقل بإطلالة بحرية' },
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDAWlgv9iKM5ErIXPjnFihvX2pgNVeDbSjFr30XvmviqJxKJHwJeF3ucDKD1LFIc9hBDlEoEn5PL1bVbi5XktDhWwgKjbVc_vtLgZItQ_iaS6eqqJECTx7xmmpaDgsIbACvlqA_lL7w-v7zvTamYVcESiLTiWy4PboVjNiz2KSXx0R0QIaZdnjOGNJlhMMznXsf2L1wBFMOJvB3lkMdto55hSjpHnqZf0hndU4qnqfNaOIKXBfwmzSy',
  },
];

export const RESIDENCE_UNITS_AR: readonly ResidenceUnit[] = [
  {
    id: '1bed',
    title: 'شقة كوستال — غرفة نوم واحدة',
    typology: 'غرفة نوم واحدة',
    tagline: 'سكينة ساحلية مطلة على الأفق',
    description:
      'تصميم داخلي راقٍ يعظم المساحة الفعالة مع صالون مفتوح ومطبخ شيف إيطالي، يتدفق بانسيابية نحو تراس بحري عميق يطل على مياه البحر المتوسط اللازوردية.',
    footprint: '88 م²',
    footprintSqFt: '947 قدم²',
    layout: 'غرفة ماستر + صالون + تراس بحري',
    exposure: 'واجهة بحرية شمالية غربية',
    terrace: 'تراس عمق 2.4م بمساحة 18 م²',
    floorLevels: 'الطوابق 04 — 18',
    startingPrice: 'السعر عند الطلب (POA)',
    ceilingHeight: '3.35 متراً صافي',
    privateElevator: 'دخول بمصعد إلكتروني سريع',
    kitchenFitout: 'مطابخ Poliform الإيطالية',
    featuredBadge: 'إطلالة بحرية بانورامية',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA0t57QrRS-B-QxtI6CavG4ZX-3gWkpjJksi_k6aHKJE8xN1Dfn38f3gcU_AU8qi4G4r8OG7e5bNB01T57n3PxcmLqsVh-VsNQUxUMj5suxNAGkIJ0chJWwgVklsycVNtkacAixb8GoiQJLeU2kmB_kClp_mXJfCt-6nj6h7n3t_zmsflNwMcS7aLawlRED-mJwXWjvtUx-ps66WaSoiPhsrtcXcbg6JV3LXM4-FhDU0DVBjt__xXzz',
    floorPlanHref: '/floor-plans',
  },
  {
    id: '2bed',
    title: 'شقة سيجنتشر — غرفتان نوم',
    typology: 'غرفتان نوم',
    tagline: 'الأناقة الساحلية والرحابة المزدوجة',
    description:
      'صُممت للمعيشة الراقية مع جناحين رئيسيين منفصلين بحمامات مستقلة، وصالون استقبال كبير، وتراس واسع ناتئ يتيح تجربة حياة داخلية وخارجية لا مثيل لها.',
    footprint: '156 م²',
    footprintSqFt: '1,679 قدم²',
    layout: 'غرفتا نوم رئيسيتان + حمام ضيوف + تراس ممتد',
    exposure: 'واجهة بحرية مزدوجة مع مغيب الشمس',
    terrace: 'تراس كابولي 3.2م بمساحة 34 م²',
    floorLevels: 'الطوابق 08 — 28',
    startingPrice: 'السعر عند الطلب (POA)',
    ceilingHeight: '3.40 متراً صافي',
    privateElevator: 'دخول مباشر إلى بهو الجناح',
    kitchenFitout: 'جزيرة رخام كالاكاتا وMiele',
    featuredBadge: 'النموذج الأكثر طلباً',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB98x95pRYdJErTat_srv-BUFr6oPZRR92hK9Cy90vJ605_Dv_4b-x084OQwgEmFx9pfJViieGlWOSHCEUiKhopBY1XrVSNauiO14pR_9ptXnYg8xcvHXFYtaWX5ITs8WfD6VNfdVGrdudrmQLL5nHeVn_vp8C-HdLPeV4Dl98ZhQatwwQZrCD5KtPApVWSeqPvpNDfnTRSwWNdx2jpECCEitDIUNLt0E8DAhhBeqXm0cJ-jzMkkAL3',
    floorPlanHref: '/floor-plans',
  },
  {
    id: '3bed',
    title: 'شقة هورايزون — 3 غرف نوم',
    typology: '3 غرف نوم',
    tagline: 'أفق واسع وفخامة عائلية متكاملة',
    description:
      'مساحة استثنائية تشمل ثلاثة أجنحة نوم فخمة مع غرف تبديل ملابس خاصة، وصالون استقبال ثلاثي الواجهات، وجناح للخدمات، وتراس بحري عريض يلتف حول الواجهة.',
    footprint: '228 م²',
    footprintSqFt: '2,454 قدم²',
    layout: '3 أجنحة ماستر + جناح خدمات + صالون ثلاثي',
    exposure: 'رؤية بحرية كاملة 270 درجة',
    terrace: 'تراس بانورامي بمساحة 52 م²',
    floorLevels: 'الطوابق 20 — 36',
    startingPrice: 'السعر عند الطلب (POA)',
    ceilingHeight: '3.50 متراً صافي',
    privateElevator: 'مدخلان مستقلان بمصعد خاص',
    kitchenFitout: 'مطابخ إيطالية متكاملة + مطبخ تحضيري',
    featuredBadge: 'طوابق عليا مميزة',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCcZWP_jvw0r26npEjDHxFg_Gm5uto8z61dXwYufkXkeSCce8TZGnRtpSpub8Bc9oW1QEuOQrzFTnIwYNKuUotWhvmwiWM5uppekd9-FdyJbpWD_A6VuGrTk6yr_VW5FqaN5csnAWwVsSYQjxQo4gonKbdjsP4p3fwcZQkL_Z2t6oOz4lhXUZOEu7lxdkK25GHh1uxuQn6puL-2FMsw5QquEpvNfJDGLfCnA0lJTyCdX0El9kV5vz27',
    floorPlanHref: '/floor-plans',
  },
  {
    id: 'penthouse',
    title: 'بنتهاوس رويال سكاي دوبلكس',
    typology: 'سكاي بنتهاوس 4 غرف',
    tagline: 'قمة المجد المعماري وتاج الأبراج',
    description:
      'تحفة معمارية على مستويين في أعلى البرج مع بهو زجاجي بارتفاع 6 أمتار، وسطح سماء خاص يضم مسبح إنفينيتي بطول 12 متراً، ومصعداً ببصمة بيومترية، وإطلالة لا حدود لها على البحر المتوسط.',
    footprint: '410 م²',
    footprintSqFt: '4,413 قدم²',
    layout: 'دوبلكس 4 أجنحة + سكاي لاونج + مسبح إنفينيتي خاص',
    exposure: 'أفق 360 درجة مفتوح بالكامل',
    terrace: 'سطح سماء دائري بمساحة 124 م²',
    floorLevels: 'الطوابق 42 — 44 (قمة البرج)',
    startingPrice: 'السعر عند الطلب حصرياً (POA)',
    ceilingHeight: '6.00 أمتار ارتفاع مزدوج',
    privateElevator: 'مصعدان بيومتريان خاصان',
    kitchenFitout: 'مطبخ رئيسي استعراضي + مطبخ شيف تنفيذي',
    featuredBadge: 'أيقونة التاج المعماري',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBwtHtKJIAwBFznToUdU9MGRi3pWUYY8aSDQsmxbUNon4jSjNsGzdLrVDaeLodPiIrkyTPhYTTiwYkuQ5PR31OPKgMdnkpjQ3SoEckkcntwPNexB7_U4tWwXjnCyFp6ipkg3Dq0rxdzyB8GHIdjuL7G4xRowaTzpJC9PzvhOCXwoW-Ic49cfVvNuy1lxXECeyHHbfj-zIqe7kjiK4gXDT2SC7TbQIxv-K7MvY1v7zDYO38z0ZRdzhl7',
    floorPlanHref: '/floor-plans',
  },
];

export const AMENITIES_LIST_AR: readonly AmenityItem[] = [
  {
    id: 'lagoon',
    title: 'بحيرة الأفق إنفينيتي لاجون',
    category: 'منصة المسابح المعلقة',
    description:
      'مسبح إنفينيتي معلق على ارتفاع 40 متراً بطول 75 متراً مع تحكم بدرجة الحرارة، يندمج بصرياً مع أفق البحر المتوسط، وتكمله كبائن خاصة وخدمة ضيافة راقية.',
    badge: 'مسبح إنفينيتي 75م',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAsPcm9yiig9xwYf2UurZ8aW8m2GRFwOF2cRcVhcuma86bSdAMQgF1DwnYeIl5ekESWld_Ko1S-uA2wpb00t4YKpmlX2tRoqyyDFtHYDJvMiNMhQJ8rJ41grfb07dX3h0vIbD_g0F_HgH3kICBVsQk5sK2hRIOPq2x6EcAe7af-dg_s4k0R1OBTihJesKuzlI8EDsnVDR93X-Hmzh96rFUwn1hgdfBDPW1l2rfDYQNG9TVhMAzBtE-o',
  },
  {
    id: 'marina',
    title: 'ممشى المارينا واليخوت الخاص',
    category: 'الواجهة البحرية واليخوت',
    description:
      'ممشى ساحلي خاص للمقيمين يتيح مراسي مباشرة لليخوت الكبيرة والسوبر يخت، مع خدمات كونسيرج للإبحار وتأجير السفن الخاصة.',
    badge: 'مراسي سوبر يخت',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAouMleRsvQdZEqKEcYOcBHONZHHyYKkQAN6Vsp5suAQv9xN22LKd64b6iwrMyS8-53KwgGbMzvHnfl9pFSvmMgfMY0flk5ZMAb7sPdSPMNCcUq9xaFUDxCs9RgSyunmbuTa6bKNyoPWvHs9GCvk57WLOEfJjg4tvNTNSG4XTErJLpi_1XlqG9SbBVtdhpflH8KNir3twV_m3OQfedbweURt7kWl8qOpWqMTbxIJLHyIEHlDSiypauA',
  },
  {
    id: 'spa',
    title: 'تاليز ثالاسو سبا & ويلنس',
    category: 'الصحة والاسترخاء',
    description:
      'أحواض استشفاء بمياه البحر المتوسط الطبيعية، وأجنحة ساونا فنلندية، وغرف علاج بالتبريد (Cryotherapy)، وأروقة يوغا شاطئية هادئة.',
    badge: 'ملاذ استشفاء شامل',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSBiE8kaA3CNec9ECgPqLm6aIxZ9dxEHa3jvJt5vsczgpSF4WdIoLn03imhD8WeIaW2WMWmi5UXqUExlLrIQjorul9yzow3qHuHvL6KvsrCIVCXjYZDJod5qp0VkwMfPwoBsJolSeI8F7N0qzSa8gM0yBJZCG_zRILt0l6JWcV0wpTS04H8l8hnm9N5QvEqSZ77WdOZb1CLAmrfWYo5bEbY8QpecQhJEnWTCIqJ2FMSUrmZbWo9YdD',
  },
];

export const MONOGRAPH_GALLERY_AR: readonly MonographImage[] = [
  {
    id: 'twilight',
    title: 'انعكاسات الغسق على الشاطئ',
    category: 'هندسة الواجهات الزجاجية',
    caption: 'شرفات زجاجية منحنية بانسيابية مع إضاءة خافتة ذهبية تعكس هدوء مياه المساء.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC5uy3BviU1zdEyntBQsXlLBLuJsOntBAz4ORl3Xh-Z9pxdyF57fY7JCELuqH4gSo6HgwErG1u18Jx-45IxnEWA9Sf93g_ma8bXFJZ-pViUPI0_xqmervo3UcHY5yNtJcmFaLqG_yOC7H5bKl_vwdINl5W8r5CvRjSZe3kOGoVtpvR3rfamZk7UHDbf3CPFaQFlBYNt44OBsa4iVrKjoAtti7FL3ru3ZTSEwlCpXXY9gNxRyf-JHoQh',
  },
  {
    id: 'tub',
    title: 'حوض ترافرتين حجري مستقل',
    category: 'حمام السبا الملكي',
    caption: 'كتلة حجر ترافرتين إيطالي أصيل مع إطلالة بحرية مباشرة وقت مغيب الشمس.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4gIC4QlJKpUOjt8wfp_EuoTNcsPB-6PVBUKclX6deqIkiZBznDB4i03Tl7swUJynJLqb5BldVgQJtwsvTkxlaU8yiCBw64K7kts8VaTHgmSTh6hzJd6XFQz07TtPyYO6FEZGPEDlNDJ4NEeexmR6hTmTVmrniDV6nx3xz7cG_4r2-bpDaDSONiTTDCdIogDpUums695RdjW3wA6DW-9PA-84xIXf5XIvoJDFiqSpzVqz3ZzYMC4gu',
  },
  {
    id: 'brass',
    title: 'نحاس شامبانيا مصقول يدوياً',
    category: 'التفاصيل الحرفية الدقيقة',
    caption: 'إكسسوارات ومقابض معدنية معالجة لمقاومة الظروف البحرية بأعلى دقة هندسية.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAbEO1kqEk1bRuAH2fAIy1llFOhOxtuiSiioVyRBZ92X6krz9GqYP3u2lnS8VfJx9kTOaNZhi7ULsniPTl7r4_7SpolifYa3QlYQdGWCgdLHXZEWmB893FHrWdoOtB1v2K7hZ59QgLRcM9O0LxMNlJu7Rzp_6oBL3WssQ4UJRm5G0btVRuynSWxbnjt0LWsRDzOEbzx5yvWOcGFDiEcX3qgNdzAWtWGddrHXzQhY_98Eux4C-SKN5_D',
  },
  {
    id: 'starlight',
    title: 'مرصد ومرتفع السكاي لاونج',
    category: 'الطابق 40 المعلق',
    caption: 'لاونج مفتوح في الهواء الطلق مع مواقد نار دافئة وإطلالة بانورامية على امتداد الأفق.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDXsNQRPJddfll4mFO1TcS1cwNSsB2mTRM3k8MpifejrFPNalL81l3QtKK0tALsEmirlPZI1hGMH_0zSd_p5YmcjvCw6kYEgkc6GvtYBZTMXTDrj-YUYPHC-4xVb-t2q8c8GX_fWm-HFZPLppc9S-TeW_u6LNKhru7DbvXLpE-cnWW-bwfnm2lVACrTahovcebotFspIwWGDSoeskIYwLqKAvZQSrRetZOiNQ7D5d4zPARn0TKNlPjr',
  },
  {
    id: 'beach-club',
    title: 'نادي الشاطئ الخاص للمقيمين',
    category: 'ساحل البحر المتوسط',
    caption: 'شاطئ رملي خاص بطول 400 متر مع كبائن مجهزة بالكامل وخدمة ضيافة خاصة.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCW1B9YfC50pD55Kz961zP4u9rJ1bQ_zS9k1_b9PzS9k1_b9PzS9k1_b9PzS9k1_b9PzS9k1_b9PzS9k1_b9PzS9k1_b9PzS9k1_b9PzS9k1_b9PzS9k1_b9PzS9k1_b9PzS9k1_b9PzS9k1_b9PzS9k1_b9PzS9k1_b9PzS9k1_b9PzS9k1_b9PzS9k1_b9PzS9k1_b9PzS9k1_b9PzS9k1_b9PzS9k1_b9PzS9k1_b9PzS9k1_b9P',
  },
];

export const NEARBY_DESTINATIONS_AR: readonly NearbyDestination[] = [
  {
    number: '01',
    name: 'شاطئ العلمين وممشى الكورنيش',
    description: 'واجهة شاطئية مباشرة برمال بيضاء ناعمة ومياه صافية مخصصة للمقيمين.',
    distanceTime: 'دقيقة واحدة سيراً على الأقدام',
  },
  {
    number: '02',
    name: 'مارينا اليخوت والبروميناد التجاري',
    description: 'مطاعم راقية، وبوتيكات أزياء عالمية، وأرصفة مخصصة لليخوت الفاخرة.',
    distanceTime: '5 دقائق بالسيارة / الجولف كار',
  },
  {
    number: '03',
    name: 'مطار العلمين الدولي (DBB)',
    description: 'صالة طيران خاص ورحلات دولية مباشرة تربطك بالعواصم الأوروبية والخليجية.',
    distanceTime: '15 دقيقة بالسيارة',
  },
  {
    number: '04',
    name: 'سهولة الوصول من القاهرة والإسكندرية',
    description: 'طرق سريعة حديثة ومحور الضبعة الجديد للوصول المريح دون ازدحام.',
    distanceTime: 'ساعتان عبر محور الضبعة المباشر',
  },
];

export const FLOOR_PLAN_TYPOLOGIES_AR: readonly FloorPlanTypology[] = [
  {
    id: '1bed',
    name: 'شقة كوستال — غرفة نوم واحدة',
    series: 'الفئة A-01',
    areaM2: 88,
    floorRange: 'الطوابق 04 إلى 18',
    description:
      'تصميم مدمج فائق الأناقة مع صالون مفتوح ومطبخ شيف راقٍ يتدفق نحو شرفة واسعة بإطلالة كاملة على زرقة البحر المتوسط.',
    features: [
      { title: 'واجهة زجاجية ممتدة', desc: 'زجاج عازل للصوت والحرارة بارتفاع 3.35م' },
      { title: 'تراس بحري واسع', desc: 'شرفة بمساحة 18 م² لجلسات الغروب الهادئة' },
      { title: 'حمام ماستر إيطالي', desc: 'حوض استحمام وتجهيزات رخامية فاخرة' },
      { title: 'مطبخ مفتوح متكامل', desc: 'خزائن إيطالية وأجهزة مدمجة عالية الجودة' },
    ],
    cadastre: {
      builtAreaM2: 88,
      builtAreaSqFt: 947,
      internalLivingM2: 70,
      internalPct: 80,
      terraceM2: 18,
      terracePct: 20,
      ceilingHeight: '3.35 م صافي',
      exposure: 'واجهة شمالية غربية على الساحل',
      parkingBays: 1,
    },
    roomDimensions: [
      { name: 'صالون الاستقبال والمعيشة', areaM2: 28.5 },
      { name: 'جناح النوم الرئيسي', areaM2: 20.0 },
      { name: 'حمام الماستر وخزانة الملابس', areaM2: 8.5 },
      { name: 'المطبخ المفتوح وردهة المدخل', areaM2: 13.0 },
      { name: 'التراس الساحلي الخارجي', areaM2: 18.0 },
    ],
    materials: [
      { category: 'الأرضيات الرئيسية', material: 'باركيه بلوط أوروبي متعرج' },
      { category: 'أعمال الرخام', material: 'رخام بيانكو كارارا الإيطالي' },
      { category: 'الإكسسوارات', material: 'نحاس شامبانيا مصقول' },
      { category: 'الواجهات الزجاجية', material: 'زجاج عازل حراري وصوتي مزدوج' },
    ],
    isometricImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnGd-mp-BklYmsd3fYsVcDuKu_VvWyab6f-GlvOLHVKhJzjNt3A0svj0-SO67iyEJ3evinUKhpJG9VdIHsoTNOYJyXbvprqOMoyaConmHespP_akp7rkFZ7QGRy1AYlFiTTmNmpY2Og3C91ZR51wJbAbxyA_WxETDrlOgFuIEvmqNX9s0SAO4tjmcOQJ43h-46nsGNekJLOGtej7E4W_AzQIfkcFkqvzd4yWtEvLhle5u-p4DfR4FJ',
    blueprintImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnGd-mp-BklYmsd3fYsVcDuKu_VvWyab6f-GlvOLHVKhJzjNt3A0svj0-SO67iyEJ3evinUKhpJG9VdIHsoTNOYJyXbvprqOMoyaConmHespP_akp7rkFZ7QGRy1AYlFiTTmNmpY2Og3C91ZR51wJbAbxyA_WxETDrlOgFuIEvmqNX9s0SAO4tjmcOQJ43h-46nsGNekJLOGtej7E4W_AzQIfkcFkqvzd4yWtEvLhle5u-p4DfR4FJ',
    roomPreviews: [
      {
        roomNumber: '01',
        title: 'الصالون البانورامي',
        subtitle: 'واجهة زجاجية بارتفاع 3.35م تطل على البحر',
        areaM2: 28.5,
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuA0t57QrRS-B-QxtI6CavG4ZX-3gWkpjJksi_k6aHKJE8xN1Dfn38f3gcU_AU8qi4G4r8OG7e5bNB01T57n3PxcmLqsVh-VsNQUxUMj5suxNAGkIJ0chJWwgVklsycVNtkacAixb8GoiQJLeU2kmB_kClp_mXJfCt-6nj6h7n3t_zmsflNwMcS7aLawlRED-mJwXWjvtUx-ps66WaSoiPhsrtcXcbg6JV3LXM4-FhDU0DVBjt__xXzz',
      },
      {
        roomNumber: '02',
        title: 'جناح الماستر',
        subtitle: 'خزائن ملابس مدمجة وسرير بإطلالة صباحية',
        areaM2: 20.0,
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDAWlgv9iKM5ErIXPjnFihvX2pgNVeDbSjFr30XvmviqJxKJHwJeF3ucDKD1LFIc9hBDlEoEn5PL1bVbi5XktDhWwgKjbVc_vtLgZItQ_iaS6eqqJECTx7xmmpaDgsIbACvlqA_lL7w-v7zvTamYVcESiLTiWy4PboVjNiz2KSXx0R0QIaZdnjOGNJlhMMznXsf2L1wBFMOJvB3lkMdto55hSjpHnqZf0hndU4qnqfNaOIKXBfwmzSy',
      },
    ],
  },
  {
    id: '2bed',
    name: 'شقة سيجنتشر — غرفتان نوم',
    series: 'الفئة B-02',
    areaM2: 156,
    floorRange: 'الطوابق 08 إلى 28',
    description:
      'صُممت للمعيشة الراقية مع صالون كبير يتدفق نحو تراس ناتئ بعمق 3.2 متر بإطلالة ساحلية ممتدة ومباشرة على شاطئ البحر الأبيض المتوسط.',
    features: [
      { title: 'واجهة زجاجية بانورامية', desc: 'ستارة زجاجية 3.4م عازلة للصوت والحرارة' },
      { title: 'تراس بحري دائري ناتئ', desc: 'مساحة خارجية 28 م² للضيافة والاسترخاء' },
      { title: 'حمام ماستر بإطلالة بحرية', desc: 'حوض استحمام مستقل مع إطلالة الغروب' },
      { title: 'جزيرة شيف رخامية', desc: 'كتلة رخام كالاكاتا إيطالي أصيل' },
    ],
    cadastre: {
      builtAreaM2: 156,
      builtAreaSqFt: 1679,
      internalLivingM2: 128,
      internalPct: 82,
      terraceM2: 28,
      terracePct: 18,
      ceilingHeight: '3.40 م صافي',
      exposure: 'واجهة بحرية شمالية غربية',
      parkingBays: 2,
    },
    roomDimensions: [
      { name: 'صالون الاستقبال والمعيشة', areaM2: 42.4 },
      { name: 'جناح الماستر الرئيسي', areaM2: 34.2 },
      { name: 'حمام الماستر وغرفة الملابس', areaM2: 12.6 },
      { name: 'غرفة النوم الثانية (جناح خاص)', areaM2: 24.0 },
      { name: 'المطبخ المفتوح الفاخر', areaM2: 14.8 },
      { name: 'حمام الضيوف والردهة', areaM2: 5.2 },
      { name: 'التراس البحري الملتف', areaM2: 28.0 },
    ],
    materials: [
      { category: 'الأرضيات الرئيسية', material: 'باركيه بلوط أوروبي متعرج' },
      { category: 'أعمال الرخام', material: 'رخام بيانكو كارارا الإيطالي' },
      { category: 'الإكسسوارات', material: 'نحاس شامبانيا مصقول' },
      { category: 'الواجهات الزجاجية', material: 'زجاج عازل حراري وصوتي مزدوج' },
    ],
    isometricImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnGd-mp-BklYmsd3fYsVcDuKu_VvWyab6f-GlvOLHVKhJzjNt3A0svj0-SO67iyEJ3evinUKhpJG9VdIHsoTNOYJyXbvprqOMoyaConmHespP_akp7rkFZ7QGRy1AYlFiTTmNmpY2Og3C91ZR51wJbAbxyA_WxETDrlOgFuIEvmqNX9s0SAO4tjmcOQJ43h-46nsGNekJLOGtej7E4W_AzQIfkcFkqvzd4yWtEvLhle5u-p4DfR4FJ',
    blueprintImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnGd-mp-BklYmsd3fYsVcDuKu_VvWyab6f-GlvOLHVKhJzjNt3A0svj0-SO67iyEJ3evinUKhpJG9VdIHsoTNOYJyXbvprqOMoyaConmHespP_akp7rkFZ7QGRy1AYlFiTTmNmpY2Og3C91ZR51wJbAbxyA_WxETDrlOgFuIEvmqNX9s0SAO4tjmcOQJ43h-46nsGNekJLOGtej7E4W_AzQIfkcFkqvzd4yWtEvLhle5u-p4DfR4FJ',
    roomPreviews: [
      {
        roomNumber: '01',
        title: 'الصالون البانورامي',
        subtitle: 'واجهة زجاجية 3.4م بإطلالة بحرية سلسة',
        areaM2: 42.4,
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuA0t57QrRS-B-QxtI6CavG4ZX-3gWkpjJksi_k6aHKJE8xN1Dfn38f3gcU_AU8qi4G4r8OG7e5bNB01T57n3PxcmLqsVh-VsNQUxUMj5suxNAGkIJ0chJWwgVklsycVNtkacAixb8GoiQJLeU2kmB_kClp_mXJfCt-6nj6h7n3t_zmsflNwMcS7aLawlRED-mJwXWjvtUx-ps66WaSoiPhsrtcXcbg6JV3LXM4-FhDU0DVBjt__xXzz',
      },
      {
        roomNumber: '02',
        title: 'جناح الماستر وغرفة الملابس',
        subtitle: 'خزائن إيطالية متكاملة وسرير مطل على البحر',
        areaM2: 34.2,
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDAWlgv9iKM5ErIXPjnFihvX2pgNVeDbSjFr30XvmviqJxKJHwJeF3ucDKD1LFIc9hBDlEoEn5PL1bVbi5XktDhWwgKjbVc_vtLgZItQ_iaS6eqqJECTx7xmmpaDgsIbACvlqA_lL7w-v7zvTamYVcESiLTiWy4PboVjNiz2KSXx0R0QIaZdnjOGNJlhMMznXsf2L1wBFMOJvB3lkMdto55hSjpHnqZf0hndU4qnqfNaOIKXBfwmzSy',
      },
      {
        roomNumber: '03',
        title: 'حمام الماستر بإطلالة بحرية',
        subtitle: 'حوض استحمام حجري مستقل مع أفق الغروب',
        areaM2: 12.6,
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDHT6yeeIEVzEaypJFEdjwmAkwZkt6ATqi6jK97qS6iu4lozTf9NhRpTflxsvNriEzfhntF3QgjCIevhcEZxWth7gGBD0j-gIWoMi9k35LEzRK3uwAGWyEB2EY08F9cpfEoDdITDg9qvy3zVXNlKsAdLL-jAlY4u0zBR3_R2SXuW14Z9Y87GXZ2ScGDVkBlNz_APwWdHSyklCyvdRgDdzOwCXaFr7n3X_10IFueUp02axxxUPXKKhlO',
      },
      {
        roomNumber: '04',
        title: 'التراس الساحلي المنحني',
        subtitle: 'مساحة معيشة خارجية مظللة بإطلالة مباشرة',
        areaM2: 28.0,
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCo0jgz9VTI5UWZuTWA5ARp5Vti8ebqHse_AhUP-bXLALJeXzV-gYNVXfLDSQyq0j8q8SGiSdAt-bSLmn1Np6A2EULOoGgRYx_h_eNI3UDukBIfUEChUJj-73rmdhYdBwdOIrrW1e3SlVCu70EytjzcVQERbKb6UR-eDKnURxxv0DuHVS6Qm-kcCJ0S7ZpdxIdlKc-Sw3q4CC1oCy_4iwMGQ1oebFxhslan14oqkzASWgqt1D5vi5Wr',
      },
    ],
  },
  {
    id: '3bed',
    name: 'شقة هورايزون — 3 غرف نوم',
    series: 'الفئة C-03',
    areaM2: 228,
    floorRange: 'الطوابق 20 إلى 36',
    description:
      'إطلالة ثلاثية الأبعاد 270 درجة مع ثلاثة أجنحة نوم كاملة، ومساحة استقبال كبيرة تناسب العائلات الباحثة عن الفخامة والخصوصية المطلقة.',
    features: [
      { title: 'واجهة ثلاثية 270 درجة', desc: 'رؤية مفتوحة للأفق والمارينا والشاطئ' },
      { title: 'تراس عائم واسع', desc: 'مساحة خارجية 52 م² مع مسبح تدليك دافئ' },
      { title: 'أجنحة نوم ثلاثية', desc: 'كل غرفة تضم حماماً وغرفة تبديل ملابس خاصة' },
      { title: 'مدخلان ومصعد خاص', desc: 'فصل تام بين مدخل الضيوف ومدخل الخدمات' },
    ],
    cadastre: {
      builtAreaM2: 228,
      builtAreaSqFt: 2454,
      internalLivingM2: 176,
      internalPct: 77,
      terraceM2: 52,
      terracePct: 23,
      ceilingHeight: '3.50 م صافي',
      exposure: 'واجهة بحرية شاملة 270 درجة',
      parkingBays: 2,
    },
    roomDimensions: [
      { name: 'صالون الاستقبال وتناول الطعام الملكي', areaM2: 58.0 },
      { name: 'جناح النوم الرئيسي الملكي', areaM2: 38.0 },
      { name: 'الجناح الثاني (حمام وغرفة ملابس)', areaM2: 26.0 },
      { name: 'الجناح الثالث (حمام مستقل)', areaM2: 22.0 },
      { name: 'المطبخ الرئيسي والمطبخ التحضيري', areaM2: 18.0 },
      { name: 'جناح الخدمات وغرفة الغسيل', areaM2: 14.0 },
      { name: 'التراس البانورامي المفتوح', areaM2: 52.0 },
    ],
    materials: [
      { category: 'الأرضيات الرئيسية', material: 'رخام ترافرتين وأخشاب بلوط مصقولة' },
      { category: 'أعمال الرخام', material: 'كالاكاتا جولد وبيانكو كارارا' },
      { category: 'الإكسسوارات', material: 'برونز وشامبانيا مطفي يدوي' },
      { category: 'الواجهات الزجاجية', material: 'زجاج مقوى عازل ثلاثي الطبقات' },
    ],
    isometricImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnGd-mp-BklYmsd3fYsVcDuKu_VvWyab6f-GlvOLHVKhJzjNt3A0svj0-SO67iyEJ3evinUKhpJG9VdIHsoTNOYJyXbvprqOMoyaConmHespP_akp7rkFZ7QGRy1AYlFiTTmNmpY2Og3C91ZR51wJbAbxyA_WxETDrlOgFuIEvmqNX9s0SAO4tjmcOQJ43h-46nsGNekJLOGtej7E4W_AzQIfkcFkqvzd4yWtEvLhle5u-p4DfR4FJ',
    blueprintImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnGd-mp-BklYmsd3fYsVcDuKu_VvWyab6f-GlvOLHVKhJzjNt3A0svj0-SO67iyEJ3evinUKhpJG9VdIHsoTNOYJyXbvprqOMoyaConmHespP_akp7rkFZ7QGRy1AYlFiTTmNmpY2Og3C91ZR51wJbAbxyA_WxETDrlOgFuIEvmqNX9s0SAO4tjmcOQJ43h-46nsGNekJLOGtej7E4W_AzQIfkcFkqvzd4yWtEvLhle5u-p4DfR4FJ',
    roomPreviews: [
      {
        roomNumber: '01',
        title: 'الصالون الملكي الثلاثي',
        subtitle: 'أفق مفتوح على الساحل والمارينا',
        areaM2: 58.0,
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuA0t57QrRS-B-QxtI6CavG4ZX-3gWkpjJksi_k6aHKJE8xN1Dfn38f3gcU_AU8qi4G4r8OG7e5bNB01T57n3PxcmLqsVh-VsNQUxUMj5suxNAGkIJ0chJWwgVklsycVNtkacAixb8GoiQJLeU2kmB_kClp_mXJfCt-6nj6h7n3t_zmsflNwMcS7aLawlRED-mJwXWjvtUx-ps66WaSoiPhsrtcXcbg6JV3LXM4-FhDU0DVBjt__xXzz',
      },
      {
        roomNumber: '02',
        title: 'التراس البانورامي',
        subtitle: 'مساحة خارجية 52 م² مع جاكوزي دافئ',
        areaM2: 52.0,
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCo0jgz9VTI5UWZuTWA5ARp5Vti8ebqHse_AhUP-bXLALJeXzV-gYNVXfLDSQyq0j8q8SGiSdAt-bSLmn1Np6A2EULOoGgRYx_h_eNI3UDukBIfUEChUJj-73rmdhYdBwdOIrrW1e3SlVCu70EytjzcVQERbKb6UR-eDKnURxxv0DuHVS6Qm-kcCJ0S7ZpdxIdlKc-Sw3q4CC1oCy_4iwMGQ1oebFxhslan14oqkzASWgqt1D5vi5Wr',
      },
    ],
  },
  {
    id: 'penthouse',
    name: 'بنتهاوس رويال سكاي دوبلكس',
    series: 'الفئة D-Crown',
    areaM2: 410,
    floorRange: 'الطوابق 42 إلى 44',
    description:
      'أعلى نقطة سكنية في الساحل الشمالي، دوبلكس معلق بارتفاع مزدوج 6 أمتار وسطح سماء بانورامي 360 درجة مع مسبح إنفينيتي خاص بطول 12 متراً.',
    features: [
      { title: 'بهو زجاجي بارتفاع 6م', desc: 'إطلالة درامية مفتوحة على الأفق والسماء' },
      { title: 'سطح سماء ومسبح 12م', desc: 'مسبح إنفينيتي خاص في أعلى نقطة بالبرج' },
      { title: 'أجنحة رئاسية متكاملة', desc: '4 أجنحة فخمة مع مكتب معلق ومكتبة خاصة' },
      { title: 'مصعد بيومتري خاص', desc: 'دخول بالبصمة الحيوية مباشرة لبهو البنتهاوس' },
    ],
    cadastre: {
      builtAreaM2: 410,
      builtAreaSqFt: 4413,
      internalLivingM2: 286,
      internalPct: 70,
      terraceM2: 124,
      terracePct: 30,
      ceilingHeight: '6.00 م ارتفاع مزدوج',
      exposure: 'أفق 360 درجة مفتوح بالكامل',
      parkingBays: 4,
    },
    roomDimensions: [
      { name: 'بهو الاستقبال المزدوج الفاخر', areaM2: 95.0 },
      { name: 'جناح الماستر الرئاسي', areaM2: 68.0 },
      { name: 'الأجنحة الثانوية الثلاثة', areaM2: 78.0 },
      { name: 'مكتب السكاي والمكتبة الخاصة', areaM2: 25.0 },
      { name: 'المطبخان وقبو المشروبات', areaM2: 30.0 },
      { name: 'سطح السماء مع مسبح إنفينيتي 12م', areaM2: 124.0 },
    ],
    materials: [
      { category: 'الأرضيات الرئيسية', material: 'ترافرتين إيطالي وأخشاب سنديان نادرة' },
      { category: 'أعمال الرخام', material: 'رخام أسود بلجيكي وكالاكاتا فاخر' },
      { category: 'الإكسسوارات', material: 'برونز مخصص مصقول يدوياً' },
      { category: 'الواجهات الزجاجية', material: 'زجاج مقسى مضاد للصدمات البحرية' },
    ],
    isometricImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnGd-mp-BklYmsd3fYsVcDuKu_VvWyab6f-GlvOLHVKhJzjNt3A0svj0-SO67iyEJ3evinUKhpJG9VdIHsoTNOYJyXbvprqOMoyaConmHespP_akp7rkFZ7QGRy1AYlFiTTmNmpY2Og3C91ZR51wJbAbxyA_WxETDrlOgFuIEvmqNX9s0SAO4tjmcOQJ43h-46nsGNekJLOGtej7E4W_AzQIfkcFkqvzd4yWtEvLhle5u-p4DfR4FJ',
    blueprintImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnGd-mp-BklYmsd3fYsVcDuKu_VvWyab6f-GlvOLHVKhJzjNt3A0svj0-SO67iyEJ3evinUKhpJG9VdIHsoTNOYJyXbvprqOMoyaConmHespP_akp7rkFZ7QGRy1AYlFiTTmNmpY2Og3C91ZR51wJbAbxyA_WxETDrlOgFuIEvmqNX9s0SAO4tjmcOQJ43h-46nsGNekJLOGtej7E4W_AzQIfkcFkqvzd4yWtEvLhle5u-p4DfR4FJ',
    roomPreviews: [
      {
        roomNumber: '01',
        title: 'بهو الاستقبال المزدوج 6م',
        subtitle: 'حجم زجاجي هائل يواجه البحر المفتوح',
        areaM2: 95.0,
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuA0t57QrRS-B-QxtI6CavG4ZX-3gWkpjJksi_k6aHKJE8xN1Dfn38f3gcU_AU8qi4G4r8OG7e5bNB01T57n3PxcmLqsVh-VsNQUxUMj5suxNAGkIJ0chJWwgVklsycVNtkacAixb8GoiQJLeU2kmB_kClp_mXJfCt-6nj6h7n3t_zmsflNwMcS7aLawlRED-mJwXWjvtUx-ps66WaSoiPhsrtcXcbg6JV3LXM4-FhDU0DVBjt__xXzz',
      },
      {
        roomNumber: '02',
        title: 'سطح السماء ومسبح إنفينيتي',
        subtitle: 'مسبح 12 متراً مع إطلالة بانورامية 360 درجة',
        areaM2: 124.0,
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCo0jgz9VTI5UWZuTWA5ARp5Vti8ebqHse_AhUP-bXLALJeXzV-gYNVXfLDSQyq0j8q8SGiSdAt-bSLmn1Np6A2EULOoGgRYx_h_eNI3UDukBIfUEChUJj-73rmdhYdBwdOIrrW1e3SlVCu70EytjzcVQERbKb6UR-eDKnURxxv0DuHVS6Qm-kcCJ0S7ZpdxIdlKc-Sw3q4CC1oCy_4iwMGQ1oebFxhslan14oqkzASWgqt1D5vi5Wr',
      },
    ],
  },
];

export const COMPARISON_SPECS_AR: readonly ComparisonSpecRow[] = [
  {
    specification: 'المساحة الداخلية الصافية',
    oneBed: '88 م² / 947 قدم²',
    twoBed: '156 م² / 1,679 قدم²',
    threeBed: '228 م² / 2,454 قدم²',
    penthouse: '410 م² / 4,413 قدم²',
  },
  {
    specification: 'ارتفاع الأسقف الصافي',
    oneBed: '3.35 متراً',
    twoBed: '3.40 متراً',
    threeBed: '3.50 متراً',
    penthouse: '6.00 متراً ارتفاع مزدوج',
  },
  {
    specification: 'عمق ومساحة التراس',
    oneBed: 'عمق 2.4م / 18 م²',
    twoBed: 'بروز كابولي 3.2م / 34 م²',
    threeBed: 'عمق 3.8م / 52 م²',
    penthouse: 'سطح سماء ملتف / 124 م²',
  },
  {
    specification: 'الدخول بالمصاعد الخاصة',
    oneBed: 'بطاقة دخول ذكية سريعة',
    twoBed: 'دخول مباشر إلى بهو الجناح',
    threeBed: 'مدخلان منفصلان بمصعد خاص',
    penthouse: 'بهو مصعد بيومتري بالبصمة',
  },
  {
    specification: 'مواقف السيارات المغطاة',
    oneBed: 'موقف واحد مخصص',
    twoBed: 'موقفان مخصصان',
    threeBed: 'موقفان مخصصان + شاحن EV',
    penthouse: '4 مواقف بصندوق خاص مغلق',
  },
  {
    specification: 'المسبح أو الميزة المائية',
    oneBed: '—',
    twoBed: 'جاكوزي استرخاء اختياري',
    threeBed: 'مسبح غطس دافئ خاص',
    penthouse: 'مسبح إنفينيتي 12م معلق',
  },
  {
    specification: 'مستويات الطوابق',
    oneBed: 'الطوابق 04 — 18',
    twoBed: 'الطوابق 08 — 28',
    threeBed: 'الطوابق 20 — 36',
    penthouse: 'الطوابق 42 — 44 (قمة التاج)',
  },
];

export const VIP_SERVICES_AR: readonly VipServiceItem[] = [
  {
    number: '01',
    title: 'خدمات التوصيل الفاخر بسائق خاص',
    description:
      'تنظيم انتقالات بالسيارات الفارهة من مطار برج العرب (HBE)، مطار القاهرة الدولي (CAI)، أو مطار العلمين الدولي (DBB) مباشرة إلى رصيف الاستقبال.',
  },
  {
    number: '02',
    title: 'مراسي حصرية لليخوت',
    description:
      'مراسي مخصصة لليخوت الزائرة في مارينا العلمين مع خدمة قوارب النقل السريع (Tender Service) إلى جناح المعاينة الخاص.',
  },
  {
    number: '03',
    title: 'مجسم هولوغرافي تفاعلي 3D',
    description:
      'استكشف المخطط العام والمباني بأعلى دقة فيزيائية ورقمية داخل استوديو العرض التفاعلي بجناح الواجهة البحرية.',
  },
];
