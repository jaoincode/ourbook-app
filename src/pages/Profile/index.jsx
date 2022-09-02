import React from 'react';
import styles from './index.module.scss';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Timeline from '../../components/Timeline';
import Post from '../../components/Post';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useState } from 'react';
import { useEffect } from 'react';
import { getUserPosts } from '../../services/posts';
import Footer from '../../components/Footer';
import { getUser } from '../../services/auth';
import NewPost from '../../components/NewPost';

function Profile() {
  const [isOwner, setIsOwner] = useState(null);
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  const { logout } = useContext(UserContext);
  const [user, setUser] = useState('empty');
  const [date, setDate] = useState('0000');

  useEffect(() => {
    if (id === JSON.parse(localStorage.getItem('user'))._id) setIsOwner(true);
  }, [id]);

  const handleConfirm = () => {
    const logoutConfirm = confirm('Are you sure you want to quit');
    if (logoutConfirm) logout();
    return;
  };

  useEffect(() => {
    getPosts(id);
    getActualUser(id);
  }, [id]);

  const getPosts = async (id) => {
    const response = await getUserPosts(id);
    setPosts(response.data.posts);
  };

  const getActualUser = async (id) => {
    const response = await getUser(id);
    if (response.statusText === 'OK') {
      setUser(response.data.name);
      setDate(response.data.created_at.slice(0, 4));
    }
  };

  return (
    <section className={styles.profileSection}>
      <Navbar />
      <div className={styles.profile}>
        <div className={styles.all}>
          <div className={styles.userStats}>
            <h1>{user}</h1>
            <h3>Ingressou em {date}</h3>
          </div>
          {isOwner && (
            <button className={styles.logoutBtn} onClick={handleConfirm}>
              Logout
            </button>
          )}
        </div>
      </div>
      <div className={styles.timelineContainer}>
        <h2 className={styles.postsHeader}>Posts:</h2>
        <Timeline>
          {posts.length <= 0 && (
            <h2 className={styles.noPosts}>No posts found :(</h2>
          )}
          {posts.map((post) => (
            <Post key={post._id} content={post.body} id={post.author} />
          ))}
        </Timeline>
      </div>
      <NewPost />
      <Footer />
    </section>
  );
}

export default Profile;
