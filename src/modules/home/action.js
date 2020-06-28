import {
  FECTH_CATEGORY,
  FECTH_CATEGORY_SUCCEEDED,
  FECTH_CATEGORY_FAILED,
} from './constants';

export const fetchCategory = () => {
  return {
    type: FECTH_CATEGORY,
  };
};

export const fetchCategorySucceeded = (payload = []) => {
  return {
    type: FECTH_CATEGORY_SUCCEEDED,
    payload,
  };
};

export const fetchCategoryFailed = (payload = {}) => {
  return {
    type: FECTH_CATEGORY_FAILED,
    payload,
  };
};
