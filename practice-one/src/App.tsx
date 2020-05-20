import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import * as helper from './helper/helper';
import * as types from './buildTypes/buildTypes';
import * as constants from './constants/Constants';
import * as storage from './storage/storage';
import Context from './contexts/Context';
import ErrorBoundary from './components/common/ErrorBoundary';
import NavFilter from './components/NavFilter';
import MainContent from './components/MainContent';
import DetailBox from './components/DetailBox';
import OptionPopUp from './components/OptionPopUp';

const StyledWrapperApp = styled.div`
  display: flex;
  height: 100vh;
  margin: 0 auto;
  background: #fff;
  color: rgb(102, 137, 100);
`;

const useLocalStorage = (
  key: string,
  initialValue: types.Todo[] | types.Group[],
  typeConstruct: types.ConstructList
) => {
  const [state, setState] = useState(() => {
    let value;
    try {
      const data = storage.getData(key);
      if (data) {
        value =
          (helper.pushItem(initialValue, data, typeConstruct) as any) ||
          initialValue;
      }
    } catch (error) {
      value = initialValue;
    }
    return value;
  });

  useEffect(() => {
    storage.setData(key, state);
  });
  return [state, setState];
};

const App = () => {
  const textInput = useRef<HTMLInputElement>(null);
  const [todoList, setTodoList] = useLocalStorage(
    'todoList',
    constants.todoList,
    types.Todo
  );
  const [groupList, setGroupList] = useLocalStorage(
    'groupList',
    constants.groupList,
    types.Group
  );
  const [optionList, setOptionList] = useState<types.Group[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>(
    types.Status.All
  );
  const [selectedTodo, setSelectedTodo] = useState<types.Item>(
    constants.todoDefault
  );
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [isShowOption, setIsShowOption] = useState(false);

  const handleUpdateTodo = (dataTodo: types.Todo[]) => {
    setTodoList([...dataTodo]);
  };

  const handleUpdateGroup = (dataGroup: types.Group[]) => {
    setGroupList([...dataGroup]);
  };

  const handleChangeSelectedFilter = (id: string) => {
    setSelectedFilter(id);
  };

  const handleChangeSelectedTodo = (todo: types.Item) => {
    setSelectedTodo(todo);
  };

  const handleUpdateOptionPopUp = (isShow: boolean) => {
    setIsShowOption(isShow);
  };

  const handleUpdateDetailBox = (isShow: boolean) => {
    setIsShowDetail(isShow);
  };

  const handleUpdateOptionList = (todo: types.Item) => {
    const groupListFiltered = (groupList as types.Group[]).filter(
      (item) => item.id !== parseInt(todo.key!, 10)
    );
    const allGroup = groupList;
    const selectedGroupList =
      todo.key === types.Status.All ? allGroup : groupListFiltered;

    setOptionList(selectedGroupList);
  };

  return (
    <div className="todo-app">
      <Context.Provider
        value={{
          groupList,
          selectedFilter,
          handleUpdateGroup,
          handleUpdateTodo,
          handleChangeSelectedFilter,
          handleChangeSelectedTodo,
          handleUpdateDetailBox,
          handleUpdateOptionPopUp,
          handleUpdateOptionList,
        }}
      >
        <StyledWrapperApp>
          <NavFilter
            groupList={groupList}
            handleUpdateGroup={handleUpdateGroup}
          />
          <MainContent
            todoList={todoList}
            selectedFilter={selectedFilter}
            isShowDetail={isShowDetail}
            inputRef={textInput}
          />
          <ErrorBoundary>
            {isShowDetail && (
              <DetailBox
                selectedTodo={selectedTodo}
                todoList={todoList}
                handleUpdateTodo={handleUpdateTodo}
              />
            )}
          </ErrorBoundary>
        </StyledWrapperApp>
      </Context.Provider>

      {isShowOption && (
        <OptionPopUp
          selectedTodo={selectedTodo}
          selectedGroupList={optionList}
          todoList={todoList}
          handleUpdateOptionPopUp={handleUpdateOptionPopUp}
        />
      )}
    </div>
  );
};

export default App;
