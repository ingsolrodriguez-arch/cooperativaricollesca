import {useEffect, useState} from 'react';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Copy,
  Expand,
  FileText,
  Mail,
  MapPin,
  Phone,
  X,
} from 'lucide-react';
import {motion, AnimatePresence} from 'motion/react';
import {Navbar} from './components/Navbar';
import {ResilientImage} from './components/ResilientImage';
import {LightboxModal} from './components/LightboxModal';
import {WhatsAppButton} from './components/WhatsAppButton';
import {
  COMPANY_INFO,
  FLEET_ITEMS,
  HERO_DATA,
  LEADERSHIP_AND_IDENTITY,
  PARTNERS,
  CLIENT_WORKS,
  SERVICES,
  SERVICE_GALLERY,
  WORKS_GALLERY,
} from './data/ricollescaData';

type ServiceFilter = 'all' | 'logistica' | 'mantenimiento';

const HERO_ALLIES = [
  {name: 'PDVSA', logo: '/assets/ricollesca/partner_pdvsa.png', partnerId: 'pdvsa'},
  {name: 'TROIL', logo: '/assets/ricollesca/partner_troil.png', partnerId: 'troil'},
  {name: 'Indioil', logo: '/assets/ricollesca/partner_indioil.png', partnerId: 'indioil-tepeca'},
  {name: 'TEPECA', logo: '/assets/ricollesca/partner_tepeca.png', partnerId: 'indioil-tepeca'},
];

