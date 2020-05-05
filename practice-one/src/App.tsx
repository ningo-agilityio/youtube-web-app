import React from 'react';
import * as types from './buildTypes/buildTypes';
import * as helper from './helper/helper';
import * as constants from './constants/Constants';
import NavApp from './components/NavApp';
import MainApp from './components/MainApp';
import DetailApp from './components/DetailApp';
import OptionApp from './components/OptionApp';

interface AppState {
  idFilter: string;
  todoList: types.Todo[];
  groupList: types.Group[]
  selectedTodo: types.Item;
  optionList: types.Group[];
  detailState: boolean;
  optionState: boolean;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      idFilter: 'ALL',
      todoList: [],
      groupList: [],
      selectedTodo: constants.todoDefault,
      optionList: [],
      detailState: false,
      optionState: false
    };
    this.changeTodoList = this.changeTodoList.bind(this);
    this.changeSelectedFilter = this.changeSelectedFilter.bind(this);
    this.showDetail = this.showDetail.bind(this);
    this.changeOptionPopUpState = this.changeOptionPopUpState.bind(this);
  }

  componentDidMount() {
    this.changeTodoList();
    this.changeGroupList();
  };

  changeTodoList() {
    let dataTodo = constants.todoList.map((item) => Object.assign({}, item));
    helper.pushDataLocalToList('todoList', dataTodo, types.Todo);
    this.setState({ todoList: dataTodo });
  };

  changeGroupList() {
    let dataGroup = constants.groupList.map((item) => Object.assign({}, item));
    helper.pushDataLocalToList('groupList', dataGroup, types.Group);
    this.setState({ groupList: dataGroup });
  }

  changeSelectedFilter = (id: string) => () => {
    this.setState({ idFilter: id, detailState: false });
  };

  showDetail = (todo: types.Item) => () => {
    this.setState({ selectedTodo: todo, detailState: true })
  }

  showOptionPopUp = (todo: types.Item) => () => {
    let groupListFiltered: types.Group[];
    let selectedGroupList: types.Group[];
    groupListFiltered = this.state.groupList.filter((item) => item.id !== parseInt(todo.key!));
    selectedGroupList = todo.key === 'ALL' ? this.state.groupList : groupListFiltered;
    this.setState({ selectedTodo: todo, optionList: selectedGroupList, optionState: true })
  }

  changeOptionPopUpState() {
    this.setState({ optionState: false });
  }

  render() {
    return (
      <div className='App'>
        <div className='wrapper-app'>
          <NavApp
            selectedFilterId={this.state.idFilter}
            groupList={this.state.groupList}
            changeSelectedFilterId={this.changeSelectedFilter}
            changeGroupList={this.changeGroupList}
          />
          <MainApp
            todoList={this.state.todoList}
            idFilter={this.state.idFilter}
            detailState={this.state.detailState}
            changeTodoList={this.changeTodoList}
            showDetail={this.showDetail}
            showOptionPopUp={this.showOptionPopUp}
          />
          <DetailApp
            detailState={this.state.detailState}
            selectedTodo={this.state.selectedTodo}
            todoList={this.state.todoList}
            changeTodoList={this.changeTodoList}
          />
        </div>
        <OptionApp
          optionState={this.state.optionState}
          selectedTodo={this.state.selectedTodo}
          selectedGroupList={this.state.optionList}
          todoList={this.state.todoList}
          idFilter={this.state.idFilter}
          changeTodoList={this.changeTodoList}
          changeOptionPopUpState={this.changeOptionPopUpState}
        />
      </div>
    );
  }
}

export default App;
