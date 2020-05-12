import React from 'react';
import * as types from '../buildTypes/buildTypes';

interface NavContextProps {
  selectedFilter?: string;
  groupList?: types.Group[];
  handleUpdateTodo?: Function;
  handleUpdateGroup?: Function;
  handleChangeSelectedFilter?: Function;
  handleUpdateDetailBox?: Function;
}
const NavContext = React.createContext({} as NavContextProps);
export default NavContext;
