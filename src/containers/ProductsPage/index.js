/*
  @file: src/containers/ProductsPage/index.js
  @brief: Products page container
  @author: Shane Korin (sk@distriqt.com)
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import { loadProducts, applyFilters } from '../../modules/products/actions';
import ProductsHeader from '../../components/products/ProductsHeader';
import ProductGrid from '../../components/products/ProductGrid';

/**
 * Products page component
 */
class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
  }

  /**
   * Component mount handler
   */
  componentDidMount() {
    // On first mount, we want to load the set of products
    this.props.loadProducts();
  }

  /**
   * Callback for the filter dropdown in the product header
   *
   * @param {Array} filters - the selected filter options
   */
  handleChangeFilter(filters) {
    this.props.applyFilters(filters);
  }

  /**
   * Main render method
   */
  render() {
    const { products } = this.props;
    const isLoading = products.get('isLoading');
    const isLoaded = products.get('isLoaded');

    return (
      <div className={styles.page}>
        <ProductsHeader
          categoryName={products.get('category')}
          filters={products.get('filters')}
          onChangeFilter={this.handleChangeFilter}
        />
        {
          isLoading && (
            <div className={styles.loading}>
              Loading products...
            </div>
          )
        }
        {
          isLoaded && (
            <ProductGrid
              items={products.get('filteredProducts')}
            />
          )
        }
      </div>
    )
  }
}

// Map redux state that we need for this container
function mapStateToProps(state) {
  return {
    products: state.get('products')
  };
}

// Map redux actions to prop methods
function mapDispatchToProps(dispatch) {
  return {
    loadProducts: () => dispatch(loadProducts()),
    applyFilters: (filters) => dispatch(applyFilters(filters))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
