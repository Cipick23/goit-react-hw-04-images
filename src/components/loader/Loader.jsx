import React, { Component } from 'react';
import styles from './Loader.module.css';
import { Circles } from 'react-loader-spinner';

class Loader extends Component {
  render() {
    return (
      <div className={styles.LoaderContainer}>
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
}

export default Loader;
