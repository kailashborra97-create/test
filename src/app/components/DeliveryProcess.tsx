import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { CheckCircle2, Clock, Shield, Truck, Users, Wrench } from 'lucide-react';

export function DeliveryProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: '50+ experienced designers and craftsmen',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: '98% projects completed within timeline',
    },
    {
      icon: Shield,
      title: '10-Year Warranty',
      description: 'Industry-leading warranty on workmanship',
    },
    {
      icon: Truck,
      title: 'End-to-End Service',
      description: 'From design to final installation',
    },
    {
      icon: Wrench,
      title: 'Premium Quality',
      description: 'Only branded materials & hardware',
    },
    {
      icon: CheckCircle2,
      title: 'Hassle-Free',
      description: 'Single point of contact for everything',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 backdrop-blur-sm mb-6"
          >
            <span className="text-sm font-semibold text-[#D4AF37]">WHY CHOOSE US</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            End‑to‑End Interiors—<br />
            <span className="text-[#D4AF37]">Delivered Seamlessly</span>
          </h2>
          <p className="text-xl text-[#BFBFBF] max-w-3xl mx-auto leading-relaxed">
            Experience stress-free interior design with our comprehensive service. 
            We handle everything from initial consultation to final installation and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative p-8 rounded-2xl bg-[#1A1A1A] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative z-10 text-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#E6C56A] shadow-lg shadow-[#D4AF37]/30"
                >
                  <feature.icon className="w-10 h-10 text-[#0F0F0F]" />
                </motion.div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-[#BFBFBF] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-8 p-8 bg-[#0F0F0F] border border-[#D4AF37]/20 rounded-2xl">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-sm text-[#BFBFBF]">Happy Customers</p>
              </div>
            </div>

            <div className="h-12 w-px bg-[#D4AF37]/20 hidden md:block" />

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                <Shield className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">10 Years</p>
                <p className="text-sm text-[#BFBFBF]">Warranty Coverage</p>
              </div>
            </div>

            <div className="h-12 w-px bg-[#D4AF37]/20 hidden md:block" />

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                <Clock className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">45 Days</p>
                <p className="text-sm text-[#BFBFBF]">Average Completion</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
