import React from "react";

import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/dialogs-reducer";
import { StoreContext } from "../../StoreContext";
import { Dialogs } from "./Dialogs";

export const MyDialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;
        let sendMessage = () => {
          store.dispatch(sendMessageCreator());
        };
        let NewMessageChange = (body) => {
          let action = updateNewMessageBodyCreator(body);
          store.dispatch(action);
        };
        return <Dialogs
          sendMessage={sendMessage}
          updateNewMessageBody={NewMessageChange}
          dialogsPage={state}
        />;
      }}
    </StoreContext.Consumer>
  );
};
