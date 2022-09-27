import React from "react";
import styles from "./Logo.module.css";

export default function Logo(props) {
  let className = `${styles.logo} ${props.className}`;

  return (
    <div>
      <img src={props.img} alt="logo" className={className} />
    </div>
  );
}
