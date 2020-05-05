import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';

interface DueDateProps {
  selectedTodo: types.Item;
  todoList: types.Todo[];
}

interface DueDateState {
  dueDateValue: string;
}

class DueDate extends React.Component<DueDateProps, DueDateState> {
  constructor(props: DueDateProps) {
    super(props);
    this.state = { dueDateValue: '' };
    this.changeDueDate = this.changeDueDate.bind(this);
  }

  changeDueDate(e: React.FormEvent<HTMLInputElement>) {
    let todo: types.Item;
    this.props.selectedTodo.dueDate = helper.convertDate(
      (e.target as HTMLInputElement).value
    );
    todo = helper.findItemById(
      this.props.todoList,
      this.props.selectedTodo.id
    )!;
    types.Todo.prototype.updateTodo(
      todo,
      this.props.todoList,
      todo.title,
      todo.subTask!,
      todo.status!,
      'todoList',
      this.props.selectedTodo.dueDate,
      todo.key
    );
    this.setState({ dueDateValue: this.props.selectedTodo.dueDate });
  }

  render() {
    return (
      <>
        <input
          className='date-picker'
          type='date'
          onInput={this.changeDueDate}
        />
        <label>
          Due date: <span>{this.props.selectedTodo.dueDate}</span>
        </label>
      </>
    );
  }
}

export default DueDate;
