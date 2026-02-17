import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, ZoomOut, Maximize2, X, RotateCw, Move } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function ImageViewer360({ images, currentIndex, onClose }) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  useEffect(() => {
    // Reset on image change
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setRotation(0);
  }, [currentIndex]);

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY * -0.01;
    const newScale = Math.min(Math.max(0.5, scale + delta), 4);
    setScale(newScale);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const zoomIn = () => setScale(Math.min(scale + 0.3, 4));
  const zoomOut = () => setScale(Math.max(scale - 0.3, 0.5));
  const rotate = () => setRotation((rotation + 90) % 360);
  const resetView = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setRotation(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-stone-900/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <div 
        className="relative w-full h-full flex items-center justify-center p-6"
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Image */}
        <motion.img
          ref={imageRef}
          src={images[currentIndex]}
          alt="Design visualization"
          className={`max-w-full max-h-full object-contain ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale}) rotate(${rotation}deg)`,
            transition: isDragging ? 'none' : 'transform 0.1s ease-out'
          }}
          drag
        />

        {/* Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-xl">
          <Button
            size="sm"
            variant="ghost"
            onClick={zoomOut}
            className="rounded-full h-10 w-10 p-0"
          >
            <ZoomOut className="w-5 h-5 text-stone-700" />
          </Button>
          
          <div className="px-3 text-sm font-medium text-stone-700 min-w-[60px] text-center">
            {Math.round(scale * 100)}%
          </div>
          
          <Button
            size="sm"
            variant="ghost"
            onClick={zoomIn}
            className="rounded-full h-10 w-10 p-0"
          >
            <ZoomIn className="w-5 h-5 text-stone-700" />
          </Button>

          <div className="w-px h-6 bg-stone-300 mx-1" />

          <Button
            size="sm"
            variant="ghost"
            onClick={rotate}
            className="rounded-full h-10 w-10 p-0"
          >
            <RotateCw className="w-5 h-5 text-stone-700" />
          </Button>

          <Button
            size="sm"
            variant="ghost"
            onClick={resetView}
            className="rounded-full h-10 w-10 p-0"
          >
            <Maximize2 className="w-5 h-5 text-stone-700" />
          </Button>
        </div>

        {/* Close Button */}
        <Button
          size="sm"
          variant="ghost"
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full h-10 w-10 p-0 bg-white/10 hover:bg-white/20 text-white"
        >
          <X className="w-6 h-6" />
        </Button>

        {/* Instructions */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 text-xs text-stone-600">
          <p className="font-medium mb-1 flex items-center gap-2">
            <Move className="w-3 h-3" />
            Interactive View
          </p>
          <p>Drag to move • Scroll to zoom • Click rotate</p>
        </div>

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-4 right-20 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-stone-700">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </motion.div>
  );
}
