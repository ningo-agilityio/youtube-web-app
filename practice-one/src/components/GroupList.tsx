import React from 'react';
import * as types from '../buildTypes/buildTypes';
import GroupItem from './GroupItem';

interface GroupListProps {
  name: string;
  groupList: types.Group[];
  selectedFilterId: string;
  changeGroupList: Function;
  changeTodoList: Function;
  changeSelectedFilterId: Function;
  changeDetailBoxState: Function;
}

const GroupList = (props: GroupListProps) => {
  return (
    <ul className="app__nav__filter" aria-label="List of groups">
      {props.groupList.map((group) => (
        <GroupItem
          name={props.name}
          group={group}
          key={group.id.toString()}
          groupList={props.groupList}
          selectedFilterId={props.selectedFilterId}
          changeGroupList={props.changeGroupList}
          changeTodoList={props.changeTodoList}
          changeSelectedFilterId={props.changeSelectedFilterId}
          changeDetailBoxState={props.changeDetailBoxState}
          resetSelectedFilterId={props.changeSelectedFilterId}
        />
      ))}
    </ul>
  );
};

export default GroupList;
