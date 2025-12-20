import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';

export const MobileStickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (roughly 500px)
      setIsVisible(window.scrollY > 500 && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.12, 0.9, 0.28, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
        >
          <div className="bg-card/95 backdrop-blur-md border-t border-border shadow-premium-xl p-4">
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="flex-1 btn-primary text-center"
                onClick={() => setIsDismissed(true)}
              >
                <MessageSquare className="w-4 h-4 mr-2 inline" />
                Request a Quote
              </a>
              <button
                onClick={() => setIsDismissed(true)}
                className="p-2 rounded-lg hover:bg-surface-soft transition-colors"
                aria-label="Dismiss"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
