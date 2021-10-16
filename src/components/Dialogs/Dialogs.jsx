import React from "react";
import styles from "./Dialogs.module.css";

import { DialogItem } from "./DialogItems/DialogItem";
import { MessageItem } from "./Message/Message";
import { updateNewMessageBodyCreator, sendMessageCreator } from './../../redux/dialogs-reducer';


export const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let dialogElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
  let messageElements = state.messages.map((m) => <MessageItem message={m.message} id={m.id} />);
  let newMessageBody = state.messages.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body))
  };
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogElements}</div>
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
