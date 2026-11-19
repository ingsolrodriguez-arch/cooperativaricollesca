import {useState} from 'react';
import {Menu, X} from 'lucide-react';
import {COMPANY_INFO} from '../data/ricollescaData';

const NAV_LINKS = [
  {href: '#nosotros', label: 'Nosotros'},
  {href: '#servicios', label: 'Servicios'},
  {href: '#flota', label: 'Flota'},
  {href: '#experiencia', label: 'Experiencia'},
  {href: '#contacto', label: 'Contacto'},
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#F9F8F9]/95 backdrop-blur-sm border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Official Brand Logo */}
        <a
          href="#inicio"
          aria-label={COMPANY_INFO.fullName}
          className="flex items-center shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#055D9B]"
        >
          <div className="h-[52px] w-[68px] overflow-hidden flex items-center justify-center">
            <img
              src={COMPANY_INFO.logoLight}
              alt={COMPANY_INFO.fullName}
              referrerPolicy="no-referrer"
              className="h-[56px] w-auto max-w-none scale-[1.22] object-center"
            />
          </div>
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#02233C]/75"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#ECC440] hover:text-[#02233C] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#055D9B]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#02233C] bg-[#ECC440] rounded-lg hover:bg-[#e2b626] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#02233C]"
          >
            Solicitar Cotización
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#02233C] hover:bg-slate-200/60 transition-colors focus-visible:outline-2 focus-visible:outline-[#055D9B]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-[#F9F8F9] px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-[#02233C] rounded-lg hover:bg-slate-200/50"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contacto"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-4 py-3 text-sm font-semibold text-[#02233C] bg-[#ECC440] rounded-lg hover:bg-[#e2b626]"
            >
              Solicitar Cotización
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
