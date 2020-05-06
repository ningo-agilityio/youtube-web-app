import React from 'react';
import * as types from '../buildTypes/buildTypes';
import GroupList from './GroupList';
import GroupForm from './GroupForm';

const filterList = [
  {
    id: 'ALL',
    text: 'All',
  },
  {
    id: 'ACTIVE',
    text: 'Active',
  },
  {
    id: 'COMPLETED',
    text: 'Completed',
  },
];

interface NavFilterProps {
  groupList: types.Group[];
  selectedFilterId: string;
  changeGroupList: (dataGroup: types.Group[]) => void;
  changeTodoList: (dataTodo: types.Todo[]) => void;
  changeSelectedFilterId: Function;
}

const NavFilter = (props: NavFilterProps) => {
  const {
    groupList,
    selectedFilterId,
    changeGroupList,
    changeTodoList,
    changeSelectedFilterId,
  } = props;

  const addClassName = (item: types.Filter) => {
    return selectedFilterId === item.id.toString() ? 'active' : '';
  };

  return (
    <div className="app__nav">
      <ul className="app__nav__filter">
        {filterList.map((item) => (
          <li
            id={item.id}
            key={item.id}
            className={`filter ${addClassName(item)}`}
            onClick={changeSelectedFilterId(item.id)}
            role="presentation"
          >
            {item.text}
          </li>
        ))}
      </ul>
      <GroupList
        name="groupList"
        groupList={groupList}
        selectedFilterId={selectedFilterId}
        changeGroupList={changeGroupList}
        changeTodoList={changeTodoList}
        changeSelectedFilterId={changeSelectedFilterId}
      />
      <GroupForm groupList={groupList} changeGroupList={changeGroupList} />
    </div>
  );
};

export default NavFilter;
