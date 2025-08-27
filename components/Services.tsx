'use client';

import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import { Gamepad2, Monitor, Users, Crown, Calendar, Headphones } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Gamepad2,
      title: 'PlayStation Gaming',
      description: 'Latest PS4 & PS5 consoles with exclusive titles and multiplayer action',
      features: ['PS5 & PS4 Consoles', 'Latest Game Library', '4K Gaming Experience', 'Multiplayer Support'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Monitor,
      title: 'Nintendo Switch',
      description: 'Portable and docked gaming with Nintendo\'s amazing exclusive titles',
      features: ['Switch OLED Models', 'Exclusive Nintendo Games', 'Portable & Docked', 'Party Gaming'],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-500/10',
    },
    {
      icon: Users,
      title: 'Group Gaming',
      description: 'Perfect setups for friends, parties, and team gaming sessions',
      features: ['Group Bookings', 'Team Tournaments', 'Party Packages', 'Social Gaming'],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: Crown,
      title: 'VIP Rooms',
      description: 'Premium private gaming suites with luxury amenities and comfort',
      features: ['Private Suites', 'Premium Seating', 'Personal Service', 'Luxury Amenities'],
      color: 'from-primary to-orange-400',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Calendar,
      title: 'Tournaments',
      description: 'Regular competitive events with prizes and recognition',
      features: ['Weekly Tournaments', 'Cash Prizes', 'Leaderboards', 'Championship Events'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: Headphones,
      title: 'Pro Equipment',
      description: 'Professional gaming peripherals and audio equipment',
      features: ['Gaming Headsets', 'Pro Controllers', 'High-Refresh Monitors', 'Streaming Setup'],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-500/10',
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/20 to-black" />
      
      {/* Background Elements */}
      <Parallax speed={3}>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </Parallax>
      
      <Parallax speed={-2}>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
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
            OUR <span className="text-gradient">SERVICES</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Experience gaming like never before with our premium services and state-of-the-art equipment
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-gradient-to-b from-secondary/20 to-black/50 rounded-2xl p-6 border border-gray-800 hover:border-primary/50 transition-all duration-500 overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bebas text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                      initial={{ x: -10, opacity: 0 }}
                      animate={inView ? { x: 0, opacity: 1 } : {}}
                      transition={{ delay: (index * 0.1) + (featureIndex * 0.05) + 0.5 }}
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  className="mt-6 w-full bg-gradient-to-r from-primary/20 to-orange-400/20 hover:from-primary hover:to-orange-400 border border-primary/30 hover:border-primary text-white py-3 rounded-lg font-medium transition-all duration-300 group-hover:glow-orange"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://wa.me/6285122999729', '_blank')}
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-3xl font-bebas text-white mb-4">
              READY TO LEVEL UP?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of gamers who trust Tygron for their gaming needs
            </p>
            <motion.button
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg glow-orange transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/6285122999729', '_blank')}
            >
              Contact Us Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;