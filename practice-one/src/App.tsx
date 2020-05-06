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
    this.changeTodoList = this.changeTodoList.bind(this);
    this.changeGroupList = this.changeGroupList.bind(this);
    this.changeSelectedFilter = this.changeSelectedFilter.bind(this);
    this.showDetail = this.showDetail.bind(this);
    this.changeOptionPopUpState = this.changeOptionPopUpState.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line prefer-object-spread
    const dataTodo = constants.todoList.map((item) => Object.assign({}, item));
    const dataGroup = constants.groupList.map((item) =>
      // eslint-disable-next-line prefer-object-spread
      Object.assign({}, item)
    );
    helper.pushDataLocalToList('todoList', dataTodo, types.Todo);
    helper.pushDataLocalToList('groupList', dataGroup!, types.Group);
    this.changeTodoList(dataTodo);
    this.changeGroupList(dataGroup);
  }

  // eslint-disable-next-line react/sort-comp
  changeTodoList = (dataTodo: types.Todo[]) => {
    this.setState({ todoList: dataTodo });
  };

  // eslint-disable-next-line react/sort-comp
  changeGroupList = (dataGroup: types.Group[]) => {
    this.setState({ groupList: dataGroup });
  };

  changeSelectedFilter = (id: string) => () => {
    this.setState({ selectedFilterId: id, detailState: false });
  };

  showDetail = (todo: types.Item) => () => {
    this.setState({ selectedTodo: todo, detailState: true });
  };

  showOptionPopUp = (todo: types.Item) => () => {
    const groupListFiltered = this.state.groupList.filter(
      (item) => item.id !== parseInt(todo.key!, 10)
    );
    const selectedGroupList =
      // eslint-disable-next-line react/no-access-state-in-setstate
      todo.key === 'ALL' ? this.state.groupList : groupListFiltered;
    this.setState({
      selectedTodo: todo,
      optionList: selectedGroupList,
      optionState: true,
    });
  };

  changeOptionPopUpState() {
    this.setState({ optionState: false });
  }

  render() {
    return (
      <div className="todo-app">
        <div className="wrapper-app">
          <NavFilter
            selectedFilterId={this.state.selectedFilterId}
            groupList={this.state.groupList}
            changeGroupList={this.changeGroupList}
            changeTodoList={this.changeTodoList}
            changeSelectedFilterId={this.changeSelectedFilter}
          />
          <MainContent
            todoList={this.state.todoList}
            selectedFilterId={this.state.selectedFilterId}
            detailState={this.state.detailState}
            changeTodoList={this.changeTodoList}
            showDetail={this.showDetail}
            showOptionPopUp={this.showOptionPopUp}
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
