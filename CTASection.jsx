import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function CTASection() {
  return (
    <section className="py-24 bg-stone-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-stone-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-8"
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Transform
            <span className="block font-medium text-amber-400">Your Space?</span>
          </h2>

          <p className="text-lg text-stone-400 mb-10 max-w-xl mx-auto">
            Start your design journey today and discover the perfect style for your home with our AI-powered assistant.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("StyleQuiz")}>
              <Button 
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-stone-900 px-8 py-6 text-base rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20 group font-medium"
              >
                Take the Style Quiz
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to={createPageUrl("RoomPlanner")}>
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base rounded-full border-stone-600 text-stone-300 hover:bg-stone-800 hover:text-white transition-all duration-300"
              >
                Start a Project
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
