import React from "react";
import Collection from "../Collection";
import Hero from "../Hero";
import styles from "./LandingPage.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import Svg from "react-inlinesvg";
import HowItWorks from "../HowItWorks";
import { Button } from "../Utils";

const LandingPage = ({ items }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className={styles.wraper}
        key="landing-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
      >
        <Hero
          title="Great coffee made simple."
          text="  Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule."
          btnLabel="Create your plan"
          bgClass="bg_home"
        />
        <Collection items={items} />
        <WhyUs />
        <HowItWorks title="How it works" />
        <Button href="/your-plan" label="Create your plan" />
      </motion.div>
    </AnimatePresence>
  );
};

export default LandingPage;

const WhyUs = () => {
  const whyUs = [
    {
      image: "coffee-bean",
      title: "Best quality",
      text: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
    },
    {
      image: "gift",
      title: "Exclusive benefits",
      text: "Special offers and swag when you subscribe, including 30% off your first shipment.",
    },
    {
      image: "truck",
      title: "Free shipping",
      text: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
    },
  ];
  return (
    <div className={styles.us_wraper}>
      <div className={`${styles.us_wraper_dark} container-inner`}>
        <div className={styles.us_wraper_dark_content}>
          <h3>Why choose us?</h3>
          <p>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
      </div>
      <div className={`${styles.cards} container-inner section`}>
        {whyUs.map((item) => (
          <Card key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <Svg src={`/assets/home/desktop/icon-${item.image}.svg`} />
      </div>
      <div className={styles.card_content}>
        <h4>{item.title}</h4>
        <p>{item.text}</p>
      </div>
    </div>
  );
};
