import React from "react";
import styles from './ProfileInfo.module.css'

export const ProfileInfo = (props) => {
  return (
    <div>
        <div>
          <img
            src="https://static.scientificamerican.com/sciam/cache/file/4E0744CD-793A-4EF8-B550B54F7F2C4406_source.jpg"
            alt=""
          />
        </div>
        <div className={styles.decriptionBlock}>
          ava + description
        </div>
    </div>
  );
};
