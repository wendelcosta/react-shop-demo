/*
  @file: src/services/productsService.js
  @brief: Products service
  @author: Shane Korin (sk@distriqt.com)
*/

import axios from 'axios';
import Promise from 'promise';

const URL = 'https://gist.githubusercontent.com/koriner/ec71da32bcdc1bd2b68cc2358d364186/raw/2b278a8e5c980355b4f29704626fffd6bb7f56dd/products.json'

/**
 * Loads the products JSON from a specified URL. The URL
 * is just hard-coded above for this example.
 */
const loadProducts = async () => {
  return await axios
    .get(URL)
    .then(res => Promise.resolve(res.data))
    .catch(err => Promise.reject(err));
}

export default {
  loadProducts
};
