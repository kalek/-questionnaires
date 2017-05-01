import {combineReducers} from "redux";
import QuestionList from './modules/QuestionList/reducer';
import QuestionResults from './modules/QuestionResults/reducer';

export const rootReducer = combineReducers({
    QuestionList,
    QuestionResults
});