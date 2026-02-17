import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Sofa, Layout, Ruler } from 'lucide-react';

const highlights = [
  {
    icon: Layout,
    title: "Space Planning",
    description: "Optimal furniture arrangement and traffic flow",
    color: "from-blue-100 to-blue-200",
    iconColor: "text-blue-700"
  },
  {
    icon: Sofa,
    title: "Furniture Guide",
    description: "Specific pieces with dimensions and shopping links",
    color: "from-amber-100 to-amber-200",
    iconColor: "text-amber-700"
  },
  {
    icon: Lightbulb,
    title: "Light Optimization",
    description: "Layered lighting plan for perfect ambiance",
    color: "from-yellow-100 to-yellow-200",
    iconColor: "text-yellow-700"
  },
  {
    icon: Ruler,
    title: "Measurements",
    description: "Exact dimensions and spacing recommendations",
    color: "from-green-100 to-green-200",
    iconColor: "text-green-700"
  }
];

export default function FeatureHighlights() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {highlights.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-2xl p-5 shadow-lg border border-stone-100 text-center"
        >
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-3`}>
            <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
          </div>
          <h3 className="font-medium text-stone-800 text-sm mb-1">{feature.title}</h3>
          <p className="text-xs text-stone-500 leading-relaxed">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
