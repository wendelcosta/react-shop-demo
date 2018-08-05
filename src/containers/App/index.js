/*
  @file: src/containers/App/index.js
  @brief: Main app container component
  @author: Shane Korin (sk@distriqt.com)
*/

import React, { Component } from 'react';
import ProductsPage from '../ProductsPage';
import styles from './styles.css';

/**
 * App component
 */
class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <ProductsPage />
      </div>
    );
  }
}

export default App;
