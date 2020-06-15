import { Issue } from '../buildTypes/buildTypes';
import {
  ADD_ISSUE,
  EDIT_ISSUE,
  TOGGLE_FORM,
  TOGGLE_DETAIL,
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from '../constants/constants';

export const addIssue = (issue: Issue) => ({
  type: ADD_ISSUE,
  issue,
});

export const editIssue = (issue: Issue) => ({
  type: EDIT_ISSUE,
  issue,
});

export const toggleForm = () => ({
  type: TOGGLE_FORM,
});

export const toggleDetail = () => ({
  type: TOGGLE_DETAIL,
});

export const fetchDataPending = () => ({
  type: FETCH_DATA_PENDING,
});

export const fetchDataSuccess = (issueList: Issue[]) => ({
  type: FETCH_DATA_SUCCESS,
  issueList,
});

export const fetchDataError = (error: Error) => ({
  type: FETCH_DATA_ERROR,
  error,
});
