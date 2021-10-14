import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import styles from './Profile.module.css'

export const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <div>
          <img
            src="https://static.scientificamerican.com/sciam/cache/file/4E0744CD-793A-4EF8-B550B54F7F2C4406_source.jpg"
            alt=""
          />
        </div>
        <div>
          ava + description
        </div>
        <MyPosts />
      </div>
    </div>
  );
};
