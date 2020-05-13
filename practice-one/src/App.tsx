import React from 'react';
import * as types from './buildTypes/buildTypes';
import * as helper from './helper/helper';
import * as constants from './constants/Constants';
import Context from './contexts/Context';
import ErrorBoundary from './components/common/ErrorBoundary';
import NavFilter from './components/NavFilter';
import MainContent from './components/MainContent';
import DetailBox from './components/DetailBox';
import OptionPopUp from './components/OptionPopUp';

interface AppState {
  selectedFilter: string;
  todoList: types.Todo[];
  groupList: types.Group[];
  selectedTodo: types.Item;
  optionList: types.Group[];
  isShowDetail: boolean;
  isShowOption: boolean;
}

class App extends React.Component<{}, AppState> {
  textInput = React.createRef<HTMLInputElement>();

  constructor(props: {}) {
    super(props);
    this.state = {
      selectedFilter: types.Status.All,
      todoList: [],
      groupList: [],
      selectedTodo: constants.todoDefault,
      optionList: [],
      isShowDetail: false,
      isShowOption: false,
    };
  }

  componentDidMount() {
    const dataTodo = constants.todoList.map((item) => ({
      ...(item as object),
    })) as types.Todo[];
    const dataGroup = constants.groupList.map((item) => ({
      ...(item as object),
    })) as types.Group[];

    helper.pushDataLocalToList(constants.todoListName, dataTodo, types.Todo);
    helper.pushDataLocalToList(
      constants.groupListName,
      dataGroup!,
      types.Group
    );
    this.handleUpdateTodo(dataTodo);
    this.handleUpdateGroup(dataGroup);
    this.textInput.current!.focus();
  }

  handleUpdateTodo = (dataTodo: types.Todo[]) => {
    this.setState({ todoList: dataTodo });
  };

  handleUpdateGroup = (dataGroup: types.Group[]) => {
    this.setState({ groupList: dataGroup });
  };

  handleChangeSelectedFilter = (id: string) => {
    this.setState({ selectedFilter: id });
  };

  handleChangeSelectedTodo = (todo: types.Item) => {
    this.setState({ selectedTodo: todo });
  };

  handleUpdateOptionPopUp = (isShow: boolean) => {
    this.setState({ isShowOption: isShow });
  };

  handleUpdateDetailBox = (isShow: boolean) => {
    this.setState({ isShowDetail: isShow });
  };

  handleUpdateOptionList = (todo: types.Item) => {
    const groupListFiltered = this.state.groupList.filter(
      (item) => item.id !== parseInt(todo.key!, 10)
    );
    const allGroup = this.state.groupList;
    const selectedGroupList =
      todo.key === types.Status.All ? allGroup : groupListFiltered;

    this.setState({ optionList: selectedGroupList });
  };

  render() {
    const {
      selectedFilter,
      todoList,
      groupList,
      selectedTodo,
      optionList,
      isShowDetail,
      isShowOption,
    } = this.state;

    return (
      <div className="todo-app">
        <Context.Provider
          value={{
            groupList,
            selectedFilter,
            handleUpdateGroup: this.handleUpdateGroup,
            handleUpdateTodo: this.handleUpdateTodo,
            handleChangeSelectedFilter: this.handleChangeSelectedFilter,
            handleChangeSelectedTodo: this.handleChangeSelectedTodo,
            handleUpdateDetailBox: this.handleUpdateDetailBox,
            handleUpdateOptionPopUp: this.handleUpdateOptionPopUp,
            handleUpdateOptionList: this.handleUpdateOptionList,
          }}
        >
          <div className="wrapper-app">
            <NavFilter />
            <MainContent
              todoList={todoList}
              selectedFilter={selectedFilter}
              isShowDetail={isShowDetail}
              inputRef={this.textInput}
            />
            <ErrorBoundary>
              {isShowDetail && (
                <DetailBox
                  selectedTodo={selectedTodo}
                  todoList={todoList}
                  handleUpdateTodo={this.handleUpdateTodo}
                />
              )}
            </ErrorBoundary>
          </div>
        </Context.Provider>

        {isShowOption && (
          <OptionPopUp
            selectedTodo={selectedTodo}
            selectedGroupList={optionList}
            todoList={todoList}
            handleUpdateOptionPopUp={this.handleUpdateOptionPopUp}
          />
        )}
      </div>
    );
  }
}

export default App;
