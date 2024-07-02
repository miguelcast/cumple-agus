import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Banner from "./Banner";
import "./SectionA.css";

export default function SectionA(props) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const translatePacman = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["0%", "180%"],
  );
  const translateGhost1 = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["-35%", "160%"],
  );
  const translateGhost2 = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["-55%", "150%"],
  );
  const translateGhost3 = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["-75%", "140%"],
  );

  const translateWelcome = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["-100%", "50%"],
  );
  const translateWelcomeOut = useTransform(
    scrollYProgress,
    [0.2, 0.4],
    ["50%", "10%"],
  );
  const opacityWelcome = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);

  const translateTopInvite = useTransform(
    scrollYProgress,
    [0.28, 0.4],
    ["70%", "50%"],
  );
  const opacityInvite = useTransform(
    scrollYProgress,
    [0.28, 0.4, 0.58, 0.65],
    [0, 1, 1, 0],
  );

  const opacityGhostInvite = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.58, 0.65],
    [0, 0.6, 0.6, 0],
  );

  const translateGhostM1 = useTransform(
    scrollYProgress,
    [0.65, 0.75],
    ["175%", "-35%"],
  );
  const translateGhostM2 = useTransform(
    scrollYProgress,
    [0.65, 0.75],
    ["158%", "-55%"],
  );
  const translateGhostM3 = useTransform(
    scrollYProgress,
    [0.65, 0.75],
    ["140%", "-75%"],
  );
  const translatePacmanM = useTransform(
    scrollYProgress,
    [0.66, 0.77],
    ["250%", "-40%"],
  );
  const translateFunny = useTransform(
    scrollYProgress,
    [0.66, 0.77],
    ["300%", "50%"],
  );

  const opacityFunny = useTransform(scrollYProgress, [0.9, 0.93], [1, 0]);

  const opacityGhostInviteM = useTransform(
    scrollYProgress,
    [0.78, 0.86, 0.93, 0.95],
    [0, 0.6, 0.6, 0],
  );

  const opacityInfo = useTransform(scrollYProgress, [0.95, 0.98], [0, 1]);

  return (
    <motion.section ref={sectionRef} className="game">
      <motion.img
        className="sprite ghost"
        style={{ left: translateGhost1 }}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/blinky.png"
      />
      <motion.img
        className="sprite ghost"
        style={{ left: translateGhost2 }}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/inky.png"
      />
      <motion.img
        className="sprite ghost"
        style={{ left: translateGhost3 }}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/pinky.png"
      />

      <motion.img
        id="pac-man"
        className="sprite"
        style={{ left: translatePacman }}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/pac-man.png"
      />

      <motion.h1
        style={{
          left: translateWelcome,
          top: translateWelcomeOut,
          opacity: opacityWelcome,
        }}
      >
        ¿Estás listo para una aventura?
      </motion.h1>

      <motion.div
        className="invite"
        style={{ opacity: opacityInvite, top: translateTopInvite }}
      >
        <motion.h2 className="small">¡Ven y únete a la diversión en</motion.h2>
        <motion.h2>mi fiesta de cumpleaños!</motion.h2>
        <motion.h2 className="big">#7</motion.h2>
      </motion.div>

      <motion.img
        className="sprite ghost floating"
        style={{
          "--position-y": "12%",
          "--position-x": "75%",
          opacity: opacityGhostInvite,
        }}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/blinky.png"
      />
      <motion.img
        className="sprite ghost floating"
        style={{
          "--position-y": "62%",
          "--position-x": "20%",
          opacity: opacityGhostInvite,
        }}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/blinky.png"
      />
      <motion.img
        className="sprite ghost floating"
        style={{
          "--position-y": "85%",
          "--position-x": "15%",
          opacity: opacityGhostInvite,
        }}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/inky.png"
      />
      <motion.img
        className="sprite ghost floating"
        style={{
          "--position-y": "20%",
          "--position-x": "35%",
          opacity: opacityGhostInvite,
        }}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/inky.png"
      />
      <motion.img
        className="sprite ghost floating"
        style={{
          "--position-y": "5%",
          "--position-x": "6%",
          opacity: opacityGhostInvite,
        }}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/pinky.png"
      />
      <motion.img
        className="sprite ghost floating"
        style={{
          "--position-y": "72%",
          "--position-x": "70%",
          opacity: opacityGhostInvite,
        }}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/pinky.png"
      />
      <motion.img
        className="sprite ghost floating"
        style={{
          "--position-y": "4%",
          "--position-x": "45%",
          opacity: opacityGhostInvite,
        }}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/clyde.png"
      />
      <motion.img
        className="sprite ghost floating"
        style={{
          "--position-y": "87%",
          "--position-x": "60%",
          opacity: opacityGhostInvite,
        }}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/clyde.png"
      />

      <motion.img
        className="sprite ghost"
        style={{ left: translateGhostM1 }}
        src="https://media.giphy.com/media/r8AKGSaw7qRRS/200.gif"
      />
      <motion.img
        className="sprite ghost"
        style={{ left: translateGhostM2 }}
        src="https://media.giphy.com/media/r8AKGSaw7qRRS/200.gif"
      />
      <motion.img
        className="sprite ghost"
        style={{ left: translateGhostM3 }}
        src="https://media.giphy.com/media/r8AKGSaw7qRRS/200.gif"
      />

      <motion.img
        id="pac-man"
        className="sprite"
        style={{ left: translatePacmanM, rotateY: 180, translateY: "-50%" }}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/pac-man.png"
      />

      <motion.h1
        style={{
          left: translateFunny,
          opacity: opacityFunny,
          color: "var(--color-light-blue)",
        }}
      >
        Vamos a chocar con fantasmas y recolectar muchas sorpresas
      </motion.h1>

      <motion.img
        className="sprite ghost floating"
        style={{
          "--position-y": "12%",
          "--position-x": "75%",
          opacity: opacityGhostInviteM,
        }}
        src="https://media.giphy.com/media/r8AKGSaw7qRRS/200.gif"
      />
      <motion.img
        className="sprite ghost floating"
        style={{
          "--position-y": "62%",
          "--position-x": "20%",
          opacity: opacityGhostInviteM,
        }}
        src="https://media.giphy.com/media/r8AKGSaw7qRRS/200.gif"
      />
      <motion.img
        className="sprite ghost floating"
        style={{
          "--position-y": "85%",
          "--position-x": "15%",
          opacity: opacityGhostInviteM,
        }}
        src="https://media.giphy.com/media/r8AKGSaw7qRRS/200.gif"
      />
      <motion.img
        className="sprite ghost floating"
        style={{
          "--position-y": "20%",
          "--position-x": "35%",
          opacity: opacityGhostInviteM,
        }}
        src="https://media.giphy.com/media/r8AKGSaw7qRRS/200.gif"
      />
      <motion.img
        className="sprite ghost floating"
        style={{
          "--position-y": "5%",
          "--position-x": "6%",
          opacity: opacityGhostInviteM,
        }}
        src="https://media.giphy.com/media/r8AKGSaw7qRRS/200.gif"
      />
      <motion.img
        className="sprite ghost floating"
        style={{
          "--position-y": "72%",
          "--position-x": "70%",
          opacity: opacityGhostInviteM,
        }}
        src="https://media.giphy.com/media/r8AKGSaw7qRRS/200.gif"
      />
      <motion.img
        className="sprite ghost floating"
        style={{
          "--position-y": "4%",
          "--position-x": "45%",
          opacity: opacityGhostInviteM,
        }}
        src="https://media.giphy.com/media/r8AKGSaw7qRRS/200.gif"
      />
      <motion.img
        className="sprite ghost floating"
        style={{
          "--position-y": "87%",
          "--position-x": "60%",
          opacity: opacityGhostInviteM,
        }}
        src="https://media.giphy.com/media/r8AKGSaw7qRRS/200.gif"
      />

      <motion.section
        className="info"
        style={{
          opacity: opacityInfo,
          display: opacityInfo === 0 ? "none" : "block",
        }}
      >
        <Banner />

        <div>
          <h3>¿Cuándo?</h3>
          <p>Sábado 13 de Julio a las 4:00PM</p>
        </div>

        <div>
          <h3>¿Dónde?</h3>
          <p>City Park - CC Los Molinos</p>
        </div>

        <a
          href="https://api.whatsapp.com/send?phone=573104892456&text=%F0%9F%8E%89%20Confirmo%20mi%20asistencia%20a%20divertirnos%20con%20Pacman%20%F0%9F%8E%88"
          class="confirm"
          target="_blank"
        >
          <h3>¡ Confirma aquí !</h3>
        </a>

        <div className="clyde">
          <div className="eye-left">
            <div className="iris" />
          </div>
          <div className="eye-right">
            <div className="iris" />
          </div>
          <div className="tail">
            <div className="black" />
            <div className="black" />
            <div className="black" />
            <div className="black" />
            <div className="black" />
          </div>
        </div>
      </motion.section>
    </motion.section>
  );
}
