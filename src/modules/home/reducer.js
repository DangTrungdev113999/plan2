import produce from 'immer';
import {
  FECTH_CATEGORY,
  FECTH_CATEGORY_SUCCEEDED,
  FECTH_CATEGORY_FAILED,
  ACTIVE_TAB,
} from './constants';

const initState = {
  category: [],
  active: 'Products',
  loading: false,
  error: '',
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
  }
}, initState);

export default homeReducer;
