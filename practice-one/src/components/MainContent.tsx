import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

interface MainContentProps {
  todoList: types.Todo[];
  selectedFilter: string;
  detailState: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
  handleUpdateTodo: (dataTodo: types.Todo[]) => void;
  handleChangeSelectedTodo: (todo: types.Todo) => void;
  handleUpdateDetailBox: Function;
  handleUpdateOptionList: Function;
  handleUpdateOptionPopUp: Function;
}

const MainContent = (props: MainContentProps) => {
  const {
    todoList,
    selectedFilter,
    detailState,
    inputRef,
    handleUpdateTodo,
    handleChangeSelectedTodo,
    handleUpdateDetailBox,
    handleUpdateOptionList,
    handleUpdateOptionPopUp,
  } = props;

  const displayBlock = detailState === true ? constants.displayMinSize : '';

  return (
    <div className={`app__content ${displayBlock}`}>
      <TodoForm
        todoList={todoList}
        selectedFilter={selectedFilter}
        inputRef={inputRef}
        handleUpdateTodo={handleUpdateTodo}
      />
      <TodoList
        name="todoList"
        todoList={todoList}
        selectedFilter={selectedFilter}
        handleUpdateTodo={handleUpdateTodo}
        handleChangeSelectedTodo={handleChangeSelectedTodo}
        handleUpdateDetailBox={handleUpdateDetailBox}
        handleUpdateOptionList={handleUpdateOptionList}
        handleUpdateOptionPopUp={handleUpdateOptionPopUp}
      />
    </div>
  );
};

export default MainContent;
