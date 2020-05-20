import React from 'react';
import * as types from '../buildTypes/buildTypes';

interface ContextProps {
  selectedFilter?: string;
  groupList?: types.Group[];
  handleUpdateTodo?: (dataTodo: types.Todo[]) => void;
  handleUpdateGroup?: (dataGroup: types.Group[]) => void;
  handleChangeSelectedFilter?: (id: string) => void;
  handleChangeSelectedTodo?: (todo: types.Item) => void;
  handleUpdateDetailBox?: (isShow: boolean) => void;
  handleUpdateOptionPopUp?: (isShow: boolean) => void;
  handleUpdateOptionList?: (todo: types.Item) => void;
}
const Context = React.createContext({} as ContextProps);
export default Context;
