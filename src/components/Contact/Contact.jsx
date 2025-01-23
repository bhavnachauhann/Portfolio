import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li>
          <a href="mailto:bhavnac297@gmail.com">
            <img
              src={getImageUrl("contact/emailIcon.png")}
              alt="Email icon"
              className={styles.icon}
            />
            <span>Email</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/myname" target="_blank" rel="noreferrer">
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
              className={styles.icon}
            />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://www.github.com/myname" target="_blank" rel="noreferrer">
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="GitHub icon"
              className={styles.icon}
            />
            <span>GitHub</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};
