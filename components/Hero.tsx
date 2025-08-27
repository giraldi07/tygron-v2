'use client';

import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { Play, Trophy } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import Image from 'next/image';


const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-secondary-900 to-black">
        <ParticleBackground />
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>

      <Parallax speed={-10} className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Logo Animation */}
          {/* <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 mb-6">
              <Image
                src="/images/tygron-logo.png"
                alt="Tygron Logo"
                width={128}
                height={128}
                className="object-contain"
                priority
              />
            </div>
          </motion.div> */}

          {/* Main Title */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bebas text-white leading-none mb-4"
          >
            <span className="text-gradient">PLAYGROUND & LOUNGE</span>
            {/* <br />
            <span className="text-4xl md:text-5xl lg:text-6xl">PLAYGROUND & LOUNGE</span> */}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-2 font-light"
          >
            The Biggest Playground in Town
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg text-primary mb-12 font-medium"
          >
            Premium Gaming • Competitive Tournaments • Ultimate Experience
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={() => window.open('https://wa.me/6285122999729', '_blank')}
              className="group bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 glow-orange flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Book Now
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('#events')}
              className="group bg-transparent hover:bg-secondary/50 text-white border-2 border-secondary hover:border-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Trophy className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Join Tournament
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bebas text-primary">50+</div>
              <div className="text-sm text-gray-400">Gaming Stations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bebas text-primary">24/7</div>
              <div className="text-sm text-gray-400">Open Hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bebas text-primary">1000+</div>
              <div className="text-sm text-gray-400">Happy Gamers</div>
            </div>
          </motion.div>
        </div>
      </Parallax>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;