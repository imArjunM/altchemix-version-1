import { motion } from 'framer-motion';
import { FileText, Video, BookOpen, Download, ArrowRight } from 'lucide-react';
import { staggerContainer, fadeUp } from '@/lib/motion';

const resources = [
  {
    icon: FileText,
    title: 'Technical Data Sheets',
    description:
      'Complete specifications and processing guidelines for all our masterbatch products.',
    cta: 'Browse TDS Library',
    count: '150+ documents',
  },
  {
    icon: BookOpen,
    title: 'Application Guides',
    description:
      'Best practices and troubleshooting guides for specific applications and industries.',
    cta: 'View Guides',
    count: '40+ guides',
  },
  {
    icon: Video,
    title: 'Webinars & Training',
    description:
      'On-demand technical webinars covering processing optimization and material selection.',
    cta: 'Watch Now',
    count: '25+ sessions',
  },
];

export const Resources = () => {
  return (
    <section id='resources' className='section-padding-bottom scroll-mt-header'>
      <div className='container-custom'>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='text-center max-w-2xl mx-auto mb-12'
        >
          <motion.span
            variants={fadeUp}
            className='text-caption font-technical text-cta uppercase tracking-wider'
          >
            Resources
          </motion.span>
          <motion.h2 variants={fadeUp} className='mt-3 text-h2 text-primary'>
            Technical Knowledge Center
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className='mt-4 text-body-lg text-muted-foreground'
          >
            Access comprehensive technical documentation, application guides,
            and training materials to optimize your processes.
          </motion.p>
        </motion.div>

        <div className='grid md:grid-cols-3 gap-6'>
          {resources.map((resource, index) => (
            <motion.a
              key={resource.title}
              href='#'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className='group bg-card rounded-2xl p-6 shadow-premium border border-border/50 hover:shadow-premium-lg hover:border-cta/20 transition-all'
            >
              <div className='w-14 h-14 rounded-xl bg-surface-soft flex items-center justify-center mb-5 group-hover:bg-cta/10 transition-colors'>
                <resource.icon className='w-7 h-7 text-primary group-hover:text-cta transition-colors' />
              </div>

              <span className='text-small font-technical text-muted-foreground'>
                {resource.count}
              </span>
              <h3 className='text-h4 text-primary mt-1 mb-2 group-hover:text-cta transition-colors'>
                {resource.title}
              </h3>
              <p className='text-caption text-muted-foreground mb-4'>
                {resource.description}
              </p>

              <span className='inline-flex items-center gap-1 text-caption font-medium text-cta'>
                {resource.cta}
                <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
              </span>
            </motion.a>
          ))}
        </div>

        {/* Featured Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mt-12 bg-surface-soft rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-center gap-6'
        >
          <div className='w-16 h-16 rounded-xl bg-card flex items-center justify-center shadow-premium flex-shrink-0'>
            <Download className='w-8 h-8 text-primary' />
          </div>
          <div className='flex-1 text-center lg:text-left'>
            <h3 className='text-h4 text-primary mb-1'>2025 Product Catalog</h3>
            <p className='text-caption text-muted-foreground'>
              Complete overview of our masterbatch and additive portfolio with
              specifications and application data.
            </p>
          </div>
          <button className='btn-primary'>
            <Download className='w-4 h-4 mr-2' />
            Download PDF (12 MB)
          </button>
        </motion.div>
      </div>
    </section>
  );
};
