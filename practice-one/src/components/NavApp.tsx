import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';
import * as helper from '../helper/helper';
import GroupList from '../components/GroupList';
import GroupForm from '../components/GroupForm';

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
  selectedFilterId: string;
  groupList: types.Group[];
  changeSelectedFilterId: Function;
  changeGroupList: Function;
}

const NavApp = (props: NavAppProps) => {
  return (
    <div className='app__nav'>
      <ul className='app__nav__filter'>
        {filterList.map((item) => (
          <li
            id={item.id}
            key={item.id}
            className={`filter ${props.selectedFilterId === item.id ? 'active' : ''}`}
            onClick={props.changeSelectedFilterId(item.id)}
          >
            {item.text}
          </li>
        ))}
      </ul>
      <GroupList
        groupList={props.groupList}
        name={'groupList'}
        selectedFilter={props.selectedFilterId}
        changeGroupList={props.changeGroupList}
        changeSelectedFilterId={props.changeSelectedFilterId}
      />
      <GroupForm
        groupList={props.groupList}
        changeGroupList={props.changeGroupList}
      />
    </div>
  );
}

export default NavApp