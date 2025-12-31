import { motion } from 'framer-motion';

import { fadeUp, staggerContainer } from '@/lib/motion';

// additiveCapabilities.ts
import {
  Sliders,
  Sun,
  Shield,
  Bug,
  Zap,
  Flame,
  Wind,
  Recycle,
  Settings,
} from 'lucide-react';

export const additiveCapabilities = [
  {
    category: 'Surface & Appearance',
    items: [
      {
        icon: Sliders,
        title: 'Slip Additives',
        desc: 'Improve surface smoothness and reduce friction.',
      },
      {
        icon: Wind,
        title: 'Anti-Fog Additives',
        desc: 'Maintain clarity in films and packaging.',
      },
      {
        icon: Zap,
        title: 'Anti-Static Additives',
        desc: 'Reduce static build-up for safer handling.',
      },
    ],
  },
  {
    category: 'Protection & Durability',
    items: [
      {
        icon: Sun,
        title: 'UV Stabilizers & Absorbers',
        desc: 'Protect plastics from sunlight degradation.',
      },
      {
        icon: Shield,
        title: 'VCI Additives',
        desc: 'Prevent corrosion in sensitive applications.',
      },
      {
        icon: Bug,
        title: 'Anti-Rodent Additives',
        desc: 'Safeguard cables and components from rodent damage.',
      },
    ],
  },
  {
    category: 'Safety & Performance',
    items: [
      {
        icon: Flame,
        title: 'Flame Retardants',
        desc: 'Ensure superior fire resistance and safety.',
      },
      {
        icon: Sliders,
        title: 'Processing Aids',
        desc: 'Optimize extrusion and molding efficiency.',
      },
      {
        icon: Zap,
        title: 'IV Boosters',
        desc: 'Enhance intrinsic viscosity for PET & polymers.',
      },
    ],
  },
  {
    category: 'Sustainability & Custom',
    items: [
      {
        icon: Recycle,
        title: 'Recycling Support Additives',
        desc: 'Odor absorbers & processability enhancers.',
      },
      {
        icon: Bug,
        title: 'Antimicrobial Solutions',
        desc: 'Protect surfaces from microbial growth.',
      },
      {
        icon: Settings,
        title: 'Tailor-Made Solutions',
        desc: 'Customized formulations for unique needs.',
      },
    ],
  },
];

export const AdditiveCapabilitiesSection = () => {
  return (
    <section className='section-padding bg-surface-soft'>
      <div className='container-custom'>
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='max-w-3xl mx-auto text-center mb-14'
        >
          <motion.span
            variants={fadeUp}
            className='text-caption uppercase tracking-wider text-cta'
          >
            Our Range Includes
          </motion.span>
          <motion.h2 variants={fadeUp} className='mt-3 text-h2 text-primary'>
            Advanced Additive Capabilities
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className='mt-4 text-body-lg text-muted-foreground'
          >
            Engineered additive technologies designed to enhance performance,
            durability, safety, and sustainability across polymer applications.
          </motion.p>
        </motion.div>

        {/* Capability Grid */}
        <div className='grid lg:grid-cols-2 gap-6'>
          {additiveCapabilities.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className='bg-card rounded-xl p-6 shadow-premium border border-border/50'
            >
              <h3 className='text-h4 text-primary mb-4'>{group.category}</h3>

              <div className='space-y-4'>
                {group.items.map((item) => (
                  <div
                    key={item.title}
                    className='flex gap-4 p-4 rounded-lg bg-surface-soft hover:bg-surface-soft/80 transition-colors'
                  >
                    <div className='flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center'>
                      <item.icon className='w-5 h-5 text-primary' />
                    </div>
                    <div>
                      <h4 className='text-body font-semibold text-primary'>
                        {item.title}
                      </h4>
                      <p className='text-caption text-muted-foreground'>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
