
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImtPropTypes from 'react-immutable-proptypes';
import Select from 'react-select';
import styles from './styles.css';

/**
 * Products header bar component.
 * 
 * This uses the 'react-select' component for the filter dropdown because it's great.
 */
class ProductsHeader extends Component {
  constructor(props) {
    super(props);
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
  }
  
  
  /**
   * Get the filter options for the react-select dropdown
   *
   * @returns {Array} array of options for the select dropdown
   */
  getFilterOptions() {
    const { filters } = this.props;

    return filters.map(f => {
      return {
        value: f,
        label: f
      };
    });
  }

  /**
   * Handler for changing dropdown filter. This calls the parent's
   * change method with an array of selected filter values from
   * the select component.
   *
   * @param {Array} filters - array of selected filters
   */
  handleChangeFilter(filters) {
    const { onChangeFilter } = this.props;

    // just get the actual value from the selected filters
    const selectedFilters = filters.map(f => f.value);
    onChangeFilter(selectedFilters);
  }

  /**
   * Main render method
   */
  render() {
    const { categoryName } = this.props;

    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{categoryName}</h2>
        <Select
          className={styles.select}
          options={this.getFilterOptions()}
          isClearable
          isMulti
          onChange={this.handleChangeFilter}
          placeholder="Filter by size"
        />
      </div>
    )
  }
}

// Define proptypes
ProductsHeader.propTypes = {
  categoryName: PropTypes.string.isRequired,
  filters: ImtPropTypes.list.isRequired,
  onChangeFilter: PropTypes.func.isRequired
}

export default ProductsHeader;
