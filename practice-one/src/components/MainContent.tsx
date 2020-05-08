import React from 'react';
import * as types from '../buildTypes/buildTypes';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

interface MainContentProps {
  todoList: types.Todo[];
  selectedFilter: string;
  detailState: boolean;
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
    handleUpdateTodo,
    handleChangeSelectedTodo,
    handleUpdateDetailBox,
    handleUpdateOptionList,
    handleUpdateOptionPopUp,
  } = props;

  return (
    <div className="app__content">
      <TodoForm
        todoList={todoList}
        selectedFilter={selectedFilter}
        handleUpdateTodo={handleUpdateTodo}
      />
      <TodoList
        name="todoList"
        todoList={todoList}
        selectedFilter={selectedFilter}
        detailState={detailState}
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
