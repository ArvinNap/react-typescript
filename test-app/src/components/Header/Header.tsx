import React, { useState } from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <nav className={styles.headerNav}>
          <a href="#" className={styles.headerLogo}>
            <img src="/logo.jpg" alt="" />
          </a>
          <ul className={styles.headerNavMenu}>
            <li className={styles.headerNavItem}>
              <a href="#" className={styles.link}>
                Home
              </a>
            </li>
            <li className={styles.headerNavItem}>
              <a href="#" className={styles.link}>
                Adopt
              </a>
            </li>
            <li className={styles.headerNavItem}>
              <a href="#" className={styles.link}>
                About
              </a>
            </li>
            <li className={styles.headerNavItem}>
              <a href="#" className={styles.link}>
                Contact Us
              </a>
            </li>
          </ul>
          <div className={styles.searchContainer}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search..."
            />
            <button className={styles.searchButton}>
              <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
