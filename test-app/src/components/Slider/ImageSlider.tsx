import React from "react";
import styles from "./ImageSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  return (
    <Slider {...settings}>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img className={styles.image} src="/afador.jpg" />
          </div>
          <ul className={styles.icons}>
            <li>
              <a href="#">
                <img
                  className={styles.iconsImg}
                  src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className={styles.iconsImg}
                  src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png"
                />
              </a>
            </li>
          </ul>
          <div className={styles.description}>
            <h2>
              Afador
              <span className={styles.characteristics}>
                Loyal, energetic, and affectionate
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img className={styles.image} src="/geman-shepherd.jpg" />
          </div>
          <ul className={styles.icons}>
            <li>
              <a href="#">
                <img
                  className={styles.iconsImg}
                  src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className={styles.iconsImg}
                  src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png"
                />
              </a>
            </li>
          </ul>
          <div className={styles.description}>
            <h2>
              Geman Shepherd
              <span className={styles.characteristics}>
                Competitive, obedience and faithful companion.
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img className={styles.image} src="/golden-retriever.jpg" />
          </div>
          <ul className={styles.icons}>
            <li>
              <a href="#">
                <img
                  className={styles.iconsImg}
                  src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className={styles.iconsImg}
                  src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png"
                />
              </a>
            </li>
          </ul>
          <div className={styles.description}>
            <h2>
              Golden Retriever
              <span className={styles.characteristics}>
                Loyal, loving, and smart companion
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img className={styles.image} src="/jack-russell.jpg" />
          </div>
          <ul className={styles.icons}>
            <li>
              <a href="#">
                <img
                  className={styles.iconsImg}
                  src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className={styles.iconsImg}
                  src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png"
                />
              </a>
            </li>
          </ul>
          <div className={styles.description}>
            <h2>
              Jack Russell
              <span className={styles.characteristics}>
                Lively, independent, and clever little dog
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img className={styles.image} src="/pomchi.jpg" />
          </div>
          <ul className={styles.icons}>
            <li>
              <a href="#">
                <img
                  className={styles.iconsImg}
                  src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className={styles.iconsImg}
                  src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png"
                />
              </a>
            </li>
          </ul>
          <div className={styles.description}>
            <h2>
              Pomchi
              <span className={styles.characteristics}>
                Playful, devoted, and energetic
              </span>
            </h2>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default ImageSlider;
