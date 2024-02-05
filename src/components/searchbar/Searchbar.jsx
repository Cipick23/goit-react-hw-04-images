import React, { useState } from 'react';
import styles from './Searchbar.module.css';

const Searchbar = ({ handleInputChange }) => {
  const [input, setInput] = useState('');

  const onSubmitImg = ev => {
    ev.preventDefault();
    handleInputChange(input);
    setInput('');
  };

  const onChangeImg = ev => {
    setInput(ev.target.value);
  };

  return (
    <header className={styles.Header}>
      <form className={styles.SearchForm} onSubmit={onSubmitImg}>
        <button type="submit" className={styles.SearchFormButton}></button>

        <input
          name="input"
          type="text"
          autoComplete="off"
          onChange={onChangeImg}
          value={input}
          autoFocus
          placeholder="Search images and photos"
          className={styles.SearchFormInput}
        />
      </form>
    </header>
  );
};

export default Searchbar;
