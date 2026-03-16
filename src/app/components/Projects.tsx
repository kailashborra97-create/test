import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { MapPin, DollarSign, Sparkles, Home } from 'lucide-react';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      name: '1 BHK Interior',
      location: 'Hyderabad',
      type: '1 BHK Apartment',
      price: 'Starts at ₹3.5 Lakhs',
      image: "https://images.unsplash.com/photo-1745429523615-2a82c60bfc02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwxYmhrJTIwYXBhcnRtZW50JTIwaW50ZXJpb3IlMjBtb2Rlcm58ZW58MXx8fHwxNzczNDIxNzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ['Compact Design', 'Smart Storage', 'Modern Finishes']
    },
    {
      name: '2 BHK Interior',
      location: 'Hyderabad',
      type: '2 BHK Apartment',
      price: 'Starts at ₹5.5 Lakhs',
      image: "https://images.unsplash.com/photo-1673098224986-993e9913891e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwyYmhrJTIwZmxhdCUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc3MzQyMTc0NXww&ixlib=rb-4.1.0&q=80&w=1080",
      features: ['Spacious Living', 'Premium Kitchen', 'Elegant Bedroom']
    },
    {
      name: '3 BHK Interior',
      location: 'Hyderabad',
      type: '3 BHK Apartment',
      price: 'Starts at ₹6.5 Lakhs',
      image: "https://images.unsplash.com/photo-1601002257790-ebe0966a85ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzYmhrJTIwbHV4dXJ5JTIwYXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczNDIxNzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ['Luxury Finishes', 'Full Home Design', 'Premium Materials']
    },
    {
      name: '4 BHK Interior',
      location: 'Hyderabad',
      type: '4 BHK Apartment',
      price: 'Starts at ₹8.5 Lakhs',
      image: "https://images.unsplash.com/photo-1760611655987-d348d6d28174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHw0YmhrJTIwcGVudGhvdXNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczNDIxNzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ['Ultra Luxury', 'Complete Customization', 'High-end Fixtures']
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Interior Packages <span className="text-[#D4AF37]">By Property Type</span>
          </h2>
          <p className="text-xl text-[#BFBFBF] max-w-2xl mx-auto">
            Transparent pricing for every home size in Hyderabad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 p-6 bg-[#0F0F0F] border border-[#D4AF37]/20 rounded-2xl text-center"
        >
          <p className="text-[#BFBFBF]">
            * Prices are approximate and may vary based on material selection, customization, and site conditions. 
            <span className="text-[#D4AF37]"> Contact us for a detailed quotation.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, isInView }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl bg-[#0F0F0F] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/70 to-transparent" />
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
          className="absolute top-4 left-4 px-4 py-2 bg-[#D4AF37] rounded-full flex items-center space-x-2"
        >
          <Sparkles className="w-4 h-4 text-[#0F0F0F]" />
          <span className="text-sm font-semibold text-[#0F0F0F]">Popular</span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-2xl font-semibold text-white group-hover:text-[#D4AF37] transition-colors">
            {project.name}
          </h3>
          <Home className="w-6 h-6 text-[#D4AF37]" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-[#BFBFBF]">
            <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
            <span>{project.location}</span>
          </div>

          <div className="flex items-center space-x-2 text-[#BFBFBF]">
            <Home className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
            <span>{project.type}</span>
          </div>
        </div>

        {/* Price */}
        <div className="pt-4 border-t border-[#D4AF37]/20">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-[#BFBFBF]">Starting Price</span>
            <DollarSign className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <p className="text-2xl font-bold text-[#D4AF37]">
            {project.price}
          </p>
        </div>

        {/* Features */}
        <div className="space-y-1">
          {project.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center space-x-2 text-sm text-[#BFBFBF]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="block w-full mt-4 px-6 py-3 bg-[#D4AF37]/10 border border-[#D4AF37] text-[#D4AF37] rounded-full font-semibold text-center hover:bg-[#D4AF37] hover:text-[#0F0F0F] transition-all duration-300"
        >
          Get Quote
        </motion.a>
      </div>
    </motion.div>
  );
}
