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
    let todo = {} as types.Item;
    let todoObj = {} as types.updateTodoObj;
    const Todo = new types.Todo(todo);
    const newDueDate = helper.convertDate((e.target as HTMLInputElement).value);
    const dataTodo = constants.todoList.map((item) => ({ ...item }));

    helper.pushDataLocalToList(constants.todoListName, dataTodo, types.Todo);
    todo = helper.findItemById(dataTodo, selectedTodo.id)!;
    todoObj = {
      todo,
      todoList: dataTodo,
      newContent: todo.title,
      newSubTask: todo.subTask!,
      check: todo.status!,
      name: constants.todoListName,
      newDate: newDueDate,
      newKey: todo.key,
    };
    Todo.updateTodo(todoObj);
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
