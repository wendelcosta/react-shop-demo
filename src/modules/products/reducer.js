/*
  @file: src/modules/products/reducer.js
  @brief: Products module reducer
  @author: Shane Korin (sk@distriqt.com)
*/

import { fromJS } from 'immutable';
import {
  PRODUCTS_LOAD_START,
  PRODUCTS_LOAD_SUCCESS,
  PRODUCTS_LOAD_FAILED,
  PRODUCTS_APPLY_FILTERS,
} from './actions';

// Defines initial state for the products store, converted to ImmutableJS object
const INITIAL_STATE = fromJS({
  isLoading: false,
  isLoaded: false,
  loadError: false,
  all: [],
  filters: [],
  filteredProducts: [],
  currentFilters: null,
  category: 'Women\'s Tops'
});

/**
 * Finds available filters from a list of products. This is currently only
 * based on the "size" property of items. This finds a list of unique size
 * values for all of the products.
 *
 * @param {Array} items
 * @returns {Array} available filters for the list of products
 */
const findFilters = (items) => {
  // trying to be clever with es6 results in code like this
  // that is just hard to understand
  /*
  const sizes = Array.from(new Set(items.reduce((acc, item) => {
    item.size.forEach(size => acc.push(size));
    return acc;
  }, [])));
  */

  const sizes = [];

  // This is probably better and easy to follow
  items.forEach(item => {
    item.size.forEach(size => {
      if (!sizes.includes(size)) {
        sizes.push(size);
      }
    })
  });

  return sizes;
}

// Products reducer
export default function productsReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case PRODUCTS_LOAD_START: {
      return state.merge({
        isLoading: true,
        isLoaded: false,
        loadError: false
      });
    }

    case PRODUCTS_LOAD_SUCCESS: {
      // set the list of products converted to an immutable List
      const products = fromJS(payload.results);
      
      return state
        .merge({
          isLoading: false,
          isLoaded: true,
          loadError: false,
        })
        .set('all', products)
        // no filters are selected at startup so just set the filtered product
        // list to the whole collection of products
        .set('filteredProducts', products)
        .set('filters', fromJS(findFilters(payload.results)));
    }

    case PRODUCTS_LOAD_FAILED: {
      return state.merge({
        isLoading: false,
        isLoaded: false,
        loadError: payload.error
      });
    }

    case PRODUCTS_APPLY_FILTERS: {
      // Helper method to determine if a product has a given
      // size from the given list of selected filters.
      const hasSize = (sizes, filters) => {
        let res = false;
        filters.forEach(filter => {
          if (sizes.includes(filter)) {
            res = true;
          }
        });

        return res;
      }
      
      const filters = payload.filters;

      // Default to 'all' products unless there are active filters
      let products = state.get('all');

      if (filters && filters.length) {
        // Get a filtered list of products which contain any of
        // the selected filter options.
        products = state.get('all').filter(product => {
          return hasSize(product.get('size'), filters);
        });
      }

      return state
        .set('currentFilters', fromJS(payload.filters))
        .set('filteredProducts', products);
    }

    default: {
      return state;
    }
  }
}
