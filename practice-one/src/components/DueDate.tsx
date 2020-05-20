import React from 'react';
import * as helper from '../helper/helper';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';
import { InputDueDate } from './InputDueDate';
import { Label } from './common/Label';

interface DueDateProps {
  selectedTodo: types.Item;
  dueDate: string;
  handleUpdateDueDate: (newDueDate: string) => void;
}

const DueDate = (props: DueDateProps) => {
  const { selectedTodo, handleUpdateDueDate } = props;
  const handleOnChange = (e: React.ChangeEvent) => {
    let todo = {} as types.Item;
    let todoObj = {} as types.updateTodoObj;
    const Todo = new types.Todo(todo);
    const dataTodo = constants.todoList.map((item) => ({
      ...(item as object),
    })) as types.Item[];

    selectedTodo.dueDate = helper.convertDate(
      (e.target as HTMLInputElement).value
    );
    helper.pushDataLocalToList(constants.todoListName, dataTodo, types.Todo);
    todo = helper.findItemById(dataTodo, selectedTodo.id)!;
    todoObj = {
      todo,
      todoList: dataTodo,
      newContent: todo.title,
      newSubTask: todo.subTask!,
      check: todo.status!,
      name: constants.todoListName,
      newDate: selectedTodo.dueDate,
      newKey: todo.key,
    };
    Todo.updateTodo(todoObj);
    handleUpdateDueDate(selectedTodo.dueDate);
  };

  return (
    <>
      <Label
        name="due-date"
        value="Due date: "
        spanValue={selectedTodo.dueDate}
      />
      <InputDueDate type="date" handleOnChange={handleOnChange} />
    </>
  );
};

export default DueDate;
