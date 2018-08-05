/*
  @file: src/components/products/ProductGrid/index.js
  @brief: Products grid component
  @author: Shane Korin (sk@distriqt.com)
*/

import React, { Component } from 'react';
import ImtPropTypes from 'react-immutable-proptypes';
import styles from './styles.css';
import ProductItem from '../ProductItem';

/**
 * Product grid component
 */
class ProductGrid extends Component {

  /**
   * Main render method
   */
  render() {
    const { items } = this.props;

    return (
      <div className={styles.grid}>
        {
          items.map((item, index) => <ProductItem key={index} item={item} />)
        }
      </div>
    )
  }
}

// Define proptypes
ProductGrid.propTypes = {
  items: ImtPropTypes.list.isRequired,
}

export default ProductGrid;
