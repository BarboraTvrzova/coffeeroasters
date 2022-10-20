import React from "react";
import Hero from "../Hero";
import styles from "./AboutPage.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Svg from "react-inlinesvg";

const AboutPage = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className={styles.wraper}
        key="about-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
      >
        <Hero
          title="About Us"
          text="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
          bgClass="bg_about"
        />
        <div className={`section ${styles.commitment}`}>
          <div className={styles.commitment_image}>
            <Image
              src="/assets/about/desktop/image-commitment.jpg"
              layout="fill"
              alt="about page hero image"
            />
          </div>
          <div className={styles.commitment_text}>
            <h3>Our commitment</h3>
            <p>
              We’re built on a simple mission and a commitment to doing good
              along the way. We want to make it easy for you to discover and
              brew the world’s best coffee at home. It all starts at the source.
              To locate the specific lots we want to purchase, we travel nearly
              60 days a year trying to understand the challenges and
              opportunities in each of these places. We collaborate with
              exceptional coffee growers and empower a global community of
              farmers through with well above fair-trade benchmarks. We also
              offer training, support farm community initiatives, and invest in
              coffee plant science. Curating only the finest blends, we roast
              each lot to highlight tasting profiles distinctive to their native
              growing region.
            </p>
          </div>
        </div>
        <div className={`${styles.quality} section`}>
          <div className={`${styles.quality_inner} container-inner`}>
            <div className={styles.quality_inner_image}>
              <Image
                src="/assets/about/desktop/image-quality.jpg"
                layout="fill"
                alt="about page quality section image"
              />
            </div>
            <div className={styles.quality_inner_text}>
              <h3>Uncompromising quality</h3>
              <p>
                Although we work with growers who pay close attention to all
                stages of harvest and processing, we employ, on our end, a
                rigorous quality control program to avoid over-roasting or
                baking the coffee dry. Every bag of coffee is tagged with a
                roast date and batch number. Our goal is to roast consistent,
                user-friendly coffee, so that brewing is easy and enjoyable.
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.address} section container-inner`}>
          <h4>Our headquarters</h4>
          <div className={styles.address_list}>
            <div className={styles.address_list_item}>
              <Svg
                src="/assets/about/desktop/illustration-uk.svg"
                alt="uk map"
              />
              <div className={styles.address_list_item_text}>
                <h3>United Kingdom</h3>
                <ul>
                  <li>68 Asfordby Rd</li>
                  <li>Alcaston</li>
                  <li>SY6 1YA</li>
                  <li>+44 1241 918425</li>
                </ul>
              </div>
            </div>
            <div className={styles.address_list_item}>
              <Svg
                src="/assets/about/desktop/illustration-canada.svg"
                alt="canada map"
              />
              <div className={styles.address_list_item_text}>
                <h3>Canada</h3>
                <ul>
                  <li>61528 Eglinton Avenue</li>
                  <li> Toronto Ontario</li>
                  <li>M4P 1A6</li>
                  <li> +1 416 485 2997</li>
                </ul>
              </div>
            </div>
            <div className={styles.address_list_item}>
              <Svg
                src="/assets/about/desktop/illustration-australia.svg"
                alt="australia map"
              />
              <div className={styles.address_list_item_text}>
                <h3>Australia</h3>
                <ul>
                  <li>36 Swanston Street</li>
                  <li>Kewell</li>
                  <li>Victoria</li>
                  <li>+61 4 9928 3629</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutPage;
