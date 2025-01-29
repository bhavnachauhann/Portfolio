import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from "typewriter-effect"; 
export const Hero = () => {
  useEffect(() => {

    AOS.init({
        duration: 800, // Animation duration in ms
        easing: 'ease-in-out', // Animation easing
        once: true, // Trigger animation only once
    });
  }, []);
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title} data-aos="zoom-in-down">
        <Typewriter
          options={{
            strings: ["Hi, I'm Bhavna","A Developer", "A Designer"],
            autoStart: true,
            loop: true,
            cursor: "",
            wrapperClassName: styles.typewriterText,
          }}
        />
        </h1>

        <p className={styles.description} data-aos="fade-up">
        Frontend Developer with expertise in React.js, JavaScript, responsive design, and MERN stack, creating seamless, user-focused web applications.
        </p>
        <a href="mailto:bhavnac297@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
