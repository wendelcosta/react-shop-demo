/*
  @file: src/services/imageService.js
  @brief: Image service
  @author: Shane Korin (sk@distriqt.com)
*/

const PRODUCT_IMAGES = {
  'product-1': require('../assets/images/products/product-1.jpg'),
  'product-2': require('../assets/images/products/product-2.jpg'),
  'product-3': require('../assets/images/products/product-3.jpg'),
  'product-4': require('../assets/images/products/product-4.jpg'),
  'product-5': require('../assets/images/products/product-5.jpg'),
  'product-6': require('../assets/images/products/product-6.jpg'),
  'product-7': require('../assets/images/products/product-7.jpg'),
  'product-8': require('../assets/images/products/product-8.jpg'),
};

/**
 * Gets an image based on the name
 *
 * @param {String} imageName 
 * @returns {Image} an image object or null if not found
 */
const getImage = (imageName) => {
  // remove the file extension if found because the image name map
  // doesn't include this
  imageName = imageName.substr(0, imageName.lastIndexOf('.'));
  
  return PRODUCT_IMAGES[imageName] || null;
};

export default {
  getImage
};
