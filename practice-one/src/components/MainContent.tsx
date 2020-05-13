import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

interface MainContentProps {
  todoList: types.Todo[];
  selectedFilter: string;
  isShowDetail: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
}

const MainContent = (props: MainContentProps) => {
  const {
    todoList,
    selectedFilter,
    isShowDetail,
    inputRef,
  } = props;

  const showMinSize = isShowDetail ? constants.displayMinSize : '';

  return (
    <div className={`app__content ${showMinSize}`}>
      <TodoForm
        todoList={todoList}
        selectedFilter={selectedFilter}
        inputRef={inputRef}
      />
      <TodoList
        todoList={todoList}
        selectedFilter={selectedFilter}
      />
    </div>
  );
};

export default MainContent;
