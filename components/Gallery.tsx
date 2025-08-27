'use client';

import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import { ZoomIn, ExternalLink } from 'lucide-react';

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const galleryItems = [
    {
      id: 1,
      title: 'Gaming Stations',
      category: 'Setup',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'State-of-the-art gaming stations with premium equipment'
    },
    {
      id: 2,
      title: 'Tournament Arena',
      category: 'Events',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Competitive tournament setup for esports events'
    },
    {
      id: 3,
      title: 'VIP Lounge',
      category: 'Premium',
      image: 'https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Luxury VIP gaming suites with premium amenities'
    },
    {
      id: 4,
      title: 'Gaming Community',
      category: 'Community',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Vibrant gaming community and social events'
    },
    {
      id: 5,
      title: 'Console Setup',
      category: 'Equipment',
      image: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Latest PlayStation and Nintendo consoles'
    },
    {
      id: 6,
      title: 'Night Gaming',
      category: 'Atmosphere',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Immersive gaming atmosphere with RGB lighting'
    },
  ];

  const categories = ['All', 'Setup', 'Events', 'Premium', 'Community', 'Equipment', 'Atmosphere'];

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/30 to-black" />
      
      {/* Background Elements */}
      <Parallax speed={2}>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </Parallax>
      
      <Parallax speed={-4}>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-2xl" />
      </Parallax>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bebas text-white mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient">GALLERY</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Take a look inside Tygron - where gaming dreams become reality
          </motion.p>
          
          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-primary text-white' 
                    : 'bg-secondary/30 text-gray-300 hover:bg-primary/20 hover:text-primary'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative bg-gradient-to-b from-secondary/20 to-black/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-500"
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={inView ? { y: 0, opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.button
                    className="bg-primary/90 hover:bg-primary text-white p-3 rounded-full mr-2 glow-orange transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ZoomIn className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    className="bg-secondary/90 hover:bg-secondary text-white p-3 rounded-full transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bebas text-white mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {/* <motion.div
          className="text-center mt-12"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="bg-gradient-to-r from-primary/20 to-orange-400/20 hover:from-primary hover:to-orange-400 border border-primary/30 hover:border-primary text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View More Photos
          </motion.button>
        </motion.div> */}

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-3xl font-bebas text-white mb-4">
              EXPERIENCE IT YOURSELF
            </h3>
            <p className="text-gray-300 mb-6">
              Visit Tygron Playground & Lounge and see why we're the biggest playground in town
            </p>
            <motion.button
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg glow-orange transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/6285122999729', '_blank')}
            >
              Book Your Visit
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;