import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';
import Input from '../../components/Form/Input';
import { UserContext } from '../../contexts/UserContext';
import { registerAccount } from '../../services/auth';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { authenticated } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) navigate('/');
  }, [authenticated]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.length < 5) return setError('Your username is too short');
    else if (password.length < 8) return setError('Your password is too short');

    const registerUser = async (name, email, password) => {
      const response = await registerAccount(name, email, password);
      if (!response.data.error) {
        navigate('/login');
      } else {
        setError(response.data.error);
      }
    };

    registerUser(name, email, password);
  };

  return (
    <section className={styles.registerSection}>
      <div className={styles.welcome}>
        <h1 className={styles.title}>Ourbook</h1>
        <p className={styles.welcomeMessage}>
          Ourbook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className={styles.registerContainer}>
        <form onSubmit={handleSubmit}>
          <Input
            id="user"
            name="User"
            type="user"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <Input
            id="email"
            name="Email"
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <Input
            id="password"
            name="Password"
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          {error && <p className="errorMsg">{error}</p>}
          <button>Register</button>
        </form>
        <button
          onClick={() => navigate('/login')}
          className={styles.createAccount}
        >
          Login in your account
        </button>
      </div>
    </section>
  );
}

export default Register;
