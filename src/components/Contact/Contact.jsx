import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import  { useEffect } from "react";

export const Contact = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Bhavna_Resume (1) (2).pdf"; // Relative path from the public folder
    link.download = "Bhavna_Resume (1) (2).pdf"; // The name of the downloaded file
    link.click();
  };
   useEffect(() => {
  
      AOS.init({
          duration: 800, // Animation duration in ms
          easing: 'ease-in-out', // Animation easing
          once: true, // Trigger animation only once
      });
    }, []);
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        
        <p>Feel free to reach out!</p>
        <button className={styles.downloadButton} onClick={handleDownload}>
        Download My Resume
      </button>
      </div>
      <ul className={styles.links} data-aos="fade-down">
        <li >
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
          <a href="https://www.linkedin.com/in/bhavna-chauhan-79a40b230/" target="_blank" rel="noreferrer">
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
              className={styles.icon}
            />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/bhavnachauhann" target="_blank" rel="noreferrer">
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
