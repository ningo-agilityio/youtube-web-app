import * as types from '../buildTypes/buildTypes';

export const API = {
  url: 'https://api.github.com/repos/ngantong-agilityio/demo/issues',
  token: process.env.REACT_APP_TOKEN,
};

export const initFetchDataState = {
  pending: false,
  issueList: [],
  error: null
};

export const issueDefault = {
  id: null,
  number: null,
  title: '',
  body: '',
  locked: false,
};

export const listDefault: types.Issue[] = [];

export const TITLE = 'github issues app';
export const TITLE_ADD_FORM = 'New Issue';
export const TITLE_EDIT_FORM = 'Edit Issue';
export const LABEL_TITLE = 'Title';
export const LABEL_DESC = 'Description';
export const LABEL_LIGHT = 'label-light';
export const LABEL_DARK = 'label-dark';
export const PLACEHOLDER_TITLE = 'Title';
export const PLACEHOLDER_DESC = 'Write a comment...';
export const BTN_SUBMIT = 'Submit';
export const BTN_CANCEL = 'Cancel';
export const BTN_EDIT = 'Edit';
export const BTN_EXIT = 'Exit';
export const BTN_NEW = 'New Issue';
export const BTN_LOCK = 'Lock';
export const BTN_UNLOCK = 'Unlock';
export const BTN_PRIMARY = 'btn-primary';
export const BTN_SECONDARY = 'btn-secondary';
export const BTN_GRAY = 'btn-gray';
export const BTN_NO_OUTLINE_LIGHT = 'btn-no-outline-light';
export const BTN_NO_OUTLINE_DARK = 'btn-no-outline-dark';

export const ADD_ISSUE = 'ADD_ISSUE';
export const EDIT_ISSUE = 'EDIT_ISSUE';
export const TOGGLE_FORM = 'TOGGLE_FORM';
export const TOGGLE_DETAIL = 'TOGGLE_DETAIL';
export const FETCH_DATA_PENDING = 'FETCH_DATA_PENDING';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
