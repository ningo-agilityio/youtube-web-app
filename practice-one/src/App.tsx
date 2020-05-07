import React from 'react';
import * as types from './buildTypes/buildTypes';
import * as helper from './helper/helper';
import * as constants from './constants/Constants';
import NavFilter from './components/NavFilter';
import MainContent from './components/MainContent';
import DetailBox from './components/DetailBox';
import OptionPopUp from './components/OptionPopUp';

interface AppState {
  selectedFilterId: string;
  todoList: types.Todo[];
  groupList: types.Group[];
  selectedTodo: types.Item;
  optionList: types.Group[];
  detailState: boolean;
  optionState: boolean;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      selectedFilterId: types.Status.All,
      todoList: [],
      groupList: [],
      selectedTodo: constants.todoDefault,
      optionList: [],
      detailState: false,
      optionState: false,
    };
  }

  componentDidMount() {
    const dataTodo = constants.todoList.map((item) => ({
      ...item,
    })) as types.Todo[];
    const dataGroup = constants.groupList.map((item) => ({
      ...item,
    })) as types.Group[];

    helper.pushDataLocalToList(constants.todoListName, dataTodo, types.Todo);
    helper.pushDataLocalToList(constants.groupListName, dataGroup!, types.Group);
    this.changeTodoList(dataTodo);
    this.changeGroupList(dataGroup);
  }

  changeTodoList = (dataTodo: types.Todo[]) => {
    this.setState({ todoList: dataTodo });
  };

  changeGroupList = (dataGroup: types.Group[]) => {
    this.setState({ groupList: dataGroup });
  };

  changeSelectedFilterId = (id: string) => {
    this.setState({ selectedFilterId: id });
  };

  updateSelectedTodo = (todo: types.Item) => {
    this.setState({ selectedTodo: todo });
  };

  changeOptionPopUpState = (displayState: boolean) => {
    this.setState({ optionState: displayState });
  };

  changeDetailBoxState = (displayState: boolean) => {
    this.setState({ detailState: displayState });
  };

  changeOptionList = (todo: types.Item) => {
    const groupListFiltered = this.state.groupList.filter(
      (item) => item.id !== parseInt(todo.key!, 10)
    );
    const allGroup = this.state.groupList;
    const selectedGroupList = todo.key === types.Status.All ? allGroup : groupListFiltered;

    this.setState({ optionList: selectedGroupList });
  };

  render() {
    const {
      selectedFilterId,
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
          <NavFilter
            selectedFilterId={selectedFilterId}
            groupList={groupList}
            changeGroupList={this.changeGroupList}
            changeTodoList={this.changeTodoList}
            changeSelectedFilterId={this.changeSelectedFilterId}
            changeDetailBoxState={this.changeDetailBoxState}
          />
          <MainContent
            todoList={todoList}
            selectedFilterId={selectedFilterId}
            detailState={detailState}
            changeTodoList={this.changeTodoList}
            updateSelectedTodo={this.updateSelectedTodo}
            changeDetailBoxState={this.changeDetailBoxState}
            changeOptionList={this.changeOptionList}
            changeOptionPopUpState={this.changeOptionPopUpState}
          />
          <DetailBox
            detailState={detailState}
            selectedTodo={selectedTodo}
            todoList={todoList}
            changeTodoList={this.changeTodoList}
          />
        </div>
        <OptionPopUp
          optionState={optionState}
          selectedTodo={selectedTodo}
          selectedGroupList={optionList}
          todoList={todoList}
          selectedFilterId={selectedFilterId}
          changeTodoList={this.changeTodoList}
          changeOptionPopUpState={this.changeOptionPopUpState}
        />
      </div>
    );
  }
}

export default App;
