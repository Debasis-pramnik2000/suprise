import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

function Navigation({ nextPage, previousPage }) {
  return (
    <div className="navigation">

      {/* PREVIOUS */}
      <motion.button
        type="button"
        className="nav-button previous-button"
        onClick={previousPage}
        whileHover={{
          scale: 1.08,
          x: -5,
        }}
        whileTap={{
          scale: 0.9,
        }}
        initial={{
          opacity: 0,
          x: -30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <FaArrowLeft />
        <span>Previous</span>
      </motion.button>


      {/* NEXT */}
      <motion.button
        type="button"
        className="nav-button next-button"
        onClick={nextPage}
        whileHover={{
          scale: 1.08,
          x: 5,
        }}
        whileTap={{
          scale: 0.9,
        }}
        initial={{
          opacity: 0,
          x: 30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span>Next</span>
        <FaArrowRight />
      </motion.button>

    </div>
  );
}

export default Navigation;