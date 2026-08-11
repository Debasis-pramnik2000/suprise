import React from "react";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";

function CoverPage({ nextPage }) {
  return (
    <div className="cover-page">

      <div className="cover-decoration top"></div>
      <div className="cover-decoration bottom"></div>

      <motion.div
        className="cover-stars"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        ✦
      </motion.div>

      <div className="cover-content">

        <motion.div
          className="cover-small"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          A little story
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
        >
          For
          <span> Someone</span>
          <small>Special</small>
        </motion.h1>

        <motion.div
          className="cover-heart"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <FaHeart />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          
        </motion.p>

        <motion.button
          className="open-book-button"
          onClick={nextPage}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          Open The Book
          <FaArrowRight />
        </motion.button>

        <div className="cover-hint">
          Click to begin ✨
        </div>

      </div>

    </div>
  );
}

export default CoverPage;