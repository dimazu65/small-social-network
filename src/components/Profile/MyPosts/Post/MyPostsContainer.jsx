import React from "react";
import { addPostActionCreator , updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import { StoreContext } from "../../../../StoreContext";
//import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import { MyPosts } from "../MyPosts";
export const MyPostsContainer = () => {
  
  return (
    <StoreContext.Consumer>
      { ( store) => {
      let state = store.getState();
      let addPost = () => {
        store.dispatch(addPostActionCreator());
      };
          let onPostChange = (newText) => {
         let action = updateNewPostTextActionCreator( newText )
        store.dispatch(action);
      };   
      return <MyPosts
      updateNewPostText={onPostChange} addPost={addPost}
      posts={state.profilePage.posts}
      newPostText = {state.profilePage.newPostText}
    />
    }
   }
    </StoreContext.Consumer> 
  );
  
}