import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
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
        <h1 className={styles.title} data-aos="zoom-in-down">Hi, I'm Ada</h1>
        <p className={styles.description} data-aos="fade-up">
        "I’m a Frontend Developer Intern skilled in React.js, JavaScript, and responsive design. I create user-friendly interfaces and seamless applications. Let’s connect to collaborate!"
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
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
