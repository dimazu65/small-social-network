import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from './sidebar-reducer';


export let store = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", message: "This is first post", likeCount: "15" },
        { id: "2", message: "This is second post", likeCount: "22" },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
    },
    sidebar : {}
  },
  _callSubscriber() {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer( this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._callSubscriber(this._state);
  },
};

