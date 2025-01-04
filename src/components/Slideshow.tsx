import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useConfig } from '../hooks/useConfig';
import { motion, AnimatePresence } from 'framer-motion';

export default function Slideshow() {
    const { slogan } = useConfig('branding');
    const { slides } = useConfig('slideshow');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const goToPreviousSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Auto-switch slides every 5 seconds
    useEffect(() => {
        let interval;

        // Check scroll position
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsPaused(true); // Pause slideshow if scrolled down
            } else {
                setIsPaused(false); // Resume slideshow if at the top
            }
        };

        // Set up scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Start the slideshow interval if it's not paused
        if (!isPaused) {
            interval = setInterval(goToNextSlide, 5000); // 5000ms = 5 seconds
        } else {
            clearInterval(interval); // Stop the slideshow when paused
        }

        // Cleanup interval and scroll listener
        return () => {
            clearInterval(interval);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isPaused]);

    return (
        <div className="relative" style={{ height: '100vh', overflow: 'hidden' }}>
            <div className="absolute inset-0" style={{ height: '100%' }}>
                <AnimatePresence>
                    <motion.img
                        key={slides[currentSlide].image}
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].alt}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-primary/20" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-5xl md:text-6xl text-white mb-4"
                    >
                        {slogan.main}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="font-caption text-xl md:text-4xl text-white/90"
                    >
                        {slogan.sub}
                    </motion.p>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                        aria-label={`Go to slide ${index + 1}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>

            <button
                onClick={goToPreviousSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-white/50 rounded-full"
                aria-label="Previous slide"
            >
                <ChevronLeft className="text-xl text-white" />
            </button>

            <button
                onClick={goToNextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-white/50 rounded-full"
                aria-label="Next slide"
            >
                <ChevronRight className="text-xl text-white" />
            </button>
        </div>
    );
}
