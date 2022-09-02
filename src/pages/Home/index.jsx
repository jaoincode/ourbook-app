import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Navbar from '../../components/Navbar';
import Timeline from '../../components/Timeline';
import Footer from '../../components/Footer';
import Post from '../../components/Post';
import { getAllPosts } from '../../services/posts';
import NewPost from '../../components/NewPost';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    setLoading(true);
    const response = await getAllPosts();
    setPosts(response.data.posts.reverse());
    setLoading(false);
  };

  return (
    <section className={styles.timelineSection}>
      <Navbar />
      <div className={styles.timelineContainer}>
        <Timeline>
          {loading && <h1>Loading</h1>}
          {posts.map((post) => (
            <Post
              key={post._id}
              author={post.owner}
              content={post.body}
              id={post.author}
            />
          ))}
          <h2 className={styles.noMore}>No posts</h2>
        </Timeline>
      </div>
      <NewPost />
      <Footer />
    </section>
  );
}

export default Home;
