import React from "react";
import styles from "../css/PhotoList.css";
import PhotoListEntry from "./PhotoListEntry.jsx";

export default function PhotoList(props) {
  return (
    <div>
      <ul className={styles.photoList}>
        {props.photos.map(photo => (
          <li key={photo.index}>
            <PhotoListEntry photo={photo} delete={props.delete} />
          </li>
        ))}
      </ul>
    </div>
  );
}
