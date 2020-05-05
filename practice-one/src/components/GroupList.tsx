import React from 'react';
import * as types from '../buildTypes/buildTypes';
import GroupItem from '../components/GroupItem';

interface GroupListProps {
  groupList: types.Group[];
  name: string;
  selectedFilter: string;
  changeGroupList: Function;
  changeSelectedFilterId: Function;
}

const GroupList = (props: GroupListProps) => {
  return (
    <ul className='app__nav__filter' aria-label='List of groups'>
      {props.groupList.map((group) => (
        <GroupItem
          group={group}
          key={group.id.toString()}
          groupList={props.groupList}
          name={props.name}
          selectedFilterId={props.selectedFilter}
          changeGroupList={props.changeGroupList}
          changeSelectedFilterId={props.changeSelectedFilterId(
            group.id.toString()
          )}
        />
      ))}
    </ul>
  );
};

export default GroupList;
