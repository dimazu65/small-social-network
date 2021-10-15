const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export let store = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", message: "This is first post", likeCount: "15" },
        { id: "2", message: "This is second post", likeCount: "22" },
      ],
      newPostText: "Primer text",
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
    },
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
    // {type: 'ADD-POST' etc.}
    
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } 
    else 
    if ((action.type === UPDATE_NEW_POST_TEXT)) {
      
      this._state.profilePage.newPostText = action.newText;
      
      this._callSubscriber(this._state);
    }
  },
};
export const addPostActionCreator = () => {
  return (
    { type: ADD_POST }
  )
}

export const updateNewPostTextActionCreator = (text) => {
 return (
   { type: UPDATE_NEW_POST_TEXT, newText: text}
 )
}