export const logoAnimation = {
  hidden: {opacity: 0,
  y: 100,
  transition: {
    duration: 0.5
  }
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

export const container = {
  hidden: {x: 100},
  show: {x: 0, transition: {duration: 1, ease: 'easeOut', staggerChildren: 0.25, when:'afterChildren'}} 
};