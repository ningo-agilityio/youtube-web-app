import React from 'react';
import * as types from '../buildTypes/buildTypes';

interface ItemContextProps {
  selectedFilter?: string;
  groupList?: types.Group[];
  handleUpdateTodo?: Function;
  handleUpdateGroup?: Function;
  handleChangeSelectedFilter?: Function;
  handleUpdateDetailBox?: Function;
}
const ItemContext = React.createContext({} as ItemContextProps);
export default ItemContext;
