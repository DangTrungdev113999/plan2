import produce from 'immer';
import {
  FETCH_PROFILE,
  FETCH_PROFILE_FAILED,
  FETCH_PROFILE_SUCCEEDED,
} from './constants';
import {REHYDRATE} from 'redux-persist';

const initState = {
  profile: {},
  loading: false,
  error: '',
};

const userReducer = produce((draft, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      draft.loading = true;
      draft.error = '';
      break;
    case FETCH_PROFILE_SUCCEEDED:
      draft.loading = false;
      draft.profile = action.payload;
      break;
    case FETCH_PROFILE_FAILED:
      draft.loading = false;
      draft.error = action.payload;
      break;

    case REHYDRATE:
      draft.profile = action?.payload?.user?.profile ?? initState.profile;
      break;
  }
}, initState);

export default userReducer;
