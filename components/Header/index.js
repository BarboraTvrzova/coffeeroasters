import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Header.module.scss";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className={styles.wraper}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.logo}>
            <Image src="/assets/shared/desktop/logo.svg" layout="fill" />
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
                <ul onClick={() => setIsNavOpen(!isNavOpen)}>
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
      </div>
    </header>
  );
};

export default Header;
