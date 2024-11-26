import React from "react";
import DownloadIcon from "../../svg-icon/download-icon";
import style from "./IntroSection.module.css";

const IntroSection = () => {
  return (
    <div className={style.ContentContainer}>
      <span className={style.FadedText}>Full Stack Developer</span>
      <h1 className={style.Title}>SARANPAT FUNKAEW</h1>
      <span className={style.FadedText}>
        I specialize in leveraging JavaScript frameworks such as React.js,
        Next.js, Vue.js, and Node.js to develop modern applications. My
        expertise includes database design, SQL query optimization, webpage
        performance optimization, and migrating legacy systems to modern
        solutions.
      </span>
      <div className={style.DownloadCVContainer}>
        <a href="/resume/SaranpatFunkaew2024.pdf" target={"_blank"}>
          <DownloadIcon className={style.DownloadIcon} />
          <div className={style.CVText}>Resume</div>
        </a>
      </div>
    </div>
  );
};

export default IntroSection;
