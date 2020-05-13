import React from 'react';
import * as types from '../buildTypes/buildTypes';
import NavContext from '../contexts/Context';
import GroupItem from './GroupItem';

const GroupList = () => {
  const renderGroupList = (list: types.Group[]) =>
    list.map((group) => (
      <GroupItem group={group} key={group.id.toString()} groupList={list} />
    ));

  return (
    <NavContext.Consumer>
      {({ groupList }) => (
        <ul className="app__nav__filter" aria-label="List of groups">
          {renderGroupList(groupList!)}
        </ul>
      )}
    </NavContext.Consumer>
  );
};

export default GroupList;
