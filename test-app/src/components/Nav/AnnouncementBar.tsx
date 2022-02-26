import React from "react";
import styles from "./AnnouncementBar.module.css";

function AnnouncementBar() {
  return (
    <div className={styles.announcementBar}>
      <div className={styles.announcementBarContainer}>
        <div className={styles.announcementText}>
          <p>Please adopt, don't shop</p>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementBar;
