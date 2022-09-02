import React, { useState } from 'react';
import styles from './index.module.scss';
import { NavLink } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function Post({ author, content, id }) {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div className={styles.post}>
      {author && (
        <NavLink className={styles.author} to={`/user/${id}`}>
          <h2>{author}</h2>
        </NavLink>
      )}
      <p className={styles.postContent}>{content}</p>
      <div className={styles.likeContainer}>
        <p onClick={handleLike} className={styles.clickContainer}>
          {like ? (
            <AiFillHeart className={`${styles.heart} ${styles.fill}`} />
          ) : (
            <AiOutlineHeart className={styles.heart} />
          )}
        </p>
      </div>
    </div>
  );
}

export default Post;
