import React from 'react';
import styles from './index.module.scss';

function Loading() {
  return (
    <div className={styles.loadingPage}>
      <div className={styles.loader}></div>
    </div>
  );
}

export default Loading;
