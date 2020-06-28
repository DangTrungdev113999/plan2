import {
  FETCH_PROFILE,
  FETCH_PROFILE_SUCCEEDED,
  FETCH_PROFILE_FAILED,
} from './constants';

export const fetchProfile = () => ({
  type: FETCH_PROFILE,
});

export const fetchProfileSucceeded = (payload = {}) => ({
  type: FETCH_PROFILE_SUCCEEDED,
  payload,
});

export const fetchProfileFailded = (payload = {}) => ({
  type: FETCH_PROFILE_FAILED,
  payload,
});
