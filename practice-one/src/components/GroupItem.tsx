import React from 'react';
import * as types from '../buildTypes/buildTypes';

interface GroupItemProps {
  group: types.Group;
  groupList: types.Group[];
  name: string;
  selectedFilterId: string;
  changeGroupList: Function;
  changeSelectedFilterId(id: string): Function;
}

const GroupItem = (props: GroupItemProps) => {
  const deleteGroup = () => {
    types.Group.prototype.deleteGroup(
      props.group.id,
      props.groupList,
      props.name
    );
    props.changeGroupList(props.groupList);
  };

  return (
    <li
      className={`group filter ${
        props.selectedFilterId === props.group.id.toString() ? 'active' : ''
      }`}
    >
      <label
        className='group__text'
        onClick={(e) => props.changeSelectedFilterId(props.group.id.toString())}
      >
        {props.group.title}
      </label>
      <button className='group__delete' onClick={deleteGroup}>
        x
      </button>
    </li>
  );
};

export default GroupItem;
