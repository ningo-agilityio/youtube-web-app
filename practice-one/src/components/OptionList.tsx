import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';
import * as constants from '../constants/Constants';

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
    const todo = helper.findItemById(todoList, selectedTodo.id)!;
    const Todo = new types.Todo(todo);
    let todoObj = {} as types.updateTodoObj;
    const newTodoList = helper.filterItemByProp(
      todoList,
      'key',
      selectedFilterId
    );

    selectedTodo.key = groupMoveIn.id.toString();
    todoObj = {
      todo,
      todoList,
      newContent: todo.title,
      newSubTask: todo.subTask!,
      check: todo.status!,
      name: constants.todoListName,
      newDate: todo.dueDate,
      newKey: selectedTodo.key,
    };
    Todo.updateTodo(todoObj);
    changeTodoList(newTodoList);
    changeOptionPopUpState(false);
  };

  const renderOptionList = (list: types.Group[]) =>
    list.map((group) => (
      <li className="option" id={group.id.toString()} key={group.id.toString()}>
        <label
          className="option__text"
          onClick={moveTodo(group)}
          role="presentation"
        >
          {group.title}
        </label>
      </li>
    ));

  return (
    <ul className="app__nav__filter" aria-label="List of groups">
      {renderOptionList(selectedGroupList)}
    </ul>
  );
};

export default OptionList;
