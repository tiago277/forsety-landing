/**
 * Header — Forsety Landing Page
 * Design: Athletic Minimalism (Apple Fitness+ inspired)
 * Sticky top nav with glass morphism, logo left, CTA right
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ASSETS, LINKS } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#252A48]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img
            src={ASSETS.logo}
            alt="Forsety"
            className="h-6 md:h-7 brightness-0 invert"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#produtos"
            className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-300"
          >
            Produtos
          </a>
          <a
            href="#sobre"
            className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-300"
          >
            Sobre
          </a>
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5865F2] text-white text-sm font-semibold hover:bg-[#4752d4] transition-all duration-300 hover:shadow-lg hover:shadow-[#5865F2]/25"
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white/80 hover:text-white transition-colors"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#252A48]/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              <a
                href="#produtos"
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-white/70 hover:text-white transition-colors py-2"
              >
                Produtos
              </a>
              <a
                href="#sobre"
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-white/70 hover:text-white transition-colors py-2"
              >
                Sobre
              </a>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#5865F2] text-white text-sm font-semibold mt-2"
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
