import React from "react";
import styles from "./Dialogs.module.css";

import { DialogItem } from "./DialogItems/DialogItem";
import { MessageItem } from "./Message/Message";


export const Dialogs = (props) => {

    
let dialogElements = props.state.dialogs.map((d) => {
    return <DialogItem name={d.name} id={d.id} />;
  });
  
  let messageElements = props.state.messages.map((m) => {
    return <MessageItem message={m.message} id={m.id} />;
  });
  
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogElements}</div>
      <div className={styles.messages}>{messageElements}</div>
    </div>
  );
};
