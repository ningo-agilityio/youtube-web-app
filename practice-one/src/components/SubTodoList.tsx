import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';
import * as helper from '../helper/helper';
import SubTodoItem from './SubTodoItem';

interface SubTodoListProps {
  selectedTodo: types.Item;
  name: string;
  handleUpdateSubTodo: Function;
}

const SubTodoList = (props: SubTodoListProps) => {
  const { selectedTodo, name, handleUpdateSubTodo } = props;
  let subTodoList = [] as types.Item[];
  const dataSubTodo = constants.todoList.map((item) => ({
    ...(item as object),
  })) as types.Item[];

  helper.pushDataLocalToList(
    constants.subTodoListName,
    dataSubTodo,
    types.SubTodo
  );
  subTodoList = helper.filterItemByProp(
    dataSubTodo,
    'key',
    selectedTodo.id.toString()
  );

  const renderSubTodoList = (list: types.Item[]) =>
    list.map((subTodo) => (
      <SubTodoItem
        subTodo={subTodo}
        key={subTodo.id.toString()}
        subTodoList={subTodoList}
        name={name}
        handleUpdateSubTodo={handleUpdateSubTodo}
      />
    ));

  return (
    <ul className="sub-todo" aria-label="List of sub todo">
      {renderSubTodoList(subTodoList)}
    </ul>
  );
};

export default SubTodoList;
