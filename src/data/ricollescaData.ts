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
  images?: {src: string; alt: string; contain?: boolean}[];
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
      id: 'hero-inspeccion-industrial',
      src: '/assets/ricollesca/trabajos/trabajo-inspeccion-industrial.jpg',
      alt: 'Equipo técnico en inspección de instalaciones industriales con tanques de almacenamiento, tuberías, válvulas y pasarelas',
      caption: 'Inspección, supervisión y planificación en instalaciones industriales',
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
    id: 'transporte-carga',
    index: '01',
    title: 'Transporte de Carga Pesada',
    description:
      'Cuenta con unidades como gandolas y bateas para movilización masiva de carga a la industria petrolera.',
    category: 'logistica',
    categoryLabel: 'Logística y Campo',
  },
  {
    id: 'izamiento',
    index: '02',
    title: 'Izamiento',
    description: 'Maniobras de elevación, izamiento y traslado de carga y equipos pesados.',
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
  {
    id: 'inspeccion',
    index: '07',
    title: 'Inspección y Supervisión Industrial',
    description:
      'Inspección, supervisión y planificación en instalaciones industriales con tanques de almacenamiento, tuberías, válvulas y pasarelas.',
    category: 'logistica',
    categoryLabel: 'Logística y Campo',
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

export const WORKS_GALLERY: GalleryPhoto[] = [
  {
    id: 'trabajo-inspeccion-industrial',
    src: '/assets/ricollesca/trabajos/trabajo-inspeccion-industrial.jpg',
    alt: 'Equipo técnico en inspección de instalaciones industriales con tanques de almacenamiento, tuberías, válvulas y pasarelas',
    caption: 'Inspección, supervisión y planificación en instalaciones industriales',
  },
  {
    id: 'trabajo-izamiento-estructura',
    src: '/assets/ricollesca/trabajos/trabajo-izamiento-estructura.jpg',
    alt: 'Maniobra de izamiento y traslado de estructura metálica con grúa hidráulica Palfinger',
    caption: 'Maniobras de izamiento y traslado de carga y equipos',
  },
  {
    id: 'trabajo-perforacion-pavimento',
    src: '/assets/ricollesca/trabajos/trabajo-perforacion-pavimento.jpg',
    alt: 'Cuadrilla realizando perforación en pavimento para ubicar e intervenir tuberías y servicios',
    caption: 'Perforación en pavimento para ubicación e intervención de servicios',
  },
  {
    id: 'trabajo-retroexcavadora',
    src: '/assets/ricollesca/trabajos/trabajo-retroexcavadora.jpg',
    alt: 'Retroexcavadora abriendo zanja para localización e intervención de tuberías',
    caption: 'Excavación para localización e intervención de tuberías',
  },
  {
    id: 'trabajo-tuberias-topografia',
    src: '/assets/ricollesca/trabajos/trabajo-tuberias-topografia.jpg',
    alt: 'Tendido de tuberías con levantamiento topográfico en zona operativa',
    caption: 'Tendido de tuberías con levantamiento topográfico',
  },
  {
    id: 'trabajo-excavacion-topografia',
    src: '/assets/ricollesca/trabajos/trabajo-excavacion-topografia.jpg',
    alt: 'Excavación y levantamiento topográfico de precisión para intervención de tuberías',
    caption: 'Excavación y topografía de precisión en intervención de servicios',
  },
  {
    id: 'trabajo-oficina',
    src: '/assets/ricollesca/trabajos/trabajo-oficina.jpg',
    alt: 'Oficina administrativa adecuada con mobiliario y equipos operativos',
    caption: 'Adecuación de espacios administrativos y operativos',
  },
  {
    id: 'trabajo-carga-volqueta',
    src: '/assets/ricollesca/trabajos/trabajo-carga-volqueta.jpg',
    alt: 'Retroexcavadora cargando volqueta para movilización de materiales',
    caption: 'Movilización de carga pesada con volqueta y maquinaria de apoyo',
  },
];

export const FLEET_ITEMS: FleetItem[] = [
  {
    id: 'mack',
    brand: 'MACK',
    summary: 'Gandola para transporte de carga pesada.',
    detail: 'Tractocamión de alta capacidad preparado para el traslado seguro de maquinaria, tuberías y equipos de perforación en low boy y plataforma.',
    image: '/assets/ricollesca/img_24_1024x576.png',
    imageAlt: 'Gandola Mack con plataforma amarilla frente a taladro de perforación petrolera',
    images: [
      {
        src: '/assets/ricollesca/img_24_1024x576.png',
        alt: 'Gandola Mack con plataforma amarilla frente a taladro de perforación petrolera',
      },
      {
        src: '/assets/ricollesca/img_59_1200x1600.jpg',
        alt: 'Gandola Mack blanca de Cooperativa Ricollesca sin batea',
      },
    ],
  },
  {
    id: 'palfinger',
    brand: 'PALFINGER CRANE',
    summary: 'Brazo hidráulico para maniobras e izamiento.',
    detail: 'Unidad equipada con grúa articulada de precisión y estabilizadores para carga, descarga y posicionamiento seguro de compresores y equipos en campo.',
    image: '/assets/ricollesca/img_62_957x717.jpg',
    imageAlt: 'Camión azul con brazo hidráulico Palfinger Crane cargando compresor Atlas Copco XA 90',
    images: [
      {
        src: '/assets/ricollesca/img_62_957x717.jpg',
        alt: 'Camión azul con brazo hidráulico Palfinger Crane cargando compresor Atlas Copco XA 90',
      },
      {
        src: '/assets/ricollesca/trabajos/fleet-palfinger-gancho.jpg',
        alt: 'Gancho KTL y brazo hidráulico Palfinger PK 6501 en detalle',
      },
      {
        src: '/assets/ricollesca/trabajos/fleet-palfinger-plano-transporte.jpg',
        alt: 'Plano técnico de posición de transporte del brazo Palfinger PK 6501',
        contain: true,
      },
      {
        src: '/assets/ricollesca/trabajos/fleet-palfinger-diagrama-capacidad.jpg',
        alt: 'Diagrama de capacidad de izamiento del Palfinger PK 6501, máximo 3.150 kg',
        contain: true,
      },
    ],
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
    id: 'indioil-tepeca',
    name: 'Indioil · TEPECA Técnica Petrolera C.A.',
    logo: '/assets/ricollesca/partner_indioil_tepeca.jpg',
  },
];

export interface ClientWork {
  contract: string;
  title: string;
  period: string;
}

export const CLIENT_WORKS: Record<string, ClientWork[]> = {
  pdvsa: [
    {
      contract: '4502606532',
      title:
        'Adecuación socioambiental de las instalaciones del Centro Didáctico Ambiental (CDA) y Vivero Forestal — Gerencia de Ambiente E y P, División Ayacucho. Fase II.',
      period: '31-05-2016 → 18-07-2017',
    },
    {
      contract: '4600066062',
      title: 'Mantenimiento menor eléctrico de las áreas de salud del Distrito San Tomé.',
      period: '13-07-2016 → 04-10-2017',
    },
    {
      contract: '4600066289',
      title:
        'Mantenimiento y mejoras de reparaciones civiles de la sede administrativa Base Bicentenario (Akere), áreas remotas del Distrito San Tomé, División Ayacucho. Etapa I.',
      period: '01-08-2016 → 01-08-2017',
    },
    {
      contract: '4600066866',
      title:
        'Adecuación y mejoras de módulos de comedor, aulas de clases y consultorios médicos (Los Pioneros), comunidad La Victoria, Distrito San Tomé, División Ayacucho.',
      period: '05-09-2016 → 20-08-2017',
    },
    {
      contract: '4600070233',
      title:
        'Mantenimiento correctivo de carpintería y tabiquería en áreas residenciales, operativas y administrativas del Distrito San Tomé, División Ayacucho. Frente I.',
      period: '02-01-2017 → 14-12-2017',
    },
    {
      contract: '4600070234',
      title:
        'Mantenimiento correctivo de carpintería y tabiquería en áreas residenciales, operativas y administrativas del Distrito San Tomé, División Ayacucho. Frente II.',
      period: '02-01-2017 → 14-12-2017',
    },
    {
      contract: '4600069714',
      title: 'Mantenimiento menor eléctrico de los campos residenciales del Distrito San Tomé. Frente I.',
      period: '09-01-2017 → 09-07-2017',
    },
    {
      contract: '4600072210',
      title:
        'Mantenimiento preventivo y correctivo de equipos y sistemas electromecánicos instalados en el Edificio Sede Faja Petrolífera del Orinoco. Frente 1.',
      period: '01-04-2017 → 01-10-2017',
    },
    {
      contract: '4600073463',
      title:
        'Trabajo de plomería y albañilería en instalaciones clínicas y hospitalarias del Distrito San Tomé, División Ayacucho, estado Anzoátegui.',
      period: '03-07-2017 → 04-10-2017',
    },
    {
      contract: '4600073325',
      title: 'Mantenimiento eléctrico integral de baja tensión de los centros operacionales del Distrito San Tomé.',
      period: '03-07-2017 → 20-08-2017',
    },
    {
      contract: '46000.73373',
      title: 'Mantenimiento menores eléctricos de los campos residenciales del Distrito San Tomé.',
      period: '17-07-2017 → 10-09-2017',
    },
    {
      contract: '4600073790',
      title:
        'Sustitución de tuberías principales de aguas blancas, aguas servidas y drenajes en áreas administrativas y residenciales del Distrito San Tomé. Fase I.',
      period: '17-07-2017 → 04-10-2017',
    },
    {
      contract: '4600074222',
      title:
        'Suministro de hortalizas, verduras y frutas para la elaboración de comidas del Comedor Industrial Chimiré, Distrito San Tomé. Fase I.',
      period: '21-07-2017 → 18-09-2017',
    },
    {
      contract: 'SOLPED 1300107907',
      title:
        'Suministro de proteicos variados en apoyo institucional en áreas operacionales de la Faja Petrolífera del Orinoco, Área Norte.',
      period: '09-09-2017 → 12-10-2017',
    },
    {
      contract: 'SOLP 1300331358',
      title: 'Servicio de vacums de agua fresca para las áreas pertenecientes a la División Ayacucho.',
      period: '01-05-2019 → 31-05-2019',
    },
  ],
  troil: [
    {
      contract: 'S/C',
      title: 'Traslado de retroexcavadora en low boy.',
      period: '01-07-2018 → 31-07-2018',
    },
  ],
  'indioil-tepeca': [
    {
      contract: 'S/C',
      title: 'Servicio de vacums para trasegado de crudo de campo Farante.',
      period: '01-02-2019 → 24-04-2019',
    },
  ],
};
