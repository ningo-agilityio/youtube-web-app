import React from 'react';
import styled from 'styled-components';
import * as helper from '../helper/helper';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';
import { Input } from './common/Input';
import { Label } from './common/Label';

interface DueDateProps {
  selectedTodo: types.Item;
  dueDate: string;
  handleUpdateDueDate: (newDueDate: string) => void;
}

const InputDueDate = styled(Input)`
  box-shadow: none;
  background: #fff
    url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)
    97% 50% no-repeat;

  ::-webkit-calendar-picker-indicator {
    opacity: 0;
  }

  ::-webkit-inner-spin-button {
    display: none;
  }
`;

class DueDate extends React.Component<DueDateProps> {
  handleOnChange = (e: React.ChangeEvent) => {
    const { selectedTodo, handleUpdateDueDate } = this.props;
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

  render() {
    return (
      <>
        <Label
          name="due-date"
          value="Due date: "
          spanValue={this.props.selectedTodo.dueDate}
        />
        <InputDueDate
          type="date"
          handleOnChange={this.handleOnChange}
        />
      </>
    );
  }
}

export default DueDate;
