const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let initialState ={
  posts: [
    { id: "1", message: "This is first post", likeCount: "15" },
    { id: "2", message: "This is second post", likeCount: "22" },
  ],
  newPostText: "",
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      {
      return  {...state,
         posts:[...state.posts,{id:5, message: state.newPostText,likeCount: 0}],
         newPostText : ''
      }
    } 
    case UPDATE_NEW_POST_TEXT:
      {
      return {...state,
        newPostText : action.newText
      }
      }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
