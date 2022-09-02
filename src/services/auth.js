import axios from 'axios';

export const auth = axios.create({
  baseURL: 'https://ourbook-api.herokuapp.com/user',
});

export const registerAccount = async (name, email, password) => {
  return auth.post('/register', {
    name,
    email,
    password,
  });
};

export const loginAccount = async (email, password) => {
  return auth.post('/login', {
    email,
    password,
  });
};

export const getUser = async (id) => {
  return auth.get(`/${id}`);
};
