import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function QuizQuestion({ question, options, selected, onSelect, questionNumber, totalQuestions }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-stone-500">Question {questionNumber} of {totalQuestions}</span>
          <span className="text-sm font-medium text-amber-700">{Math.round((questionNumber / totalQuestions) * 100)}%</span>
        </div>
        <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Question */}
      <h2 className="text-2xl md:text-3xl font-light text-stone-800 mb-8">
        {question}
      </h2>

      {/* Options */}
      <div className="grid gap-4">
        {options.map((option, index) => (
          <motion.button
            key={option.value}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onSelect(option.value)}
            className={`group relative p-5 rounded-2xl border-2 text-left transition-all duration-300 ${
              selected === option.value
                ? 'border-amber-500 bg-amber-50'
                : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50'
            }`}
          >
            <div className="flex items-center gap-4">
              {option.image && (
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <img 
                    src={option.image} 
                    alt={option.label}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="flex-1">
                <p className="font-medium text-stone-800">{option.label}</p>
                {option.description && (
                  <p className="text-sm text-stone-500 mt-1">{option.description}</p>
                )}
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                selected === option.value
                  ? 'border-amber-500 bg-amber-500'
                  : 'border-stone-300 group-hover:border-stone-400'
              }`}>
                {selected === option.value && (
                  <Check className="w-4 h-4 text-white" />
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
