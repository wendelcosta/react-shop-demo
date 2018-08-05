
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImtPropTypes from 'react-immutable-proptypes';
import styles from './styles.css';
import imageService from '../../../services/imageService';

/**
 * Product item component
 */
class ProductItem extends Component {

  /**
   * Main render method
   */
  render() {
    const { item } = this.props;
    const image = imageService.getImage(item.get('productImage'));
    const isSale = item.get('isSale');
    const isExclusive = item.get('isExclusive');

    return (
      <div className={styles.item}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={image}
            alt={item.get('productName')}
          />
        </div>
        <div className={styles.extras}>
          {
            isSale && (
              <div className={styles.saleItem}>Sale</div>
            )
          }
          {
            isExclusive && (
              <div className={styles.exclusiveItem}>Exclusive</div>
            )
          }
        </div>
        <div className={styles.details}>
          <h3 className={styles.productName}>{item.get('productName')}</h3>
          <p className={styles.price}>{item.get('price')}</p>
        </div>
      </div>
    )
  }
}

// Define proptypes
ProductItem.propTypes = {
  item: ImtPropTypes.map.isRequired,
}

export default ProductItem;
