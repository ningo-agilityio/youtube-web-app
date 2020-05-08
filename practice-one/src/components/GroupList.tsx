import React from 'react';
import * as types from '../buildTypes/buildTypes';
import GroupItem from './GroupItem';

interface GroupListProps {
  name: string;
  groupList: types.Group[];
  selectedFilter: string;
  handleUpdateGroup: Function;
  handleUpdateTodo: Function;
  handleChangeSelectedFilter: Function;
  handleUpdateDetailBox: Function;
}

const GroupList = (props: GroupListProps) => {
  const {
    name,
    groupList,
    selectedFilter,
    handleUpdateGroup,
    handleUpdateTodo,
    handleChangeSelectedFilter,
    handleUpdateDetailBox,
  } = props;

  const renderGroupList = (list: types.Group[]) =>
    list.map((group) => (
      <GroupItem
        group={group}
        key={group.id.toString()}
        name={name}
        groupList={groupList}
        selectedFilter={selectedFilter}
        handleUpdateGroup={handleUpdateGroup}
        handleUpdateTodo={handleUpdateTodo}
        handleChangeSelectedFilter={handleChangeSelectedFilter}
        handleUpdateDetailBox={handleUpdateDetailBox}
      />
    ));

  return (
    <ul className="app__nav__filter" aria-label="List of groups">
      {renderGroupList(groupList)}
    </ul>
  );
};

export default GroupList;
