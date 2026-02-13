/**
 * Footer — Forsety Landing Page
 * Design: Minimal footer with logo, links, and copyright
 */
import { ASSETS, COMPANY, LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5 bg-[#1a1f38]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={ASSETS.logo}
              alt="Forsety"
              className="h-5 brightness-0 invert opacity-50"
            />
            <span className="text-white/20 text-xs font-light">|</span>
            <span className="text-white/30 text-xs font-light tracking-wider uppercase">
              {COMPANY.tagline}
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/30 hover:text-white/60 transition-colors duration-300"
            >
              WhatsApp
            </a>
            <a
              href={LINKS.catalog}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/30 hover:text-white/60 transition-colors duration-300"
            >
              Catálogo
            </a>
            <a
              href="#produtos"
              className="text-xs text-white/30 hover:text-white/60 transition-colors duration-300"
            >
              Produtos
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-white/20 font-light">
            &copy; {new Date().getFullYear()} {COMPANY.fullName}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
