import React from "react";

// styles
import styles from "./About.module.css";

// img
import logo from "../image/avatar.jpg";

// icons
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p className={styles.name}>Hossein Salari</p>
        <p className={styles.lorem}>
          Hello my name is Hossein, Welcome to my shop. I made this with react
          and redux and you can find me with links under the card.
        </p>
      </div>
      <div className={styles.social}>
        <a
          href="https://github.com/Hooseinsalari"
          target="_blank"
          rel="noreferrer"
          className={styles.socialLink}
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/hossein.salari777"
          target="_blank"
          rel="noreferrer"
          className={styles.socialLink}
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/hossein-salari-099543215/"
          target="_blank"
          rel="noreferrer"
          className={styles.socialLink}
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://t.me/Hossein777s"
          target="_blank"
          rel="noreferrer"
          className={styles.socialLink}
        >
          <FaTelegramPlane />
        </a>
      </div>
    </div>
  );
};

export default About;
