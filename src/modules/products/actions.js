/*
  @file: src/modules/products/actions.js
  @brief: Products module actions
  @author: Shane Korin (sk@distriqt.com)
*/

import productsService from '../../services/productsService';

// Action types

export const PRODUCTS_LOAD              = 'products/load';
export const PRODUCTS_LOAD_START        = 'products/load_start';
export const PRODUCTS_LOAD_SUCCESS      = 'products/load_success';
export const PRODUCTS_LOAD_FAILED       = 'products/load_failed';
export const PRODUCTS_APPLY_FILTERS     = 'products/apply_filters';


// Action creators

export const loadProducts = () => {
  return async dispatch => {
    dispatch(loadProductsStart());

    try {
      const res = await productsService.loadProducts();
      dispatch(productsLoaded(res));
    } catch(err) {
      dispatch(productsLoadFailed(err));
    }
  };
}

export const loadProductsStart = () => {
  return {
    type: PRODUCTS_LOAD_START
  };
}

export const productsLoaded = (productsJson) => {
  return {
    type: PRODUCTS_LOAD_SUCCESS,
    payload: {
      results: productsJson
    }
  };
}

export const productsLoadFailed = (error) => {
  return {
    type: PRODUCTS_LOAD_FAILED,
    payload: {
      error
    }
  };
}

export const applyFilters = (filters) => {
  return {
    type: PRODUCTS_APPLY_FILTERS,
    payload: {
      filters
    }
  };
}