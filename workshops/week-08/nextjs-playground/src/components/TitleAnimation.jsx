"use client";
import { motion } from "motion/react";
export default function TitleAnimation({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 3 }}
      transition={{ duration: 3 }}
      className="flex justify-center"
    >
      {children}
    </motion.div>
  );
}
