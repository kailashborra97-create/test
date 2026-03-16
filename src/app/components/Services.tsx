import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Home, ChefHat, Bed, Sofa, Armchair, Ruler, ArrowRight, Lightbulb, Wallpaper, PaintBucket, Frame, Tv, DoorOpen } from 'lucide-react';
import { ExploreModal } from './ExploreModal';

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Home,
      title: 'Complete Home Interiors',
      description: 'End-to-end interior design solutions for your entire home with a cohesive aesthetic.',
      image: 'https://images.unsplash.com/photo-1765767056681-9583b29007cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3IlMjBkYXJrfGVufDF8fHx8MTc3MzM4NzcxOHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Complete design conceptualization',
        'Space planning & layout optimization',
        'Custom furniture & fixtures',
        'Lighting design & installation',
        'Premium material selection',
        'End-to-end project execution',
        '10-year warranty on workmanship',
        'Post-installation support'
      ]
    },
    {
      icon: ChefHat,
      title: 'Modular Kitchen Design',
      description: 'Functional and stylish kitchen designs tailored to your cooking and lifestyle needs.',
      image: 'https://images.unsplash.com/photo-1643034738686-d69e7bc047e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3IlMjBsdXh1cnl8ZW58MXx8fHwxNzczMzc2NDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Customized modular cabinets',
        'Premium hardware & fittings',
        'Soft-close mechanisms',
        'Optimized storage solutions',
        'Chimney & hob installation',
        'Backsplash & countertop selection',
        'Smart kitchen accessories',
        'Easy maintenance finishes'
      ]
    },
    {
      icon: Bed,
      title: 'Bedroom & Wardrobes',
      description: 'Peaceful retreats with custom storage solutions and elegant bedroom designs.',
      image: 'https://images.unsplash.com/photo-1625579002297-aeebbf69de89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzczMzUzNDgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Custom wardrobe design',
        'Sliding & hinged door options',
        'Internal drawer systems',
        'Loft & overhead storage',
        'Study table integration',
        'Bedside unit design',
        'Mirror & lighting solutions',
        'Premium laminates & finishes'
      ]
    },
    {
      icon: Sofa,
      title: 'Living Room Interiors',
      description: 'Create stunning living spaces that reflect your personality and welcome guests.',
      image: 'https://images.unsplash.com/photo-1519086588705-c935fdedcc14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob21lJTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczNDE3MjI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'TV unit & entertainment center',
        'Sofa & seating arrangement',
        'Coffee table selection',
        'Wall paneling & decoration',
        'Ceiling design & lighting',
        'Curtain & blind solutions',
        'Display units & showcases',
        'Smart home integration'
      ]
    },
    {
      icon: Armchair,
      title: 'Custom Furniture',
      description: 'Bespoke furniture pieces designed and crafted to perfectly fit your space.',
      image: 'https://images.unsplash.com/photo-1772112334897-7e249a9ad811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc3MzM4MTI2MXww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Made-to-measure furniture',
        'Premium wood selection',
        'Upholstery & fabric choices',
        'Handcrafted detailing',
        'Custom dining tables',
        'Study & work desks',
        'Storage ottomans & benches',
        'Unique design elements'
      ]
    },
    {
      icon: Ruler,
      title: 'Space Planning',
      description: 'Expert space optimization to make the most of every square foot in your home.',
      image: 'https://images.unsplash.com/photo-1619111613020-24cedeee7032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkeSUyMHJvb20lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NzM0MjE2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        '3D floor plan visualization',
        'Furniture layout optimization',
        'Traffic flow analysis',
        'Multi-functional spaces',
        'Storage maximization',
        'Natural light optimization',
        'Vastu consultation',
        'Ergonomic design principles'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Create the perfect ambiance with professionally designed lighting solutions.',
      image: 'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGludGVyaW9yJTIwbW9kZXJuJTIwbHV4dXJ5fGVufDF8fHx8MTc3MzQyMTc0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Ambient lighting design',
        'Task lighting solutions',
        'Accent & decorative lights',
        'LED strip installations',
        'Smart lighting controls',
        'Energy-efficient options',
        'Chandelier & pendant selection',
        'Dimmer & sensor integration'
      ]
    },
    {
      icon: Wallpaper,
      title: 'Wall Treatments',
      description: 'Transform your walls with premium finishes, textures, and decorative solutions.',
      image: 'https://images.unsplash.com/photo-1730204880386-1587173e16e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxjb255JTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBtb2Rlcm58ZW58MXx8fHwxNzczNDIxNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Designer wallpaper installation',
        'Textured paint finishes',
        'Wall paneling & cladding',
        'Decorative wall panels',
        'Accent wall design',
        'Wall art placement',
        'POP & gypsum work',
        'Wall mounted features'
      ]
    },
    {
      icon: Tv,
      title: 'TV & Entertainment Units',
      description: 'Stylish and functional entertainment centers designed for modern living.',
      image: 'https://images.unsplash.com/photo-1720247520881-672bc136da8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwdHYlMjB1bml0fGVufDF8fHx8MTc3MzQxNzIyOHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Wall-mounted TV panels',
        'Cable management system',
        'Media storage units',
        'Soundbar integration',
        'Ambient backlighting',
        'Gaming console storage',
        'Streaming device setup',
        'Premium finish options'
      ]
    },
    {
      icon: DoorOpen,
      title: 'False Ceiling Design',
      description: 'Elegant ceiling solutions with integrated lighting and modern aesthetics.',
      image: 'https://images.unsplash.com/photo-1601002257790-ebe0966a85ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzYmhrJTIwbHV4dXJ5JTIwYXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczNDIxNzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'POP & gypsum ceiling',
        'Wooden ceiling panels',
        'Grid ceiling design',
        'Cove lighting integration',
        'Sound insulation',
        'Height optimization',
        'Air conditioning duct concealment',
        'Modern & traditional designs'
      ]
    },
    {
      icon: PaintBucket,
      title: 'Painting & Polishing',
      description: 'Professional painting services with premium finishes for a flawless look.',
      image: 'https://images.unsplash.com/photo-1770381142493-075344e6fc9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29qYSUyMHJvb20lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NzM0MjE1OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Premium paint brands',
        'Texture painting',
        'Wood polishing & varnish',
        'Stencil & decorative painting',
        'Anti-fungal treatment',
        'Waterproofing solutions',
        'Color consultation',
        'Quick-dry options'
      ]
    },
    {
      icon: Frame,
      title: 'Flooring Solutions',
      description: 'Premium flooring options from tiles to wooden floors for every space.',
      image: 'https://images.unsplash.com/photo-1771862956412-6ce9a725eb22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGJlZHJvb20lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NzM0MjE3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Vitrified & ceramic tiles',
        'Wooden & laminate flooring',
        'Vinyl & SPC flooring',
        'Marble & granite options',
        'Carpet & rug selection',
        'Epoxy flooring',
        'Anti-skid solutions',
        'Professional installation'
      ]
    },
  ];

  const handleExplore = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section id="services" ref={ref} className="py-24 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Interior Design <span className="text-[#D4AF37]">Services</span>
          </h2>
          <p className="text-xl text-[#BFBFBF] max-w-2xl mx-auto">
            Comprehensive interior design solutions tailored to transform your vision into reality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-8 rounded-2xl bg-[#1A1A1A] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0F0F0F] transition-all duration-300"
                >
                  <service.icon className="w-8 h-8" />
                </motion.div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-[#BFBFBF] mb-4 leading-relaxed">
                  {service.description}
                </p>

                <motion.a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleExplore(service);
                  }}
                  className="inline-flex items-center space-x-2 text-[#D4AF37] font-medium group/link"
                  whileHover={{ x: 5 }}
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ExploreModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        service={selectedService} 
      />
    </section>
  );
}