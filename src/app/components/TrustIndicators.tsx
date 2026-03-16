import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Home, Users, Award, Star } from 'lucide-react';

export function TrustIndicators() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { icon: Home, label: 'Homes Designed', value: 500, suffix: '+' },
    { icon: Award, label: 'Years Experience', value: 10, suffix: '+' },
    { icon: Users, label: 'Designers', value: 50, suffix: '+' },
    { icon: Star, label: 'Customer Satisfaction', value: 98, suffix: '%' },
  ];

  return (
    <section ref={ref} className="py-20 bg-[#1A1A1A] border-y border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37]"
              >
                <stat.icon className="w-8 h-8" />
              </motion.div>
              
              <div className="space-y-1">
                <div className="text-4xl md:text-5xl font-bold text-white">
                  {isInView && <Counter end={stat.value} suffix={stat.suffix} />}
                </div>
                <div className="text-sm md:text-base text-[#BFBFBF] font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end]);

  return <>{count}{suffix}</>;
}
