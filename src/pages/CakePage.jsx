import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBirthdayCake,
  FaStar,
} from "react-icons/fa";

import Page from "../components/Page";
import Navigation from "../components/Navigation";

function CakePage({
  nextPage,
  previousPage,
}) {
  const [wishMade, setWishMade] = useState(false);

  const makeWish = () => {
    setWishMade(true);
  };

  return (
    <Page className="cake-page">

      <div className="cake-header">

        

        <h2>
          Make a
          <span> Wish.</span>
        </h2>

        <p>
          Close your eyes, make your wish,
          and blow the candles. ✨
        </p>

      </div>

      <div className="cake-wrapper">

        <div className="cake-plate"></div>

        <div className="cake-body">

          <div className="cake-cream cream-1"></div>
          <div className="cake-cream cream-2"></div>
          <div className="cake-cream cream-3"></div>

        </div>

        <div className="cake-top"></div>

        <div className="candles">

          {[1, 2, 3].map((candle) => (

            <div
              className="candle"
              key={candle}
            >

              {!wishMade && (
                <motion.div
                  className="candle-flame"
                  animate={{
                    scale: [1, 1.2, 0.9, 1],
                    rotate: [-5, 5, -3, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                  }}
                />
              )}

            </div>

          ))}

        </div>

      </div>

      {!wishMade ? (

        <motion.button
          className="wish-button"
          onClick={makeWish}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          <FaStar />
          Make A Wish
        </motion.button>

      ) : (

        <motion.div
          className="wish-made"
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
        >
          ✨ Wish Made! ✨
        </motion.div>

      )}

      <Navigation
        nextPage={nextPage}
        previousPage={previousPage}
      />

    </Page>
  );
}

export default CakePage;