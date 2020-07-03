import produce from 'immer';
import {REHYDRATE} from 'redux-persist';
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

const initState = {
  category: [],
  loading: false,
  error: '',

  images: [],
  fetchImagesLoading: false,
  fetchImagesError: '',

  product: {},
  fetchProductLoading: false,
  fetchProductError: '',
};

const homeReducer = produce((draft, action) => {
  switch (action.type) {
    case FECTH_CATEGORY:
      draft.loading = true;
      draft.error = '';
      break;
    case FECTH_CATEGORY_SUCCEEDED:
      draft.loading = false;
      draft.category = action.payload;
      break;
    case FECTH_CATEGORY_FAILED:
      draft.loading = false;
      draft.error = action.payload;
      break;

    case FETCH_IMAGES:
      draft.fetchImagesLoading = true;
      draft.fetchImagesError = '';
      break;
    case FETCH_IMAGES_SUCCEEDED:
      draft.fetchImagesLoading = false;
      draft.images = action.payload;
      break;
    case FETCH_IMAGES_FAILDED:
      draft.fetchImagesLoading = false;
      draft.fetchImagesError = action.payload;
      break;

    case FETCH_PRODUCT:
      draft.fetchProductLoading = true;
      draft.fetchProductError = '';
      break;
    case FETCH_PRODUCT_SUCCEEDED:
      draft.fetchProductLoading = false;
      draft.product = action.payload;
      break;
    case FETCH_PRODUCT_FAILDED:
      draft.fetchProductLoading = false;
      draft.fetchProductError = action.payload;
      break;

    case REHYDRATE:
      draft.category = action?.payload?.home?.category ?? initState.category;
      draft.images = action?.payload?.home?.images ?? initState.images;
      draft.product = action?.payload?.home?.product ?? initState.product;
      break;
  }
}, initState);

export default homeReducer;
