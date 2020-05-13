import React from 'react';
import * as types from '../buildTypes/buildTypes';

interface ContextProps {
  selectedFilter?: string;
  groupList?: types.Group[];
  handleUpdateTodo?: (dataTodo: types.Todo[]) => void;
  handleUpdateGroup?: Function;
  handleChangeSelectedFilter?: Function;
  handleChangeSelectedTodo?: (todo: types.Item) => void;
  handleUpdateDetailBox?: Function;
  handleUpdateOptionPopUp?: Function;
  handleUpdateOptionList?: Function;
}
const Context = React.createContext({} as ContextProps);
export default Context;
