import React from 'react';
import * as types from '../buildTypes/buildTypes';
import SubTodoItem from './SubTodoItem';

interface SubTodoListProps {
  subTodoList: types.Item[];
  name: string;
  changeSubTodoList: Function;
}

const SubTodoList = (props: SubTodoListProps) => {
  const { subTodoList, name, changeSubTodoList } = props;
  return (
    <ul className="sub-todo" aria-label="List of sub todo">
      {subTodoList.map((subTodo) => (
        <SubTodoItem
          subTodo={subTodo}
          key={subTodo.id.toString()}
          subTodoList={subTodoList}
          name={name}
          changeSubTodoList={changeSubTodoList}
        />
      ))}
    </ul>
  );
};

export default SubTodoList;
