import { motion } from 'framer-motion';
import { Palette, FlaskConical, Leaf, Factory, Shield } from 'lucide-react';
import { staggerContainer, fadeUp, easePremium } from '@/lib/motion';
import labImage from '@/assets/lab-qc.jpg';
import heroImage from '@/assets/hero-manufacturing.jpg';

const capabilities = [
  {
    id: 'colour',
    icon: <Palette className="w-6 h-6" />,
    title: 'Colour Matching',
    description: 'Advanced spectrophotometry and digital colour management for exact matches with ΔE < 1.0.',
    style: 'default',
  },
  {
    id: 'manufacturing',
    title: 'Advanced Manufacturing',
    description: 'State-of-the-art twin-screw extrusion lines with automated dosing and inline quality monitoring.',
    image: heroImage,
    style: 'image-overlay',
  },
  {
    id: 'testing',
    icon: <FlaskConical className="w-6 h-6" />,
    title: 'Application Testing',
    description: 'In-house processing simulation on film, injection, and extrusion equipment.',
    style: 'accent',
  },
  {
    id: 'qc',
    title: 'QC Systems',
    description: 'Comprehensive testing: MFI, mechanical, thermal, and spectral analysis on every batch.',
    image: labImage,
    style: 'image-overlay-dark',
  },
  {
    id: 'sustainability',
    icon: <Leaf className="w-6 h-6" />,
    title: 'Sustainability',
    description: 'PCR-compatible formulations and bio-based additive solutions for circular economy goals.',
    style: 'gradient',
  },
];

export const Technology = () => {
  return (
    <section id="technology" className="section-padding-bottom bg-surface-soft scroll-mt-header">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mb-12 lg:mb-16"
        >
          <motion.span variants={fadeUp} className="text-caption font-technical text-cta uppercase tracking-wider">
            Technology & Innovation
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-3 text-h2 text-primary">
            Engineering Excellence at Every Step
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-body-lg text-muted-foreground">
            Our vertically integrated facilities combine advanced R&D capabilities with 
            precision manufacturing to deliver consistent, high-performance solutions.
          </motion.p>
        </motion.div>

        {/* Bento Grid - 5 Cards with Unique Designs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Card 1: Colour Matching - Default with icon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easePremium }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group bg-card rounded-xl p-6 lg:p-8 shadow-premium hover:shadow-premium-xl transition-all duration-300 border border-border/50"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-14 h-14 rounded-xl bg-cta/10 flex items-center justify-center mb-6 text-cta"
            >
              <Palette className="w-7 h-7" />
            </motion.div>
            <h3 className="text-h4 text-primary mb-3 group-hover:text-cta transition-colors">
              Colour Matching
            </h3>
            <p className="text-body text-muted-foreground">
              Advanced spectrophotometry and digital colour management for exact matches with ΔE &lt; 1.0.
            </p>
            <motion.div 
              initial={{ width: 0 }}
              whileHover={{ width: '40%' }}
              className="h-1 bg-cta rounded-full mt-6"
            />
          </motion.div>

          {/* Card 2: Advanced Manufacturing - Image Overlay (spans 2 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: easePremium }}
            whileHover={{ scale: 1.02 }}
            className="group relative rounded-xl overflow-hidden shadow-premium hover:shadow-premium-xl transition-all duration-300 min-h-[280px] lg:col-span-2"
          >
            <motion.img
              src={heroImage}
              alt="Advanced Manufacturing"
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: easePremium }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-6 lg:p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 mb-3"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                  <Factory className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="badge-cert text-black border-primary-foreground/30">
                  ISO 9001:2015
                </span>
              </motion.div>
              <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-2">
                Advanced Manufacturing
              </h3>
              <p className="text-primary-foreground/80 max-w-lg">
                State-of-the-art twin-screw extrusion lines with automated dosing and inline quality monitoring.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Application Testing - Accent style with animated border */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: easePremium }}
            whileHover={{ y: -8 }}
            className="group relative bg-card rounded-xl p-6 lg:p-8 shadow-premium hover:shadow-premium-xl transition-all duration-300 overflow-hidden"
          >
            {/* Animated gradient border */}
            <motion.div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--cta)) 0%, hsl(var(--success)) 100%)',
                padding: '2px',
              }}
            />
            <div className="absolute inset-[2px] bg-card rounded-[14px] z-10" />
            
            <div className="relative z-20">
              <motion.div
                whileHover={{ rotate: -10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-cta/20 to-success/20 flex items-center justify-center mb-6"
              >
                <FlaskConical className="w-7 h-7 text-cta" />
              </motion.div>
              <h3 className="text-h4 text-primary mb-3 group-hover:text-cta transition-colors">
                Application Testing
              </h3>
              <p className="text-body text-muted-foreground">
                In-house processing simulation on film, injection, and extrusion equipment.
              </p>
            </div>
          </motion.div>

          {/* Card 4: QC Systems - Image Overlay Dark */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: easePremium }}
            whileHover={{ scale: 1.02 }}
            className="group relative rounded-xl overflow-hidden shadow-premium hover:shadow-premium-xl transition-all duration-300 min-h-[280px]"
          >
            <motion.img
              src={labImage}
              alt="QC Systems"
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: easePremium }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/50" />
            <div className="relative h-full flex flex-col justify-end p-6 lg:p-8">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center mb-4 border border-primary-foreground/20"
              >
                <Shield className="w-6 h-6 text-primary-foreground" />
              </motion.div>
              <h3 className="text-xl lg:text-2xl font-bold text-primary-foreground mb-2">
                QC Systems
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                Comprehensive testing: MFI, mechanical, thermal, and spectral analysis on every batch.
              </p>
            </div>
          </motion.div>

          {/* Card 5: Sustainability - Gradient style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, ease: easePremium }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="group rounded-xl p-6 lg:p-8 shadow-premium hover:shadow-premium-xl transition-all duration-300 relative overflow-hidden"
            // style={{
            //   background: 'linear-gradient(135deg, hsl(var(--success) / 0.1) 0%, hsl(var(--cta) / 0.05) 100%)',
            // }}
          >
           
            
            <div className="relative z-10">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-14 h-14 rounded-xl bg-success/20 flex items-center justify-center mb-6"
              >
                <Leaf className="w-7 h-7 text-success" />
              </motion.div>
              <h3 className="text-h4 text-primary mb-3 group-hover:text-success transition-colors">
                Sustainability
              </h3>
              <p className="text-body text-muted-foreground">
                PCR-compatible formulations and bio-based additive solutions for circular economy goals.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <span className="badge-eco">
                  <Leaf className="w-3 h-3" />
                  Eco Innovation
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
