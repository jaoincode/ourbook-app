import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.options}>
        <li className={styles.option}>
          <Link to="/" className={styles.redirect}>
            <FontAwesomeIcon icon={faHome} className={styles.icon} />
          </Link>
        </li>
        <li className={styles.option}>
          <Link to="/search" className={styles.redirect}>
            <FontAwesomeIcon icon={faSearch} className={styles.icon} />
          </Link>
        </li>
        <li className={styles.option}>
          <Link to="/profile" className={styles.redirect}>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
