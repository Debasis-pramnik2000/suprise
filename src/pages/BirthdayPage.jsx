import React from "react";
import { motion } from "framer-motion";
import {
  FaBirthdayCake,
  FaHeart,
} from "react-icons/fa";

import Page from "../components/Page";
import Navigation from "../components/Navigation";

function BirthdayPage({
  nextPage,
  previousPage,
}) {
  return (
    <Page className="birthday-page">

      <div className="balloon balloon-a">
        🎈
      </div>

      <div className="balloon balloon-b">
        🎈
      </div>

      <div className="balloon balloon-c">
        🎈
      </div>

      <motion.div
        className="birthday-confetti"
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        ✦ ✧ ✦ ✧ ✦
      </motion.div>

      <div className="birthday-content">

        <motion.div
          className="cake-icon"
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <FaBirthdayCake />
        </motion.div>

        <span className="eyebrow">
          The Special Day
        </span>

        <motion.h2
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          Happy
          <span>Birthday!</span>
        </motion.h2>

        <p>
          Today is a little more beautiful
          because it celebrates
          <strong> YOU.</strong>
        </p>

        <div className="birthday-heart">
          <FaHeart />
        </div>

      </div>

      <Navigation
        nextPage={nextPage}
        previousPage={previousPage}
      />

    </Page>
  );
}

export default BirthdayPage;