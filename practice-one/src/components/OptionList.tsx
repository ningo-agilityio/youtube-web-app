import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';

interface OptionListProps {
  selectedTodo: types.Item;
  selectedGroupList: types.Group[];
  todoList: types.Todo[];
  selectedFilterId: string;
  changeTodoList: Function;
  changeOptionPopUpState: Function;
}

const OptionList = (props: OptionListProps) => {
  const {
    selectedTodo,
    selectedGroupList,
    todoList,
    selectedFilterId,
    changeTodoList,
    changeOptionPopUpState,
  } = props;

  const moveTodo = (groupMoveIn: types.Group) => () => {
    const newTodoList = helper.filterItemByProp(
      todoList,
      'key',
      selectedFilterId
    );
    const todo = helper.findItemById(todoList, selectedTodo.id)!;
    const Todo = new types.Todo(todo);

    selectedTodo.key = groupMoveIn.id.toString();
    Todo.updateTodo(
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
