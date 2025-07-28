'use client';
import { motion } from 'framer-motion';
import {
  AiOutlineTrophy,
  AiOutlineCalendar,
  AiOutlineUsergroupAdd,
  AiOutlineMessage,
  AiOutlineBarChart,
  AiOutlineAim,
} from 'react-icons/ai';

const features = [
  {
    title: 'Highlights & Achievements',
    description: 'Showcase your best moments and track progress with our achievement system.',
    tag: 'Popular',
    Icon: AiOutlineTrophy,
    tagColor: 'bg-purple-100 text-purple-700',
  },
  {
    title: 'Upcoming Competitions',
    description: 'Discover and participate in competitions without cost. Never miss an opportunity.',
    tag: 'Free',
    Icon: AiOutlineCalendar,
    tagColor: 'bg-green-100 text-green-700',
  },
  {
    title: 'Player Collaboration',
    description: 'Connect and collaborate with athletes globally. Build your network.',
    tag: 'New',
    Icon: AiOutlineUsergroupAdd,
    tagColor: 'bg-yellow-100 text-yellow-700',
  },
  {
    title: 'AI Sports Chatbot',
    description: 'Get specialized guidance and tips from our AI chatbot designed for sports.',
    tag: 'AI Powered',
    Icon: AiOutlineMessage,
    tagColor: 'bg-indigo-100 text-indigo-700',
  },
  {
    title: 'Performance Analytics',
    description: 'Track your performance with analytics and insights to improve your game.',
    tag: 'Pro',
    Icon: AiOutlineBarChart,
    tagColor: 'bg-red-100 text-red-700',
  },
  {
    title: 'Goal Setting',
    description: 'Set and achieve sports goals with our structured goal-setting framework.',
    tag: 'Essential',
    Icon: AiOutlineAim,
    tagColor: 'bg-blue-100 text-blue-700',
  },
];

const FeatureCard = ({ title, description, tag, Icon, tagColor, index }) => (
  <motion.div
    className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl border border-gray-100 transition-transform duration-300"
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    whileHover={{ scale: 1.05 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center justify-between mb-4">
      <div className="bg-blue-50 p-3 rounded-xl">
        <Icon className="text-blue-600 w-6 h-6" />
      </div>
      {tag && (
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${tagColor}`}>
          {tag}
        </span>
      )}
    </div>
    <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const FeaturesSection = () => {
  return (
    <section className="min-h-screen py-20 px-4 md:px-12 lg:px-24 bg-gradient-to-br from-[#f0f4ff] to-[#ffffff]">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Main <span className="text-blue-600">Features</span>
        </h2>
        <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
          Everything you need to take your sports career to the next level — in one place.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, idx) => (
          <FeatureCard key={idx} index={idx} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
