import React from 'react';
import styled from 'styled-components';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';
import { Input } from './common/Input';
import { Label } from './common/Label';
import DueDate from './DueDate';
import SubTodoList from './SubTodoList';
import SubTodoForm from './SubTodoForm';

interface DetailBoxProps {
  selectedTodo: types.Item;
  todoList: types.Todo[];
  handleUpdateTodo: (dataTodo: types.Todo[]) => void;
}

interface DetailBoxState {
  subTodoList: types.Item[];
  dueDate: string;
}

const DetailBoxStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 25rem;
`;

const DueDateStyled = styled.li`
  padding: 0.5rem;
  border-top: 0.063rem solid rgba(0, 0, 0, 0.2);
  border-bottom: 0.063rem solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
`;

class DetailBox extends React.Component<DetailBoxProps, DetailBoxState> {
  constructor(props: DetailBoxProps) {
    super(props);
    this.state = { subTodoList: [], dueDate: '' };
  }

  handleUpdateSubTodo = (newList: types.Item[]) => {
    this.setState({ subTodoList: newList });
  };

  handleUpdateDueDate = (newDueDate: string) => {
    this.setState({ dueDate: newDueDate });
  };

  handelKeyDown = (e: React.KeyboardEvent) => {
    if (e.keyCode === 13) {
      const newText = (e.target as HTMLLabelElement).textContent!.trim();
      const item = {} as types.Item;
      const Todo = new types.Todo(item);
      const todoObj = {
        todo: this.props.selectedTodo,
        todoList: this.props.todoList,
        newContent: newText,
        newSubTask: this.props.selectedTodo.subTask!,
        check: this.props.selectedTodo.status!,
        name: constants.todoListName,
        newDate: this.props.selectedTodo.dueDate!,
        newKey: this.props.selectedTodo.key!,
      };

      Todo.updateTodo(todoObj);
      this.props.handleUpdateTodo(this.props.todoList);
      (e.target as HTMLLabelElement).blur();
    }
  };

  render() {
    const { selectedTodo } = this.props;
    const todoChecked = selectedTodo.status === false ? '' : constants.CHECKED;

    return (
      <DetailBoxStyled>
        <li className={`todo ${todoChecked}`}>
          <Input name="todo__checkbox" type="checkbox" />
          <Label
            name="todo__text"
            value={selectedTodo.title}
            contentEditable={true}
            handelKeyDown={this.handelKeyDown}
          />
        </li>
        <DueDateStyled>
          <DueDate
            selectedTodo={selectedTodo}
            dueDate={this.state.dueDate}
            handleUpdateDueDate={this.handleUpdateDueDate}
          />
        </DueDateStyled>
        <li>
          <SubTodoList
            subTodoList={this.state.subTodoList}
            selectedTodo={selectedTodo}
            handleUpdateSubTodo={this.handleUpdateSubTodo}
          />
        </li>
        <SubTodoForm
          subTodoList={this.state.subTodoList}
          selectedTodo={selectedTodo}
          handleUpdateSubTodo={this.handleUpdateSubTodo}
        />
      </DetailBoxStyled>
    );
  }
}

export default DetailBox;
