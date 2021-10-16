import React from "react";
import styles from './MyPosts.module.css'
import { Post } from "./Post/Post";
 
export const MyPosts = (props) => {
 
let postElement = props.posts.map ((p) =>
  {
    return(
    <Post id={p.id} message={p.message} like = {p.likeCount} />)
  })
  
  let newPostElement = React.createRef();

  let addPost = () => {
      props.addPost();
  };

  let onPostChange = () => {
    let newText = newPostElement.current.value;
    props.updateNewPostText( newText )
  };


  
  return (
    
    <div className={styles.postsBlock}>
      MyPosts
      <div>
        <h3>New Post</h3>
      </div>
      <div className={styles.posts}>
      <div>
        
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        
      </div>  
      <div>
         <button onClick={addPost}>Add post</button>
      
      </div>
      <div className={styles.post}>
        {postElement}
        <button>Remove post</button>
        </div>  
         
      </div>
    </div>
    
  );
};
