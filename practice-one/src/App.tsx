import React from 'react';
import * as types from './buildTypes';
import * as helper from './helper';
import NavApp from './components/NavApp';
import MainApp from './components/MainApp';
import DetailApp from './components/DetailApp';
import OptionApp from './components/OptionApp';
import ConfirmApp from './components/ConfirmApp';

let todoList: types.Todo[] = [];
let groupList: types.Group[] = [];
let todoDefault: types.Item = {
  id: 0,
  key: '',
  title: '',
  status: types.Status.Active,
  subTask: [],
};
let groupDefault = {
  id: 0,
  title: '',
  subTask: [],
};


interface AppProps { }
interface AppState {
  selectedTodoList: types.Todo[]
}

class App extends React.Component<AppProps, AppState>  {
  constructor(props: AppProps) {
    super(props);
    // list dodo []
    // list group []
    this.state = {
      selectedTodoList: dataoTdo,
      todos: [],
      groupFilters: [] 
    }
  }

  componentDidMount() {
    let dataGroup = groupList.map((item) => (Object).assign({}, item));
    let dataTodo = todoList.map((item) => (Object).assign({}, item));
    helper.pushDataToList('groupList', dataGroup, types.Group);
    helper.pushDataToList('todoList', dataTodo, types.Todo);
  // this.setState 
  }

  handleSelectedTodo() {
    this.setState({selectedTodoList: dataTodo });
  }

  render() {
    return (
      <div className='App' >
        <div className='wrapper-app'>
          <NavApp todoList={dataTodo} selectedTodo={this.handleSelectedTodo}/>
          <MainApp selectedTodo={dataTodo}/>
          <DetailApp />
        </div>
        < OptionApp />
        <ConfirmApp />
      </div>
    );
  }
}

export default App;
