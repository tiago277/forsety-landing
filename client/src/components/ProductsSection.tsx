/**
 * ProductsSection — Forsety Landing Page
 * Design: Grid de produtos com cards translúcidos, ícones e hover states
 * Apple-like: clean cards, generous spacing, subtle animations
 */
import { motion } from "framer-motion";
import {
  Circle,
  Minus,
  Dumbbell,
  Flame,
  Square,
  GripHorizontal,
  LayoutGrid,
  Shield,
} from "lucide-react";
import { ASSETS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  circle: Circle,
  minus: Minus,
  dumbbell: Dumbbell,
  flame: Flame,
  square: Square,
  "grip-horizontal": GripHorizontal,
  "layout-grid": LayoutGrid,
  shield: Shield,
};

const products = [
  { name: "Anilhas", description: "Standard e Olímpicas — Bumper, Calibragem, Sport e mais", icon: "circle" },
  { name: "Barras", description: "Standard e Olímpicas para todos os tipos de treino", icon: "minus" },
  { name: "Dumbbells", description: "Halteres hexagonais de alta durabilidade", icon: "dumbbell" },
  { name: "Kettlebells", description: "Diversos pesos para treino funcional", icon: "flame" },
  { name: "Pisos", description: "Borracha de alta densidade para proteção", icon: "square" },
  { name: "Puxadores", description: "Cabos e acessórios para estações", icon: "grip-horizontal" },
  { name: "Expositores", description: "Organização Standard e Olímpica", icon: "layout-grid" },
  { name: "Suportes", description: "Presilhas e suportes profissionais", icon: "shield" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function ProductsSection() {
  return (
    <section id="produtos" className="relative py-28 md:py-36">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#252A48] via-[#1a1f38] to-[#252A48]" />

      <div className="relative z-10 container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-[#5865F2] text-sm font-semibold tracking-wider uppercase mb-4">
            Linha Completa
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
            Tudo para o seu espaço.
          </h2>
          <p className="max-w-lg mx-auto text-white/40 text-base font-light leading-relaxed">
            Equipamentos desenvolvidos para suportar os treinos mais intensos,
            com a qualidade que profissionais exigem.
          </p>
        </motion.div>

        {/* Products Showcase Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 rounded-3xl overflow-hidden"
        >
          <img
            src={ASSETS.productsShowcase}
            alt="Equipamentos Forsety"
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {products.map((product) => {
            const Icon = iconMap[product.icon] || Circle;
            return (
              <motion.div
                key={product.name}
                variants={itemVariants}
                className="group relative p-5 md:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.12] hover:shadow-lg hover:shadow-[#5865F2]/5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#5865F2]/10 flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-[#5865F2]/20 group-hover:scale-110">
                  <Icon size={20} className="text-[#5865F2]" />
                </div>
                <h3 className="text-white font-semibold text-sm md:text-base mb-1">
                  {product.name}
                </h3>
                <p className="text-white/35 text-xs md:text-sm font-light leading-snug">
                  {product.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
