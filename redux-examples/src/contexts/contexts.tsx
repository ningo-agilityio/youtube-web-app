import React from 'react';
import * as types from '../buildTypes/buildTypes';

interface ContextProps {
  issueList: types.Issue[];
  isShowDetail: boolean;
  handleChangeSelectedIssue: (issue: types.Issue) => void;
}

const Context = React.createContext({} as ContextProps);
export default Context;