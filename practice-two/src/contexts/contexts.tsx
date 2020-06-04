import React from 'react';
import * as types from '../buildTypes/buildTypes';

interface ContextProps {
  issueList: types.Issue[];
  isShowDetail: boolean;
  toggleDetail: (isShow: boolean) => void;
  handleSaveChange: (issue: types.Issue) => void;
  handleChangeSelectedIssue: (issue: types.Issue) => void;
}

const Context = React.createContext({} as ContextProps);
export default Context;