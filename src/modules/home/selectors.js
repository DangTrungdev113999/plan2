import {createSelector} from 'reselect';

const homeSelector = (state) => state.home;

export const categorySelector = createSelector(
  homeSelector,
  (_, tabActive) => tabActive,
  (homeReducer, tabActive) =>
    homeReducer.category.filter((category) =>
      category.tags.includes(tabActive.toLowerCase()),
    ),
);

export const fetchCategoryLoadingSelector = createSelector(
  homeSelector,
  (homeReducer) => homeReducer.loading,
);

export const imagesSelector = createSelector(
  homeSelector,
  (homeReducer) => homeReducer.images,
);

export const fetchImagesLoadingSelector = createSelector(
  homeSelector,
  (homeReducer) => homeReducer.fetchImagesLoading,
);

export const productSelector = createSelector(
  homeSelector,
  (homeReducer) => homeReducer.proudct,
);

export const fetchProductLoadingSelector = createSelector(
  homeSelector,
  (homeReducer) => homeReducer.fetchProductLoading,
);
