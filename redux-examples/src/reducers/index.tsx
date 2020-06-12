import { combineReducers } from 'redux';
import { handleIssueList } from './issueList';
import { toggleForm } from './toggleForm';
import { toggleDetail } from './toggleDetail';

const rootReducer = combineReducers({
  toggleForm,
  toggleDetail,
  handleIssueList,
});

export default rootReducer;
