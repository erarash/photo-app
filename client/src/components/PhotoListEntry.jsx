import React from "react";
import styles from "../css/PhotoListEntry.css";

export default function PhotoListEntry(props) {
  return (
    <div onClick={e => props.delete(e)}>
      <img
        id="picture"
        className={styles.box}
        src={props.photo}
        height="100px"
        width="150px"
      />
    </div>
  );
}
