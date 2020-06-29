import produce from 'immer';
import {
  FECTH_CATEGORY,
  FECTH_CATEGORY_SUCCEEDED,
  FECTH_CATEGORY_FAILED,
  FETCH_IMAGES,
  FETCH_IMAGES_SUCCEEDED,
  FETCH_IMAGES_FAILDED,
} from './constants';

const initState = {
  category: [],
  loading: false,
  error: '',

  images: [],
  fetchImagesLoading: false,
  fetchImagesError: '',
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
  }
}, initState);

export default homeReducer;
