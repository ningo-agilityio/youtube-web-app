import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';
import ItemContext from '../contexts/Contexts';
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
  selectedFilter: string;
  handleChangeSelectedFilter: (id: string) => void;
  handleUpdateDetailBox: Function;
}

const NavFilter = (props: NavFilterProps) => {
  const {
    groupList,
    selectedFilter,
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
    <ItemContext.Consumer>
      {({ handleUpdateGroup, handleUpdateTodo }) => {
        return (
          <div className="app__nav">
            <ul className="app__nav__filter">{renderFilterList(filterList)}</ul>
            <GroupList
              name={constants.groupListName}
              groupList={groupList}
              selectedFilter={selectedFilter}
              handleUpdateGroup={handleUpdateGroup!}
              handleUpdateTodo={handleUpdateTodo!}
              handleChangeSelectedFilter={handleChangeSelectedFilter}
              handleUpdateDetailBox={handleUpdateDetailBox}
            />
            <GroupForm />
          </div>
        );
      }}
    </ItemContext.Consumer>
  );
};

export default NavFilter;
