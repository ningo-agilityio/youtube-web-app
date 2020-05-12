import React from 'react';
import * as types from './buildTypes/buildTypes';
import * as helper from './helper/helper';
import * as constants from './constants/Constants';
import NavContext from './contexts/Contexts';
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
  detailState: boolean;
  optionState: boolean;
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
      detailState: false,
      optionState: false,
    };
  }

  componentDidMount() {
    this.textInput.current!.focus();
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

  handleUpdateOptionPopUp = (displayState: boolean) => {
    this.setState({ optionState: displayState });
  };

  handleUpdateDetailBox = (displayState: boolean) => {
    this.setState({ detailState: displayState });
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
      detailState,
      optionState,
    } = this.state;

    return (
      <div className="todo-app">
        <div className="wrapper-app">
          <NavContext.Provider
            value={{
              groupList,
              selectedFilter,
              handleUpdateGroup: this.handleUpdateGroup,
              handleUpdateTodo: this.handleUpdateTodo,
              handleChangeSelectedFilter: this.handleChangeSelectedFilter,
              handleUpdateDetailBox: this.handleUpdateDetailBox,
            }}
          >
            <NavFilter />
          </NavContext.Provider>
          <MainContent
            todoList={todoList}
            selectedFilter={selectedFilter}
            detailState={detailState}
            inputRef={this.textInput}
            handleUpdateTodo={this.handleUpdateTodo}
            handleChangeSelectedTodo={this.handleChangeSelectedTodo}
            handleUpdateDetailBox={this.handleUpdateDetailBox}
            handleUpdateOptionList={this.handleUpdateOptionList}
            handleUpdateOptionPopUp={this.handleUpdateOptionPopUp}
          />
          <ErrorBoundary>
            <DetailBox
              detailState={detailState}
              selectedTodo={selectedTodo}
              todoList={todoList}
              handleUpdateTodo={this.handleUpdateTodo}
            />
          </ErrorBoundary>
        </div>
        <OptionPopUp
          optionState={optionState}
          selectedTodo={selectedTodo}
          selectedGroupList={optionList}
          todoList={todoList}
          handleUpdateOptionPopUp={this.handleUpdateOptionPopUp}
        />
      </div>
    );
  }
}

export default App;
