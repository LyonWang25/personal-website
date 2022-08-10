import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <img src={images.selficon} alt="self-emoji" />
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Li-Yang</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Front-End Engineer</p>
          <p className="p-text">Web Developer</p>
          <p className="p-text">Freelancer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile_me} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.mongo, images.express, images.react, images.node].map(
        (circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        )
      )}
      <a
        className="app__header-resume"
        target="_blank"
        href={`https://drive.google.com/file/d/1b47jaBcYCX2Uu3KZt39YEyA5S__fVpx1/view?usp=sharing`}
      >
        <h1>👉Resume👈</h1>
      </a>
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
