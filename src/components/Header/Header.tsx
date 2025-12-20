import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import BrandLogo from '@/common/brand-logo';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: 'Products', href: '#products' },
  { label: 'Industries', href: '#industries' },
  { label: 'Technology', href: '#technology' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Smart hide/show behavior
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      // Glass effect on scroll
      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: [0.12, 0.9, 0.28, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'glass py-3' : 'bg-transparent py-5'
        )}
      >
        <div className='container-custom flex items-center justify-between'>
          {/* Logo */}
          <a href='/' className='flex items-center gap-2 group'>
            <BrandLogo />
          </a>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center gap-1'>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className='px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-surface-soft'
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className='hidden lg:flex items-center gap-3'>
            <a href='#contact' className='btn-primary'>
              Contact Sales
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='lg:hidden p-2 rounded-lg hover:bg-surface-soft transition-colors'
            aria-label='Toggle menu'
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className='w-6 h-6 text-primary' />
            ) : (
              <Menu className='w-6 h-6 text-primary' />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className='fixed inset-0 z-40 lg:hidden'
          >
            <div
              className='absolute inset-0 bg-primary/20 backdrop-blur-sm'
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.12, 0.9, 0.28, 1] }}
              className='absolute top-0 right-0 bottom-0 w-80 max-w-[calc(100%-60px)] bg-background shadow-premium-xl'
            >
              <div className='p-6 pt-20 flex flex-col gap-2'>
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='py-3 px-4 text-lg font-medium text-primary hover:bg-surface-soft rounded-lg transition-colors'
                  >
                    {item.label}
                  </motion.a>
                ))}
                <div className='pt-6 mt-4 border-t border-border'>
                  <a href='#contact' className='btn-primary w-full text-center'>
                    Contact Sales
                  </a>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
