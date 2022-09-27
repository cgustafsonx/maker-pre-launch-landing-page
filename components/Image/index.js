import React from "react";
import styles from "./Image.module.css";

export default function Image(props) {
  let className = `${styles.image} ${props.className}`;

  return (
    <div>
      <img src={props.img} alt="products" className={className} />
      {props.children}
    </div>
  );
}
