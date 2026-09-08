import React, {
  useEffect,
  useState,
} from "react";

import { motion } from "framer-motion";
import {
  FaHeart,
  FaEnvelopeOpenText,
} from "react-icons/fa";

import Page from "../components/Page";
import Navigation from "../components/Navigation";

function MessagePage({
  nextPage,
  previousPage,
}) {
  const [open, setOpen] = useState(false);

  const message =
    "Finally the birthday arrived. I pray this birthday feels your life with happiness and full of joy.wishing a very very happy birthday  Debaprita🎉🎉 🤍";

  const [text, setText] = useState("");

  useEffect(() => {
    if (!open) return;

    let index = 0;

    const interval = setInterval(() => {
      setText(message.slice(0, index));
      index++;

      if (index > message.length) {
        clearInterval(interval);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [open]);

  return (
    <Page className="message-page">

      {!open ? (

        <motion.div
          className="envelope-container"
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
        >

          <h2>
            A little
            <span> letter</span>
          </h2>

          <motion.div
            className="envelope"
            whileHover={{
              y: -10,
            }}
          >

            <div className="envelope-back"></div>

            <div className="envelope-paper">
              💌
            </div>

            <div className="envelope-front"></div>

            <div className="envelope-heart">
              <FaHeart />
            </div>

          </motion.div>

          <button
            className="letter-button"
            onClick={() => setOpen(true)}
          >
            <FaEnvelopeOpenText />
            Open My Letter
          </button>

        </motion.div>

      ) : (

        <motion.div
          className="letter-content"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >

          <div className="letter-icon">
            <FaHeart />
          </div>

          <span>Dear Debaprita,</span>

          <p>
            {text}
            <b className="cursor">|</b>
          </p>

        </motion.div>

      )}

      <Navigation
        nextPage={nextPage}
        previousPage={previousPage}
      />

    </Page>
  );
}

export default MessagePage;