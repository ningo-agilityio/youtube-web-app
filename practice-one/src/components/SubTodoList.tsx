import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';
import SubTodoItem from '../components/SubTodoItem';

interface SubTodoListProps {
  selectedTodo: types.Item;
  todoList: types.Todo[];
  subTodoList: types.Item[];
  name: string;
  changeSubTodoList: Function;
}

const SubTodoList = (props: SubTodoListProps) => {
  let newSubTodoList: types.Item[];
  newSubTodoList = helper.filterItemByProp(
    props.subTodoList,
    'key',
    props.selectedTodo.id.toString()
  );
  return (
    <ul className='sub-todo' aria-label='List of sub todo'>
      {newSubTodoList.map((subTodo) => (
        <SubTodoItem
          subTodo={subTodo}
          key={subTodo.id.toString()}
          subTodoList={newSubTodoList}
          name={props.name}
          changeSubTodoList={props.changeSubTodoList}
        />
      ))}
    </ul>
  );
};

export default SubTodoList;
