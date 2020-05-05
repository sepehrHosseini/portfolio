import React from "react";
import PropTypes from "prop-types";
import styles from "./about.module.css";

function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.title}>About me</h2>
        <p className={styles.para}>
          I am a 21-year-old Full Stack Developer with 4+ years of experience based in Yerevan
          working at LogicKit. I build{" "}
          <strong>
            <i>everything</i>
          </strong>{" "}
          from Backend to Frontend and{" "}
          <strong>
            <i>everything</i>
          </strong>{" "}
          in between.
        </p>
      </div>
    </div>
  );
}

About.defaultProps = {};

About.propTypes = {};

export default About;
