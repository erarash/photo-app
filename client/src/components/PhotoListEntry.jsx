import React from "react";
import styles from "../css/PhotoListEntry.css";

export default function PhotoListEntry(props) {
  console.log(props.photo);
  return (
    <div className={styles.photo}>
      <img
        className={styles.box}
        src={props.photo}
        height="100px"
        width="150px"
      />
    </div>
  );
}
