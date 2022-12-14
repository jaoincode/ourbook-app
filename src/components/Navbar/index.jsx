import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

function Navbar() {
  const userId = JSON.parse(localStorage.getItem('user'))._id;

  return (
    <nav className={styles.navbar}>
      <ul className={styles.options}>
        <li className={styles.option}>
          <Link to="/" className={styles.redirect}>
            <FontAwesomeIcon icon={faHome} className={styles.icon} />
          </Link>
        </li>
        <li className={styles.option}>
          <Link to={`/user/${userId}`} className={styles.redirect}>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
