import React from 'react';
import PropTypes from 'prop-types';

import './Question.css';

const Question = ({question}) => (
    <div className="question-text">{question.get('text')} ?</div>
);

Question.propTypes = {
    question: PropTypes.object.isRequired
};

export default Question;