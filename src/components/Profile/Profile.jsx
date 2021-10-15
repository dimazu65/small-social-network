import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {
  
    

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts} 
               newPostText ={props.profilePage.newPostText} 
               addPost={props.addPost}
               updateNewPostText={props.updateNewPostText}/>
    </div>
  );
};
