import React from "react";
import styles from "./Skills.module.css";
import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export const Skills = () => {
  useEffect(() => {

    AOS.init({
        duration: 800, // Animation duration in ms
        easing: 'ease-in-out', // Animation easing
        once: true, // Trigger animation only once
    });
  }, []);
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content} data-aos="zoom-out-down">
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
