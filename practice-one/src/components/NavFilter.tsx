import React from 'react';
import styled from 'styled-components';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';
import NavContext from '../contexts/Context';
import GroupList from './GroupList';
import GroupForm from './GroupForm';
import { Context } from 'vm';
import { prependOnceListener } from 'cluster';

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

// eslint-disable-next-line react-hooks/rules-of-hooks

const NavFilterStyled = styled.div`
  width: 16rem;
`;

const FilterListStyled = styled.ul`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background: rgba(102, 137, 100, 0);
  color: rgba(102, 137, 100);
  list-style: none;
`;

// const StyledFilter = styled.li`
//   padding: 0.625rem;
//   cursor: pointer;
//   background: ${(props: FormProps) => props.name === 'main-form' && '0.25rem'}

//   background: rgba(102, 137, 100, 0.8);
//   color: #fff;
// `;

// interface StyledFilterProps

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
    <NavFilterStyled>
      <FilterListStyled>{renderFilterList(filterList)}</FilterListStyled>
      <GroupList />
      <GroupForm />
    </NavFilterStyled>
  );
};

export default NavFilter;
