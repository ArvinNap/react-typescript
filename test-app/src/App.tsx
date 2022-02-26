import React, { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AnnouncementBar from "./components/Nav/AnnouncementBar";
import ImageSlider from "./components/Slider/ImageSlider";

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <AnnouncementBar />
      </div>
      <div className={styles.section}>
        <Header />
      </div>
      <div className={styles.section}>
        <div className={styles.mainContainer}>
          <h1 className={styles.title}>
            <span>d</span>
            <span>o</span>
            <span>g</span>
            <span>b</span>
            <span>r</span>
            <span>e</span>
            <span>e</span>
            <span>d</span>
            <span>s</span>
          </h1>
          <ImageSlider />
        </div>
      </div>
      <div className={styles.section}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
