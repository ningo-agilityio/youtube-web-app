import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';
import Context from '../contexts/Context';
import { Form } from './common/Form';

interface TodoFormProps {
  todoList: types.Todo[];
  selectedFilter: string;
  inputRef: React.RefObject<HTMLInputElement>;
}

interface TodoFormState {
  inputValue: string;
}

class TodoForm extends React.Component<TodoFormProps, TodoFormState> {
  constructor(props: TodoFormProps) {
    super(props);
    this.state = { inputValue: '' };
  }

  handleOnChange = (e: React.ChangeEvent) => {
    this.setState({
      inputValue: (e.target as HTMLInputElement).value,
    });
  };

  handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (this.state.inputValue.trim().length) {
      const id = Date.now();
      const item = {} as types.Item;
      const Todo = new types.Todo(item);
      const todoObj = {
        newId: id,
        text: this.state.inputValue.trim(),
        item: constants.todoDefault,
        key: this.props.selectedFilter,
        todoList: this.props.todoList,
        name: constants.todoListName,
      };

      Todo.addTodo(todoObj);
      this.context.handleUpdateTodo(this.props.todoList);
      this.setState({ inputValue: '' });
    }
  };

  render() {
    return (
      <Form
        nameForm="app__content__form"
        nameInput="main-input app-input"
        value={this.state.inputValue}
        type="text"
        inputRef={this.props.inputRef}
        placeholder="What do you need to do?"
        ariaLabel="Enter to do text"
        action="#"
        handleOnChange={this.handleOnChange}
        handleOnSubmit={this.handleOnSubmit}
      />
    );
  }
}

TodoForm.contextType = Context;

export default TodoForm;
