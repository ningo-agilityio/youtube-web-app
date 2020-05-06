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
  const {
    selectedTodo,
    selectedGroupList,
    todoList,
    idFilter,
    changeTodoList,
    changeOptionPopUpState,
  } = props;

  const moveTodo = (groupMoveIn: types.Group) => () => {
    const newTodoList = helper.filterItemByProp(todoList, 'key', idFilter);
    const todo = helper.findItemById(todoList, selectedTodo.id)!;
    selectedTodo.key = groupMoveIn.id.toString();
    types.Todo.prototype.updateTodo(
      todo,
      todoList,
      todo.title,
      todo.subTask!,
      todo.status!,
      'todoList',
      todo.dueDate,
      selectedTodo.key
    );
    changeTodoList(newTodoList);
    changeOptionPopUpState(false);
  };

  return (
    <ul className="app__nav__filter" aria-label="List of groups">
      {selectedGroupList.map((group) => (
        <li
          className="option"
          id={group.id.toString()}
          key={group.id.toString()}
        >
          <label
            className="option__text"
            onClick={moveTodo(group)}
            role="presentation"
          >
            {group.title}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default OptionList;
