import React from 'react';
import * as types from '../buildTypes/buildTypes';
import SubTodoItem from './SubTodoItem';

interface SubTodoListProps {
  subTodoList: types.Item[];
  selectedTodo: types.Item;
  handleUpdateSubTodo: Function;
}

const SubTodoList = (props: SubTodoListProps) => {
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
    <ul className="sub-todo" aria-label="List of sub todo">
      {renderSubTodoList(selectedTodo.subTask!)}
    </ul>
  );
};

export default SubTodoList;
