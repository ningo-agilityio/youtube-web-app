import React from 'react';
import * as types from '../buildTypes/buildTypes';
import GroupList from './GroupList';
import GroupForm from './GroupForm';
import * as constants from '../constants/Constants';

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
  selectedFilter: string;
  handleUpdateGroup: (dataGroup: types.Group[]) => void;
  handleUpdateTodo: (dataTodo: types.Todo[]) => void;
  handleChangeSelectedFilter: (id: string) => void;
  handleUpdateDetailBox: Function;
}

const NavFilter = (props: NavFilterProps) => {
  const {
    groupList,
    selectedFilter,
    handleUpdateGroup,
    handleUpdateTodo,
    handleChangeSelectedFilter,
    handleUpdateDetailBox,
  } = props;

  const addClassName = (item: types.Filter) => {
    return selectedFilter === item.id.toString() ? constants.ACTIVE : '';
  };

  const handleOnClick = (id: string) => () => {
    handleChangeSelectedFilter(id);
    handleUpdateDetailBox(false);
  };

  const renderFilterList = (list: types.Filter[]) =>
    list.map((item) => (
      <li
        id={item.id}
        key={item.id}
        className={`filter ${addClassName(item)}`}
        onClick={handleOnClick(item.id)}
        role="presentation"
      >
        {item.text}
      </li>
    ));

  return (
    <div className="app__nav">
      <ul className="app__nav__filter">{renderFilterList(filterList)}</ul>
      <GroupList
        name="groupList"
        groupList={groupList}
        selectedFilter={selectedFilter}
        handleUpdateGroup={handleUpdateGroup}
        handleUpdateTodo={handleUpdateTodo}
        handleChangeSelectedFilter={handleChangeSelectedFilter}
        handleUpdateDetailBox={handleUpdateDetailBox}
      />
      <GroupForm groupList={groupList} handleUpdateGroup={handleUpdateGroup} />
    </div>
  );
};

export default NavFilter;
