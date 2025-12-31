import { motion } from 'framer-motion';
import {
  Palette,
  FlaskConical,
  ShieldCheck,
  Leaf,
  Lightbulb,
  Users,
} from 'lucide-react';
import { staggerContainer, fadeUp, easePremium } from '@/lib/motion';
import heroImage from '@/assets/hero-manufacturing.jpg';

export const ServicesInnovation = () => {
  return (
    <section
      id='services-innovation'
      className='section-padding bg-surface-soft scroll-mt-header'
    >
      <div className='container-custom'>
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='max-w-2xl mb-14'
        >
          <motion.span
            variants={fadeUp}
            className='text-caption font-technical text-cta uppercase tracking-wider'
          >
            Services & Innovation
          </motion.span>
          <motion.h2 variants={fadeUp} className='mt-3 text-h2 text-primary'>
            Driving Progress Through Expertise
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className='mt-4 text-body-lg text-muted-foreground'
          >
            We combine technical depth, advanced R&D, and collaborative
            innovation to deliver future-ready masterbatch and additive
            solutions.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'>
          {/* HERO — Innovation Platform */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easePremium }}
            whileHover={{ scale: 1.02 }}
            className='group relative rounded-xl overflow-hidden shadow-premium hover:shadow-premium-xl transition-all lg:col-span-2 min-h-[300px]'
          >
            <motion.img
              src={heroImage}
              alt='Innovation Platform'
              className='absolute inset-0 w-full h-full object-cover'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: easePremium }}
            />
            <div className='absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent' />
            <div className='relative h-full flex flex-col justify-end p-6 lg:p-8'>
              <div className='flex items-center gap-3 mb-3'>
                <div className='w-10 h-10 rounded-xl bg-primary-foreground/15 backdrop-blur flex items-center justify-center'>
                  <Lightbulb className='w-5 h-5 text-primary-foreground' />
                </div>
                <span className='badge-cert border-primary-foreground/30 text-black'>
                  Innovation Platform
                </span>
              </div>
              <h3 className='text-2xl lg:text-3xl font-bold text-primary-foreground mb-2'>
                Advanced R&D & Smart Technologies
              </h3>
              <p className='text-primary-foreground/80 max-w-xl'>
                Continuous research, smart additive technologies, and scalable
                development pipelines designed to solve tomorrow’s material
                challenges.
              </p>
            </div>
          </motion.div>

          {/* Custom Color Development */}
          <ServiceCard
            icon={Palette}
            title='Custom Color Development'
            desc='Tailored formulations to match your brand identity with precision, consistency, and speed.'
          />

          {/* Rapid Prototyping */}
          <ServiceCard
            icon={FlaskConical}
            title='Rapid Prototyping & Sampling'
            desc='Accelerating product development cycles through fast sampling and application testing.'
          />

          {/* Regulatory & Compliance */}
          <ServiceCard
            icon={ShieldCheck}
            title='Regulatory & Compliance'
            desc='Global compliance support across FDA, EU, REACH, and sustainability standards.'
          />

          {/* Sustainability & Collaboration */}
          <ServiceCard
            icon={Leaf}
            title='Sustainable & Collaborative Innovation'
            desc='Eco-focused formulations co-created with customers for circular, low-impact solutions.'
            accent='success'
          />
        </div>
      </div>
    </section>
  );
};

/* -----------------------------
   Reusable Service Card
----------------------------- */
const ServiceCard = ({
  icon: Icon,
  title,
  desc,
  accent = 'cta',
}: {
  icon: any;
  title: string;
  desc: string;
  accent?: 'cta' | 'success';
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: easePremium }}
    whileHover={{ y: -8 }}
    className='group bg-card rounded-xl p-6 lg:p-8 shadow-premium hover:shadow-premium-xl transition-all border border-border/50'
  >
    <div
      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6
        ${
          accent === 'success'
            ? 'bg-success/20 text-success'
            : 'bg-cta/15 text-cta'
        }
      `}
    >
      <Icon className='w-7 h-7' />
    </div>
    <h3 className='text-h4 text-primary mb-3 group-hover:text-cta transition-colors'>
      {title}
    </h3>
    <p className='text-body text-muted-foreground'>{desc}</p>
  </motion.div>
);
