import React, {
  useEffect,
  useRef,
} from "react";

import { motion } from "framer-motion";
import {
  FaHeart,
  FaRedo,
} from "react-icons/fa";

import Page from "../components/Page";

function FinalPage({
  previousPage,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let animationFrame;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    window.addEventListener(
      "resize",
      resize
    );

    const fireworks = [];
    const particles = [];

    class Firework {
      constructor() {
        this.x =
          Math.random() * canvas.width;

        this.y =
          canvas.height;

        this.targetX =
          Math.random() *
            canvas.width *
            0.8 +
          canvas.width * 0.1;

        this.targetY =
          Math.random() *
            canvas.height *
            0.45 +
          canvas.height * 0.1;

        this.speed = 7;
        this.done = false;
      }

      update() {
        const dx =
          this.targetX - this.x;

        const dy =
          this.targetY - this.y;

        this.x += dx * 0.035;
        this.y += dy * 0.035;

        if (
          Math.abs(dx) < 5 &&
          Math.abs(dy) < 5
        ) {
          this.done = true;

          for (let i = 0; i < 70; i++) {
            particles.push(
              new Particle(
                this.x,
                this.y
              )
            );
          }
        }
      }

      draw() {
        ctx.beginPath();

        ctx.arc(
          this.x,
          this.y,
          2,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = "#fff";

        ctx.fill();
      }
    }

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;

        const angle =
          Math.random() *
          Math.PI *
          2;

        const speed =
          Math.random() * 5 + 2;

        this.dx =
          Math.cos(angle) * speed;

        this.dy =
          Math.sin(angle) * speed;

        this.life = 100;

        this.size =
          Math.random() * 3 + 1;

        this.hue =
          Math.random() * 360;
      }

      update() {
        this.x += this.dx;
        this.y += this.dy;

        this.dy += 0.04;

        this.life -= 1;
      }

      draw() {
        ctx.beginPath();

        ctx.arc(
          this.x,
          this.y,
          this.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          `hsla(${this.hue},100%,70%,${this.life / 100})`;

        ctx.fill();
      }
    }

    const animate = () => {
      ctx.fillStyle =
        "rgba(5, 2, 15, 0.22)";

      ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      if (Math.random() < 0.045) {
        fireworks.push(
          new Firework()
        );
      }

      fireworks.forEach(
        (firework, index) => {
          firework.update();
          firework.draw();

          if (firework.done) {
            fireworks.splice(
              index,
              1
            );
          }
        }
      );

      particles.forEach(
        (particle, index) => {
          particle.update();
          particle.draw();

          if (particle.life <= 0) {
            particles.splice(
              index,
              1
            );
          }
        }
      );

      animationFrame =
        requestAnimationFrame(
          animate
        );
    };

    animate();

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  return (
    <Page className="final-page">

      <canvas
        ref={canvasRef}
        className="fireworks"
      />

      <div className="final-content">

        <motion.div
          className="final-heart"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.3,
            repeat: Infinity,
          }}
        >
          <FaHeart />
        </motion.div>

        

        <motion.h2
          initial={{
            opacity: 0,
            scale: 0.6,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          Happy
          <span>Birthday!</span>
        </motion.h2>

        <motion.div
          className="final-photo"
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.7,
            duration: 0.8,
          }}
        >

          <img
            src="/images/dd1.jpg"
            alt="Birthday"
          />

        </motion.div>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
          }}
        >
          May your life always be filled
          with happiness, love, laughter,
          beautiful memories and endless
          reasons to smile.
        </motion.p>

        <motion.div
          className="final-message"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.4,
          }}
        >
          You are truly special. ❤️
        </motion.div>

        <button
          className="restart-button"
          onClick={() => {
            window.location.reload();
          }}
        >
          <FaRedo />
          Read Again
        </button>

      </div>

    </Page>
  );
}

export default FinalPage;