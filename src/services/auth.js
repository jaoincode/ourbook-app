import axios from 'axios';

export const auth = axios.create({
  baseURL: 'http://localhost:3000/user',
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
