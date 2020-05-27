import * as types from '../buildTypes/buildTypes';

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

export const API = {
  url: 'https://api.github.com/repos/ngantong-agilityio/demo/issues',
  token: 'a9a7c22c020c2a63f4cedfb0b500dfb2f723ef23',
};
