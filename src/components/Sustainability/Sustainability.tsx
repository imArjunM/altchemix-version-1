import { motion } from 'framer-motion';
import { Leaf, Recycle, ArrowRight, Download } from 'lucide-react';
import { fadeUp } from '@/lib/motion';

export const Sustainability = () => {
  return (
    <section id="sustainability" className="section-padding bg-surface-soft scroll-mt-header">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative bg-gradient-to-br from-primary to-accent-steel rounded-3xl p-8 lg:p-12 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
                <span className="badge-eco">
                  <Leaf className="w-3.5 h-3.5" />
                  Sustainability
                </span>
              </motion.div>

              <motion.h2 
                variants={fadeUp}
                className="text-h2 text-primary-foreground mb-4"
              >
                Committed to Circular Solutions
              </motion.h2>

              <motion.p 
                variants={fadeUp}
                className="text-body-lg text-primary-foreground/80 mb-6"
              >
                We're pioneering sustainable masterbatch solutions that support 
                the circular economy without compromising performance. Our PCR-compatible 
                formulations and bio-based additives help you meet environmental targets.
              </motion.p>

              <motion.ul variants={fadeUp} className="space-y-3 mb-8">
                {[
                  'PCR-compatible colour masterbatches',
                  'Bio-based and biodegradable additives',
                  'Reduced carbon footprint formulations',
                  'Closed-loop manufacturing processes',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-primary-foreground/90">
                    <Recycle className="w-4 h-4 text-success flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </motion.ul>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors"
                >
                  Discuss Sustainable Options
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button className="inline-flex items-center gap-2 text-primary-foreground border-2 border-primary-foreground/30 px-6 py-3 rounded-lg font-semibold hover:border-primary-foreground/60 transition-colors">
                  <Download className="w-4 h-4" />
                  Sustainability Report
                </button>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div 
              variants={fadeUp}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '30%', label: 'PCR content in our eco-range' },
                { value: '50%', label: 'Reduction in energy use since 2020' },
                { value: '100%', label: 'Renewable energy at HQ facility' },
                { value: 'Zero', label: 'Landfill waste from production' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-5 text-center"
                >
                  <span className="block text-3xl lg:text-4xl font-bold text-primary-foreground mb-1">
                    {stat.value}
                  </span>
                  <span className="block text-caption text-primary-foreground/70">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
