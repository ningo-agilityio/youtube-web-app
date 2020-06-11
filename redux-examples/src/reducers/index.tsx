import { combineReducers } from 'redux';
import {
  Issue,
  IssueAction,
  ToggleAction,
  FetchDataState,
  FetchDataAction,
} from '../buildTypes/buildTypes';
import {
  ADD_ISSUE,
  EDIT_ISSUE,
  TOGGLE_FORM,
  TOGGLE_DETAIL,
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  initFetchDataState,
} from '../constants/constants';

const fetchData = (
  state: FetchDataState = initFetchDataState,
  action: FetchDataAction
) => {
  switch (action.type) {
    case FETCH_DATA_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        pending: false,
        issueList: action.issueList,
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

const issueList = (state: Issue[] = [], action: IssueAction) => {
  switch (action.type) {
    case ADD_ISSUE:
      return [...state, action.issue];
    case EDIT_ISSUE:
      return state.map((issue) =>
        issue.id === action.issue.id ? action.issue : issue
      );
    default:
      return state;
  }
};

const toggleForm = (state: boolean = false, action: ToggleAction) => {
  switch (action.type) {
    case TOGGLE_FORM:
      return !state;
    default:
      return state;
  }
};

const toggleDetail = (state: boolean = false, action: ToggleAction) => {
  switch (action.type) {
    case TOGGLE_DETAIL:
      return !state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  issueList,
  toggleForm,
  toggleDetail,
  fetchData,
});

export default rootReducer;
