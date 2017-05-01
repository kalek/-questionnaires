import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash';
import {Link} from 'react-router-dom';
import Question from '../Question';

import './Questionnaire.css';

class Questionnaire extends Component {
    constructor() {
        super();
        this.list = null;
        this.email = null;
        this.showResults = this.showResults.bind(this);
    }
    showResults() {
        const {addResults} = this.props;
        const questions = this.props.questions.toJS();
        const inputs = this.list.getElementsByTagName('input');
        const results = map(inputs, (input, index) => {
            questions[index].answer = input.value
            return questions[index];
        });
        const email = this.email.value;
        addResults(results, email);
        this.props.history.push({pathname: '/results'});
    }
    render() {
        const {questions} = this.props;
        return (
            <div className="questionnaire">
                <h1 className="header">Please fill the questionnaire</h1>
                <div className="content">
                    <ul className="questionnaire__list" ref={ref => this.list = ref}>
                        {questions.map(q => (
                            <li key={q.get('id')} className="questionnaire__item">
                                <Question question={q} />
                                <input type="text" className="questionnaire__answer" placeholder="Answer" />
                            </li>
                        ))}
                    </ul>
                    <div className="questionnaire__email">
                        <input ref={ref => this.email = ref} type="text" placeholder="Email" />
                    </div>
                    <div className="questionnaire__buttons">
                        <Link to="/" className="primary-button back-button">Back</Link>
                        <div onClick={this.showResults} className="primary-button questionnaire__buttons__results">Results</div>
                    </div>
                </div>
            </div>
        );
    }
}

Questionnaire.propTypes = {
    questions: PropTypes.object.isRequired,
    addResults: PropTypes.func.isRequired
};

export default Questionnaire;