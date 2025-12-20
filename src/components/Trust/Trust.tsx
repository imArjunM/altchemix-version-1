import { motion } from 'framer-motion';
import { Quote, Award, CheckCircle } from 'lucide-react';
import { staggerContainer, fadeUp } from '@/lib/motion';

const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management' },
  { name: 'ISO 14001:2015', description: 'Environmental Management' },
  { name: 'REACH', description: 'EU Chemical Compliance' },
  { name: 'RoHS', description: 'Hazardous Substances' },
];

const testimonials = [
  {
    quote:
      "Altchemix's technical support and colour consistency have been exceptional. They've become an integral part of our supply chain.",
    author: 'Sarah Chen',
    role: 'Procurement Director',
    company: 'PackCorp Industries',
  },
  {
    quote:
      'The speed and accuracy of their colour matching saved us months on our product development timeline.',
    author: 'Marcus Weber',
    role: 'R&D Manager',
    company: 'TechPipe Solutions',
  },
  {
    quote:
      'Their sustainable masterbatch options helped us meet our ESG targets without compromising on quality.',
    author: 'Jennifer Liu',
    role: 'Sustainability Lead',
    company: 'GreenPack Ltd',
  },
];

const clients = [
  'Global OEM',
  'PackCorp',
  'TechPipe',
  'FiberMax',
  'HealthPlast',
  'AutoPoly',
];

export const Trust = () => {
  return (
    <section className='section-padding scroll-mt-header'>
      <div className='container-custom'>
        {/* Certifications */}
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className=''
        >
          <motion.div variants={fadeUp} className='text-center mb-10'>
            <span className='text-caption font-technical text-cta uppercase tracking-wider'>
              Certifications & Compliance
            </span>
            <h2 className='mt-3 text-h2 text-primary'>Quality You Can Trust</h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className='flex flex-wrap justify-center gap-4 lg:gap-6'
          >
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className='flex items-center gap-3 bg-card rounded-xl px-5 py-4 shadow-premium border border-border/50'
              >
                <div className='w-10 h-10 rounded-lg bg-surface-soft flex items-center justify-center'>
                  <Award className='w-5 h-5 text-primary' />
                </div>
                <div>
                  <span className='block font-semibold text-primary'>
                    {cert.name}
                  </span>
                  <span className='block text-caption text-muted-foreground'>
                    {cert.description}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Client Logos */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mb-16 lg:mb-24'
        >
          <p className='text-center text-caption text-muted-foreground mb-8'>
            Trusted by leading manufacturers worldwide
          </p>
          <div className='flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-50'>
            {clients.map((client) => (
              <span
                key={client}
                className='font-technical text-lg font-medium text-muted-foreground tracking-wider'
              >
                {client}
              </span>
            ))}
          </div>
        </motion.div> */}

        {/* Testimonials */}
        {/* <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeUp} className='text-center mb-10'>
            <span className='text-caption font-technical text-cta uppercase tracking-wider'>
              Client Success Stories
            </span>
            <h2 className='mt-3 text-h2 text-primary'>What Our Partners Say</h2>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-6 lg:gap-8'>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                variants={fadeUp}
                className='bg-card rounded-2xl p-6 lg:p-8 shadow-premium border border-border/50 relative'
              >
              
                <div className='absolute top-6 right-6 w-10 h-10 rounded-full bg-surface-soft flex items-center justify-center'>
                  <Quote className='w-5 h-5 text-muted-foreground' />
                </div>

             
                <p className='text-body text-primary mb-6 pr-12'>
                  "{testimonial.quote}"
                </p>

              
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent-steel flex items-center justify-center text-primary-foreground font-bold'>
                    {testimonial.author
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <span className='block font-semibold text-primary'>
                      {testimonial.author}
                    </span>
                    <span className='block text-caption text-muted-foreground'>
                      {testimonial.role}, {testimonial.company}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};
