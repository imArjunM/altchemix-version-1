import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Download,
  MessageSquare,
  Sun,
  Flame,
  Shield,
  Recycle,
  Palette,
  Droplet,
  ArrowUpRight,
} from 'lucide-react';
import { staggerContainer, fadeUp, scaleIn, easePremium } from '@/lib/motion';
import pelletsMacro from '@/assets/pellets-macro.jpg';

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: { icon: React.ElementType; label: string }[];
  fullDescription: string;
  applications: string[];
  specifications: { label: string; value: string }[];
  style: 'default' | 'featured' | 'wide';
}

const products: Product[] = [
  {
    id: 'colour',
    title: 'Color Masterbatches',
    description:
      'Deliver vibrant, consistent pigments with superior dispersion and long-lasting stability—bringing life and precision to every application.',
    image:
      'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=600&q=80',
    tags: [
      { icon: Palette, label: 'Custom Colours' },
      { icon: Sun, label: 'UV Stable' },
    ],
    fullDescription:
      'Deliver vibrant, consistent pigments with superior dispersion and long-lasting stability—bringing life and precision to every application.',
    applications: [
      'Packaging films',
      'Injection moulding',
      'Blow moulding',
      'Extrusion',
    ],
    specifications: [
      { label: 'Carrier Resin', value: 'PE, PP, PS, ABS' },
      { label: 'Pigment Loading', value: '20-70%' },
      { label: 'ΔE Colour Match', value: '< 1.0' },
      { label: 'Form', value: 'Pellets' },
    ],
    style: 'default',
  },
  {
    id: 'smart',
    title: 'Smart Masterbatches',
    description:
      'Innovative blends of color and functional additives designed to serve specific purposes—combining aesthetics with performance in one solution.',
    // image: 'https://images.unsplash.com/photo-553531384-397c80973a0b?auto=format&fit=crop&w=600&q=80',
    image: `https://plus.unsplash.com/premium_photo-1681426319710-e284eab20c36?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    tags: [
      { icon: Sun, label: 'High Opacity' },
      { icon: Recycle, label: 'PCR Compatible' },
    ],
    fullDescription:
      'Innovative blends of color and functional additives designed to serve specific purposes—combining aesthetics with performance in one solution.',
    applications: [
      'Food packaging',
      'Personal care',
      'Agricultural film',
      'Household goods',
    ],
    specifications: [
      { label: 'TiO2 Content', value: '50-70%' },
      { label: 'Whiteness Index', value: '> 95' },
      { label: 'Opacity', value: '> 98%' },
      { label: 'Carrier', value: 'LDPE, LLDPE, PP' },
    ],
    style: 'default',
  },
  {
    id: 'black',
    title: 'Specialty Black Masterbatches',
    description:
      'Deep, rich blacks with exceptional opacity, conductivity options, and superior thermal stability—engineered for demanding applications.',
    image:
      'https://images.unsplash.com/photo-1618397746666-63405ce5d015?auto=format&fit=crop&w=600&q=80',
    tags: [
      { icon: Sun, label: 'UV Protection' },
      { icon: Shield, label: 'Weathering Resistant' },
    ],
    fullDescription:
      'Deep, rich blacks with exceptional opacity, conductivity options, and superior thermal stability—engineered for demanding applications.',
    applications: [
      'Pipes & profiles',
      'Geomembranes',
      'Agricultural film',
      'Automotive',
    ],
    specifications: [
      { label: 'Carbon Black', value: '25-50%' },
      { label: 'Jetness (My)', value: '> 250' },
      { label: 'UV Stability', value: '10,000+ hrs' },
      { label: 'Surface Area', value: 'Low-High' },
    ],
    style: 'default',
  },
  {
    id: 'additives',
    title: 'Additive Masterbatches',
    description:
      'Engineered to enhance functionality, durability, and sustainability—our additive solutions transform ordinary plastics into extraordinary materials for real-world challenges.',
    image: pelletsMacro,
    tags: [
      { icon: Flame, label: 'Flame Retardant' },
      { icon: Shield, label: 'Antimicrobial' },
    ],
    fullDescription:
      'Engineered to enhance functionality, durability, and sustainability—our additive solutions transform ordinary plastics into extraordinary materials for real-world challenges.',
    applications: [
      'All polymer systems',
      'Multi-functional packages',
      'Custom combinations',
    ],
    specifications: [
      { label: 'Active Content', value: '10-80%' },
      { label: 'Let-down Ratio', value: '1-4%' },
      { label: 'Regulatory', value: 'FDA, EU, REACH' },
      { label: 'Form', value: 'Pellets, Powder' },
    ],
    style: 'featured',
  },
  {
    id: 'custom',
    title: 'Custom Solutions',
    description:
      'Tailored formulations developed in partnership with your R&D team. From concept to commercialization, we provide comprehensive support.',
    image:
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
    tags: [
      { icon: Droplet, label: 'R&D Partnership' },
      { icon: Recycle, label: 'Sustainable' },
    ],
    fullDescription:
      'Our technical team collaborates directly with your engineers to develop bespoke masterbatch solutions.',
    applications: [
      'Project-specific',
      'Novel applications',
      'Problem-solving',
      'Process optimization',
    ],
    specifications: [
      { label: 'Development', value: '2-8 weeks' },
      { label: 'Pilot Scale', value: '25-500 kg' },
      { label: 'Documentation', value: 'Full CoA' },
      { label: 'Support', value: 'Technical team' },
    ],
    style: 'wide',
  },
];

export const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const topRow = products.slice(0, 3);
  const bottomRow = products.slice(3);

  return (
    <section id='products' className='section-padding scroll-mt-header'>
      <div className='container-custom'>
        {/* Section Header */}
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
            Our Products
          </motion.span>
          <motion.h2 variants={fadeUp} className='mt-3 text-h2 text-primary'>
            Premium Masterbatch Solutions
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className='mt-4 text-body-lg text-muted-foreground'
          >
            From standard colours to highly specialized functional additives, we
            deliver consistent quality for the most demanding applications.
          </motion.p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className='space-y-4 lg:space-y-6'>
          {/* Top Row - 3 Cards */}
          <div className='grid md:grid-cols-3 gap-4 lg:gap-6'>
            {topRow.map((product, index) => (
              <ProductBentoCard
                key={product.id}
                product={product}
                index={index}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>

          {/* Bottom Row - 2 Cards (Custom spans 2) */}
          <div className='grid md:grid-cols-[1fr_2fr] gap-4 lg:gap-6'>
            {bottomRow.map((product, index) => (
              <ProductBentoCard
                key={product.id}
                product={product}
                index={index + 3}
                onClick={() => setSelectedProduct(product)}
                isWide={product.style === 'wide'}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 flex items-center justify-center p-4'
            onClick={() => setSelectedProduct(null)}
          >
            <div className='absolute inset-0 bg-primary/40 backdrop-blur-sm' />
            <motion.div
              variants={scaleIn}
              initial='hidden'
              animate='visible'
              exit='hidden'
              onClick={(e) => e.stopPropagation()}
              className='relative bg-card rounded-lg shadow-premium-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className='absolute top-4 right-4 z-10 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-surface-soft transition-colors'
                aria-label='Close modal'
              >
                <X className='w-5 h-5 text-primary' />
              </button>

              <div className='h-56 overflow-hidden navy-overlay'>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className='w-full h-full object-cover'
                />
              </div>

              <div className='p-6 lg:p-8'>
                <h3 className='text-h3 text-primary mb-3'>
                  {selectedProduct.title}
                </h3>

                <div className='flex flex-wrap gap-2 mb-4'>
                  {selectedProduct.tags.map((tag) => (
                    <span key={tag.label} className='badge-cert'>
                      <tag.icon className='w-3.5 h-3.5' />
                      {tag.label}
                    </span>
                  ))}
                </div>

                <p className='text-body text-muted-foreground mb-6'>
                  {selectedProduct.fullDescription}
                </p>

                <div className='mb-6'>
                  <h4 className='text-caption font-semibold text-primary mb-2 uppercase tracking-wider'>
                    Applications
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {selectedProduct.applications.map((app) => (
                      <span
                        key={app}
                        className='text-caption bg-surface-soft px-3 py-1 rounded-full'
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='mb-6'>
                  <h4 className='text-caption font-semibold text-primary mb-3 uppercase tracking-wider'>
                    Technical Specifications
                  </h4>
                  <div className='grid grid-cols-2 gap-3'>
                    {selectedProduct.specifications.map((spec) => (
                      <div
                        key={spec.label}
                        className='bg-surface-soft rounded-lg p-3'
                      >
                        <span className='block text-small text-muted-foreground'>
                          {spec.label}
                        </span>
                        <span className='block text-body font-medium text-primary font-technical'>
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='flex flex-wrap gap-3 pt-4 border-t border-border'>
                  <a
                    href='#contact'
                    className='btn-primary'
                    onClick={() => setSelectedProduct(null)}
                  >
                    <MessageSquare className='w-4 h-4 mr-2' />
                    Request Sample
                  </a>
                  <button className='btn-secondary'>
                    <Download className='w-4 h-4 mr-2' />
                    Technical Data Sheet
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

interface ProductBentoCardProps {
  product: Product;
  index: number;
  onClick: () => void;
  isWide?: boolean;
}

const ProductBentoCard = ({
  product,
  index,
  onClick,
  isWide,
}: ProductBentoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: easePremium }}
      whileHover={{ y: -6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`group cursor-pointer relative rounded-lg overflow-hidden shadow-premium hover:shadow-premium-xl transition-all duration-300 ${
        isWide ? 'md:col-span-1' : ''
      } ${
        product.style === 'featured' ? 'from-cta/5 to-primary/5' : 'bg-card'
      }`}
    >
      {/* Image Container */}
      <div
        className={`relative overflow-hidden ${
          isWide ? 'h-48 md:h-48' : 'h-44 md:h-48'
        }`}
      >
        <motion.img
          src={product.image}
          alt={product.title}
          className='w-full h-full object-cover'
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.5, ease: easePremium }}
        />
        <div className='absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

        {/* Floating Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.2 }}
          className='absolute bottom-4 right-4 bg-primary-foreground rounded-full p-3 shadow-lg'
        >
          <ArrowUpRight className='w-5 h-5 text-primary' />
        </motion.div>
      </div>

      {/* Content */}
      <div className='p-5 lg:p-6'>
        <div className='flex flex-wrap gap-2 mb-3'>
          {product.tags.map((tag) => (
            <span
              key={tag.label}
              className='inline-flex items-center gap-1 text-[11px] font-technical font-medium text-muted-foreground bg-surface-soft px-2 py-1 rounded'
            >
              <tag.icon className='w-3 h-3' />
              {tag.label}
            </span>
          ))}
        </div>

        <h3 className='text-h4 text-primary mb-2 group-hover:text-cta transition-colors'>
          {product.title}
        </h3>
        <p className='text-caption text-muted-foreground line-clamp-2'>
          {product.description}
        </p>

        {/* Animated underline */}
        {/* <motion.div
          initial={{ width: 0 }}
          animate={{ width: isHovered ? '30%' : 0 }}
          transition={{ duration: 0.3, ease: easePremium }}
          className='h-0.5 bg-cta rounded-full mt-4'
        /> */}
      </div>

      {/* Border glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className='absolute inset-0 rounded-lg pointer-events-none'
        style={{
          boxShadow: 'inset 0 0 0 2px hsl(var(--cta) / 0.2)',
        }}
      />
    </motion.div>
  );
};
