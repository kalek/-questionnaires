import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import PlainQuestionnaire from '../../components/Questionnaire';
import {addResults} from '../../modules/QuestionResults/actions';

const mapStateToProps = state => ({
    questions: state.QuestionList
});

const mapDispatchToProps = dispatch => ({
    addResults: (data, email) => dispatch(addResults(data, email))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlainQuestionnaire));
