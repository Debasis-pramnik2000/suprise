import React from "react";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaCameraRetro,
} from "react-icons/fa";

import Page from "../components/Page";
import Navigation from "../components/Navigation";

const photos = [
  {
    image: "/images/dd.jpg",
    title: "Beautiful Moment",
    rotate: -5,
  },
  {
    image: "/images/dd2.jpg",
    title: "Sweet Memory",
    rotate: 4,
  },
  {
    image: "/images/dd3.jpg",
    title: "One To Remember",
    rotate: -3,
  },
];

function MemoriesPage({
  nextPage,
  previousPage,
}) {
  return (
    <Page className="memories-page">

      <div className="memories-header">

        

        <h2>
          Little
          <span> Memories</span>
        </h2>

        <p>
          Because beautiful moments deserve
          to be remembered.
        </p>

      </div>

      <div className="memory-cards">

        {photos.map((photo, index) => (

          <motion.div
            className="memory-card"
            key={photo.image}
            initial={{
              opacity: 0,
              y: 50,
              rotate: photo.rotate,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: photo.rotate,
            }}
            transition={{
              delay: index * 0.2,
              duration: 0.7,
            }}
            whileHover={{
              rotate: 0,
              y: -12,
              scale: 1.04,
            }}
          >

            <div className="memory-photo">

              <img
                src={photo.image}
                alt={photo.title}
              />

              <div className="memory-heart">
                <FaHeart />
              </div>

            </div>

            <div className="memory-caption">
              {photo.title}
            </div>

          </motion.div>

        ))}

      </div>

      <div className="memory-footer">
        <FaCameraRetro />
        Keep making beautiful memories.
      </div>

      <Navigation
        nextPage={nextPage}
        previousPage={previousPage}
      />

    </Page>
  );
}

export default MemoriesPage;