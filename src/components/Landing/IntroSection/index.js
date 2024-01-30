import React from 'react';
import DownloadIcon from '../../svg-icon/download-icon';
import style from './IntroSection.module.css'

const IntroSection = () => {
  return (  <div className={style.ContentContainer}>
    <span className={style.FadedText}>Full Stack Developer</span>
    <h1 className={style.Title}>SARANPAT FUNKAEW</h1>
    <span className={style.FadedText}>
      I graduated from King Mongkut's University of Technology Thonburi
      (KMUTT). Computer Engineering.
    </span>
    <div className={style.DownloadCVContainer}>
      <a href="/resume/SaranpatFunkaewCV.pdf" target={"_blank"}>
        <DownloadIcon className={style.DownloadIcon} />
        <div className={style.CVText}>Resume</div>
      </a>
    </div>
  </div>);
}
 
export default IntroSection;