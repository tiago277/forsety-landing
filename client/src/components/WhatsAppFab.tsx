/**
 * WhatsAppFab — Floating Action Button for WhatsApp
 * Design: Fixed bottom-right button with pulse animation
 */
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { LINKS } from "@/lib/constants";

export default function WhatsAppFab() {
  return (
    <motion.a
      href={LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-300"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={24} />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </motion.a>
  );
}
