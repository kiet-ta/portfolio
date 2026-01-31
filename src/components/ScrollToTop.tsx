import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, y: -8 }}
                    exit={{ opacity: 0, scale: 0.8, y: 0 }}
                    onClick={scrollToTop}
                    className="fixed bottom-20 right-8 p-3 bg-cyan-600 text-white rounded-full shadow-lg hover:bg-cyan-500 transition-colors z-[9999] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 border border-white/20"
                    aria-label="Scroll to top"
                >
                    <ArrowUpIcon className="w-6 h-6" />
                </motion.button>
            )
            }
        </AnimatePresence >
    );
};

export default ScrollToTop;
