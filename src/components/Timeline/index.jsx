import React from 'react';
import styles from './index.module.scss';

function Timeline({ children }) {
  return <div className={styles.timeline}>{children}</div>;
}

export default Timeline;
