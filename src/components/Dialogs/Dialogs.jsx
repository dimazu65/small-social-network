import React from "react";
import styles from "./Dialogs.module.css";

import { DialogItem } from "./DialogItems/DialogItem";
import { MessageItem } from "./Message/Message";

export const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messageElements = state.messages.map((m) => (
    <MessageItem message={m.message} id={m.id} />
  ));
  let newMessageBody = state.messages.newMessageBody;

  let onSendMessageClick= () => {
    props.sendMessage()
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body)
  };
  return (
    <div className={styles.dialogs}>
      <div>
        
        
          <div className={styles.dialogsItems}>{dialogElements}
          <img className={styles.img} src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
          </div>
        
      </div>
      <div className={styles.messages}>
        <div>{messageElements}</div>
        <div>
          <div>
            {" "}
            
            <textarea
              placeholder="Enter your message"
              value={newMessageBody}
              onChange={onNewMessageChange}
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};
