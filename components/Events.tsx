'use client';

import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import { Trophy, Calendar, Users, Gift, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';

const Events = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedEvent, setSelectedEvent] = useState(null);

  const upcomingEvents = [
    {
      id: 1,
      title: 'FIFA 24 Championship',
      date: '2024-02-15',
      time: '7:00 PM',
      prize: '$500',
      participants: '32 players',
      status: 'Registration Open',
      description: 'Join our monthly FIFA championship and compete for cash prizes and ultimate bragging rights.',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Sports',
      entryFee: '$25',
      requirements: ['FIFA 24 experience', 'Age 16+', 'Valid ID required'],
    },
    {
      id: 2,
      title: 'Call of Duty Tournament',
      date: '2024-02-22',
      time: '6:00 PM',
      prize: '$1000',
      participants: '16 teams',
      status: 'Registration Open',
      description: 'Squad up for the ultimate Call of Duty battle royale tournament with massive prizes.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'FPS',
      entryFee: '$50 per team',
      requirements: ['4-player team', 'COD experience', 'Discord required'],
    },
    {
      id: 3,
      title: 'Retro Gaming Night',
      date: '2024-02-28',
      time: '8:00 PM',
      prize: 'Retro prizes',
      participants: 'Open',
      status: 'Free Entry',
      description: 'Nostalgic gaming night featuring classic games and retro tournaments.',
      image: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Retro',
      entryFee: 'Free',
      requirements: ['All skill levels', 'Retro game knowledge'],
    },
    {
      id: 4,
      title: 'Smash Bros Ultimate',
      date: '2024-03-05',
      time: '5:00 PM',
      prize: '$750',
      participants: '64 players',
      status: 'Early Bird',
      description: 'The biggest fighting game tournament of the season with intense 1v1 battles.',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Fighting',
      entryFee: '$20',
      requirements: ['Nintendo Switch Pro Controller', 'Tournament experience'],
    },
  ];

  const eventCategories = ['All', 'Sports', 'FPS', 'Fighting', 'Retro', 'Special'];

  return (
    <section id="events" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-secondary-900/40" />
      
      {/* Background Elements */}
      <Parallax speed={3}>
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
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
            UPCOMING <span className="text-gradient">EVENTS</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Join our competitive tournaments and gaming events. Win prizes, make friends, and showcase your skills.
          </motion.p>

          {/* Event Categories */}
          <motion.div
            className="flex flex-wrap justify-center gap-2"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {eventCategories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-primary text-white glow-orange' 
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

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="group relative bg-gradient-to-b from-secondary/20 to-black/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-500"
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={inView ? { y: 0, opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.status === 'Registration Open' 
                      ? 'bg-green-500 text-white' 
                      : event.status === 'Free Entry'
                      ? 'bg-blue-500 text-white'
                      : 'bg-primary text-white'
                  }`}>
                    {event.status}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-secondary/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {event.category}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bebas text-white mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-300 text-sm">
                    <Calendar className="w-4 h-4 text-primary mr-2" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <Clock className="w-4 h-4 text-primary mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <Trophy className="w-4 h-4 text-primary mr-2" />
                    {event.prize} Prize
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <Users className="w-4 h-4 text-primary mr-2" />
                    {event.participants}
                  </div>
                </div>

                {/* Entry Fee */}
                <div className="bg-primary/10 rounded-lg p-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Entry Fee:</span>
                    <span className="text-primary font-semibold">{event.entryFee}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    className="flex-1 bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold transition-all duration-300 glow-orange"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open('https://wa.me/6285122999729', '_blank')}
                  >
                    Register Now
                  </motion.button>
                  <motion.button
                    className="bg-secondary/50 hover:bg-secondary text-white px-4 py-3 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tournament Rules & Info */}
        <motion.div
          className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20 mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bebas text-white mb-2">Fair Play</h4>
              <p className="text-gray-300 text-sm">All tournaments follow strict fair play rules and anti-cheat policies.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bebas text-white mb-2">Great Prizes</h4>
              <p className="text-gray-300 text-sm">Cash prizes, gaming gear, and exclusive Tygron merchandise for winners.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bebas text-white mb-2">Community</h4>
              <p className="text-gray-300 text-sm">Join our growing esports community and make lasting gaming friendships.</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bebas text-white mb-4">
            READY TO COMPETE?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Don't miss out on our upcoming tournaments. Register early to secure your spot and get the best pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg glow-orange transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/6285122999729', '_blank')}
            >
              Register for Events
            </motion.button>
            <motion.button
              className="bg-transparent hover:bg-secondary/50 text-white border border-secondary hover:border-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Tournament Calendar
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;