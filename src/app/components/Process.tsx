import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MessageCircle, Palette, Layers, Hammer } from 'lucide-react';

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const steps = [
    {
      icon: MessageCircle,
      number: '01',
      title: 'Consultation',
      description: 'We understand your vision, preferences, and requirements through detailed discussions.',
    },
    {
      icon: Palette,
      number: '02',
      title: 'Design & 3D Visualization',
      description: 'Our designers create stunning 3D renders and detailed plans for your approval.',
    },
    {
      icon: Layers,
      number: '03',
      title: 'Material Selection',
      description: 'Choose from premium materials and finishes that match your style and budget.',
    },
    {
      icon: Hammer,
      number: '04',
      title: 'Execution & Installation',
      description: 'Expert craftsmen bring your design to life with precision and quality.',
    },
  ];

  return (
    <section id="process" ref={ref} className="py-24 bg-[#0F0F0F] relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It <span className="text-[#D4AF37]">Works</span>
          </h2>
          <p className="text-xl text-[#BFBFBF] max-w-2xl mx-auto">
            Our streamlined process ensures a seamless journey from concept to completion
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4AF37] via-[#E6C56A] to-[#D4AF37] origin-left"
            style={{ transform: 'translateY(-50%)' }}
          />

          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="relative"
              >
                {/* Circle on timeline */}
                <div className="flex justify-center mb-8">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 rounded-full bg-[#D4AF37] border-4 border-[#0F0F0F] shadow-lg shadow-[#D4AF37]/50 flex items-center justify-center relative z-10"
                  >
                    <step.icon className="w-10 h-10 text-[#0F0F0F]" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="text-center bg-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 group">
                  <div className="text-6xl font-bold text-[#D4AF37]/20 group-hover:text-[#D4AF37]/30 transition-colors mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[#BFBFBF] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-lg shadow-[#D4AF37]/50 flex-shrink-0"
                >
                  <step.icon className="w-8 h-8 text-[#0F0F0F]" />
                </motion.div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-gradient-to-b from-[#D4AF37] to-transparent mt-4" />
                )}
              </div>

              <div className="flex-1 pb-8">
                <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 group">
                  <div className="text-4xl font-bold text-[#D4AF37]/20 group-hover:text-[#D4AF37]/30 transition-colors mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[#BFBFBF] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
