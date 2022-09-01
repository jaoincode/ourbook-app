import React from 'react';
import styles from './index.module.scss';


function Post({ author, content }) {
  return (
    <div className={styles.post}>
      <h2 className={styles.author}>{author}</h2>
      <p className={styles.postContent}>{content}</p>
    </div>
  );
}

export default Post;
