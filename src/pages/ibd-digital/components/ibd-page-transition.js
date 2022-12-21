/* ==========  REACT  |  GATSBY  |  PLUGINS  ========== */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";


/* ==========  COMPONENTS  ========== */
import IBDNav from './ibd-nav';


/* ==========  FONT-AWESOME  |  STYLES  ========== */
import '../styles/ibd-nav.scss';


const IbdPageTransition = (
  // { children, location, path }
  {children, path},
  props
) => {
  // console.log('IbdPageTransition - path ',  path)

  const duration = 0.25;
  const variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: duration,
        delay: duration + 0.1,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: duration },
    },
  }

  return (
    <div>
      <IBDNav></IBDNav>

      <AnimatePresence>
        <motion.div
          key={path}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default IbdPageTransition
