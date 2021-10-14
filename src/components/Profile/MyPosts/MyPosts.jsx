import React from "react";
import styles from './MyPosts.module.css'
import { Post } from "./Post/Post";

 
export const MyPosts = (props) => {
 
let postElement = props.posts.map ((p) =>
  {
    return(
    <Post id={p.id} message={p.message} like = {p.likeCount} />)
  })


  
  return (
    <div className={styles.postsBlock}>
      MyPosts
      <div>
        <h3>New Post</h3>
      </div>
      <div className={styles.posts}>
      <div>
        <textarea></textarea>
      </div>  
      <div>
         <button>Add post</button>
      <button>Remove post</button>
      </div>
      <div className={styles.post}>
        {postElement}
        </div>  
         
      </div>
    </div>
    
  );
};
