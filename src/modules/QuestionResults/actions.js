import {ADD_RESULTS, CLEAR_RESULTS} from './constants';

export const addResults = (data, email) => ({
  type: ADD_RESULTS,
  data,
  email
});

export const clearResults = () => ({
  type: CLEAR_RESULTS
});