'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import { createPortal } from 'react-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Pricelist', href: 'pricing' },
    { name: 'Gallery', href: 'gallery' },
    { name: 'Events', href: 'events' },
    { name: 'Contact', href: 'contact' },
  ];

  const handleMobileMenuClick = () => {
    setIsOpen(false);
  };

  // Mobile menu component
  const MobileMenu = () => (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            className="fixed inset-0"
            style={{ 
              zIndex: 999999999,
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              touchAction: 'none'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar Menu */}
          <motion.div
            key="sidebar"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ 
              type: 'spring', 
              stiffness: 300, 
              damping: 30,
              duration: 0.3
            }}
            className="fixed top-0 right-0 w-3/4 sm:w-2/3 md:w-1/2"
            style={{ 
              zIndex: 999999999,
              height: '100vh',
              background: 'linear-gradient(180deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.95) 50%, rgba(0,0,0,0.92) 100%)',
              borderLeft: '1px solid rgba(251, 146, 60, 0.3)',
              touchAction: 'none',
              WebkitBackdropFilter: 'blur(20px)',
              backdropFilter: 'blur(20px)',
              boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Close button */}
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white p-2 hover:text-orange-500 transition-colors"
                style={{ zIndex: 999999999 }}
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex flex-col h-full pt-20 px-6 pb-6">
              {/* Navigation Links */}
              <div className="flex flex-col space-y-6 flex-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      delay: index * 0.1 + 0.2,
                      duration: 0.3
                    }}
                  >
                    <ScrollLink
                      to={link.href}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      onClick={handleMobileMenuClick}
                      className="text-white text-xl font-medium hover:text-orange-500 transition-colors duration-300 cursor-pointer block py-2"
                    >
                      {link.name}
                    </ScrollLink>
                  </motion.div>
                ))}
              </div>

              {/* Book Now Button */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <a
                  href="https://wa.me/6285122999729?text=Hi, saya ingin booking gaming session di Tygron!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block w-full text-center"
                  onClick={handleMobileMenuClick}
                >
                  Book Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-lg border-b border-orange-500/20'
            : 'bg-transparent'
        }`}
        style={{ zIndex: 999999999 }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-80}
              className="block w-32 cursor-pointer"
            >
              <Image
                src="/images/tygron-logo.png"
                alt="Tygron Logo"
                width={50}
                height={50}
                priority
                className="object-contain"
              />
            </ScrollLink>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.href}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-white hover:text-orange-500 transition-colors duration-300 font-medium cursor-pointer"
                >
                  {link.name}
                </ScrollLink>
              ))}
              <a
                href="https://wa.me/6285122999729?text=Hi, saya ingin booking gaming session di Tygron!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2 relative hover:text-orange-500 transition-colors"
              style={{ zIndex: 999999999 }}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Render Mobile Menu using Portal */}
      {mounted && typeof window !== 'undefined' && createPortal(
        <MobileMenu />, 
        document.body
      )}
    </>
  );
}