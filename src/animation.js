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

export const skillsAnimation = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      staggerChildren: 0.5,
    }
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.5
    }
  }
};

export const pictureAnimation = {
  hidden: {scale: 1.2, opacity: 0, transition: {duration: 0.2}},
  show: {scale: 1, opacity: 1, transition: {ease: 'easeOut', duration: 0.8}}
};

export const textAnim = {
  hidden: {
    opacity: 0,
    x: 100
  },
  show: {
    opacity: 1, 
    x: 0,
    transition: {
      duration: 1
    }
  }
};

export const textAnimLeft = {
  hidden: {
    opacity: 0,
    x: -100
  },
  show: {
    opacity: 1, 
    x: 0,
    transition: {
      duration: 1
    }
  }
};

