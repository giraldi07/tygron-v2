'use client';

import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Clock, Instagram, MessageCircle, Mail } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['Jl. DR. Sumeru, RT.03/RW.01', 'Menteng, Kec. Bogor Bar', 'Kota Bogor, Jawa Barat'],
      action: () => window.open('https://www.google.com/maps/place/Tygron+Playground+and+Lounge/data=!4m2!3m1!1s0x0:0xaa061ea156868ee4?sa=X&ved=1t:2428&ictx=111', '_blank'),
      actionText: 'Get Directions',
    },
    {
      icon: Phone,
      title: 'Contact',
      details: ['+62 851-2299-9729', '+62 851-2299-9729', 'Available 24/7'],
      action: () => window.open('tel:+6285122999729', '_blank'),
      actionText: 'Call Now',
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Monday - Thursday: 2PM - 2AM', 'Friday - Sunday: 12PM - 4AM', 'Holiday Hours May Vary'],
      action: null,
      actionText: 'Always Open',
    },
  ];

  const socialLinks = [
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      handle: '+62 851-2299-9729',
      color: 'from-green-500 to-green-600',
      action: () => window.open('https://wa.me/6285122999729', '_blank'),
    },
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@tygron.playground',
      color: 'from-pink-500 to-purple-600',
      action: () => window.open('https://instagram.com/tygron.playground', '_blank'),
    },
    {
      icon: Mail,
      name: 'Email',
      handle: 'info@tygron.com',
      color: 'from-blue-500 to-blue-600',
      action: () => window.open('mailto:info@tygron.com', '_blank'),
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/40 to-black" />
      
      {/* Background Elements */}
      <Parallax speed={4}>
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </Parallax>
      
      <Parallax speed={-3}>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
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
            GET IN <span className="text-gradient">TOUCH</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Ready to level up your gaming experience? Contact us for bookings, tournaments, or any questions.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bebas text-white mb-8">VISIT US TODAY</h3>
            
            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="bg-gradient-to-r from-secondary/20 to-black/50 rounded-xl p-6 border border-gray-800 hover:border-primary/50 transition-all duration-300 group"
                  initial={{ y: 30, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-orange-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bebas text-white mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-300 text-sm">
                          {detail}
                        </p>
                      ))}
                      {info.action && (
                        <motion.button
                          onClick={info.action}
                          className="mt-3 text-primary hover:text-orange-400 text-sm font-medium transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          {info.actionText} →
                        </motion.button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bebas text-white mb-4">CONNECT WITH US</h4>
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.button
                    key={social.name}
                    onClick={social.action}
                    className="bg-gradient-to-r from-secondary/20 to-black/50 hover:from-secondary/40 hover:to-black/70 rounded-xl p-4 border border-gray-800 hover:border-primary/50 transition-all duration-300 text-left group"
                    initial={{ x: -30, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <social.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-medium">{social.name}</div>
                        <div className="text-gray-400 text-sm">{social.handle}</div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map & Additional Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-secondary/20 to-black/50 rounded-2xl p-6 border border-gray-800 mb-8">
              <h4 className="text-xl font-bebas text-white mb-4">FIND US</h4>
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-gray-300">Interactive Map Coming Soon</p>
                  <p className="text-sm text-gray-400 mt-2">Click below for Google Maps</p>
                  <motion.button
                    onClick={() => window.open('https://maps.google.com', '_blank')}
                    className="mt-4 bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg text-sm transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    Open in Maps
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20">
              <h4 className="text-xl font-bebas text-white mb-4">QUICK INFO</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Parking</span>
                  <span className="text-primary font-medium">Free & Available</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Age Requirement</span>
                  <span className="text-primary font-medium">All Ages Welcome</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Food & Drinks</span>
                  <span className="text-primary font-medium">Available On-Site</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Group Bookings</span>
                  <span className="text-primary font-medium">Call Ahead</span>
                </div>
              </div>
            </div>
          </motion.div>
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
              BOOK YOUR GAMING SESSION
            </h3>
            <p className="text-gray-300 mb-6">
              Ready to play? Contact us via WhatsApp for instant booking and availability.
            </p>
            <motion.button
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg glow-orange transition-all duration-300 inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/6285122999729', '_blank')}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;