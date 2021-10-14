import React from "react";
import styles from './MyPosts.module.css'
import { Post } from "./Post/Post";

export const MyPosts = () => {
  return (
    <div>
      MyPosts
      <div>
        New Post
      </div>
      <div className={styles.posts}>
      <textarea></textarea>
      <button>Add post</button>
      <button>Remove post</button>
        <Post />
      </div>   
    </div>
    
  );
};
