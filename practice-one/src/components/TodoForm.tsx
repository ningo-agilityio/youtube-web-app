import React, { useState } from 'react';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';
import Context from '../contexts/Context';
import { Form } from './common/Form';

interface TodoFormProps {
  todoList: types.Todo[];
  selectedFilter: string;
  inputRef: React.RefObject<HTMLInputElement>;
}

const TodoForm = (props: TodoFormProps) => {
  const { todoList, selectedFilter, inputRef } = props;
  const context = React.useContext(Context);
  const [inputValue, setInputValue] = useState('');
  const handleOnChange = (e: React.ChangeEvent) => {
    setInputValue((e.target as HTMLInputElement).value);
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue.trim().length) {
      const id = Date.now();
      const item = {} as types.Item;
      const Todo = new types.Todo(item);
      const todoObj = {
        newId: id,
        text: inputValue.trim(),
        item: constants.todoDefault,
        key: selectedFilter,
        todoList,
        name: constants.todoListName,
      };

      Todo.addTodo(todoObj);
      context.handleUpdateTodo!(todoList);
      setInputValue('');
    }
  };

  return (
    <Form
      name="main-form"
      nameInput="main-input"
      value={inputValue}
      type="text"
      inputRef={inputRef}
      placeholder="What do you need to do?"
      ariaLabel="Enter to do text"
      action="#"
      handleOnChange={handleOnChange}
      handleOnSubmit={handleOnSubmit}
    />
  );
};

export default TodoForm;
