import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, Calculator, CheckCircle } from 'lucide-react';

interface QuickQuotationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuickQuotation({ isOpen, onClose }: QuickQuotationProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: '',
    area: '',
    rooms: '',
    budget: '',
    name: '',
    phone: '',
  });
  const [quotation, setQuotation] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateQuotation = () => {
    const basePrice = {
      '1bhk': 350000,
      '2bhk': 550000,
      '3bhk': 650000,
      '4bhk': 850000,
    };
    
    const areaMultiplier = parseInt(formData.area) ? parseInt(formData.area) / 500 : 1;
    const base = basePrice[formData.rooms as keyof typeof basePrice] || 500000;
    const estimated = base * areaMultiplier;
    
    setQuotation(estimated);
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      calculateQuotation();
    } else {
      alert('Thank you! Our team will contact you shortly with detailed quotation.');
      onClose();
      setStep(1);
      setQuotation(null);
    }
  };

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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[#1A1A1A] border-2 border-[#D4AF37] rounded-3xl p-8 max-w-md w-full relative shadow-2xl shadow-[#D4AF37]/20"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0F0F0F] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F0F0F] transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-4">
                  <Calculator className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {step === 1 ? 'Get Instant Quotation' : 'Your Quotation'}
                </h2>
                <p className="text-[#BFBFBF]">
                  {step === 1 ? 'In just 30 seconds' : 'Estimated cost for your project'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {step === 1 ? (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#BFBFBF]">Property Type *</label>
                      <select
                        name="rooms"
                        required
                        value={formData.rooms}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0F0F0F] border border-[#D4AF37]/20 rounded-xl text-white focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                      >
                        <option value="">Select BHK</option>
                        <option value="1bhk">1 BHK</option>
                        <option value="2bhk">2 BHK</option>
                        <option value="3bhk">3 BHK</option>
                        <option value="4bhk">4 BHK</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#BFBFBF]">Carpet Area (sq.ft) *</label>
                      <input
                        type="number"
                        name="area"
                        required
                        value={formData.area}
                        onChange={handleChange}
                        placeholder="e.g., 600"
                        className="w-full px-4 py-3 bg-[#0F0F0F] border border-[#D4AF37]/20 rounded-xl text-white placeholder-[#BFBFBF]/50 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#BFBFBF]">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 bg-[#0F0F0F] border border-[#D4AF37]/20 rounded-xl text-white placeholder-[#BFBFBF]/50 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#BFBFBF]">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 bg-[#0F0F0F] border border-[#D4AF37]/20 rounded-xl text-white placeholder-[#BFBFBF]/50 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#E6C56A] text-[#0F0F0F] rounded-xl font-semibold transition-all shadow-lg shadow-[#D4AF37]/20"
                    >
                      Calculate Quotation
                    </motion.button>
                  </>
                ) : (
                  <>
                    <div className="bg-[#0F0F0F] border border-[#D4AF37]/30 rounded-2xl p-6 text-center">
                      <CheckCircle className="w-12 h-12 text-[#D4AF37] mx-auto mb-3" />
                      <p className="text-sm text-[#BFBFBF] mb-2">Estimated Cost</p>
                      <p className="text-4xl font-bold text-[#D4AF37] mb-2">
                        ₹{quotation ? (quotation / 100000).toFixed(1) : '0'} Lakhs*
                      </p>
                      <p className="text-xs text-[#BFBFBF]">*Approximate estimate</p>
                    </div>

                    <div className="space-y-2 text-sm text-[#BFBFBF]">
                      <div className="flex justify-between">
                        <span>Property Type:</span>
                        <span className="text-white font-medium">{formData.rooms.toUpperCase()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Carpet Area:</span>
                        <span className="text-white font-medium">{formData.area} sq.ft</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#D4AF37]/20">
                      <p className="text-sm text-[#BFBFBF] mb-3">
                        Our team will contact you with detailed quotation including:
                      </p>
                      <ul className="text-xs text-[#BFBFBF] space-y-1 ml-4">
                        <li>• Material breakdown</li>
                        <li>• Design consultation</li>
                        <li>• 3D visualization</li>
                        <li>• Timeline & warranty</li>
                      </ul>
                    </div>

                    <motion.button
                      type="button"
                      onClick={() => {
                        alert('Thank you! Our team will contact you shortly.');
                        onClose();
                        setStep(1);
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#E6C56A] text-[#0F0F0F] rounded-xl font-semibold transition-all shadow-lg shadow-[#D4AF37]/20"
                    >
                      Request Detailed Quotation
                    </motion.button>
                  </>
                )}
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
