import React from "react";
import { motion } from "framer-motion";

function Page({
  children,
  className = "",
}) {
  return (
    <motion.div
      className={`page-content ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default Page;