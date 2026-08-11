import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function Book({ currentPage, pages }) {
  return (
    <div className="book-stage">

      <div className="ambient-glow glow-one"></div>
      <div className="ambient-glow glow-two"></div>

      <div className="book">

        <div className="book-shadow"></div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            className="book-page"

            initial={{
              opacity: 0,
              rotateY: 90,
              x: 80,
            }}

            animate={{
              opacity: 1,
              rotateY: 0,
              x: 0,
            }}

            exit={{
              opacity: 0,
              rotateY: -90,
              x: -80,
            }}

            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="paper-texture"></div>

            {pages[currentPage]}
          </motion.div>
        </AnimatePresence>

      </div>

      <div className="page-indicator">
        <span>
          {String(currentPage + 1).padStart(2, "0")}
        </span>

        <div className="indicator-line"></div>

        <span>
          {String(pages.length).padStart(2, "0")}
        </span>
      </div>

    </div>
  );
}

export default Book;