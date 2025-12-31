import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import {
  staggerContainer,
  fadeUp,
  slideInRight,
  textRevealMask,
} from '@/lib/motion';
import heroImage from '@/assets/hero-manufacturing.jpg';

export const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden noise-overlay'>
      {/* Background Grid Pattern */}
      <div className='absolute inset-0 grid-pattern opacity-40' />

      {/* Vignette */}
      <div className='absolute inset-0 vignette pointer-events-none' />

      <div className='container-custom relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-8 items-center'>
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial='hidden'
            animate='visible'
            className='space-y-6 lg:space-y-8'
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className='badge-cert'>
                <span className='w-2 h-2 rounded-full bg-success animate-pulse' />
                ISO 9001:2015 Certified
              </span>
            </motion.div>

            {/* Headline with mask reveal */}
            <motion.div variants={textRevealMask} className='overflow-hidden'>
              <h1 className='text-xl md:text-5xl  font-bold text-primary'>
                Innovative Color & Additive Formulations for Responsible
                Plastics
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className='text-body-lg text-muted-foreground max-w-lg'
            >
              Shaping a Sustainable Future Through Smart Material Science
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className='flex flex-wrap gap-4'>
              <motion.a
                href='#contact'
                className='btn-primary group'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Sales
                <ArrowRight className='w-4 h-4 ml-2 transition-transform group-hover:translate-x-1' />
              </motion.a>
              <motion.a
                href='#resources'
                className='btn-secondary group'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className='w-4 h-4 mr-2' />
                Download Brochure
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={fadeUp}
              className='pt-8 border-t border-border/50'
            >
              <p className='text-caption text-muted-foreground mb-4'>
                Trusted by leading manufacturers worldwide
              </p>
              <div className='flex flex-wrap gap-6 items-center opacity-50'>
                {['Global OEM', 'PackCorp', 'TechPipe', 'FiberMax'].map(
                  (name) => (
                    <span
                      key={name}
                      className='font-technical text-sm font-medium text-muted-foreground tracking-wider'
                    >
                      {name}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={slideInRight}
            initial='hidden'
            animate='visible'
            className='relative'
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className='relative'
            >
              {/* Image Container */}
              <div className='relative rounded-2xl overflow-hidden shadow-premium-xl navy-overlay'>
                <img
                  src={heroImage}
                  alt='Modern plastics manufacturing facility with twin-screw extruders'
                  className='w-full h-auto object-cover aspect-[4/3]'
                  loading='eager'
                />
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className='absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-premium-lg border border-border/50'
              >
                <div className='flex items-center gap-4'>
                  <div>
                    <p className='text-3xl font-bold text-primary'>25+</p>
                    <p className='text-caption text-muted-foreground'>
                      Years Experience
                    </p>
                  </div>
                  <div className='w-px h-12 bg-border' />
                  <div>
                    <p className='text-3xl font-bold text-primary'>500+</p>
                    <p className='text-caption text-muted-foreground'>
                      Custom Formulations
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Element */}
              <div className='absolute -top-4 -right-4 w-24 h-24 rounded-full bg-cta/10 blur-2xl' />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className='absolute bottom-8 left-1/2 -translate-x-1/2'
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className='w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2'
        >
          <div className='w-1 h-2 bg-muted-foreground/50 rounded-full' />
        </motion.div>
      </motion.div>
    </section>
  );
};
