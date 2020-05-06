import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';

interface TodoFormProps {
  todoList: types.Todo[];
  idFilter: string;
  changeTodoList: Function;
}

interface TodoFormState {
  inputValue: string;
}

class TodoForm extends React.Component<TodoFormProps, TodoFormState> {
  constructor(props: TodoFormProps) {
    super(props);
    this.state = { inputValue: '' };
  }

  updateInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: (e.target as HTMLInputElement).value.trim(),
    });
  };

  updateTodoList = (e: React.FormEvent) => {
    if (this.state.inputValue.length) {
      const id = Date.now();
      const todoObj = {
        newId: id,
        text: this.state.inputValue,
        item: constants.todoDefault,
        key: this.props.idFilter,
        todoList: this.props.todoList,
        name: 'todoList',
      };
      types.Todo.prototype.addTodo(todoObj);
      this.props.changeTodoList((e.target as HTMLFormElement).value);
      (e.target as HTMLFormElement).reset();
    }
  };

  render() {
    return (
      <form
        className="app__content__form"
        onSubmit={this.updateTodoList}
        action="#"
      >
        <input
          className="main-input app-input"
          type="text"
          placeholder="What do you need to do?"
          aria-label="Enter to do text"
          onInput={this.updateInputValue}
        />
      </form>
    );
  }
}

export default TodoForm;
