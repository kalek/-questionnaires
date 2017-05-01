import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import QuestionList from './containers/QuestionList';
import Questionnaire from './containers/Questionnaire';
import QuestionResults from './containers/QuestionResults';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Route exact path="/" component={QuestionList}/>
      <Route path="/questionnaire" component={Questionnaire}/>
      <Route path="/results" component={QuestionResults}/>
    </div>
  </Router>
);

export default App;