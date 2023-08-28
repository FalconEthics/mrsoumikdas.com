/**
 * A component that provides page transition animation using Framer Motion.
 * @param {Object} props - The props object containing children and other props to be passed to the motion.div component.
 * @param {React.Ref} ref - The ref object to be passed to the motion.div component.
 * @returns {JSX.Element} - A JSX element representing the PageTransition component.
 */
import { forwardRef } from "react";
import { motion } from "framer-motion";

function PageTransition({ children, ...rest }, ref) {
  const onTheRight = { x: "100%" };
  const inTheCenter = { x: 0 };
  const onTheLeft = { x: "-100%" };

  const transition = { duration: 0.6, ease: "easeInOut" };

  return (
    <motion.div
      ref={ref}
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
