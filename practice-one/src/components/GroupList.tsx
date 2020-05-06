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
}

const GroupList = (props: GroupListProps) => {
  return (
    <ul className="app__nav__filter" aria-label="List of groups">
      {props.groupList.map((group) => (
        <GroupItem
          {...props}
          group={group}
          key={group.id.toString()}
          changeSelectedFilterId={props.changeSelectedFilterId(
            group.id.toString()
          )}
          resetSelectedFilterId={props.changeSelectedFilterId('ALL')}
        />
      ))}
    </ul>
  );
};

export default GroupList;
