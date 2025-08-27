'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TowerControl as GameController, Instagram, MessageCircle, Mail, Phone, MapPin, Clock, Trophy } from 'lucide-react';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const footerLinks = {
    gaming: [
      { name: 'PlayStation Gaming', href: '#services' },
      { name: 'Nintendo Switch', href: '#services' },
      { name: 'VIP Rooms', href: '#services' },
      { name: 'Group Gaming', href: '#services' },
    ],
    events: [
      { name: 'Tournaments', href: '#events' },
      { name: 'Championships', href: '#events' },
      { name: 'Special Events', href: '#events' },
      { name: 'Community Nights', href: '#events' },
    ],
    info: [
      { name: 'About Us', href: '#about' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Gallery', href: '#gallery' },
      { name: 'Contact', href: '#contact' },
    ],
  };

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      href: 'https://www.instagram.com/tygron.playground/',
      color: 'hover:text-pink-400',
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      href: 'https://wa.me/6285122999729',
      color: 'hover:text-green-400',
    },
    {
      icon: Mail,
      name: 'Email',
      href: 'mailto:info@tygron.com',
      color: 'hover:text-blue-400',
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-t from-black to-secondary-900/50 pt-20 pb-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-orange-400 rounded-xl flex items-center justify-center">
                <GameController className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bebas text-white">TYGRON</h3>
                <p className="text-sm text-primary -mt-1">PLAYGROUND & LOUNGE</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              The biggest playground in town. Experience premium gaming with state-of-the-art equipment, competitive tournaments, and an unmatched gaming community.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 text-sm">
                <MapPin className="w-4 h-4 text-primary mr-3" />
                Jl. DR. Sumeru, RT.03/RW.01, Menteng, Kec. Bogor Bar., Kota Bogor, Jawa Barat
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="w-4 h-4 text-primary mr-3" />
                +62 851-2299-9729
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Clock className="w-4 h-4 text-primary mr-3" />
                Mon-Thu: 2PM-2AM, Fri-Sun: 12PM-4AM
              </div>
            </div>
          </motion.div>

          {/* Gaming Services */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bebas text-white mb-6">GAMING SERVICES</h4>
            <ul className="space-y-3">
              {footerLinks.gaming.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary transition-colors text-sm block"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Events & Tournaments */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bebas text-white mb-6">EVENTS & TOURNAMENTS</h4>
            <ul className="space-y-3">
              {footerLinks.events.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary transition-colors text-sm block"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-bebas text-white mb-6">QUICK LINKS</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.info.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary transition-colors text-sm block"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-secondary/20 to-primary/10 rounded-lg p-4 border border-primary/20">
              <h5 className="font-bebas text-white mb-2">STAY UPDATED</h5>
              <p className="text-gray-300 text-xs mb-3">Get notified about tournaments and events</p>
              <motion.button
                className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded text-sm font-medium transition-all"
                whileHover={{ scale: 1.02 }}
                onClick={() => window.open('https://wa.me/6285122999729', '_blank')}
              >
                Subscribe via WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Links */}
            <motion.div
              className="flex items-center space-x-6 mb-6 md:mb-0"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-gray-300 text-sm font-medium">Follow Us:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex items-center space-x-8 mb-6 md:mb-0"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="text-center">
                <div className="text-primary font-bebas text-lg">50+</div>
                <div className="text-gray-400 text-xs">Gaming Stations</div>
              </div>
              <div className="text-center">
                <div className="text-primary font-bebas text-lg">1000+</div>
                <div className="text-gray-400 text-xs">Happy Gamers</div>
              </div>
              <div className="text-center">
                <div className="text-primary font-bebas text-lg">24/7</div>
                <div className="text-gray-400 text-xs">Open Hours</div>
              </div>
            </motion.div>

            {/* Copyright */}
            <motion.div
              className="text-center md:text-right"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Tygron Playground & Lounge.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                All rights reserved. Game on!
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-8 pt-8 border-t border-gray-800"
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Trophy className="w-6 h-6 text-primary" />
            <span className="font-bebas text-xl text-white">Ready to Level Up?</span>
            <Trophy className="w-6 h-6 text-primary" />
          </div>
          <motion.button
            className="bg-gradient-to-r from-primary to-orange-400 hover:from-primary/90 hover:to-orange-400/90 text-white px-8 py-3 rounded-xl font-semibold glow-orange transition-all duration-300 inline-flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://wa.me/6285122999729', '_blank')}
          >
            <MessageCircle className="w-5 h-5" />
            Book Your Session Now
          </motion.button>
        </motion.div>
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary/40 rounded-full animate-pulse animation-delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse animation-delay-2000" />
      </div>
    </footer>
  );
};

export default Footer;