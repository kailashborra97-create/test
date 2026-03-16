import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Sparkles } from 'lucide-react';

interface ExploreModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    features: string[];
    image: string;
  } | null;
}

export function ExploreModal({ isOpen, onClose, service }: ExploreModalProps) {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[#1A1A1A] border-2 border-[#D4AF37] rounded-3xl max-w-4xl w-full relative shadow-2xl shadow-[#D4AF37]/20 my-8"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0F0F0F] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F0F0F] transition-all z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Section */}
              <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="w-6 h-6 text-[#D4AF37]" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {service.title}
                  </h2>
                </div>

                <p className="text-lg text-[#BFBFBF] leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">What's Included:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3 p-4 bg-[#0F0F0F] rounded-xl border border-[#D4AF37]/20"
                      >
                        <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <span className="text-[#BFBFBF]">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="#contact"
                    onClick={onClose}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)' }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#E6C56A] text-[#0F0F0F] rounded-xl font-semibold text-center transition-all shadow-lg shadow-[#D4AF37]/20"
                  >
                    Book Free Consultation
                  </motion.a>
                  <motion.button
                    onClick={onClose}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] rounded-xl font-semibold transition-all hover:bg-[#D4AF37]/10"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
