import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import styles from './index.module.scss';
import Footer from '../../components/Footer';
import { newPost } from '../../services/posts';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const response = await newPost(text);
    if (response.data.error) return setError(response.data.error);

    return navigate('/');
  };

  return (
    <section className={styles.createPostSection}>
      <Navbar />
      <form onSubmit={handleSubmit} className={styles.text}>
        <textarea
          className={styles.postText}
          name="post"
          id="post"
          placeholder="What's up...."
          maxLength={250}
          value={text}
          onChange={({ target }) => setText(target.value)}
        ></textarea>
        {error && <p className="errorMsg">{error}</p>}
        <button className={styles.sendPost}>Post</button>
      </form>
      <Footer />
    </section>
  );
}

export default CreatePost;
