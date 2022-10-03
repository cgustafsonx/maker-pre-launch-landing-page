import React from "react";
import styles from "./FeatureImage.module.css";

export default function FeatureImage(props) {
  return (
    <div className={styles.container}>
      <img src={props.img} className={styles.featureimage} />
      {props.children}
    </div>
  );
}
