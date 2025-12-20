import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CapabilityTileProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  className?: string;
  size?: 'default' | 'large';
}

export const CapabilityTile = ({ 
  icon, 
  title, 
  description, 
  href = '#', 
  className,
  size = 'default' 
}: CapabilityTileProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.12, 0.9, 0.28, 1] }}
      className={cn(
        'group block bg-card rounded-2xl p-6 shadow-premium border border-border/50 transition-all duration-300',
        'hover:shadow-premium-lg hover:border-cta/20',
        size === 'large' && 'lg:col-span-2 lg:row-span-2 lg:p-8',
        className
      )}
    >
      {/* Icon Container */}
      <div className={cn(
        'mb-4 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300',
        'bg-surface-soft group-hover:bg-cta/10',
        size === 'large' && 'w-14 h-14'
      )}>
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
          className="text-primary group-hover:text-cta transition-colors"
        >
          {icon}
        </motion.div>
      </div>

      {/* Title */}
      <h3 className={cn(
        'text-h4 text-primary mb-2 group-hover:text-cta transition-colors',
        size === 'large' && 'text-h3'
      )}>
        {title}
      </h3>

      {/* Description */}
      <p className={cn(
        'text-caption text-muted-foreground mb-4',
        size === 'large' && 'text-body max-w-md'
      )}>
        {description}
      </p>

      {/* CTA Link */}
      <span className="inline-flex items-center gap-1 text-caption font-medium text-cta opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        See capability
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </motion.a>
  );
};
