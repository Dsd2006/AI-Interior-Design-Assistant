import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute top-20 right-20 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-stone-300/30 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-stone-200/50 mb-8"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-stone-600">AI-Powered Design Assistant</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-stone-800 leading-[1.1] tracking-tight mb-6">
              Transform Your
              <span className="block font-medium bg-gradient-to-r from-amber-700 via-stone-700 to-amber-800 bg-clip-text text-transparent">
                Living Space
              </span>
            </h1>

            <p className="text-lg md:text-xl text-stone-500 leading-relaxed mb-10 max-w-lg">
              Discover your unique design style and bring your vision to life with personalized AI recommendations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={createPageUrl("StyleQuiz")}>
                <Button 
                  size="lg"
                  className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-6 text-base rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-stone-300/30 group"
                >
                  Discover Your Style
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to={createPageUrl("Gallery")}>
                <Button 
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-base rounded-full border-stone-300 hover:bg-stone-100 transition-all duration-300"
                >
                  Explore Gallery
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Image Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-stone-300/30">
                  <img 
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=500&fit=crop"
                    alt="Modern living room"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl shadow-stone-300/20">
                  <img 
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=300&fit=crop"
                    alt="Minimalist bedroom"
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 pt-8"
              >
                <div className="rounded-3xl overflow-hidden shadow-xl shadow-stone-300/20">
                  <img 
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop"
                    alt="Scandinavian kitchen"
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-stone-300/30">
                  <img 
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=500&fit=crop"
                    alt="Cozy reading nook"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl shadow-stone-200/50 border border-stone-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-800">10,000+</p>
                  <p className="text-xs text-stone-500">Designs Created</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
