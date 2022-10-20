import React from "react";
import styles from "./HowItWorks.module.scss";
import { Button } from "../Utils";

const HowItWorks = ({ dark, title, btn }) => {
  return (
    <div
      className={
        dark
          ? `${styles.wraper} ${styles.dark} container-inner section`
          : `${styles.wraper} container-inner`
      }
    >
      {title && <h4 className={styles.title}>{title}</h4>}
      <div className={`${styles.cards}`}>
        <div className={styles.card}>
          <div className={styles.card_number}>01</div>
          <h4>Pick your coffee</h4>
          <p>
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.card_number}>02</div>
          <h4>Choose the frequency</h4>
          <p>
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.card_number}>03</div>
          <h4>Receive and enjoy!</h4>
          <p>
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </p>
        </div>
      </div>
      {btn && <Button href="/your-plan" label="Create your plan" />}
    </div>
  );
};

export default HowItWorks;
