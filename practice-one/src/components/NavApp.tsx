import React from 'react';
import * as types from '../buildTypes/buildTypes';
import GroupList from './GroupList';
import GroupForm from './GroupForm';

const filterList = [
  {
    id: 'ALL',
    label: 'Show list of all todo',
    text: 'All',
  },
  {
    id: 'ACTIVE',
    label: 'Show list of all todo',
    text: 'Active',
  },
  {
    id: 'COMPLETED',
    label: 'Show list of all todo',
    text: 'Completed',
  },
];

interface NavAppProps {
  groupList: types.Group[];
  selectedFilterId: string;
  changeGroupList: (dataGroup: types.Group[]) => void;
  changeTodoList: (dataTodo: types.Todo[]) => void;
  changeSelectedFilterId: Function;
}

const NavApp = (props: NavAppProps) => {
  return (
    <div className="app__nav">
      <ul className="app__nav__filter">
        {filterList.map((item) => (
          <li
            id={item.id}
            key={item.id}
            className={`filter ${
              props.selectedFilterId === item.id ? 'active' : ''
            }`}
            onClick={props.changeSelectedFilterId(item.id)}
            role="presentation"
          >
            {item.text}
          </li>
        ))}
      </ul>
      <GroupList name="groupList" {...props} />
      <GroupForm {...props} />
    </div>
  );
};

export default NavApp;
