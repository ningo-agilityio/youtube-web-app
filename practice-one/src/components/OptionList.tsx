import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';

interface OptionListProps {
  selectedTodo: types.Item;
  selectedGroupList: types.Group[];
  todoList: types.Todo[];
  idFilter: string;
  changeTodoList: Function;
  changeOptionPopUpState: Function;
}

const OptionList = (props: OptionListProps) => {
  const moveTodo = (groupMoveIn: types.Group) => () => {
    let todo: types.Item;
    let newTodoList: types.Item[];
    todo = helper.findItemById(props.todoList, props.selectedTodo.id)!;
    props.selectedTodo.key = groupMoveIn.id.toString();
    types.Todo.prototype.updateTodo(
      todo,
      props.todoList,
      todo.title,
      todo.subTask!,
      todo.status!,
      'todoList',
      todo.dueDate,
      props.selectedTodo.key
    );
    newTodoList = helper.filterItemByProp(
      props.todoList,
      'key',
      props.idFilter
    );
    props.changeTodoList(newTodoList);
    props.changeOptionPopUpState(false);
  };

  return (
    <ul className='app__nav__filter' aria-label='List of groups'>
      {props.selectedGroupList.map((group) => (
        <li
          className='option'
          id={group.id.toString()}
          key={group.id.toString()}
        >
          <label className='option__text' onClick={moveTodo(group)}>
            {group.title}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default OptionList;
