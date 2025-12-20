import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Shield, Sun, Flame, Recycle, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductTag {
  icon: React.ElementType;
  label: string;
}

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: ProductTag[];
  onClick: () => void;
}

export const ProductCard = ({ id, title, description, image, tags, onClick }: ProductCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position for micro-tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth tilt
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2.5, -2.5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2.5, 2.5]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.16, ease: [0.12, 0.9, 0.28, 1] }}
      className="group cursor-pointer"
    >
      <div className="bg-card rounded-2xl overflow-hidden shadow-premium transition-shadow duration-300 group-hover:shadow-premium-xl border border-border/50">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Quick View Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full p-2 shadow-premium"
          >
            <Plus className="w-5 h-5 text-primary" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-h4 text-primary mb-2">
            {title}
          </h3>
          <p className="text-caption text-muted-foreground mb-4 line-clamp-2">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.label}
                className="inline-flex items-center gap-1 text-[11px] font-technical font-medium text-muted-foreground bg-surface-soft px-2 py-1 rounded"
              >
                <tag.icon className="w-3 h-3" />
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Tag icons mapping for convenience
export const tagIcons = {
  uvStable: Sun,
  flameRetardant: Flame,
  antimicrobial: Shield,
  recyclable: Recycle,
};
