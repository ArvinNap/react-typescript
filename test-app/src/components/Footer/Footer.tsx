import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.legalText}>
        <div className={styles.legalTextList}>
          <a href="#" className={styles.link}>
            Privacy Policy
          </a>
          <a href="#" className={styles.link}>
            Cookie Policy
          </a>
        </div>
        <div className={styles.copyright}>
          Copyright © 2022 All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
