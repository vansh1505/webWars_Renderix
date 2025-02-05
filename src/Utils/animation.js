export const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  export const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  export const cardHover = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };
  
  export const glowVariant = {
    initial: { opacity: 0 },
    animate: { 
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };