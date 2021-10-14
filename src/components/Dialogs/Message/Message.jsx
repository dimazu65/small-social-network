import React from "react";
import styles from "./../Dialogs.module.css";

export const MessageItem = (props) => {
  return <div className={styles.message}>{props.message}</div>;
};
