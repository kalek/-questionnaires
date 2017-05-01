import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Question from '../Question';
import AddQuestion from '../AddQuestion';

import './QuestionList.css';

const QuestionList = ({questions, addQuestion}) => {
    return (
        <div className="questions">
            <h1 className="header">Please add questions</h1>
            <div className="content">
                <AddQuestion addQuestion={addQuestion} />
                <ul className="questions__list">
                    {questions.map(q => (
                        <li key={q.get('id')} className="questions__item">
                            <Question question={q} />
                        </li>
                    ))}
                </ul>
                <div className="questions__add-button">
                    <Link to="/questionnaire" className="primary-button">Go to questions</Link>
                </div>
            </div>
        </div>
    );
};

QuestionList.propTypes = {
    questions: PropTypes.object.isRequired,
    addQuestion: PropTypes.func.isRequired
};

export default QuestionList;