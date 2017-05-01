import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './AddQuestion.css';

class AddQuestion extends Component {
    constructor() {
        super();
        this.input = null;
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmitByClick = this.onSubmitByClick.bind(this);
    }
    onSubmit(event) {
        const text = this.input.value;
        const isEnterKey = event.which === 13; // 13 - Enter key
        const isLongEnough = text.length > 0;

        if (isEnterKey && isLongEnough) {
            this.addQuestion(text);
        }
    }
    onSubmitByClick() {
        const text = this.input.value;
        const isLongEnough = text.length > 0;
        if (isLongEnough) {
            this.addQuestion(text);
        }
    }
    addQuestion(text) {
        const {addQuestion} = this.props;
        this.input.value = '';
        addQuestion(text);
    }
    render() {
        return (
            <div className="add-question">
                <input ref={ref => this.input = ref} type="text" className="add-question__entry" placeholder="Add question" onKeyDown={this.onSubmit} />
                <div onClick={this.onSubmitByClick} className="add-question__icon">+</div>
            </div>
        );
    }
}

AddQuestion.propTypes = {
    addQuestion: PropTypes.func.isRequired
};

export default AddQuestion;