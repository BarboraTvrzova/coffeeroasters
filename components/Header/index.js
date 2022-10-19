import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Header.module.scss";
import Svg from "react-inlinesvg";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className={styles.wraper}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link href="/">
            <Svg src="/assets/shared/desktop/logo.svg" layout="fill" />
          </Link>
        </div>
        <div className={styles.nav_mobile}>
          <div
            className={styles.nav_mobile_toggle}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <Image
              src={
                !isNavOpen
                  ? "/assets/shared/mobile/icon-hamburger.svg"
                  : "/assets/shared/mobile/icon-close.svg"
              }
              width={15}
              height={16}
            />
          </div>
          {isNavOpen && (
            <nav className={styles.nav}>
              <AnimatePresence exitBeforeEnter>
                <motion.ul
                  key={isNavOpen}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 1 } }}
                  exit={{ opacity: 0 }}
                >
                  <li
                    className={styles.nav_link}
                    onClick={() =>
                      setTimeout(() => setIsNavOpen(!isNavOpen), 300)
                    }
                  >
                    <Link href="/">Home</Link>
                  </li>
                  <li
                    className={styles.nav_link}
                    onClick={() =>
                      setTimeout(() => setIsNavOpen(!isNavOpen), 300)
                    }
                  >
                    <Link href="/about">About Us</Link>
                  </li>
                  <li
                    className={styles.nav_link}
                    onClick={() =>
                      setTimeout(() => setIsNavOpen(!isNavOpen), 300)
                    }
                  >
                    <Link href="/your-plan">Create Your Plan</Link>
                  </li>
                </motion.ul>
              </AnimatePresence>
            </nav>
          )}
        </div>
        <div className={styles.nav_large}>
          <nav className={styles.nav}>
            <ul className={styles.nav_links}>
              <li className={styles.nav_link}>
                <Link href="/">Home</Link>
              </li>
              <li className={styles.nav_link}>
                <Link href="/about">About Us</Link>
              </li>
              <li className={styles.nav_link}>
                <Link href="/your-plan">Create Your Plan</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
