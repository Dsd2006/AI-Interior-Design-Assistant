import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Share2, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const styleImages = {
  modern: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
  minimalist: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
  scandinavian: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
  industrial: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=600&fit=crop",
  bohemian: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&h=600&fit=crop",
  traditional: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
  coastal: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
  mid_century: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&h=600&fit=crop"
};

const styleColors = {
  modern: ["#2D3436", "#636E72", "#DFE6E9", "#FFEAA7"],
  minimalist: ["#FFFFFF", "#F5F5F5", "#333333", "#D4C5B9"],
  scandinavian: ["#FFFFFF", "#E8DED2", "#9CAF88", "#5D4E37"],
  industrial: ["#2C2C2C", "#6B6B6B", "#C4A77D", "#E8E8E8"],
  bohemian: ["#C17767", "#D4A574", "#8B9A7D", "#E8DDD4"],
  traditional: ["#2C3E50", "#8B4513", "#D4AF37", "#F5F5DC"],
  coastal: ["#FFFFFF", "#87CEEB", "#DEB887", "#2E4057"],
  mid_century: ["#D35400", "#27AE60", "#2980B9", "#F1C40F"]
};

export default function StyleResult({ result, onRetake }) {
  const primaryStyle = result?.primary_style || 'modern';
  const formattedStyle = primaryStyle.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
  const colors = styleColors[primaryStyle] || styleColors.modern;
  const image = styleImages[primaryStyle] || styleImages.modern;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto"
    >
      {/* Result Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6"
        >
          <span className="text-sm font-medium text-amber-800">Your Design Style</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-6xl font-light text-stone-800"
        >
          You're <span className="font-semibold bg-gradient-to-r from-amber-700 to-stone-700 bg-clip-text text-transparent">{formattedStyle}</span>
        </motion.h1>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-3xl overflow-hidden shadow-2xl shadow-stone-300/30"
        >
          <img 
            src={image}
            alt={formattedStyle}
            className="w-full h-80 md:h-full object-cover"
          />
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col justify-center"
        >
          <p className="text-lg text-stone-600 leading-relaxed mb-8">
            {result?.style_description || `The ${formattedStyle} style emphasizes clean lines, functional beauty, and a sophisticated aesthetic. Your space reflects a thoughtful approach to design where every element serves a purpose while maintaining visual harmony.`}
          </p>

          {/* Color Palette */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-4">Your Color Palette</h3>
            <div className="flex gap-3">
              {colors.map((color, index) => (
                <motion.div
                  key={color}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                  className="group relative"
                >
                  <div 
                    className="w-14 h-14 rounded-2xl shadow-lg cursor-pointer hover:scale-110 transition-transform"
                    style={{ backgroundColor: color }}
                  />
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-stone-500 whitespace-nowrap">{color}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Secondary Style */}
          {result?.secondary_style && (
            <div className="p-4 bg-stone-50 rounded-2xl mb-8">
              <p className="text-sm text-stone-500">
                <span className="font-medium text-stone-700">Secondary Influence:</span>{' '}
                {result.secondary_style.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link to={createPageUrl("RoomPlanner")}>
          <Button 
            size="lg"
            className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-6 text-base rounded-full group w-full sm:w-auto"
          >
            Start Designing
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
        <Link to={createPageUrl("Gallery") + `?style=${primaryStyle}`}>
          <Button 
            size="lg"
            variant="outline"
            className="px-8 py-6 text-base rounded-full border-stone-300 w-full sm:w-auto"
          >
            Browse {formattedStyle} Designs
          </Button>
        </Link>
        <Button 
          size="lg"
          variant="ghost"
          onClick={onRetake}
          className="px-8 py-6 text-base rounded-full text-stone-600 w-full sm:w-auto"
        >
          <RefreshCw className="mr-2 w-5 h-5" />
          Retake Quiz
        </Button>
      </motion.div>
    </motion.div>
  );
}
