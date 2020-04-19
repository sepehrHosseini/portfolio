import React from "react";
import PropTypes from "prop-types";
import styles from "./hero.module.css";
import heroImage from "./heroImage.jpg";

function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={heroImage} />
        </div>
        <div className={styles.content}>#webdeveloper</div>
      </div>

      <div className={styles.subtitle}>21-year-old fullstack developer based in #yerevan</div>
    </div>
  );
}

Hero.defaultProps = {};

Hero.propTypes = {};

export default Hero;