export default function App() {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [serviceFilter, setServiceFilter] = useState<ServiceFilter>('all');
  const [activeFleetId, setActiveFleetId] = useState<string>(FLEET_ITEMS[0].id);
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
    caption: string;
  } | null>(null);
  const [copiedField, setCopiedField] = useState<'phone' | 'email' | null>(null);
  const [worksPartner, setWorksPartner] = useState<string | null>(null);
  const [worksIndex, setWorksIndex] = useState(0);
  const [worksPaused, setWorksPaused] = useState(false);
  const [fleetImgIndex, setFleetImgIndex] = useState(0);

  const worksSlides = [...WORKS_GALLERY, ...SERVICE_GALLERY];

  useEffect(() => {
    if (worksPaused) return;
    const timer = setInterval(() => {
      setWorksIndex((i) => (i + 1) % worksSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [worksPaused, worksSlides.length]);

  // Carrusel de imágenes por unidad de flota (auto-rotativo, siempre activo)
  useEffect(() => {
    setFleetImgIndex(0);
  }, [activeFleetId]);

  useEffect(() => {
    const item = FLEET_ITEMS.find((f) => f.id === activeFleetId) ?? FLEET_ITEMS[0];
    const count = item.images?.length ?? 1;
    if (count <= 1) return;
    const timer = setInterval(() => {
      setFleetImgIndex((i) => (i + 1) % count);
    }, 4000);
    return () => clearInterval(timer);
  }, [activeFleetId]);

  const activeHeroPhoto = HERO_DATA.gallery[activeHeroIndex] ?? HERO_DATA.gallery[0];

  const filteredServices =
    serviceFilter === 'all'
      ? SERVICES
      : SERVICES.filter((item) => item.category === serviceFilter);

  const activeFleet =
    FLEET_ITEMS.find((item) => item.id === activeFleetId) ?? FLEET_ITEMS[0];

  const fleetImages =
    activeFleet.images && activeFleet.images.length > 0
      ? activeFleet.images
      : [{src: activeFleet.image, alt: activeFleet.imageAlt}];

  const handleCopy = async (text: string, field: 'phone' | 'email') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Fallback ignored if clipboard permission unavailable
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F8F9] text-[#02233C]">
      <Navbar />

      <main className="flex-1">
        {/* 1. HERO SECTION CON GALERÍA MINIMALISTA DE ENTRADA */}
        <section id="inicio" className="bg-[#F9F8F9] border-b border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="min-w-0 lg:col-span-5 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-wide text-[#055D9B] mb-4">
                  <span>{HERO_DATA.kicker}</span>
                  <span aria-hidden="true">·</span>
                  <span>El Tigre, Anzoátegui</span>
                </div>

                <h1 className="text-[clamp(2.15rem,3.8vw,3.35rem)] font-bold leading-[1.08] tracking-tight text-[#02233C] text-balance">
                  {HERO_DATA.headline}
                </h1>

                <div className="w-12 h-0.5 bg-[#ECC440] my-5" />

                <p className="text-base sm:text-lg text-[#02233C]/75 leading-relaxed max-w-lg">
                  {HERO_DATA.subheadline} Respaldamos operaciones petroleras, industriales y
                  logísticas con flota propia y dirección técnica especializada.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <a
                    href={COMPANY_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#02233C] bg-[#ECC440] rounded-lg hover:bg-[#e2b626] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#02233C]"
                  >
                    <span>Solicitar Cotización</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#servicios"
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#02233C] bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#055D9B]"
                  >
                    Explorar Servicios
                  </a>
                </div>
              </div>

              {/* Minimalist Entrance Photo Gallery */}
              <div className="min-w-0 lg:col-span-7 space-y-3">
                <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxImage({
                      src: activeHeroPhoto.src,
                      alt: activeHeroPhoto.alt,
                      caption: activeHeroPhoto.caption,
                    })
                  }
                  className="group relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200/90 bg-[#02233C] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#055D9B]"
                >
                  <ResilientImage
                    src={activeHeroPhoto.src}
                    alt={activeHeroPhoto.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#02233C]/85 via-[#02233C]/35 to-transparent p-4 sm:p-5 flex items-end justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-[#ECC440] tabular-nums">
                        {String(activeHeroIndex + 1).padStart(2, '0')} /{' '}
                        {String(HERO_DATA.gallery.length).padStart(2, '0')}
                      </p>
                      <p className="text-sm font-medium text-white mt-0.5 truncate">
                        {activeHeroPhoto.caption}
                      </p>
                    </div>
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/15 text-white shrink-0 group-hover:bg-[#ECC440] group-hover:text-[#02233C] transition-colors">
                      <Expand className="w-4 h-4" />
                    </span>
                  </div>
                </button>

                {/* Aliados — logos flotantes en el banner */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-2.5 bg-white/92 backdrop-blur-sm rounded-xl px-3 py-2 shadow-[0_10px_28px_rgba(2,35,60,0.18)] border border-white/70">
                  <span className="hidden sm:inline text-[9px] font-semibold tracking-[0.18em] text-[#02233C]/55 uppercase">
                    Aliados
                  </span>
                  <span aria-hidden="true" className="hidden sm:block w-px h-5 bg-[#02233C]/12" />
                  <div className="flex items-center gap-2.5">
                    {HERO_ALLIES.map((ally) => (
                      <button
                        key={ally.name}
                        type="button"
                        onClick={() => setWorksPartner(ally.partnerId)}
                        aria-label={`Ver obras ejecutadas con ${ally.name}`}
                        title={ally.name}
                        className="rounded opacity-75 hover:opacity-100 transition-opacity duration-150 focus-visible:outline-2 focus-visible:outline-[#055D9B]"
                      >
                        <ResilientImage
                          src={ally.logo}
                          alt={`Logo de ${ally.name}`}
                          fallbackLabel={ally.name}
                          className="max-h-6 w-auto object-contain"
                        />
                      </button>
                    ))}
                  </div>
                </div>
                </div>

                {/* Clean 5-thumbnail switcher */}
                <div
                  className="grid grid-cols-5 gap-2 sm:gap-3"
                  role="group"
                  aria-label="Galería de operaciones en campo"
                >
                  {HERO_DATA.gallery.map((photo, idx) => {
                    const isSelected = idx === activeHeroIndex;
                    return (
                      <button
                        key={photo.id}
                        type="button"
                        onClick={() => setActiveHeroIndex(idx)}
                        aria-label={`Ver imagen ${idx + 1}: ${photo.caption}`}
                        aria-pressed={isSelected}
                        className={`relative aspect-[4/3] rounded-lg overflow-hidden transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#055D9B] ${
                          isSelected
                            ? 'ring-2 ring-[#ECC440] ring-offset-2 ring-offset-[#F9F8F9] opacity-100'
                            : 'border border-slate-200 opacity-65 hover:opacity-100'
                        }`}
                      >
                        <ResilientImage
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 3-Column Quantitative Strip below hero split */}
            <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
              {HERO_DATA.highlights.map((item) => (
                <div key={item.value} className="flex flex-col gap-1">
                  <span className="font-display text-2xl font-bold text-[#02233C] tabular-nums">
                    {item.value}
                  </span>
                  <span className="text-sm text-[#02233C]/70 leading-snug">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. IDENTIDAD, LIDERAZGO Y PROPÓSITO CORPORATIVO */}
        <section id="nosotros" className="relative bg-[#02233C] text-white overflow-hidden">
          {/* Luz ambiental sutil */}
          <div aria-hidden className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-[#055D9B]/10 blur-[130px] pointer-events-none" />
          <div aria-hidden className="absolute -bottom-48 -left-32 w-[480px] h-[480px] rounded-full bg-[#ECC440]/6 blur-[130px] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            {/* Cabecera tipográfica sobria */}
            <div className="max-w-xl">
              <p className="text-[10px] font-semibold tracking-[0.32em] text-[#ECC440]/90 uppercase">
                Identidad corporativa
              </p>
              <h2 className="mt-4 text-2xl sm:text-[28px] lg:text-[32px] font-semibold tracking-tight leading-[1.25]">
                Liderazgo y propósito que{' '}
                <span className="text-[#ECC440]">generan confianza</span>
              </h2>
              <div className="mt-6 h-px w-14 bg-[#ECC440]/80" />
            </div>

            <div className="mt-12 grid lg:grid-cols-12 gap-10 lg:gap-14">
              {/* C.E.O. — perfil editorial compacto */}
              <div className="lg:col-span-5">
                <div className="flex items-start gap-5">
                  {/* Foto contenida */}
                  <div className="relative w-[124px] sm:w-[148px] shrink-0">
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10">
                      <ResilientImage
                        src={LEADERSHIP_AND_IDENTITY.ceo.photo}
                        alt={LEADERSHIP_AND_IDENTITY.ceo.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div aria-hidden className="absolute -bottom-1.5 -right-1.5 w-8 h-8 border-b border-r border-[#ECC440]/50 rounded-br-lg" />
                  </div>

                  {/* Nombre y rol */}
                  <div className="pt-1.5">
                    <p className="text-[9px] font-semibold tracking-[0.28em] text-[#ECC440]/90 uppercase">
                      {LEADERSHIP_AND_IDENTITY.ceo.role}
                    </p>
                    <h3 className="mt-2 text-base sm:text-lg font-semibold tracking-tight leading-snug">
                      {LEADERSHIP_AND_IDENTITY.ceo.name}
                    </h3>
                    <div className="mt-3 h-px w-8 bg-white/20" />
                  </div>
                </div>

                {/* Biografía — medida de lectura cómoda */}
                <p className="mt-6 text-[13px] leading-[1.75] text-white/55 max-w-md">
                  {LEADERSHIP_AND_IDENTITY.ceo.bio}
                </p>
              </div>

              {/* Misión & Visión — filetes finos */}
              <div className="lg:col-span-7">
                <div className="border-t border-white/10">
                  {/* Misión */}
                  <div className="grid sm:grid-cols-[128px_1fr] gap-2 sm:gap-7 py-7">
                    <div>
                      <span className="text-[9px] font-semibold tracking-[0.26em] text-white/45 uppercase">
                        {LEADERSHIP_AND_IDENTITY.mission.title}
                      </span>
                    </div>
                    <p className="text-[15px] text-white/75 leading-[1.75]">
                      {LEADERSHIP_AND_IDENTITY.mission.text}
                    </p>
                  </div>

                  <div className="h-px bg-white/10" />

                  {/* Visión */}
                  <div className="grid sm:grid-cols-[128px_1fr] gap-2 sm:gap-7 py-7">
                    <div>
                      <span className="text-[9px] font-semibold tracking-[0.26em] text-white/45 uppercase">
                        {LEADERSHIP_AND_IDENTITY.vision.title}
                      </span>
                    </div>
                    <p className="text-[15px] text-white/75 leading-[1.75]">
                      {LEADERSHIP_AND_IDENTITY.vision.text}
                    </p>
                  </div>
                  <div className="h-px bg-white/10" />
                </div>

                {/* Quiénes somos — panel limpio */}
                <div className="mt-8 rounded-xl border border-white/10 px-6 py-5">
                  <p className="text-[9px] font-semibold tracking-[0.28em] text-[#ECC440]/90 uppercase">
                    {LEADERSHIP_AND_IDENTITY.about.title}
                  </p>
                  <p className="mt-3 text-[13px] text-white/60 leading-[1.75]">
                    {LEADERSHIP_AND_IDENTITY.about.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. NUESTROS SERVICIOS */}
        <section id="servicios" className="bg-[#F9F8F9] py-16 lg:py-20 border-b border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#02233C]">
                  Nuestros Servicios
                </h2>
                <div className="w-12 h-0.5 bg-[#ECC440] mt-3" />
                <p className="mt-3 text-sm sm:text-base text-[#02233C]/70 max-w-xl">
                  Soluciones técnicas e industriales diseñadas para responder a las exigencias de
                  campo, transporte y mantenimiento operativo.
                </p>
              </div>

              {/* Interactive filter control */}
              <div
                className="inline-flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-lg self-start md:self-auto"
                role="tablist"
                aria-label="Filtrar servicios por categoría"
              >
                {[
                  {key: 'all', label: 'Todos'},
                  {key: 'logistica', label: 'Logística y Campo'},
                  {key: 'mantenimiento', label: 'Mantenimiento'},
                ].map((tab) => {
                  const active = serviceFilter === tab.key;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setServiceFilter(tab.key as ServiceFilter)}
                      className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#055D9B] ${
                        active
                          ? 'bg-[#02233C] text-white'
                          : 'text-[#02233C]/70 hover:text-[#02233C]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Service Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredServices.map((service) => (
                <article
                  key={service.id}
                  className="group bg-[#02233C] text-white rounded-xl p-5 sm:p-6 flex flex-col justify-between border border-[#04375F] transition-all duration-200 hover:-translate-y-1 hover:border-[#ECC440]/50 hover:shadow-[0_18px_40px_rgba(2,35,60,0.25)]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 text-xs text-white/60 mb-3">
                      <span className="font-mono font-medium text-[#ECC440] tabular-nums">
                        {service.index}.
                      </span>
                      <span>{service.categoryLabel}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#ECC440] leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/85 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-5 h-px w-full bg-gradient-to-r from-[#ECC440]/50 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                </article>
              ))}
            </div>

            {/* Labores ejecutadas en campo — carrusel moderno */}
            <div className="mt-16">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold tracking-wide text-[#055D9B]">
                    Labores ejecutadas en campo
                  </p>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#02233C]">
                    Trabajos en Terreno
                  </h3>
                  <div className="w-12 h-0.5 bg-[#ECC440] mt-3" />
                  <p className="mt-4 text-sm sm:text-base text-[#02233C]/75 leading-relaxed">
                    Inspección, supervisión y planificación en instalaciones industriales con
                    tanques de almacenamiento, tuberías, válvulas y pasarelas. Maniobras de
                    izamiento y traslado de carga, excavación e intervención de tuberías y
                    servicios.
                  </p>
                </div>

                {/* Controles */}
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() =>
                      setWorksIndex((i) => (i - 1 + worksSlides.length) % worksSlides.length)
                    }
                    aria-label="Imagen anterior"
                    className="w-11 h-11 rounded-full border border-[#02233C]/15 text-[#02233C] grid place-items-center transition-colors duration-150 hover:bg-[#02233C] hover:text-white focus-visible:outline-2 focus-visible:outline-[#055D9B]"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setWorksIndex((i) => (i + 1) % worksSlides.length)}
                    aria-label="Imagen siguiente"
                    className="w-11 h-11 rounded-full border border-[#02233C]/15 text-[#02233C] grid place-items-center transition-colors duration-150 hover:bg-[#02233C] hover:text-white focus-visible:outline-2 focus-visible:outline-[#055D9B]"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Slider principal */}
              <div
                role="button"
                tabIndex={0}
                aria-label={`Ver imagen: ${worksSlides[worksIndex].caption}`}
                onMouseEnter={() => setWorksPaused(true)}
                onMouseLeave={() => setWorksPaused(false)}
                onClick={() => setLightboxImage(worksSlides[worksIndex])}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setLightboxImage(worksSlides[worksIndex]);
                  }
                }}
                className="group relative mt-8 rounded-2xl overflow-hidden border border-slate-200 bg-[#02233C] cursor-pointer aspect-[16/10] sm:aspect-[2/1] lg:aspect-[21/8]"
              >
                <AnimatePresence initial={false}>
                  <motion.div
                    key={worksSlides[worksIndex].id}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.75, ease: 'easeInOut'}}
                    className="absolute inset-0"
                  >
                    <motion.div
                      initial={{scale: 1.02}}
                      animate={{scale: 1.11}}
                      transition={{duration: 6, ease: 'linear'}}
                      className="absolute inset-0"
                    >
                      <ResilientImage
                        src={worksSlides[worksIndex].src}
                        alt={worksSlides[worksIndex].alt}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#02233C]/90 via-[#02233C]/15 to-transparent pointer-events-none" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 flex items-end justify-between gap-4 pointer-events-none">
                  <div>
                    <p className="font-mono text-[11px] text-[#ECC440] tabular-nums tracking-[0.25em]">
                      {String(worksIndex + 1).padStart(2, '0')} /{' '}
                      {String(worksSlides.length).padStart(2, '0')}
                    </p>
                    <p className="mt-2 text-sm sm:text-base font-medium text-white max-w-2xl leading-snug">
                      {worksSlides[worksIndex].caption}
                    </p>
                  </div>
                  <span className="hidden sm:grid w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 place-items-center transition-transform duration-200 group-hover:scale-110">
                    <Expand className="w-4 h-4 text-white" />
                  </span>
                </div>

                {/* Barra de progreso */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-white/15">
                  <div
                    key={worksIndex}
                    className="h-full bg-[#ECC440] slide-progress"
                    style={{animationPlayState: worksPaused ? 'paused' : 'running'}}
                  />
                </div>
              </div>

              {/* Miniaturas */}
              <div className="mt-4 flex gap-2.5 overflow-x-auto pb-1">
                {worksSlides.map((photo, idx) => (
                  <button
                    key={photo.id}
                    type="button"
                    onClick={() => setWorksIndex(idx)}
                    aria-label={`Ver: ${photo.caption}`}
                    className={`relative w-20 h-14 sm:w-24 sm:h-16 flex-none rounded-lg overflow-hidden border transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#055D9B] ${
                      idx === worksIndex
                        ? 'border-[#ECC440] ring-2 ring-[#ECC440]/35 opacity-100 scale-[1.03]'
                        : 'border-slate-200 opacity-55 hover:opacity-100'
                    }`}
                  >
                    <ResilientImage
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. FLOTA Y EQUIPAMIENTO */}
        <section id="flota" className="bg-[#02233C] text-white py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#ECC440]">
                Flota y Equipamiento
              </h2>
              <p className="mt-2 text-sm sm:text-base text-white/75 max-w-2xl">
                Unidades propias y maquinaria de marcas líderes para garantizar autonomía operativa
                en maniobras de carga pesada, izamiento, soldadura y mantenimiento.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              {/* Interactive Fleet Selector List */}
              <div className="lg:col-span-5 flex flex-col divide-y divide-white/10 border-y border-white/10">
                {FLEET_ITEMS.map((item) => {
                  const isActive = item.id === activeFleet.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveFleetId(item.id)}
                      className={`text-left py-4 px-4 transition-colors duration-150 flex items-start justify-between gap-4 focus-visible:outline-2 focus-visible:outline-[#ECC440] ${
                        isActive ? 'bg-[#04375F]' : 'hover:bg-white/5'
                      }`}
                    >
                      <div>
                        <h3
                          className={`text-base font-bold tracking-wide ${
                            isActive ? 'text-[#ECC440]' : 'text-white'
                          }`}
                        >
                          {item.brand}
                        </h3>
                        <p className="text-sm text-white/80 mt-0.5">{item.summary}</p>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 mt-1 shrink-0 transition-transform ${
                          isActive ? 'text-[#ECC440] translate-x-0.5' : 'text-white/40'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Active Fleet Visual Showcase — carrusel auto-rotativo */}
              <div className="lg:col-span-7 flex flex-col bg-[#04375F] border border-white/12 rounded-xl overflow-hidden">
                <div className="relative w-full h-72 sm:h-80 lg:h-96 bg-black/25 overflow-hidden">
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxImage({
                        src: fleetImages[fleetImgIndex].src,
                        alt: fleetImages[fleetImgIndex].alt,
                        caption: `${activeFleet.brand} — ${activeFleet.summary}`,
                      })
                    }
                    className="group absolute inset-0 w-full h-full text-left focus-visible:outline-2 focus-visible:outline-[#ECC440]"
                  >
                    <AnimatePresence initial={false}>
                      <motion.div
                        key={fleetImages[fleetImgIndex].src}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.6, ease: 'easeInOut'}}
                        className="absolute inset-0"
                      >
                        <motion.div
                          initial={{scale: 1.02}}
                          animate={{scale: 1.08}}
                          transition={{duration: 5.5, ease: 'linear'}}
                          className="absolute inset-0"
                        >
                          <ResilientImage
                            src={fleetImages[fleetImgIndex].src}
                            alt={fleetImages[fleetImgIndex].alt}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>

                    <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#02233C]/85 text-xs font-medium text-white border border-white/15">
                      <Expand className="w-3.5 h-3.5 text-[#ECC440]" />
                      <span>Ampliar</span>
                    </span>
                  </button>

                  {/* Controles del carrusel (clicables) */}
                  {fleetImages.length > 1 && (
                    <div className="absolute inset-x-0 bottom-0 z-10 p-4 flex items-center justify-between gap-3 bg-gradient-to-t from-[#02233C]/75 to-transparent">
                      <div className="flex items-center gap-2">
                        {fleetImages.map((img, i) => (
                          <button
                            key={img.src}
                            type="button"
                            onClick={() => setFleetImgIndex(i)}
                            aria-label={`Ver imagen ${i + 1} de ${activeFleet.brand}`}
                            className={`h-1.5 rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#ECC440] ${
                              i === fleetImgIndex
                                ? 'w-6 bg-[#ECC440]'
                                : 'w-1.5 bg-white/50 hover:bg-white/85'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-mono text-[11px] text-white/85 tabular-nums">
                        {String(fleetImgIndex + 1).padStart(2, '0')} /{' '}
                        {String(fleetImages.length).padStart(2, '0')}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#ECC440] mb-1">
                    <span>Unidad operativa</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeFleet.brand}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{activeFleet.summary}</h3>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">
                    {activeFleet.detail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. EXPERIENCIA COMPROBADA EN EL SECTOR ENERGÉTICO */}
        <section id="experiencia" className="bg-[#F9F8F9] py-16 lg:py-20 border-b border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left: Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#02233C] text-balance">
                    <span className="text-[#d4aa22] block sm:inline">Experiencia Comprobada</span>{' '}
                    en el Sector Energético
                  </h2>
                  <div className="w-12 h-0.5 bg-[#ECC440] mt-3" />
                </div>

                {/* Relación de experiencia operativa */}
                <div className="relative pl-6">
                  <div
                    aria-hidden
                    className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-gradient-to-b from-[#ECC440] via-[#ECC440]/55 to-transparent"
                  />
                  <p className="text-[15px] sm:text-[17px] leading-[1.9] text-[#02233C]/85">
                    Respaldamos nuestra experiencia operativa trabajando junto a organizaciones
                    como{' '}
                    <strong className="font-semibold text-[#02233C]">
                      PDVSA, TROIL, Indioil y TEPECA
                    </strong>
                    . Hemos apoyado operaciones en distintas áreas —incluyendo la{' '}
                    <strong className="font-semibold text-[#055D9B]">
                      Faja Petrolífera del Orinoco
                    </strong>
                    — mediante{' '}
                    <strong className="font-semibold text-[#02233C]">
                      suministro de insumos alimenticios/proteicos
                    </strong>
                    ,{' '}
                    <strong className="font-semibold text-[#02233C]">
                      movilización de equipos en (low boy, batea y volqueta)
                    </strong>{' '}
                    y{' '}
                    <strong className="font-semibold text-[#02233C]">
                      servicios de agua fresca mediante vacums
                    </strong>
                    , garantizando{' '}
                    <span className="font-semibold text-[#055D9B]">
                      compromiso, puntualidad y respuesta efectiva
                    </span>{' '}
                    en cada contrato.
                  </p>
                </div>
              </div>

              {/* Right: Partner Logos Proof Grid */}
              <div className="lg:col-span-6 space-y-6">
                <div className="bg-white/70 border border-slate-200 rounded-xl p-6 sm:p-8">
                  <p className="text-xs font-semibold tracking-wide text-[#055D9B] mb-5">
                    Aliados y Entorno Operativo · Faja Petrolífera del Orinoco
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {PARTNERS.map((partner) => {
                      const works = CLIENT_WORKS[partner.id] ?? [];
                      return (
                        <button
                          key={partner.id}
                          type="button"
                          onClick={() => setWorksPartner(partner.id)}
                          aria-label={`Ver obras y contratos ejecutados para ${partner.name}`}
                          className={`group relative bg-white border border-slate-200/80 rounded-lg p-5 h-28 flex items-center justify-center transition-all duration-200 hover:border-[#ECC440] hover:shadow-[0_12px_30px_rgba(2,35,60,0.10)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#055D9B]${partner.id === 'indioil-tepeca' ? ' col-span-2' : ''}`}
                        >
                          <ResilientImage
                            src={partner.logo}
                            alt={`Logo de ${partner.name}`}
                            fallbackLabel={partner.name}
                            className={`${partner.id === 'indioil-tepeca' ? 'max-h-20' : 'max-h-16'} w-auto object-contain transition-transform duration-200 group-hover:scale-[1.04]`}
                          />
                          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#02233C] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap">
                            <FileText size={10} strokeWidth={2.5} />
                            {works.length > 0 ? `Ver ${works.length} obra${works.length > 1 ? 's' : ''}` : 'Ver detalle'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CONTACTO DIRECTO */}
        <section id="contacto" className="bg-[#F9F8F9] py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden border border-slate-200 bg-[#F9F8F9]">
              {/* Left Dark Navy Contact Panel */}
              <div className="min-w-0 lg:col-span-6 bg-[#02233C] text-white p-6 sm:p-10 lg:p-12 flex flex-col justify-between gap-8 sm:gap-10">
                <div className="min-w-0">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#ECC440]">
                    Contacto
                  </h2>
                  <div className="w-12 h-0.5 bg-[#ECC440] mt-3" />
                  <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed">
                    Atención directa para cotizaciones, movilización de unidades y soporte
                    operacional en la Faja Petrolífera del Orinoco y todo el país.
                  </p>

                  <div className="mt-7 sm:mt-8 space-y-5">
                    {/* Phone row */}
                    <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 min-w-0">
                      <a
                        href={COMPANY_INFO.phoneHref}
                        className="flex items-center gap-3 text-sm sm:text-base text-white hover:text-[#ECC440] transition-colors min-w-0"
                      >
                        <span className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center shrink-0">
                          <Phone className="w-4 h-4 text-[#ECC440]" />
                        </span>
                        <span className="font-mono tabular-nums whitespace-nowrap">
                          {COMPANY_INFO.phoneDisplay}
                        </span>
                      </a>
                      <button
                        type="button"
                        onClick={() => handleCopy(COMPANY_INFO.phoneDisplay, 'phone')}
                        aria-label="Copiar teléfono"
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs text-white/75 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                      >
                        {copiedField === 'phone' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#ECC440]" />
                            <span>Copiado</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copiar</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Email row */}
                    <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 sm:gap-3 min-w-0">
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="flex items-center gap-3 text-sm sm:text-base text-white hover:text-[#ECC440] transition-colors min-w-0 max-w-full"
                      >
                        <span className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center shrink-0">
                          <Mail className="w-4 h-4 text-[#ECC440]" />
                        </span>
                        <span className="break-all sm:break-normal sm:truncate">
                          {COMPANY_INFO.email}
                        </span>
                      </a>
                      <button
                        type="button"
                        onClick={() => handleCopy(COMPANY_INFO.email, 'email')}
                        aria-label="Copiar correo"
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs text-white/75 hover:text-white hover:bg-white/10 transition-colors shrink-0 ml-auto sm:ml-0"
                      >
                        {copiedField === 'email' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#ECC440]" />
                            <span>Copiado</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copiar</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Address row */}
                    <div className="flex items-start gap-3 text-sm sm:text-base text-white/90 min-w-0">
                      <span className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-[#ECC440]" />
                      </span>
                      <span className="leading-relaxed pt-1 min-w-0 break-words">
                        {COMPANY_INFO.address}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="font-mono text-xs text-white/70 tabular-nums">
                    {COMPANY_INFO.rif}
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                    <a
                      href={COMPANY_INFO.dossierPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-white/85 hover:text-[#ECC440] transition-colors py-1"
                    >
                      <FileText className="w-4 h-4 text-[#ECC440] shrink-0" />
                      <span>Ver presentación PDF</span>
                    </a>
                    <a
                      href={COMPANY_INFO.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#02233C] bg-[#ECC440] rounded-lg hover:bg-[#e2b626] transition-colors w-full sm:w-auto whitespace-nowrap"
                    >
                      <span>Escribir por WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Off-White Panel with Official Brand Logo */}
              <div className="min-w-0 lg:col-span-6 bg-[#F9F8F9] px-4 py-8 sm:p-10 lg:p-12 flex flex-col items-center justify-center">
                <ResilientImage
                  src={COMPANY_INFO.logoLight}
                  alt={COMPANY_INFO.fullName}
                  className="w-full max-w-xs sm:max-w-md h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* QUIET FOOTER */}
      <footer className="bg-[#02233C] text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="font-display text-base font-bold text-white">
              {COMPANY_INFO.fullName}
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs text-white/65">
              <span>{COMPANY_INFO.tagline}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">{COMPANY_INFO.rif}</span>
              <span aria-hidden="true">·</span>
              <span>El Tigre, Anzoátegui</span>
            </div>
          </div>

          <nav
            aria-label="Enlaces de pie de página"
            className="flex flex-wrap items-center gap-6 text-xs font-medium text-white/75"
          >
            <a href="#nosotros" className="hover:text-[#ECC440] transition-colors">
              Nosotros
            </a>
            <a href="#servicios" className="hover:text-[#ECC440] transition-colors">
              Servicios
            </a>
            <a href="#flota" className="hover:text-[#ECC440] transition-colors">
              Flota
            </a>
            <a href="#experiencia" className="hover:text-[#ECC440] transition-colors">
              Experiencia
            </a>
            <a href="#contacto" className="hover:text-[#ECC440] transition-colors">
              Contacto
            </a>
          </nav>
        </div>
      </footer>

      <WhatsAppButton />
      <LightboxModal image={lightboxImage} onClose={() => setLightboxImage(null)} />

      {/* Modal: Relación de obras del cliente */}
      {worksPartner &&
        (() => {
          const partner = PARTNERS.find((p) => p.id === worksPartner);
          const works = CLIENT_WORKS[worksPartner] ?? [];
          if (!partner) return null;
          return (
            <div
              className="fixed inset-0 z-[70] flex items-center justify-center p-4"
              role="dialog"
              aria-modal="true"
              aria-label={`Obras ejecutadas para ${partner.name}`}
            >
              <div
                className="absolute inset-0 bg-[#02233C]/55 backdrop-blur-sm"
                onClick={() => setWorksPartner(null)}
              />
              <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[82vh] flex flex-col overflow-hidden">
                {/* Encabezado */}
                <div className="flex items-center gap-4 px-6 pt-6 pb-5 border-b border-slate-200">
                  <div className="w-16 h-12 shrink-0 flex items-center justify-center">
                    <ResilientImage
                      src={partner.logo}
                      alt={`Logo de ${partner.name}`}
                      fallbackLabel={partner.name}
                      className="max-h-10 w-auto object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold tracking-[0.22em] text-[#055D9B] uppercase">
                      Relación de obras ejecutadas
                    </p>
                    <h3 className="text-lg font-bold text-[#02233C] truncate">{partner.name}</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    {works.length > 0 && (
                      <span className="hidden sm:inline-flex items-center gap-1.5 bg-[#02233C] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                        <CheckCircle2 size={13} strokeWidth={2.5} className="text-[#ECC440]" />
                        {works.length} obra{works.length > 1 ? 's' : ''} · 100%
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => setWorksPartner(null)}
                      aria-label="Cerrar"
                      className="w-9 h-9 rounded-full border border-slate-200 grid place-items-center text-[#02233C] hover:bg-slate-100 transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>

                {/* Lista de obras */}
                <div className="overflow-y-auto px-6">
                  {works.length === 0 ? (
                    <p className="py-12 text-center text-sm text-[#02233C]/60">
                      Relación de obras disponible bajo solicitud.
                    </p>
                  ) : (
                    <ul className="divide-y divide-slate-100">
                      {works.map((work) => (
                        <li
                          key={work.contract}
                          className="py-4 grid sm:grid-cols-[175px_1fr] gap-1.5 sm:gap-6"
                        >
                          <div>
                            <p className="font-mono text-[11px] font-semibold text-[#055D9B] tracking-wide">
                              {work.contract}
                            </p>
                            <p className="text-[11px] text-[#02233C]/50 mt-1 tabular-nums">
                              {work.period}
                            </p>
                          </div>
                          <div>
                            <p className="text-[13px] leading-relaxed text-[#02233C]/85">
                              {work.title}
                            </p>
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 mt-1.5">
                              <Check size={12} strokeWidth={3} /> 100% ejecutado
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Pie */}
                <div className="px-6 py-4 border-t border-slate-200 bg-slate-50/70">
                  <p className="text-[11px] text-[#02233C]/55">
                    Documentación contractual completa disponible para verificación.
                  </p>
                </div>
              </div>
            </div>
          );
        })()}
    </div>
  );
}
