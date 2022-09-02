import React from 'react';
import styles from './index.module.scss';
import { NavLink } from 'react-router-dom';

function Post({ author, content, id }) {
  return (
    <div className={styles.post}>
      {author && (
        <NavLink className={styles.author} to={`/user/${id}`}>
          <h2>{author}</h2>
        </NavLink>
      )}
      <p className={styles.postContent}>{content}</p>
    </div>
  );
}

export default Post;
