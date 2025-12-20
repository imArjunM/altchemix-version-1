// Premium Motion Variants - Stripe/Linear Style
// Spring config: mass=0.9, stiffness=120, damping=14

export const springConfig = {
  type: "spring" as const,
  mass: 0.9,
  stiffness: 120,
  damping: 14,
};

// Easing curves as tuples for Framer Motion compatibility
export const easeOutQuint: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const easePremium: [number, number, number, number] = [0.12, 0.9, 0.28, 1];

// Stagger Container
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
};

// Fade Up - Primary reveal animation
export const fadeUp = {
  hidden: { 
    opacity: 0, 
    y: 18 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.42,
      ease: easePremium,
    },
  },
};

// Fade In - Simple opacity
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.42,
      ease: easePremium,
    },
  },
};

// Slide In Right - For hero images
export const slideInRight = {
  hidden: { 
    opacity: 0, 
    x: 30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.42,
      ease: easePremium,
      delay: 0.15,
    },
  },
};

// Scale In - For cards and modals
export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.3,
      ease: easePremium,
    },
  },
};

// Text Reveal Mask - Premium headline animation
export const textRevealMask = {
  hidden: { 
    clipPath: "inset(0 100% 0 0)" 
  },
  visible: { 
    clipPath: "inset(0 0 0 0)",
    transition: {
      duration: 0.7,
      ease: easeOutQuint,
    },
  },
};

// Card Hover Variants
export const cardHover = {
  rest: { 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.16,
      ease: easePremium,
    },
  },
  hover: { 
    y: -8, 
    scale: 1.02,
    transition: {
      duration: 0.16,
      ease: easePremium,
    },
  },
};

// Micro Tilt - For product cards (mouse follow)
export const calculateTilt = (
  clientX: number, 
  clientY: number, 
  rect: DOMRect,
  maxTilt: number = 2.5
) => {
  const x = clientX - rect.left;
  const y = clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const rotateX = ((y - centerY) / centerY) * -maxTilt;
  const rotateY = ((x - centerX) / centerX) * maxTilt;
  
  return { rotateX, rotateY };
};

// Industry Browser Transition
export const industryCardTransition = {
  hidden: { 
    opacity: 0, 
    x: 20 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.35,
      ease: easePremium,
    },
  },
  exit: { 
    opacity: 0, 
    x: -20,
    transition: {
      duration: 0.25,
      ease: easePremium,
    },
  },
};

// Expand Content - For accordions and expandable sections
export const expandContent = {
  hidden: { 
    height: 0, 
    opacity: 0 
  },
  visible: { 
    height: "auto", 
    opacity: 1,
    transition: {
      height: {
        duration: 0.35,
        ease: easePremium,
      },
      opacity: {
        duration: 0.25,
        delay: 0.1,
      },
    },
  },
  exit: { 
    height: 0, 
    opacity: 0,
    transition: {
      height: {
        duration: 0.25,
        ease: easePremium,
      },
      opacity: {
        duration: 0.15,
      },
    },
  },
};

// Button Press
export const buttonPress = {
  rest: { scale: 1 },
  pressed: { 
    scale: 0.98,
    transition: {
      duration: 0.08,
    },
  },
};

// Parallax Scroll Helper
export const getParallaxY = (scrollY: number, speed: number = 0.3) => {
  return scrollY * speed;
};
