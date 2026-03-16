import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Eye } from 'lucide-react';

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Living Room', 'Kitchen', 'Bedroom', 'Wardrobes', 'Dining', 'TV Units', 'Bathroom', 'Study Room', 'Balcony', 'Pooja Room', 'Kids Room'];

  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1765767056681-9583b29007cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3IlMjBkYXJrfGVufDF8fHx8MTc3MzM4NzcxOHww&ixlib=rb-4.1.0&q=80&w=1080",
      category: 'Living Room',
      title: 'Modern Luxury Living',
    },
    {
      image: "https://images.unsplash.com/photo-1643034738686-d69e7bc047e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3IlMjBsdXh1cnl8ZW58MXx8fHwxNzczMzc2NDUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: 'Kitchen',
      title: 'Contemporary Kitchen',
    },
    {
      image: "https://images.unsplash.com/photo-1625579002297-aeebbf69de89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzczMzUzNDgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: 'Bedroom',
      title: 'Elegant Bedroom Suite',
    },
    {
      image: "https://images.unsplash.com/photo-1765862835319-18fb6f8caff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXJkcm9iZSUyMGNsb3NldCUyMGRlc2lnbnxlbnwxfHx8fDE3NzM0MTcyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: 'Wardrobes',
      title: 'Custom Wardrobe Design',
    },
    {
      image: "https://images.unsplash.com/photo-1772112334897-7e249a9ad811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc3MzM4MTI2MXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: 'Dining',
      title: 'Sophisticated Dining',
    },
    {
      image: "https://images.unsplash.com/photo-1720247520881-672bc136da8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwdHYlMjB1bml0fGVufDF8fHx8MTc3MzQxNzIyOHww&ixlib=rb-4.1.0&q=80&w=1080",
      category: 'TV Units',
      title: 'Modern Entertainment Unit',
    },
    {
      image: "https://images.unsplash.com/photo-1519086588705-c935fdedcc14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob21lJTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczNDE3MjI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: 'Living Room',
      title: 'Contemporary Home Office',
    },
    {
      image: "https://images.unsplash.com/photo-1769763917830-7b9c8317329d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmF0aHJvb20lMjBsdXh1cnklMjBkZXNpZ258ZW58MXx8fHwxNzczNDE3MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: 'Bathroom',
      title: 'Minimalist Bathroom',
    },
    {
      image: "https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGludGVyaW9yJTIwbW9kZXJuJTIwbHV4dXJ5fGVufDF8fHx8MTc3MzQyMTc0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      category: 'Bathroom',
      title: 'Luxury Bathroom Design',
    },
    {
      image: "https://images.unsplash.com/photo-1619111613020-24cedeee7032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkeSUyMHJvb20lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NzM0MjE2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: 'Study Room',
      title: 'Modern Study Space',
    },
    {
      image: "https://images.unsplash.com/photo-1730204880386-1587173e16e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxjb255JTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBtb2Rlcm58ZW58MXx8fHwxNzczNDIxNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: 'Balcony',
      title: 'Cozy Balcony Design',
    },
    {
      image: "https://images.unsplash.com/photo-1770381142493-075344e6fc9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29qYSUyMHJvb20lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NzM0MjE1OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: 'Pooja Room',
      title: 'Traditional Pooja Room',
    },
    {
      image: "https://images.unsplash.com/photo-1771862956412-6ce9a725eb22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGJlZHJvb20lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NzM0MjE3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: 'Kids Room',
      title: 'Vibrant Kids Bedroom',
    },
    {
      image: "https://images.unsplash.com/photo-1745429523615-2a82c60bfc02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwxYmhrJTIwYXBhcnRtZW50JTIwaW50ZXJpb3IlMjBtb2Rlcm58ZW58MXx8fHwxNzczNDIxNzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: 'Living Room',
      title: 'Compact 1BHK Living',
    },
    {
      image: "https://images.unsplash.com/photo-1673098224986-993e9913891e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwyYmhrJTIwZmxhdCUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc3MzQyMTc0NXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: 'Bedroom',
      title: '2BHK Master Bedroom',
    },
    {
      image: "https://images.unsplash.com/photo-1601002257790-ebe0966a85ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzYmhrJTIwbHV4dXJ5JTIwYXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczNDIxNzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: 'Living Room',
      title: '3BHK Spacious Living',
    },
  ];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" ref={ref} className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore Stunning <span className="text-[#D4AF37]">Interior Designs</span>
          </h2>
          <p className="text-xl text-[#BFBFBF] max-w-2xl mx-auto">
            Browse our portfolio of exceptional interior design projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#D4AF37] text-[#0F0F0F] shadow-lg shadow-[#D4AF37]/30'
                  : 'bg-[#2A2A2A] text-[#BFBFBF] hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] border border-[#D4AF37]/20'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${item.category}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/5]"
            >
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                      {item.category}
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center"
                    >
                      <Eye className="w-5 h-5 text-[#0F0F0F]" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Gold Border Effect */}
              <div className="absolute inset-0 border-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}