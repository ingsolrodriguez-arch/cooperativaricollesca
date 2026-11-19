export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  description: string;
  category: 'logistica' | 'mantenimiento';
  categoryLabel: string;
}

export interface FleetItem {
  id: string;
  brand: string;
  summary: string;
  detail: string;
  image: string;
  imageAlt: string;
}

export interface OperationalSolution {
  id: string;
  title: string;
  description: string;
}

export interface PartnerItem {
  id: string;
  name: string;
  logo: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export const COMPANY_INFO = {
  name: 'Cooperativa Ricollesca',
  fullName: 'Cooperativa Ricollesca de Venezuela R.L.',
  tagline: 'Energía que genera confianza.',
  rif: 'RIF J-40606953-1',
  phoneDisplay: '0424-832-0281',
  phoneHref: 'tel:+584248320281',
  whatsappHref:
    'https://wa.me/584248320281?text=Hola%2C%20deseo%20solicitar%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20Cooperativa%20Ricollesca.',
  email: 'ricollescadevenezuela@gmail.com',
  address: '7ma calle sur, casa #20-B, Pueblo Nuevo Sur, El Tigre, estado Anzoátegui, Venezuela',
  dossierPdf: '/assets/aistudio/RICOLEESCA3_db9be5d9.pdf',
  logoLight: '/assets/aistudio/logo_ricollesca_color_f9f8f9_8b1f0968.png',
  logoDark: '/assets/ricollesca/logo_white.png',
};

export interface HeroGalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export const HERO_DATA = {
  kicker: 'Proveedor líder en la industria de petróleo y gas',
  headline: 'Servicios y Logística de Perforación',
  subheadline: 'Eficiencia, seguridad y confianza en cada proyecto.',
  image: '/assets/ricollesca/img_24_1024x576.png',
  imageAlt: 'Gandola Mack con plataforma amarilla frente a taladro de perforación petrolera',
  gallery: [
    {
      id: 'hero-taladro',
      src: '/assets/ricollesca/img_24_1024x576.png',
      alt: 'Gandola Mack con plataforma amarilla frente a taladro de perforación petrolera',
      caption: 'Logística de perforación y transporte pesado en campo',
    },
    {
      id: 'hero-mack-plataforma',
      src: '/assets/aistudio/55993_21651967.jpg',
      alt: 'Gandola Mack blanca con plataforma amarilla de carga pesada en patio operativo',
      caption: 'Gandola Mack con plataforma de transporte pesado',
    },
    {
      id: 'hero-palfinger-campo',
      src: '/assets/aistudio/56326_f1729933.jpg',
      alt: 'Brazo hidráulico Palfinger PK 6501 operando con cuadrilla en campo',
      caption: 'Maniobras de izamiento con grúa hidráulica PK 6501',
    },
    {
      id: 'hero-desmalezamiento',
      src: '/assets/aistudio/56201_fdca1b7e.jpg',
      alt: 'Cuadrilla de mantenimiento y desmalezamiento con equipos Stihl y EPP',
      caption: 'Mantenimiento y desmalezamiento de áreas operativas',
    },
    {
      id: 'hero-toyota',
      src: '/assets/aistudio/56212_e21ec110.jpg',
      alt: 'Vehículo Toyota blanco de apoyo, traslado y supervisión operativa',
      caption: 'Unidad Toyota de apoyo, traslado y supervisión',
    },
  ] as HeroGalleryItem[],
  highlights: [
    {
      value: '20 Años',
      label: 'Trayectoria profesional en ingeniería mecánica e infraestructura',
    },
    {
      value: '18 Años',
      label: 'Experiencia directa en la industria petrolera nacional',
    },
    {
      value: 'Faja del Orinoco',
      label: 'Respaldo operativo continuo en zonas estratégicas desde El Tigre',
    },
  ],
};

export const LEADERSHIP_AND_IDENTITY = {
  ceo: {
    name: 'Héctor José Zamora García',
    role: 'CEO & Ingeniero Mecánico',
    photo: '/assets/ricollesca/img_241_306x410.png',
    bio: 'Ingeniero Mecánico con 20 años de trayectoria profesional y 18 de experiencia directa en la industria petrolera. Especialista en la gestión integral de infraestructura y servicios industriales de alta complejidad. Dirige la cooperativa con visión operativa enfocada en resultados sostenibles y transparencia corporativa.',
  },
  about: {
    title: '¿Quiénes Somos?',
    text: 'Organización cooperativa líder en la industria petrolera nacional. Ofrecemos soluciones integrales y confiables mediante la excelencia operativa, el uso eficiente de recursos y el desarrollo técnico, garantizando el bienestar de nuestros asociados y el desarrollo energético sostenible del país.',
  },
  mission: {
    title: 'Nuestra Misión',
    text: 'Proveer soluciones integrales y eficientes en el sector energético e industrial, impulsando el desarrollo sostenible mediante la excelencia operativa, la innovación tecnológica y el compromiso con la seguridad, el ambiente y la generación de valor para clientes y sociedad.',
  },
  vision: {
    title: 'Nuestra Visión',
    text: 'Ser reconocidos a nivel regional e internacional como empresa líder y referente del sector energético, por nuestra innovación, confiabilidad operativa y contribución a una transición energética eficiente y de vanguardia.',
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'transporte',
    index: '01',
    title: 'Transporte y Logística',
    description: 'Movilización segura de carga, materiales y unidades.',
    category: 'logistica',
    categoryLabel: 'Logística y Campo',
  },
  {
    id: 'izamiento',
    index: '02',
    title: 'Izamiento',
    description: 'Maniobras de elevación y posicionamiento de cargas pesadas.',
    category: 'logistica',
    categoryLabel: 'Logística y Campo',
  },
  {
    id: 'soldadura',
    index: '03',
    title: 'Soldadura',
    description: 'Soldadura industrial y estructural.',
    category: 'logistica',
    categoryLabel: 'Logística y Campo',
  },
  {
    id: 'desmalezamiento',
    index: '04',
    title: 'Desmalezamiento',
    description: 'Limpieza y mantenimiento de áreas y terrenos.',
    category: 'mantenimiento',
    categoryLabel: 'Mantenimiento e Infraestructura',
  },
  {
    id: 'pintura',
    index: '05',
    title: 'Pintura',
    description: 'Recubrimientos y acabados protectores.',
    category: 'mantenimiento',
    categoryLabel: 'Mantenimiento e Infraestructura',
  },
  {
    id: 'remodelacion',
    index: '06',
    title: 'Remodelación',
    description: 'Adecuación de espacios administrativos y operativos.',
    category: 'mantenimiento',
    categoryLabel: 'Mantenimiento e Infraestructura',
  },
];

export const SERVICE_GALLERY: GalleryPhoto[] = [
  {
    id: 'desmalezamiento-campo',
    src: '/assets/ricollesca/img_54_944x1126.jpg',
    alt: 'Operador con equipo de protección realizando desmalezamiento industrial',
    caption: 'Desmalezamiento técnico con equipos de protección integral',
  },
  {
    id: 'obras-terreno',
    src: '/assets/ricollesca/img_51_448x600.jpg',
    alt: 'Maquinaria pesada y personal en adecuación de terreno y zanjas',
    caption: 'Mantenimiento de terrenos y obras civiles en locación',
  },
  {
    id: 'remodelacion-oficinas',
    src: '/assets/ricollesca/img_52_359x479.jpg',
    alt: 'Adecuación, pintura y remodelación de pasillo administrativo',
    caption: 'Adecuación de espacios administrativos y acabados protectores',
  },
  {
    id: 'izamiento-campo',
    src: '/assets/ricollesca/img_53_496x372.png',
    alt: 'Camión con brazo hidráulico realizando maniobra de izamiento en campo',
    caption: 'Maniobras de izamiento y posicionamiento de materiales en campo',
  },
];

export const FLEET_ITEMS: FleetItem[] = [
  {
    id: 'mack',
    brand: 'MACK',
    summary: 'Gandola para transporte de carga pesada.',
    detail: 'Tractocamión de alta capacidad preparado para el traslado seguro de maquinaria, tuberías y equipos de perforación en low boy y plataforma.',
    image: '/assets/ricollesca/img_59_1200x1600.jpg',
    imageAlt: 'Gandola Mack blanca de Cooperativa Ricollesca para transporte pesado',
  },
  {
    id: 'palfinger',
    brand: 'PALFINGER CRANE',
    summary: 'Brazo hidráulico para maniobras e izamiento.',
    detail: 'Unidad equipada con grúa articulada de precisión y estabilizadores para carga, descarga y posicionamiento seguro de compresores y equipos en campo.',
    image: '/assets/ricollesca/img_62_957x717.jpg',
    imageAlt: 'Camión azul con brazo hidráulico Palfinger Crane cargando compresor Atlas Copco XA 90',
  },
  {
    id: 'lincoln',
    brand: 'LINCOLN ELECTRIC',
    summary: 'Máquina de soldar de grado industrial.',
    detail: 'Estación móvil de soldadura industrial montada sobre plataforma logística para intervenciones estructurales y tuberías en zonas operativas.',
    image: '/assets/ricollesca/img_60_1365x768.jpg',
    imageAlt: 'Camión plataforma con grúa hidráulica y máquina de soldar Lincoln Electric',
  },
  {
    id: 'stihl',
    brand: 'STIHL',
    summary: 'Desbrozadoras para mantenimiento y desmalezamiento.',
    detail: 'Equipamiento de alto rendimiento operado por personal dotado de protección integral para limpieza de locaciones, corredores y áreas industriales.',
    image: '/assets/ricollesca/img_54_944x1126.jpg',
    imageAlt: 'Operador utilizando desbrozadora Stihl con casco, careta y arnés de seguridad',
  },
  {
    id: 'toyota',
    brand: 'TOYOTA',
    summary: 'Vehículo de apoyo, traslado y supervisión.',
    detail: 'Unidades livianas para movilización de supervisores técnicos, enlace logístico y asistencia operativa directa en la Faja Petrolífera del Orinoco.',
    image: '/assets/aistudio/56212_e21ec110.jpg',
    imageAlt: 'Vehículo Toyota blanco de apoyo, traslado y supervisión operativa',
  },
];

export const EXPERIENCE_INTRO =
  'Contamos con una sólida trayectoria respaldando operaciones críticas en la Faja Petrolífera del Orinoco y otras zonas estratégicas, trabajando de la mano con aliados como PDVSA, TROIL, Indioil y TEPECA.';

export const EXPERIENCE_SUBTITLE =
  'Garantizamos continuidad operativa, puntualidad y respuesta inmediata a través de soluciones integrales:';

export const OPERATIONAL_SOLUTIONS: OperationalSolution[] = [
  {
    id: 'abastecimiento',
    title: 'Abastecimiento integral',
    description: 'Suministro continuo de insumos alimenticios y proteicos.',
  },
  {
    id: 'logistica-pesada',
    title: 'Logística pesada',
    description: 'Movilización especializada de maquinaria y equipos en low boy.',
  },
  {
    id: 'soporte-operacional',
    title: 'Soporte operacional',
    description: 'Suministro y gestión de agua fresca mediante unidades vacuum.',
  },
];

export const PARTNERS: PartnerItem[] = [
  {
    id: 'pdvsa',
    name: 'PDVSA',
    logo: '/assets/ricollesca/partner_pdvsa.png',
  },
  {
    id: 'troil',
    name: 'TROIL',
    logo: '/assets/ricollesca/partner_troil.png',
  },
  {
    id: 'indioil',
    name: 'Indioil',
    logo: '/assets/ricollesca/partner_indioil.png',
  },
  {
    id: 'tepeca',
    name: 'TEPECA Técnica Petrolera C.A.',
    logo: '/assets/ricollesca/partner_tepeca.png',
  },
];
