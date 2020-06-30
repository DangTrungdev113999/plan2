import {
  FECTH_CATEGORY,
  FECTH_CATEGORY_SUCCEEDED,
  FECTH_CATEGORY_FAILED,
  FETCH_IMAGES,
  FETCH_IMAGES_SUCCEEDED,
  FETCH_IMAGES_FAILDED,
  FETCH_PRODUCT,
  FETCH_PRODUCT_SUCCEEDED,
  FETCH_PRODUCT_FAILDED,
} from './constants';

export const fetchCategory = () => ({
  type: FECTH_CATEGORY,
});

export const fetchCategorySucceeded = (payload = []) => ({
  type: FECTH_CATEGORY_SUCCEEDED,
  payload,
});

export const fetchCategoryFailed = (payload = {}) => ({
  type: FECTH_CATEGORY_FAILED,
  payload,
});

export const fetchImages = () => ({
  type: FETCH_IMAGES,
});

export const fetchImagesSucceeded = (payload = {}) => ({
  type: FETCH_IMAGES_SUCCEEDED,
  payload,
});

export const fetchImagesFailed = (payload = {}) => ({
  type: FETCH_IMAGES_FAILDED,
  payload,
});

export const fetchProduct = (payload = {}) => ({
  type: FETCH_PRODUCT,
  payload,
});

export const fetchProductSucceeded = (payload = {}) => ({
  type: FETCH_PRODUCT_SUCCEEDED,
  payload,
});

export const fetchProductFailed = (payload = {}) => ({
  type: FETCH_PRODUCT_FAILDED,
  payload,
});
