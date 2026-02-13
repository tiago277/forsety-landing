/**
 * HeroSection — Forsety Landing Page
 * Design: Full-screen dark hero with spotlight gradient, oversized typography, two CTAs
 * Apple Fitness+ inspired: dramatic, clean, high-contrast
 */
import { motion } from "framer-motion";
import { MessageCircle, Download } from "lucide-react";
import { ASSETS, LINKS } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={ASSETS.heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Dark overlay with radial spotlight */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#252A48]/70 via-[#252A48]/50 to-[#252A48]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#252A48_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/70 tracking-wider uppercase backdrop-blur-sm">
            Equipamentos Fitness de Alta Performance
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[0.95] mb-6"
        >
          Equipe seu
          <br />
          <span className="text-[#5865F2]">espaço fitness.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mx-auto text-base sm:text-lg text-white/50 font-light leading-relaxed mb-12"
        >
          Anilhas, barras, kettlebells e tudo que seu box de CrossFit
          ou academia precisa. Qualidade que você sente na primeira pegada.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* WhatsApp Button — Primary */}
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#5865F2] text-white font-semibold text-base transition-all duration-300 hover:bg-[#4752d4] hover:shadow-2xl hover:shadow-[#5865F2]/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle size={20} className="transition-transform duration-300 group-hover:scale-110" />
            Falar no WhatsApp
          </a>

          {/* Catalog Button — Secondary */}
          <a
            href={LINKS.catalog}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold text-base backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download size={20} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            Baixar Catálogo
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
