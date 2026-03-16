import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Send, Sparkles } from 'lucide-react';

export function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    propertyType: '',
    budget: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-gradient-to-br from-[#1A1A1A] via-[#0F0F0F] to-[#1A1A1A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-sm text-[#E6C56A]">Free Consultation</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start Designing Your <span className="text-[#D4AF37]">Dream Home Today</span>
          </h2>
          <p className="text-xl text-[#BFBFBF] max-w-2xl mx-auto">
            Get a free consultation with our expert designers and bring your vision to life
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="bg-[#1A1A1A]/80 backdrop-blur-md border border-[#D4AF37]/20 rounded-3xl p-8 md:p-12 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-[#BFBFBF]">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#0F0F0F] border border-[#D4AF37]/20 rounded-xl text-white placeholder-[#BFBFBF]/50 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                placeholder="Enter your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-[#BFBFBF]">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#0F0F0F] border border-[#D4AF37]/20 rounded-xl text-white placeholder-[#BFBFBF]/50 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-[#BFBFBF]">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#0F0F0F] border border-[#D4AF37]/20 rounded-xl text-white placeholder-[#BFBFBF]/50 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="city" className="text-sm font-medium text-[#BFBFBF]">
                City *
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#0F0F0F] border border-[#D4AF37]/20 rounded-xl text-white placeholder-[#BFBFBF]/50 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                placeholder="Your city"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="propertyType" className="text-sm font-medium text-[#BFBFBF]">
                Property Type *
              </label>
              <select
                id="propertyType"
                name="propertyType"
                required
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#0F0F0F] border border-[#D4AF37]/20 rounded-xl text-white focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
              >
                <option value="">Select property type</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="penthouse">Penthouse</option>
                <option value="office">Office</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="budget" className="text-sm font-medium text-[#BFBFBF]">
                Budget Range *
              </label>
              <select
                id="budget"
                name="budget"
                required
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#0F0F0F] border border-[#D4AF37]/20 rounded-xl text-white focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
              >
                <option value="">Select budget range</option>
                <option value="10-20">₹10-20 Lakhs</option>
                <option value="20-40">₹20-40 Lakhs</option>
                <option value="40-60">₹40-60 Lakhs</option>
                <option value="60+">₹60+ Lakhs</option>
              </select>
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)' }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#E6C56A] text-[#0F0F0F] rounded-xl font-semibold text-lg inline-flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg shadow-[#D4AF37]/20"
          >
            <span>Book Free Consultation</span>
            <Send className="w-5 h-5" />
          </motion.button>

          <p className="text-center text-sm text-[#BFBFBF]">
            By submitting, you agree to our terms and conditions
          </p>
        </motion.form>
      </div>
    </section>
  );
}
