import React from 'react';
import * as helper from '../helper/helper';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';
import { Input } from './common/Input';
import { Label } from './common/Label';

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

  handleOnChange = (e: React.ChangeEvent) => {
    const { selectedTodo } = this.props;
    let todo = {} as types.Item;
    let todoObj = {} as types.updateTodoObj;
    const Todo = new types.Todo(todo);
    const newDueDate = helper.convertDate((e.target as HTMLInputElement).value);
    const dataTodo = constants.todoList.map((item) => ({
      ...(item as object),
    })) as types.Item[];

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
        <Input
          name="date-picker"
          type="date"
          handleOnChange={this.handleOnChange}
        />
        <Label
          name="due-date"
          value="Due date:"
          spanValue={this.state.dueDateValue}
        />
      </>
    );
  }
}

export default DueDate;
