import React from "react";
import styles from './Post.module.css'

export const Post = (props) => {
  return (
    <div>
      <div className={styles.item}>
        <img
          className={styles.img}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMNYg4cHI3pB4clChf7c2o9ilmJXFP1fn9tA&usqp=CAU"
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
