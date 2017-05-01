import React from 'react';
import PropTypes from 'prop-types';

const Question = ({question}) => (
    <div>{question.get('text')} ?</div>
);

Question.propTypes = {
    question: PropTypes.object.isRequired
};

export default Question;