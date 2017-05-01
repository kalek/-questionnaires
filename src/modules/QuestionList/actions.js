import {ADD_QUESTION, CLEAR_QUESTIONS} from './constants';

const uid = () => Math.random().toString(34).slice(2);

export const addQuestion = text => ({
  type: ADD_QUESTION,
  payload: {
    id: uid(),
    text: text
  }
});

export const clearQuestions = () => ({
  type: CLEAR_QUESTIONS
});