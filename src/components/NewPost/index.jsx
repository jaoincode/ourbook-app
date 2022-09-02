import React from 'react';
import styles from './index.module.scss';
import { NavLink } from 'react-router-dom';

function NewPost() {
  return (
    <NavLink to="/create" className={styles.button}>
      +
    </NavLink>
  );
}

export default NewPost;
