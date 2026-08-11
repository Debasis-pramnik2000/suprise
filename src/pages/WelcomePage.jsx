import React from "react";
import { motion } from "framer-motion";
import Page from "../components/Page";
import Navigation from "../components/Navigation";

function WelcomePage({
  nextPage,
  previousPage,
}) {
  return (
    <Page className="welcome-page">

      <motion.div
        className="chapter-number"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        01
      </motion.div>

      <div className="welcome-decoration">
        ✨
      </div>

      <motion.div
        className="welcome-content"
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
      >

        

        <h2>
          Hey...
          <br />
          <span>I made something</span>
          <br />
          special for you.
        </h2>

        <p>
          Before you continue, forget everything
          for a moment and just enjoy this little
          surprise.
        </p>

        <div className="welcome-line"></div>

        <div className="welcome-sign">
          Are you ready? 💖
        </div>

      </motion.div>

      <Navigation
        nextPage={nextPage}
        previousPage={previousPage}
      />

    </Page>
  );
}

export default WelcomePage;