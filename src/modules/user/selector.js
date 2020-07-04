import {createSelector} from 'reselect';

const userSelector = (state) => state.user;

export const profileSelector = createSelector(
  userSelector,
  (userReducer) => userReducer.profile,
);

export const fetchProfileLoadingSelector = createSelector(
  userSelector,
  (userReducer) => userReducer.loading,
);
