import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import PlainQuestionList from '../../components/QuestionList';
import {addQuestion} from '../../modules/QuestionList/actions';

const mapStateToProps = state => ({
	questions: state.QuestionList
});

const mapDispatchToProps = dispatch => ({
	addQuestion: text => dispatch(addQuestion(text))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlainQuestionList));
