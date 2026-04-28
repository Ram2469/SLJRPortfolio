import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const CustomCountUp = ({ end, duration = 2.5, inView }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const animation = animate(count, end, { duration: duration });
      
      return () => {
        animation.stop();
      };
    }
  }, [inView, end, duration, count]);

  return <motion.span>{rounded}</motion.span>;
};

export default CustomCountUp;
