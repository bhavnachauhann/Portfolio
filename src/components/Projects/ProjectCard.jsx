// original code 
// import React from "react";

// import styles from "./ProjectCard.module.css";
// import { getImageUrl } from "../../utils";

// export const ProjectCard = ({
//   project: { title, imageSrc, description, skills, demo, source },
// }) => {
//   return (
//     <div className={styles.container}>
//       <img
//         src={getImageUrl(imageSrc)}
//         alt={`Image of ${title}`}
//         className={styles.image}
//       />
//       <h3 className={styles.title}>{title}</h3>
//       <p className={styles.description}>{description}</p>
//       <ul className={styles.skills}>
//         {skills.map((skill, id) => {
//           return (
//             <li key={id} className={styles.skill}>
//               {skill}
//             </li>
//           );
//         })}
//       </ul>
//       <div className={styles.links}>
//         <a href={demo} className={styles.link}>
//           Demo
//         </a>
//         <a href={source} className={styles.link}>
//           Source
//         </a>
//       </div>
//     </div>
//   );
// };







import React from "react";
import { useSpring, animated } from "@react-spring/web"; // Correct import
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const calc = (x, y, rect) => {
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const deltaX = x - centerX;
  const deltaY = y - centerY;
  const BUFFER = 50;
  return [-(deltaY / BUFFER), deltaX / BUFFER, 1.05];
};

export const ProjectCard = ({

  
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  

  return (
    <animated.div
      className={styles.container} 
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const { clientX: x, clientY: y } = e;
        set({ xys: calc(x, y, rect) });
      }}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.to(trans), // `.to` replaces `.interpolate` in the latest versions
      }}
    >
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </animated.div>
  );
};
