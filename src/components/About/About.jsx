import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export const About = () => {
  useEffect(() => {
  
      AOS.init({
          duration: 800, // Animation duration in ms
          easing: 'ease-in-out', // Animation easing
          once: true, // Trigger animation only once
      });
    }, []);
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem} data-aos="flip-left"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I'm a frontend developer with experience in building responsive and optimized websites using HTML, CSS, JavaScript, and React.js
              
              </p>
            </div>
          </li>
          <li className={styles.aboutItem} data-aos="flip-right">
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I build fast and scalable backend systems using Node.js, Express.js, and MongoDB to create efficient APIs and databases.
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem} data-aos="flip-up">
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
