import React from "react";
import styles from './Post.module.css'

export const Post = (props) => {
  return (
    <div>
      <div className={styles.item}>
        <img
          className={styles.img}
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt=""
        />
        {props.message}
        <div>
          <span>Like </span> {props.like}
        </div>
      </div>
      <div></div>
    </div>
  );
};
