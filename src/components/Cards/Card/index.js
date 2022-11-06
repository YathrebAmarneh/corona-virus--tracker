import React from "react";
import styles from "./style.module.css";
import CountUp from "react-countup";

const Card = ({ title, value, lastUpdate, labelText }) => {
  return (
      <div className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        <h3 className={styles.value}>
          <CountUp start={0} end={value} duration={2.75} separator="," />
        </h3>
        <p className={styles.lastUpdated}>
          Last Updated at:
          <p className={styles.DateTimeString}>
            {new Date(lastUpdate).toDateString()}
          </p>
          <p className={styles.DateTimeString}>
            {new Date(lastUpdate).getHours() +
              ":" +
              new Date(lastUpdate).getMinutes() +
              ":" +
              new Date(lastUpdate).getSeconds()}
          </p>
        </p>
        <p className={styles.labelText}>{labelText}</p>
      </div>
  );
};

export default Card;
