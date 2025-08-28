'use client';

import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import { Clock, Users, Crown, Zap, Check } from 'lucide-react';

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pricingPlans = [
    {
      icon: Clock,
      name: 'Hourly Play',
      price: '$5',
      period: 'per hour',
      description: 'Perfect for quick gaming sessions',
      features: [
        'Access to all gaming stations',
        'Latest games library',
        'Standard seating',
        'Free Wi-Fi',
        'Basic support'
      ],
      color: 'border-gray-600',
      popular: false,
    },
    {
      icon: Users,
      name: 'Daily Pass',
      price: '$25',
      period: 'per day',
      description: 'All-day gaming adventure',
      features: [
        'Unlimited gaming hours',
        'Priority station selection',
        'Comfortable gaming chairs',
        'Free snacks & drinks',
        'Tournament entry included',
        'Premium support'
      ],
      color: 'border-primary glow-orange',
      popular: true,
    },
    {
      icon: Crown,
      name: 'VIP Experience',
      price: '$50',
      period: 'per session',
      description: 'Luxury gaming in private suites',
      features: [
        'Private VIP gaming suite',
        'Personal gaming concierge',
        'Premium snacks & beverages',
        'Latest gaming equipment',
        'Private tournament access',
        'Streaming setup included',
        'Dedicated support team'
      ],
      color: 'border-yellow-500',
      popular: false,
    },
    {
      icon: Zap,
      name: 'Monthly Unlimited',
      price: '$150',
      period: 'per month',
      description: 'Ultimate gaming membership',
      features: [
        'Unlimited access 24/7',
        'All tournaments included',
        'VIP room discounts',
        'Priority booking',
        'Special member events',
        'Gaming merchandise',
        'Friend referral bonuses'
      ],
      color: 'border-secondary',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="scroll-mt-24 py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-secondary-900/30" />
      
      {/* Background Elements */}
      <Parallax speed={4}>
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </Parallax>
      
      <Parallax speed={-3}>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-2xl" />
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
            <span className="text-gradient">PRICING</span> PLANS
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Choose the perfect plan for your gaming adventure. From casual sessions to unlimited access.
          </motion.p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-gradient-to-b from-secondary/20 to-black/50 rounded-2xl p-6 border-2 ${plan.color} transition-all duration-500 group ${
                plan.popular ? 'scale-105 lg:scale-110' : 'hover:scale-105'
              }`}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: (index * 0.1) + 0.3 }}
                >
                  Most Popular
                </motion.div>
              )}

              {/* Icon */}
              <div className="text-center mb-6">
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary to-orange-400' 
                      : 'bg-gradient-to-r from-secondary to-secondary-700'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <plan.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bebas text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center">
                  <span className={`text-4xl font-bebas ${plan.popular ? 'text-primary' : 'text-white'}`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-sm ml-2">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-start text-sm text-gray-300"
                    initial={{ x: -10, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: (index * 0.1) + (featureIndex * 0.05) + 0.5 }}
                  >
                    <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary/90 text-white glow-orange'
                    : 'bg-secondary hover:bg-secondary/80 text-white hover:glow-blue'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/6285122999729', '_blank')}
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bebas text-white mb-4">
              SPECIAL OFFERS & DISCOUNTS
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bebas text-primary mb-2">Student Discount</div>
                <div className="text-gray-300 text-sm">20% off with valid student ID</div>
              </div>
              <div>
                <div className="text-2xl font-bebas text-primary mb-2">Group Bookings</div>
                <div className="text-gray-300 text-sm">15% off for groups of 4 or more</div>
              </div>
              <div>
                <div className="text-2xl font-bebas text-primary mb-2">Birthday Special</div>
                <div className="text-gray-300 text-sm">Free gaming session on your birthday</div>
              </div>
            </div>
            <motion.button
              className="mt-6 bg-transparent hover:bg-primary/20 border border-primary text-primary hover:text-white px-6 py-3 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open('https://wa.me/6285122999729', '_blank')}
            >
              Ask About Discounts
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;