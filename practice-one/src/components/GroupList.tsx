import React from 'react';
import styled from 'styled-components';
import * as types from '../buildTypes/buildTypes';
import NavContext from '../contexts/Context';
import GroupItem from './GroupItem';

const ListStyled = styled.ul`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background: rgba(102, 137, 100, 0);
  color: rgba(102, 137, 100);
  list-style: none;
`;

interface GroupListProps {
  groupList: types.Group[];
}

const GroupList = (props: GroupListProps) => {
  console.log('kiki', props.groupList);
  const renderGroupList = (list: types.Group[]) =>
    list.map((group) => (
      <GroupItem group={group} key={group.id.toString()} groupList={list} />
    ));

  return (
    <ListStyled aria-label="List of groups">
      {renderGroupList(props.groupList)}
    </ListStyled>
  );
};

export default GroupList;
