/**
 * CtaSection — Forsety Landing Page
 * Design: Full-width CTA section with gradient background and two prominent buttons
 */
import { motion } from "framer-motion";
import { MessageCircle, Download } from "lucide-react";
import { LINKS } from "@/lib/constants";

export default function CtaSection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[#252A48]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#5865F2_0%,transparent_70%)] opacity-[0.08]" />

      <div className="relative z-10 container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Pronto para equipar
            <br />
            <span className="text-[#5865F2]">seu espaço?</span>
          </h2>
          <p className="max-w-md mx-auto text-white/40 text-base font-light leading-relaxed mb-12">
            Entre em contato pelo WhatsApp ou baixe nosso catálogo completo
            com toda a linha de produtos e especificações técnicas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* WhatsApp Button */}
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#5865F2] text-white font-semibold text-base transition-all duration-300 hover:bg-[#4752d4] hover:shadow-2xl hover:shadow-[#5865F2]/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle size={20} className="transition-transform duration-300 group-hover:scale-110" />
            Falar no WhatsApp
          </a>

          {/* Catalog Button */}
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
    </section>
  );
}
