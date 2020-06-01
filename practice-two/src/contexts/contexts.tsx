import React from 'react';
import * as types from '../buildTypes/buildTypes';

interface ContextProps {
  toggleDetail: (isShow: boolean) => void;
  handleUpdateIssue: (list: types.Issue[]) => void;
  handleChangeSelectedIssue: (issue: types.Issue) => void;
}

const Context = React.createContext({} as ContextProps);
export default Context;