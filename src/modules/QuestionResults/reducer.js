import {Map, List} from 'immutable';
import {ADD_RESULTS, CLEAR_RESULTS} from './constants';

export default function(state = Map(), action) {
  switch (action.type) {
    case ADD_RESULTS:
      const questionsList = state.set('questionsList', List(action.data));
      return questionsList.set('email', action.email)
    case CLEAR_RESULTS:
      return Map()
    default:
      return state;
  }
}