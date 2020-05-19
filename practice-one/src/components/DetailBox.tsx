import React, { useState } from 'react';
import styled from 'styled-components';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';
import { Input } from './common/Input';
import { Label } from './common/Label';
import DueDate from './DueDate';
import SubTodoList from './SubTodoList';
import SubTodoForm from './SubTodoForm';

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

interface DetailBoxProps {
  selectedTodo: types.Item;
  todoList: types.Todo[];
  handleUpdateTodo: (dataTodo: types.Todo[]) => void;
}

const DetailBox = (props: DetailBoxProps) => {
  const { selectedTodo, todoList, handleUpdateTodo } = props;
  const [subTodoList, setSubTodoList] = useState(selectedTodo.subTask!);
  const [dueDate, setDueDate] = useState('');

  const handleUpdateSubTodo = (newList: types.Item[]) => {
    setSubTodoList(newList);
  };

  const handleUpdateDueDate = (newDueDate: string) => {
    setDueDate(newDueDate);
  };

  const handelKeyDown = (e: React.KeyboardEvent) => {
    if (e.keyCode === 13) {
      const newText = (e.target as HTMLLabelElement).textContent!.trim();
      const item = {} as types.Item;
      const Todo = new types.Todo(item);
      const todoObj = {
        todo: selectedTodo,
        todoList,
        newContent: newText,
        newSubTask: selectedTodo.subTask!,
        check: selectedTodo.status!,
        name: constants.todoListName,
        newDate: selectedTodo.dueDate!,
        newKey: selectedTodo.key!,
      };

      Todo.updateTodo(todoObj);
      handleUpdateTodo(todoList);
      (e.target as HTMLLabelElement).blur();
    }
  };

  const todoChecked = selectedTodo.status === false ? '' : constants.CHECKED;

  return (
    <DetailBoxStyled>
      <li className={`todo ${todoChecked}`}>
        <Input name="todo__checkbox" type="checkbox" />
        <Label
          name="todo__text"
          value={selectedTodo.title}
          contentEditable={true}
          handelKeyDown={handelKeyDown}
        />
      </li>
      <DueDateStyled>
        <DueDate
          selectedTodo={selectedTodo}
          dueDate={dueDate}
          handleUpdateDueDate={handleUpdateDueDate}
        />
      </DueDateStyled>
      <li>
        <SubTodoList
          subTodoList={subTodoList}
          selectedTodo={selectedTodo}
          handleUpdateSubTodo={handleUpdateSubTodo}
        />
      </li>
      <SubTodoForm
        selectedTodo={selectedTodo}
        handleUpdateSubTodo={handleUpdateSubTodo}
      />
    </DetailBoxStyled>
  );
};

export default DetailBox;
