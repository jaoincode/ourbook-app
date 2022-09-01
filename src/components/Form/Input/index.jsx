import React from 'react';
import styles from './index.module.scss';

function Input({ name, id, type, ...rest }) {
  return (
    <div className={styles.inputField}>
      <input
        type={type ? type : 'text'}
        id={id}
        name={id}
        {...rest}
        placeholder={name}
      />
    </div>
  );
}

export default Input;
