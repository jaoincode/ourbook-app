import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';
import Input from '../../components/Form/Input';
import { UserContext } from '../../contexts/UserContext';
import Footer from '../../components/Footer';
import Loading from '../Loading';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(null);

  const { authenticated, login, error } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    login(email, password);
    setLoading(false);
  };

  useEffect(() => {
    if (authenticated) navigate('/');
  }, [authenticated]);

  return (
    <section className={styles.loginSection}>
      {loading && <Loading />}
      <div className={styles.welcome}>
        <h1 className={styles.title}>Ourbook</h1>
        <p className={styles.welcomeMessage}>
          Ourbook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className={styles.loginContainer}>
        <form onSubmit={handleSubmit}>
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
          <button>Login</button>
        </form>
        {error && <p className="errorMsg">{error}</p>}
        <button
          onClick={() => navigate('/register')}
          className={styles.createAccount}
        >
          Create new account
        </button>
      </div>
      <Footer />
    </section>
  );
}

export default Login;
