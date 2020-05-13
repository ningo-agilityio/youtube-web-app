import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';
import NavContext from '../contexts/Context';
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

const NavFilter = () => {
  const context = React.useContext(NavContext);

  const addClassName = (item: types.Filter) => {
    return context.selectedFilter === item.id.toString()
      ? constants.ACTIVE
      : '';
  };

  const handleOnClick = (id: string) => () => {
    context.handleChangeSelectedFilter!(id);
    context.handleUpdateDetailBox!(false);
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
      <GroupList />
      <GroupForm />
    </div>
  );
};

export default NavFilter;
