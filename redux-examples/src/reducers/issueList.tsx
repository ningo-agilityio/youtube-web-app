import { handleIssueListState, handleIssueListAction } from '../buildTypes/buildTypes';
import {
  ADD_ISSUE,
  EDIT_ISSUE,
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  initFetchDataState,
} from '../constants/constants';

export const handleIssueList = (
  state: handleIssueListState = initFetchDataState,
  action: handleIssueListAction
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
    case ADD_ISSUE:
      return {
        ...state,
        pending: false,
        issueList: [...state.issueList, action.issue],
      };
    case EDIT_ISSUE:
      return {
        ...state,
        pending: false,
        issueList: state.issueList.map((issue) =>
          issue.id === action.issue.id ? action.issue : issue
        ),
      };
    default:
      return state;
  }
};
