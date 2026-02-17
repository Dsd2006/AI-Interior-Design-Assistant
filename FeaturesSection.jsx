import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Wand2, Camera, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const features = [
  {
    icon: Wand2,
    title: "Style Discovery Quiz",
    description: "Uncover your unique design aesthetic through our curated questionnaire",
    color: "from-amber-100 to-amber-200",
    iconColor: "text-amber-700",
    link: "StyleQuiz"
  },
  {
    icon: Camera,
    title: "Room Analyzer",
    description: "Upload photos and get AI-powered design suggestions with interactive 360° image viewer",
    color: "from-stone-100 to-stone-200",
    iconColor: "text-stone-700",
    link: "RoomPlanner"
  },
  {
    icon: Palette,
    title: "Color Palette Studio",
    description: "Generate harmonious color schemes that elevate your interiors",
    color: "from-rose-100 to-rose-200",
    iconColor: "text-rose-700",
    link: "ColorPalette"
  },
  {
    icon: Lightbulb,
    title: "Curated Inspiration",
    description: "Browse thousands of professionally designed spaces for endless ideas",
    color: "from-teal-100 to-teal-200",
    iconColor: "text-teal-700",
    link: "Gallery"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-amber-700 tracking-wider uppercase">Features</span>
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mt-4 mb-6">
            Design Made <span className="font-medium">Effortless</span>
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg">
            Our AI-powered tools help you visualize, plan, and execute your dream interior design projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={createPageUrl(feature.link)}>
                <div className="group h-full p-8 rounded-3xl bg-stone-50 hover:bg-white border border-transparent hover:border-stone-200 hover:shadow-xl hover:shadow-stone-200/30 transition-all duration-500 cursor-pointer">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-medium text-stone-800 mb-3">{feature.title}</h3>
                  <p className="text-stone-500 leading-relaxed mb-4">{feature.description}</p>
                  <div className="flex items-center text-amber-700 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
