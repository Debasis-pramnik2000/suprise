import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Practicals({ currentPage, pages }) {
  const [direction, setDirection] = useState(1);
  const [previousPage, setPreviousPage] = useState(currentPage);

  useEffect(() => {
    if (currentPage > previousPage) {
      setDirection(1);
    } else if (currentPage < previousPage) {
      setDirection(-1);
    }

    setPreviousPage(currentPage);
  }, [currentPage, previousPage]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      rotateY: direction > 0 ? 25 : -25,
      opacity: 0,
    }),

    center: {
      x: 0,
      rotateY: 0,
      opacity: 1,
    },

    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      rotateY: direction > 0 ? -25 : 25,
      opacity: 0,
    }),
  };

  return (
    <div className="book-stage">

      <div className="book">

        <AnimatePresence
          initial={false}
          custom={direction}
          mode="popLayout"
        >
          <motion.div
            key={currentPage}
            className="book-page"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
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

export default Practicals;