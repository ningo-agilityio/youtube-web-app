import React from 'react';
import styled from 'styled-components';
import * as types from '../buildTypes/buildTypes';
import SubTodoItem from './SubTodoItem';

interface SubTodoListProps {
  subTodoList: types.Item[];
  selectedTodo: types.Item;
  handleUpdateSubTodo: (newList: types.Item[]) => void;
}

const SubTodoListStyled = styled.ul`
  margin: 0;
  padding: 0 1.25rem;
`;

const SubTodoList = React.memo((props: SubTodoListProps) => {
  const { selectedTodo, handleUpdateSubTodo } = props;
  const renderSubTodoList = (list: types.Item[]) =>
    list.map((subTodo) => (
      <SubTodoItem
        selectedTodo={selectedTodo}
        subTodo={subTodo}
        key={subTodo.id.toString()}
        handleUpdateSubTodo={handleUpdateSubTodo}
      />
    ));

  return (
    <SubTodoListStyled aria-label="List of sub todo">
      {renderSubTodoList(selectedTodo.subTask!)}
    </SubTodoListStyled>
  );
});

export default SubTodoList;
