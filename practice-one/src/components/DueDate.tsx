import React from 'react';
import * as helper from '../helper/helper';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';

interface DueDateProps {
  selectedTodo: types.Item;
  dueDateValue: string;
}

interface DueDateState {
  dueDateValue: string;
}

class DueDate extends React.Component<DueDateProps, DueDateState> {
  constructor(props: DueDateProps) {
    super(props);
    this.state = { dueDateValue: '' };
  }

  componentDidMount() {
    const newDueDate = this.props.selectedTodo.dueDate!;
    this.setState({ dueDateValue: newDueDate });
  }

  changeDueDate = (e: React.FormEvent<HTMLInputElement>) => {
    const { selectedTodo } = this.props;
    const newDueDate = helper.convertDate((e.target as HTMLInputElement).value);
    const dataTodo = constants.todoList.map((item) => ({ ...item }));
    let todo = {} as types.Item;
    const Todo = new types.Todo(todo);

    helper.pushDataLocalToList('todoList', dataTodo, types.Todo);
    todo = helper.findItemById(dataTodo, selectedTodo.id)!;
    Todo.updateTodo(
      todo,
      dataTodo,
      todo.title,
      todo.subTask!,
      todo.status!,
      'todoList',
      newDueDate,
      todo.key
    );
    this.setState({ dueDateValue: newDueDate });
  };

  render() {
    return (
      <>
        <input
          className="date-picker"
          type="date"
          onInput={this.changeDueDate}
        />
        <label>
          Due date: <span>{this.state.dueDateValue}</span>
        </label>
      </>
    );
  }
}

export default DueDate;
