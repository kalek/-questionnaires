import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './QuestionResults.css';

class QuestionResults extends Component {
    constructor() {
        super();
        this.clearResults = this.clearResults.bind(this);
    }
    componentWillMount() {
        const {results} = this.props;
        if (!results.size) {
            this.props.history.push({pathname: '/'});
        }
    }
    clearResults() {
        const {clearResults} = this.props;
        clearResults();
        this.props.history.push({pathname: '/'});
    }
    render() {
        const {results} = this.props;
        const questionsList = results.get('questionsList');
        const email = results.get('email');

        return results.size ? (
            <div className="results">
                <h1 className="header">Results</h1>
                <ul className="results__list">
                    {questionsList.map(question => (
                        <li key={question.id} className="results__item">
                            {question.text} ?
                            <div className="results__answer">{question.answer || 'No answer'}</div>
                        </li>
                    ))}
                </ul>
                <div className="results__email">
                    Email: <span>{email}</span>
                </div>
                <div className="results__clear-button">
                    <div onClick={this.clearResults} className="primary-button">Create new questionnaire</div>
                </div>
            </div>
        ) : null;
    }
}

QuestionResults.propTypes = {
    results: PropTypes.object.isRequired,
    clearResults: PropTypes.func.isRequired
};

export default QuestionResults;