import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";

const inspirations = [
  {
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
    title: "Scandinavian Serenity",
    style: "Minimalist",
    size: "large"
  },
  {
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop",
    title: "Warm Neutrals",
    style: "Modern",
    size: "small"
  },
  {
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop",
    title: "Contemporary Chic",
    style: "Contemporary",
    size: "small"
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    title: "Natural Elegance",
    style: "Organic Modern",
    size: "medium"
  },
  {
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=400&fit=crop",
    title: "Urban Retreat",
    style: "Industrial",
    size: "medium"
  }
];

export default function InspirationGrid() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="text-sm font-medium text-amber-700 tracking-wider uppercase">Inspiration</span>
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 mt-4">
              Curated <span className="font-medium">Designs</span>
            </h2>
          </div>
          <Link to={createPageUrl("Gallery")} className="mt-6 md:mt-0">
            <Button variant="outline" className="rounded-full border-stone-300 hover:bg-stone-100 group">
              View All
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {inspirations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                item.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                item.size === 'medium' ? 'md:col-span-2' : ''
              }`}
            >
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-medium text-amber-300 tracking-wider uppercase">{item.style}</span>
                <h3 className="text-white text-lg font-medium mt-1">{item.title}</h3>
              </div>

              <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110">
                <Heart className="w-5 h-5 text-stone-600" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
