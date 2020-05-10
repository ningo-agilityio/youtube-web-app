import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';
import * as constants from '../constants/Constants';
import { Label } from './common/Label';

interface OptionListProps {
  selectedTodo: types.Item;
  selectedGroupList: types.Group[];
  todoList: types.Todo[];
  handleUpdateOptionPopUp: Function;
}

const OptionList = (props: OptionListProps) => {
  const {
    selectedTodo,
    selectedGroupList,
    todoList,
    handleUpdateOptionPopUp,
  } = props;

  const handleMoveTodo = (groupMoveIn: types.Group) => () => {
    const todo = helper.findItemById(todoList, selectedTodo.id)!;
    const Todo = new types.Todo(todo);
    let todoObj = {} as types.updateTodoObj;
    const dataTodo = constants.todoList.map((item) => ({
      ...(item as object),
    })) as types.Todo[];

    selectedTodo.key = groupMoveIn.id.toString();
    helper.pushDataLocalToList(constants.todoListName, dataTodo, types.Todo);
    todoObj = {
      todo,
      todoList,
      newContent: todo.title,
      newSubTask: todo.subTask!,
      check: todo.status!,
      name: constants.todoListName,
      newDate: todo.dueDate,
      newKey: groupMoveIn.id.toString(),
    };
    Todo.updateTodo(todoObj);
    handleUpdateOptionPopUp(false);
  };

  const renderOptionList = (list: types.Group[]) =>
    list.map((group) => (
      <li className="option" id={group.id.toString()} key={group.id.toString()}>
        <Label
          name="option__text"
          value={group.title}
          handleOnClick={handleMoveTodo(group)}
        />
      </li>
    ));

  return (
    <ul className="app__nav__filter" aria-label="List of groups">
      {renderOptionList(selectedGroupList)}
    </ul>
  );
};

export default OptionList;
