import { motion } from 'framer-motion';
import {
  Target,
  Award,
  Leaf,
  Wrench,
  ShieldCheck,
  Handshake,
  Zap,
} from 'lucide-react';
import { staggerContainer, fadeUp, easePremium } from '@/lib/motion';

export const AboutUs = () => {
  return (
    <section
      id='about'
      className='section-padding-top bg-background scroll-mt-header'
    >
      <div className='container-custom space-y-24'>
        {/* ================= WHY CHOOSE US ================= */}
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='max-w-3xl'
        >
          <motion.span
            variants={fadeUp}
            className='text-caption font-technical text-cta uppercase tracking-wider'
          >
            Why Choose Us
          </motion.span>
          <motion.h2 variants={fadeUp} className='mt-3 text-h2 text-primary'>
            Empowering Plastics for a Sustainable Tomorrow
          </motion.h2>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6'>
          <WhyCard
            icon={Target}
            title='Custom Color Matching'
            desc='Tailored solutions delivered with speed and precision to meet your unique requirements.'
          />
          <WhyCard
            icon={Award}
            title='Premium Global Quality'
            desc='Uncompromising standards backed by international certifications and benchmarks.'
          />
          <WhyCard
            icon={Leaf}
            title='Sustainable Innovation'
            desc='Eco-friendly additive technologies supporting circularity and reduced impact.'
          />
          <WhyCard
            icon={Wrench}
            title='Technical Expertise'
            desc='Application-driven support to optimize performance and unlock new possibilities.'
          />
        </div>

        {/* ================= MISSION & VISION ================= */}
        <div className='grid lg:grid-cols-2 gap-6'>
          <StatementCard
            label='Our Mission'
            text='To revolutionize plastics by delivering sustainable, high-performance masterbatch and additive technologies that enable superior aesthetics, functionality, and cost-efficiency—while shaping a greener future.'
          />
          <StatementCard
            label='Our Vision'
            text='To become the most trusted masterbatch and additive solutions partner across Asia-Pacific and beyond—renowned for pioneering innovation, uncompromising reliability, and leadership in sustainable practices.'
          />
        </div>

        {/* ================= CORE VALUES ================= */}
        {/* <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <motion.h3 variants={fadeUp} className='text-h3 text-primary mb-8'>
            Our Core Values
          </motion.h3>

          <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6'>
            <ValueCard
              icon={ShieldCheck}
              title='Integrity'
              desc='Honesty and transparency in every decision and partnership.'
            />
            <ValueCard
              icon={Leaf}
              title='Responsibility'
              desc='Commitment to sustainable practices that protect our planet.'
            />
            <ValueCard
              icon={Award}
              title='Excellence'
              desc='Relentless pursuit of quality, performance, and innovation.'
            />
            <ValueCard
              icon={Handshake}
              title='Collaboration'
              desc='Working together to achieve shared success.'
            />
            <ValueCard
              icon={Zap}
              title='Agility'
              desc='Adapting quickly to evolving markets and technologies.'
            />
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

/* ================= COMPONENTS ================= */

const WhyCard = ({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, ease: easePremium }}
    whileHover={{ y: -6 }}
    className='group bg-card rounded-xl p-6 shadow-premium hover:shadow-premium-xl transition-all border border-border/50'
  >
    <div className='w-12 h-12 rounded-lg bg-cta/15 flex items-center justify-center mb-4 text-cta'>
      <Icon className='w-6 h-6' />
    </div>
    <h4 className='text-body font-semibold text-primary mb-2'>{title}</h4>
    <p className='text-caption text-muted-foreground'>{desc}</p>
  </motion.div>
);

const StatementCard = ({ label, text }: { label: string; text: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: easePremium }}
    className='bg-surface-soft rounded-xl p-8 border border-border/50'
  >
    <span className='text-caption uppercase tracking-wider text-cta'>
      {label}
    </span>
    <p className='mt-4 text-body-lg text-primary leading-relaxed'>“{text}”</p>
  </motion.div>
);

const ValueCard = ({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, ease: easePremium }}
    className='bg-card rounded-xl p-6 border border-border/50'
  >
    <div className='w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4 text-primary'>
      <Icon className='w-5 h-5' />
    </div>
    <h4 className='text-body font-semibold text-primary mb-1'>{title}</h4>
    <p className='text-caption text-muted-foreground'>{desc}</p>
  </motion.div>
);
