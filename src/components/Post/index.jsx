import styles from './index.module.scss';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { deletePost } from '../../services/posts';
import { GrClose } from 'react-icons/gr';

function Post({ author, content, id, postId }) {
  const [like, setLike] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  const navigate = useNavigate();

  const handleLike = () => {
    setLike(!like);
  };

  const handleDelete = async () => {
    const confirmMsg = confirm('Are you sure you want to delete the post?');
    if (confirmMsg) {
      await deletePost(postId);
      navigate('/');
      location.reload();
    }
    return;
  };

  useEffect(() => {
    if (id === JSON.parse(localStorage.getItem('user'))._id) {
      setIsOwner(true);
    }
  }, [id]);

  return (
    <div className={styles.post}>
      {author && (
        <NavLink className={styles.author} to={`/user/${id}`}>
          <h2>{author}</h2>
        </NavLink>
      )}
      {isOwner && (
        <button className={styles.deleteBtn} onClick={handleDelete}>
          <GrClose />
        </button>
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
