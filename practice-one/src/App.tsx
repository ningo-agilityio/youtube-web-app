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
      selectedFilterId: 'ALL',
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

    helper.pushDataLocalToList('todoList', dataTodo, types.Todo);
    helper.pushDataLocalToList('groupList', dataGroup!, types.Group);
    this.updateState<types.Todo[]>('todoList', dataTodo);
    this.updateState<types.Group[]>('groupList', dataGroup);
  }

  updateState = <T,>(key: string, value: T) => {
    this.setState<never>({ [key]: value });
  };

  changeTodoList = (dataTodo: types.Todo[]) =>
    this.updateState<types.Todo[]>('todoList', dataTodo);

  changeGroupList = (dataGroup: types.Group[]) =>
    this.updateState<types.Group[]>('groupList', dataGroup);

  changeSelectedFilterId = (id: string) => {
    this.updateState<string>('selectedFilterId', id);
  };

  updateSelectedTodo = (todo: types.Item) => {
    this.updateState<types.Item>('selectedTodo', todo);
  };

  changeOptionPopUpState = (state: boolean) => {
    this.updateState<boolean>('optionState', state);
  };

  changeDetailBoxState = (state: boolean) => {
    this.updateState<boolean>('detailState', state);
  };

  changeOptionList = (todo: types.Item) => {
    const groupListFiltered = this.state.groupList.filter(
      (item) => item.id !== parseInt(todo.key!, 10)
    );
    const allGroup = this.state.groupList;
    const selectedGroupList = todo.key === 'ALL' ? allGroup : groupListFiltered;

    this.setState({ optionList: selectedGroupList });
  };

  render() {
    return (
      <div className="todo-app">
        <div className="wrapper-app">
          <NavFilter
            selectedFilterId={this.state.selectedFilterId}
            groupList={this.state.groupList}
            changeGroupList={this.changeGroupList}
            changeTodoList={this.changeTodoList}
            changeSelectedFilterId={this.changeSelectedFilterId}
            changeDetailBoxState={this.changeDetailBoxState}
          />
          <MainContent
            todoList={this.state.todoList}
            selectedFilterId={this.state.selectedFilterId}
            detailState={this.state.detailState}
            changeTodoList={this.changeTodoList}
            updateSelectedTodo={this.updateSelectedTodo}
            changeDetailBoxState={this.changeDetailBoxState}
            changeOptionList={this.changeOptionList}
            changeOptionPopUpState={this.changeOptionPopUpState}
          />
          <DetailBox
            detailState={this.state.detailState}
            selectedTodo={this.state.selectedTodo}
            todoList={this.state.todoList}
            changeTodoList={this.changeTodoList}
          />
        </div>
        <OptionPopUp
          optionState={this.state.optionState}
          selectedTodo={this.state.selectedTodo}
          selectedGroupList={this.state.optionList}
          todoList={this.state.todoList}
          selectedFilterId={this.state.selectedFilterId}
          changeTodoList={this.changeTodoList}
          changeOptionPopUpState={this.changeOptionPopUpState}
        />
      </div>
    );
  }
}

export default App;
