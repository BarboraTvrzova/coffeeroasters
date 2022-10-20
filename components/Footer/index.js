import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Svg from "react-inlinesvg";

const Footer = () => {
  return (
    <footer className={styles.wraper}>
      <div className={styles.footer_content}>
        <div className={styles.logo}>
          <Link href="/">
            <Svg
              src="/assets/shared/desktop/logo.svg"
              width={218}
              height={24}
            />
          </Link>
        </div>
        <nav>
          <ul className={styles.nav_links}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/your-plan">Create your plan</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.social_icons}>
          <div className={styles.icon}>
            <Svg
              src="/assets/shared/desktop/icon-facebook.svg"
              alt="Facebook icon"
            />
          </div>
          <div className={styles.icon}>
            <Svg
              src="/assets/shared/desktop/icon-twitter.svg"
              alt="Twitter icon"
            />
          </div>
          <div className={styles.icon}>
            <Svg
              src="/assets/shared/desktop/icon-instagram.svg"
              alt="Instagram icon"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
