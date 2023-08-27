/**
 * A component that provides page transition animation using Framer Motion.
 * @param {Object} props - The props object containing children and other props.
 * @param {React.ReactNode} props.children - The child components to be rendered.
 * @returns {React.ReactNode} - The animated component.
 */
import React, { forwardRef } from "react";
import { motion } from "framer-motion";

function PageTransition({ children, ...rest }) {
  const onTheRight = { x: "-100%", opacity: 0 };
  const inTheCenter = { x: 0, opacity: 1 };
  const onTheLeft = { x: "100%", opacity: 0 };
  const transition = { duration: 0.6, ease: "easeInOut" };

  return (
    <motion.div
      ref={rest.ref}
      initial={onTheRight}
      animate={inTheCenter}
      exit={onTheLeft}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export default forwardRef(PageTransition);
