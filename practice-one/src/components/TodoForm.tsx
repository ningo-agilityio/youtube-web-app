import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';

interface TodoFormProps {
  todoList: types.Todo[];
  selectedFilterId: string;
  changeTodoList: (list: types.Todo[]) => void;
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
        key: this.props.selectedFilterId,
        todoList: this.props.todoList,
        name: constants.todoListName,
      };
      const item = {} as types.Item;
      const Todo = new types.Todo(item);

      Todo.addTodo(todoObj);
      this.props.changeTodoList(this.props.todoList);
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
