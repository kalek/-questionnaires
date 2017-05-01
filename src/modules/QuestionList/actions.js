import {ADD_QUESTION, CLEAR_QUESTIONS} from './constants';

export const addQuestion = text => ({
  type: ADD_QUESTION,
  payload: {
    text: text
  }
});

export const clearQuestions = () => ({
  type: CLEAR_QUESTIONS
});