import type { FC, ReactNode } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const MotionContainer: FC<{ children: ReactNode, id: string }> = ({ children, id }) => {
  return (
    <motion.section
      id={id}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="min-h-screen flex items-start justify-center px-6 py-8"
    >
      { children }
    </motion.section>
  )
}

export default MotionContainer;