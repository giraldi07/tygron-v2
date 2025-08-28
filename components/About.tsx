'use client';

import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Trophy, Zap } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To create the ultimate gaming destination where players of all levels can compete, connect, and celebrate their passion for gaming.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building a vibrant gaming community through tournaments, events, and shared experiences that bring gamers together.',
    },
    {
      icon: Trophy,
      title: 'Competitive Spirit',
      description: 'Fostering healthy competition with regular tournaments, leaderboards, and prizes that recognize skill and dedication.',
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Tech',
      description: 'State-of-the-art gaming equipment, high-speed internet, and immersive setups for the best possible gaming experience.',
    },
  ];

  return (
    <section id="about" className="scroll-mt-24 py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-secondary-900/20" />
      
      {/* Background Elements */}
      <Parallax speed={5}>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </Parallax>
      
      <Parallax speed={-3}>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-2xl" />
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
            ABOUT <span className="text-gradient">TYGRON</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Welcome to Tygron Playground & Lounge, where gaming dreams come alive. We're more than just a gaming center – we're a hub for passionate gamers who want to experience the thrill of competition in a premium environment.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bebas text-white mb-6">
              THE ULTIMATE GAMING DESTINATION
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Since our founding, we've been dedicated to providing gamers with an unparalleled experience. Our state-of-the-art facility features the latest gaming technology, comfortable seating, and an atmosphere designed to bring out your competitive best.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Whether you're a casual player looking to unwind or a professional esports athlete honing your skills, Tygron offers the perfect environment to play, compete, and connect with like-minded gamers.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bebas text-primary mb-2">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bebas text-primary mb-2">100+</div>
                <div className="text-sm text-gray-400">Tournaments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bebas text-primary mb-2">5000+</div>
                <div className="text-sm text-gray-400">Members</div>
              </div>
            </div>
          </motion.div>

          {/* Image/Visual Element */}
          <Parallax speed={-5}>
            <motion.div
              className="relative"
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 backdrop-blur-sm border border-primary/10">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Trophy className="w-12 h-12 text-primary" />
                    </div>
                    <p className="text-gray-300 text-lg">Gaming Excellence</p>
                    <p className="text-sm text-gray-400 mt-2">Placeholder for gaming setup image</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Parallax>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-gradient-to-b from-secondary/20 to-secondary/5 rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-primary to-orange-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bebas text-white mb-3">{feature.title}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;