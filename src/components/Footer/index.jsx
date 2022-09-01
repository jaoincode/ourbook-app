import React from 'react';
import styles from './index.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h2>
          Made with ❤️ by{' '}
          <a href="https://github.com/jaoincode" target="_blank">
            @jaoincode
          </a>
        </h2>
      </div>
    </footer>
  );
}

export default Footer;
