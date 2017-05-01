import {List, Map} from 'immutable';
import {ADD_QUESTION, CLEAR_QUESTIONS} from './constants';

const init = List([
  Map({id: 0, text: 'What is your favourite book'}),
  Map({id: 1, text: 'What kind of books, do you like'}),
  Map({id: 3, text: 'What is your favourite author'}),
]);

export default function(state = init, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return state.push(Map(action.payload));
    case CLEAR_QUESTIONS:
      return init;
    default:
      return state;
  }
}