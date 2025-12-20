import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { staggerContainer, fadeUp } from '@/lib/motion';
import { ContactForm } from './ContactForm';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Headquarters',
    value: '1234 Industrial Park Drive\nManufacturing District, MD 21000',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (800) 555-0199',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sales@Altchemix.com',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon-Fri: 8:00 AM - 6:00 PM EST',
  },
];

export const Contact = () => {
  return (
    <section id='contact' className='section-padding-bottom scroll-mt-header'>
      <div className='container-custom'>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='text-center max-w-2xl mx-auto mb-12 lg:mb-16'
        >
          <motion.span
            variants={fadeUp}
            className='text-caption font-technical text-cta uppercase tracking-wider'
          >
            Get in Touch
          </motion.span>
          <motion.h2 variants={fadeUp} className='mt-3 text-h2 text-primary'>
            Let's Discuss Your Requirements
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className='mt-4 text-body-lg text-muted-foreground'
          >
            Our technical team is ready to help you find the right masterbatch
            solution for your application. Request a sample or schedule a
            consultation.
          </motion.p>
        </motion.div>

        <div className='grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-12'>
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='bg-card rounded-2xl p-6 lg:p-8 shadow-premium border border-border/50'
          >
            <h3 className='text-h4 text-primary mb-6'>Send us a Message</h3>
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='space-y-6'
          >
            {/* Info Cards */}
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className='flex gap-4 bg-card rounded-xl p-5 shadow-premium-sm border border-border/50'
              >
                <div className='w-12 h-12 rounded-lg bg-surface-soft flex items-center justify-center flex-shrink-0'>
                  <info.icon className='w-5 h-5 text-primary' />
                </div>
                <div>
                  <span className='block text-caption font-medium text-muted-foreground mb-1'>
                    {info.label}
                  </span>
                  <span className='block text-body text-primary whitespace-pre-line'>
                    {info.value}
                  </span>
                </div>
              </div>
            ))}

            {/* Quick Actions */}
            <div className='bg-gradient-to-br from-primary to-accent-steel rounded-xl p-6 text-center'>
              <h4 className='text-h4 text-primary-foreground mb-2'>
                Need Immediate Assistance?
              </h4>
              <p className='text-caption text-primary-foreground/80 mb-4'>
                Speak directly with our technical sales team
              </p>
              <a
                href='tel:+18005550199'
                className='inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors'
              >
                <Phone className='w-4 h-4' />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
