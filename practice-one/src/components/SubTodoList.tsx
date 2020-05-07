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
  let subTodoList = [] as types.Item[];
  const dataSubTodo = constants.todoList.map((item) => ({ ...item }));

  helper.pushDataLocalToList('subTodoList', dataSubTodo, types.SubTodo);
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
        changeSubTodoList={changeSubTodoList}
      />
    ));

  return (
    <ul className="sub-todo" aria-label="List of sub todo">
      {renderSubTodoList(subTodoList)}
    </ul>
  );
};

export default SubTodoList;
