import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';
import * as helper from '../helper/helper';
import SubTodoItem from './SubTodoItem';

interface SubTodoListProps {
  selectedTodo: types.Item;
  name: string;
  changeSubTodoList: Function;
}

const SubTodoList = (props: SubTodoListProps) => {
  const { selectedTodo, name, changeSubTodoList } = props;
  const dataSubTodo = constants.todoList.map((item) => ({ ...item }));
  let subTodoList = [] as types.Item[];

  helper.pushDataLocalToList('subTodoList', dataSubTodo, types.SubTodo);
  subTodoList = helper.filterItemByProp(
    dataSubTodo,
    'key',
    selectedTodo.id.toString()
  );

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
