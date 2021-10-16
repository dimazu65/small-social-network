const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState ={
  dialogs: [
    { id: 1, name: "John" },
    { id: 2, name: "Fedor" },
    { id: 3, name: "Sasha" },
    { id: 4, name: "Peter" },
  ],
  messages: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "Hi! Guys" },
    { id: 3, message: "Hi! girls" },
    { id: 4, message: "Hi! people" },
  ],
  newMessageBody: "",
}


export const dialogsReducer = (state=initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 4, message: body });
      return state;
    default:
      return state;
  }
};
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
