import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import styles from './index.module.scss';
import Timeline from '../../components/Timeline';
import Footer from '../../components/Footer';
import Post from '../../components/Post';
import { getAllPosts } from '../../services/posts';
import NewPost from '../../components/NewPost';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getFakePosts();
    // getPosts();
  }, []);

  const getPosts = async () => {
    setLoading(true);
    const response = await getAllPosts();
    setPosts(response.data.posts);
    setLoading(false);
  };

  const getFakePosts = () => {
    setPosts([
      {
        _id: '6310aa5d646a513471b03056',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
        likes: [],
        author: '630ec14cdddccc82893f27b3',
        owner: 'Joao',
        __v: 0,
      },
      {
        _id: '6310aa6a646a513471b03059',
        body: 'and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960',
        likes: [],
        author: '630ec14cdddccc82893f27b3',
        owner: 'Joao',
        __v: 0,
      },
      {
        _id: '6310aa7a646a513471b0305c',
        body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        likes: [],
        author: '630ec14cdddccc82893f27b3',
        owner: 'Joao',
        __v: 0,
      },
      {
        _id: '6310ab11646a513471b03069',
        body: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubt',
        likes: [],
        author: '6310aaed646a513471b03061',
        owner: 'Alice',
        __v: 0,
      },
      {
        _id: '6310ab2e646a513471b0306c',
        body: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum',
        likes: [],
        author: '6310aaed646a513471b03061',
        owner: 'Alice',
        __v: 0,
      },
      {
        _id: '6310ab35646a513471b0306f',
        body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        likes: [],
        author: '6310aaed646a513471b03061',
        owner: 'Alice',
        __v: 0,
      },
    ]);
  };

  return (
    <section className={styles.timelineSection}>
      <Navbar />
      <div className={styles.timelineContainer}>
        <Timeline>
          {loading && <h1>Loading</h1>}
          {posts.map((post) => (
            <Post key={post._id} author={post.owner} content={post.body} />
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
