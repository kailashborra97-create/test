import { motion } from 'motion/react';
import { Calculator } from 'lucide-react';

interface FloatingQuotationButtonProps {
  onClick: () => void;
}

export function FloatingQuotationButton({ onClick }: FloatingQuotationButtonProps) {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="fixed bottom-8 right-8 z-40 group"
    >
      <div className="relative">
        {/* Pulsing ring */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-[#D4AF37]"
        />
        
        {/* Main button */}
        <div className="relative flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#E6C56A] flex items-center justify-center shadow-2xl shadow-[#D4AF37]/50 border-4 border-[#0F0F0F]">
            <Calculator className="w-8 h-8 text-[#0F0F0F]" />
          </div>
          
          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute bottom-full mb-3 px-4 py-2 bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-xl shadow-xl whitespace-nowrap"
          >
            <p className="text-sm font-semibold text-white">Get Quotation in 30s</p>
            <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-3 h-3 bg-[#1A1A1A] border-r border-b border-[#D4AF37]/30 transform rotate-45" />
            </div>
          </motion.div>

          {/* Text label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-2 px-3 py-1 bg-[#D4AF37] rounded-full shadow-lg"
          >
            <p className="text-xs font-bold text-[#0F0F0F] whitespace-nowrap">Quick Quote</p>
          </motion.div>
        </div>
      </div>
    </motion.button>
  );
}
