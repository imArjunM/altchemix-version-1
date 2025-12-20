import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Package,
  Droplets,
  Zap,
  Shirt,
  Heart,
  Home,
  Settings,
} from 'lucide-react';
import { staggerContainer, fadeUp, easePremium } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface Industry {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

const industries: Industry[] = [
  {
    id: 'packaging',
    icon: Package,
    title: 'Packaging',
    subtitle: 'Food, beverage & consumer goods',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    description:
      'Our packaging masterbatches are engineered for regulatory compliance and brand consistency. From transparent clarifiers to vibrant colours, we deliver solutions that meet the demanding requirements of food-contact applications while supporting your sustainability goals with PCR-compatible formulations.',
  },
  {
    id: 'pipes',
    icon: Droplets,
    title: 'Pipes & Agriculture',
    subtitle: 'Infrastructure & irrigation systems',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    description:
      'Pipes and agricultural applications demand exceptional durability. Our UV stabilizers and carbon black masterbatches are formulated for 50+ year lifespans, meeting stringent infrastructure standards while reducing maintenance costs.',
  },
  {
    id: 'wire-cable',
    icon: Zap,
    title: 'Wire & Cable',
    subtitle: 'Electrical & telecommunications',
    // image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d16?auto=format&fit=crop&w=800&q=80',
    image:
      'https://images.unsplash.com/photo-1584809923235-fabdba83d1df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Our wire and cable masterbatches meet the most stringent fire safety and electrical performance standards. We offer comprehensive colour coding systems and flame retardant packages that comply with international regulations.',
  },
  {
    id: 'fibers',
    icon: Shirt,
    title: 'Fibers & Textiles',
    subtitle: 'Technical & fashion applications',
    image:
      'https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=800&q=80',
    description:
      'From athletic wear to automotive textiles, our fiber-grade masterbatches deliver exceptional colour fastness and functional performance. Our spun-dye technology reduces water consumption by up to 90% compared to traditional dyeing.',
  },
  {
    id: 'healthcare',
    icon: Heart,
    title: 'Healthcare',
    subtitle: 'Medical devices & pharmaceutical',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80',
    description:
      'Healthcare applications require the highest quality and regulatory compliance. Our medical-grade masterbatches are manufactured in dedicated clean-room facilities with complete traceability and documentation.',
  },
  {
    id: 'appliances',
    icon: Home,
    title: 'Appliances',
    subtitle: 'Consumer & industrial equipment',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
    description:
      'Appliance manufacturers trust our masterbatches for premium aesthetics and durability. We offer a wide range of special effects including metallics, pearlescents, and soft-touch additives.',
  },
  {
    id: 'custom',
    icon: Settings,
    title: 'Custom OEM',
    subtitle: 'Tailored solutions for your needs',
    image:
      'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80',
    description:
      'Our technical team works directly with your engineers to develop custom masterbatch solutions. From concept to commercialization, we provide comprehensive support including pilot trials and application testing.',
  },
];

export const IndustryBrowser = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const activeIndustry = industries[activeIndex];

  return (
    <section
      id='industries'
      className='section-padding bg-surface-soft scroll-mt-header'
    >
      <div className='container-custom'>
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='max-w-2xl mb-12 lg:mb-16'
        >
          <motion.span
            variants={fadeUp}
            className='text-caption font-technical text-cta uppercase tracking-wider'
          >
            Industries We Serve
          </motion.span>
          <motion.h2 variants={fadeUp} className='mt-3 text-h2 text-primary'>
            Engineered Solutions for Every Application
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className='mt-4 text-body-lg text-muted-foreground'
          >
            From packaging to healthcare, our masterbatch and additive solutions
            are tailored to meet the unique demands of your industry.
          </motion.p>
        </motion.div>

        {/* Browser Layout */}
        <div className='grid lg:grid-cols-[320px_1fr] gap-2'>
          {/* Left Column - Industry List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easePremium }}
            className='bg-card rounded-xl shadow-premium overflow-hidden'
          >
            <div className='p-2'>
              {industries.map((industry, index) => (
                <motion.button
                  key={industry.id}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsExpanded(false);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{
                    x: 4,
                    backgroundColor: 'hsl(var(--surface-soft))',
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    'industry-item w-full text-left rounded-xl flex items-center gap-3 transition-colors',
                    activeIndex === index && 'active'
                  )}
                  aria-selected={activeIndex === index}
                  role='tab'
                >
                  <motion.div
                    animate={{
                      scale: activeIndex === index ? 1.1 : 1,
                      rotate: activeIndex === index ? 5 : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <industry.icon className='w-5 h-5 flex-shrink-0' />
                  </motion.div>
                  <div>
                    <span className='block font-medium'>{industry.title}</span>
                    <span className='block text-caption text-muted-foreground'>
                      {industry.subtitle}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Feature Card with Full Image Cover */}
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeIndustry.id}
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -30 }}
              transition={{ duration: 0.4, ease: easePremium }}
              className='relative rounded-xl shadow-premium overflow-hidden min-h-[400px] lg:min-h-[480px]'
            >
              {/* Full Cover Image */}
              <motion.img
                key={activeIndustry.image}
                src={activeIndustry.image}
                alt={activeIndustry.title}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: easePremium }}
                className='absolute inset-0 w-full h-full object-cover'
              />

              {/* Gradient Overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/20' />

              {/* Content Overlay */}
              <div className='relative h-full flex flex-col justify-end p-6 lg:p-8'>
                {/* Subtitle */}
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className='text-sm font-medium text-primary-foreground/70 mb-2'
                >
                  Why Materials Matter for
                </motion.span>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className='text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4'
                >
                  {activeIndustry.title}
                </motion.h3>

                {/* Expandable Description */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.p
                      initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
                      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                      transition={{ duration: 0.35, ease: easePremium }}
                      className='text-primary-foreground/90 text-base lg:text-lg leading-relaxed overflow-hidden'
                    >
                      {activeIndustry.description}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Learn More / Show Less Button */}
                <motion.button
                  onClick={() => setIsExpanded(!isExpanded)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className='inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground px-5 py-2.5 rounded-lg font-medium hover:bg-primary-foreground/30 transition-colors w-fit'
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? 'Show Less' : 'Learn More'}
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className='w-4 h-4' />
                  </motion.div>
                </motion.button>
              </div>

              {/* Animated border glow on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className='absolute inset-0 rounded-xl pointer-events-none'
                style={{
                  boxShadow: 'inset 0 0 0 2px hsl(var(--cta) / 0.3)',
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
