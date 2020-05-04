import React from 'react';
import * as types from './buildTypes/buildTypes';
import * as helper from './helper/helper';
import * as constants from './constants/Constants';
import NavApp from './components/NavApp';
import MainApp from './components/MainApp';
import DetailApp from './components/DetailApp';
import OptionApp from './components/OptionApp';

interface AppState {
  selectedFilter: string;
  todoList: types.Todo[];
  groupList: types.Group[];
  subTodoList: types.SubTodo[];
  selectedTodo: types.Item;
  selectedGroupList: types.Group[];
  dueDate: string,
  detailState: boolean;
  optionState: boolean;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      selectedFilter: 'ALL',
      todoList: [],
      groupList: [],
      subTodoList: [],
      selectedTodo: constants.todoDefault,
      selectedGroupList: [],
      dueDate: '',
      detailState: false,
      optionState: false
    };
    this.changeGroupList = this.changeGroupList.bind(this);
    this.changeTodoList = this.changeTodoList.bind(this);
    this.onClickText = this.onClickText.bind(this);
    this.showDetail = this.showDetail.bind(this);
    this.changeSubTodoList = this.changeSubTodoList.bind(this);
    this.changeDueDate = this.changeDueDate.bind(this);
    this.changeOptionPopUpState = this.changeOptionPopUpState.bind(this);
  }

  componentDidMount() {
    this.changeGroupList();
    this.changeTodoList();
  };

  changeGroupList() {
    let dataGroup = constants.groupList.map((item) => Object.assign({}, item));
    helper.pushDataToList('groupList', dataGroup, types.Group);
    this.setState({ groupList: dataGroup });
  }

  changeTodoList() {
    let dataTodo = constants.todoList.map((item) => Object.assign({}, item));
    helper.pushDataToList('todoList', dataTodo, types.Todo);
    this.setState({ todoList: dataTodo });
  };

  onClickText = (id: string) => () => {
    this.setState({ selectedFilter: id });
    this.setState({ detailState: false });
  };

  showDetail = (todo: types.Item) => () => {
    this.setState({ selectedTodo: todo })
    this.setState({ detailState: true });
  }

  showOptionPopUp = (todo: types.Item) => () => {
    let newGroupList: types.Group[];
    let optionList: types.Group[];
    let groupData = constants.groupList.map((item) => (Object).assign({}, item));
    helper.pushDataToList('groupList', groupData, types.Group);
    newGroupList = groupData.filter((item) => item.id !== parseInt(todo.key!));
    optionList = todo.key === 'ALL' ? groupData : newGroupList;
    this.setState({ selectedTodo: todo })
    this.setState({ selectedGroupList: optionList });
    this.setState({ optionState: true });
  }

  changeOptionPopUpState() {
    this.setState({ optionState: false });
  }

  changeSubTodoList() {
    let dataSubTodo = constants.todoList.map((item) => Object.assign({}, item));
    helper.pushDataToList('subTodoList', dataSubTodo, types.SubTodo);
    this.setState({ subTodoList: dataSubTodo });
  };

  changeDueDate() {
    this.setState({ dueDate: this.state.selectedTodo.dueDate! })
  }

  render() {
    return (
      <div className='App'>
        <div className='wrapper-app'>
          <NavApp
            groupDefault={constants.groupDefault}
            todoList={constants.todoList}
            groupList={this.state.groupList}
            selectedFilterId={this.state.selectedFilter}
            changeGroupList={this.changeGroupList}
            changeSelectedFilterId={this.onClickText}
          />
          <MainApp
            todoDefault={constants.todoDefault}
            todoList={constants.todoList}
            groupList={constants.groupList}
            idFilter={this.state.selectedFilter}
            detailState={this.state.detailState}
            changeTodoList={this.changeTodoList}
            showDetail={this.showDetail}
            showOptionPopUp={this.showOptionPopUp}
          />
          <DetailApp
            detailState={this.state.detailState}
            todoDefault={constants.todoDefault}
            selectedTodo={this.state.selectedTodo}
            subTodoList={this.state.subTodoList}
            todoList={constants.todoList}
            changeTodoList={this.changeTodoList}
            changeSubTodoList={this.changeSubTodoList}
            changeDueDate={this.changeDueDate}
          />
        </div>
        <OptionApp
          optionState={this.state.optionState}
          selectedTodo={this.state.selectedTodo}
          selectedGroupList={this.state.selectedGroupList}
          todoList={constants.todoList}
          idFilter={this.state.selectedFilter}
          changeTodoList={this.changeTodoList}
          changeOptionPopUpState={this.changeOptionPopUpState}
        />
      </div>
    );
  }
}

export default App;
