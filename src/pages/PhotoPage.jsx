import React from "react";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaCamera,
} from "react-icons/fa";

import Page from "../components/Page";
import Navigation from "../components/Navigation";

function PhotoPage({
  nextPage,
  previousPage,
}) {
  return (
    <Page className="photo-page">

      <div className="photo-page-content">

        <div className="photo-heading">

          
          <h2>
            And here is
            <span> the star.</span>
          </h2>

        </div>

        <motion.div
          className="polaroid"
          initial={{
            opacity: 0,
            rotate: -12,
            y: 50,
          }}
          animate={{
            opacity: 1,
            rotate: -4,
            y: 0,
          }}
          transition={{
            duration: 0.9,
          }}
          whileHover={{
            rotate: 0,
            scale: 1.03,
          }}
        >

          <div className="polaroid-image">

            <img
              src="/images/dd1.jpg"
              alt="Birthday person"
            />

            <div className="photo-shine"></div>

          </div>

          <div className="polaroid-caption">
            <FaHeart />
            Someone truly special
          </div>

        </motion.div>

        <motion.div
          className="camera-decoration"
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          <FaCamera />
        </motion.div>

      </div>

      <Navigation
        nextPage={nextPage}
        previousPage={previousPage}
      />

    </Page>
  );
}

export default PhotoPage;