import React from 'react';
import styled from 'styled-components';
import * as types from '../buildTypes/buildTypes';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

interface MainContentProps {
  todoList: types.Todo[];
  selectedFilter: string;
  isShowDetail: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
}

const MainContentStyled = styled.div`
  width: ${(props: MainContentProps) =>
    props.isShowDetail ? 'calc(100% - 41rem)' : 'calc(100% - 16rem)'};
  box-sizing: border-box;
  padding: 1.25rem;
  background: rgba(102, 137, 100, 0.2);
`;

const MainContent = (props: MainContentProps) => {
  const { todoList, selectedFilter, inputRef } = props;

  return (
    <MainContentStyled {...props}>
      <TodoForm
        todoList={todoList}
        selectedFilter={selectedFilter}
        inputRef={inputRef}
      />
      <TodoList todoList={todoList} selectedFilter={selectedFilter} />
    </MainContentStyled>
  );
};

export default MainContent;
