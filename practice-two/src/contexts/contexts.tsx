import React from 'react';
import * as types from '../buildTypes/buildTypes';

interface ContextProps {
  handleShowDetail: (isShow: boolean) => void;
  handleUpdateIssue: (newList: types.Issue[]) => void;
  handleChangeSelectedIssue: (issue: types.Issue) => void;
}

const Context = React.createContext({} as ContextProps);
export default Context;