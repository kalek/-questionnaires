import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import PlainQuestionResults from '../../components/QuestionResults';
import {clearQuestions} from '../../modules/QuestionList/actions';
import {clearResults} from '../../modules/QuestionResults/actions';

const mapStateToProps = state => ({
	results: state.QuestionResults
});

const mapDispatchToProps = dispatch => ({
    clearResults: () => {
		dispatch(clearQuestions());
		dispatch(clearResults());
	} 
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlainQuestionResults));
