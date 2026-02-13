/**
 * AboutSection — Forsety Landing Page
 * Design: Split layout — image left, text right. Apple-like generous spacing.
 */
import { motion } from "framer-motion";
import { ASSETS } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section id="sobre" className="relative py-28 md:py-36 bg-[#1a1f38]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden">
              <img
                src={ASSETS.gymAtmosphere}
                alt="Ambiente CrossFit com equipamentos Forsety"
                className="w-full h-72 sm:h-80 md:h-[440px] object-cover"
              />
            </div>
            {/* Floating detail image */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-4 border-[#1a1f38] shadow-2xl">
              <img
                src={ASSETS.detailBarbell}
                alt="Detalhe da barra olímpica Forsety"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-[#5865F2] text-sm font-semibold tracking-wider uppercase mb-4">
              Sobre a Forsety
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Mais que um fornecedor.
              <br />
              <span className="text-white/50">Um parceiro.</span>
            </h2>
            <p className="text-white/40 text-base font-light leading-relaxed mb-8">
              A Forsety é especializada na fabricação e comercialização de
              equipamentos fitness de alta performance. Atendemos donos de boxes
              de CrossFit, academias e estúdios funcionais com produtos que
              combinam durabilidade, precisão e design.
            </p>
            <p className="text-white/40 text-base font-light leading-relaxed">
              Nosso objetivo é ser o parceiro estratégico para o crescimento do
              seu negócio, oferecendo suporte especializado e soluções que fazem
              a diferença no dia a dia do seu espaço.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
