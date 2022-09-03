import axios from 'axios';

export const posts = axios.create({
  baseURL: 'https://ourbook-api.herokuapp.com/posts',
});

export const getAllPosts = async () => {
  return posts.get('/');
};

export const newPost = async (body) => {
  return posts.post(
    '/',
    { body: body },
    {
      headers: {
        'x-access-token': JSON.parse(localStorage.getItem('token')),
      },
    }
  );
};

export const getUserPosts = async (id) => {
  return posts.get(`/${id}`);
};

export const deletePost = async (id) => {
  return posts.delete(`/${id}`, {
    headers: {
      'x-access-token': JSON.parse(localStorage.getItem('token')),
    },
  });
};
