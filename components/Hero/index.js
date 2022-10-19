import React from "react";
import styles from "./Hero.module.scss";
import { Button } from "../Utils";

const Hero = ({ title, text, btnLabel, bgClass }) => {
  return (
    <div
      className={`${styles.content_wraper} ${
        bgClass === "bg_home"
          ? styles.bg_home
          : bgClass === "bg_about"
          ? styles.bg_about
          : styles.bg_plan
      }`}
    >
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{text}</p>
        {btnLabel && <Button href="/your-plan" label={btnLabel} />}
      </div>
    </div>
  );
};

export default Hero;
