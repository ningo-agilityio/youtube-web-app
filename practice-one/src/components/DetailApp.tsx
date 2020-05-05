import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';
import * as constants from '../constants/Constants';
import DueDate from '../components/DueDate';
import SubTodoList from '../components/SubTodoList';
import SubTodoForm from '../components/SubTodoForm';

interface DetailAppProps {
  detailState: boolean;
  selectedTodo: types.Item;
  todoList: types.Todo[];
  changeTodoList: Function;
}

interface DetailAppState {
  subTodoList: types.SubTodo[];
}

class DetailApp extends React.Component<DetailAppProps, DetailAppState> {
  constructor(props: DetailAppProps) {
    super(props);
    this.state = { subTodoList: [] };
    this.changeSubTodoList = this.changeSubTodoList.bind(this);
  }

  changeSubTodoList() {
    let dataSubTodo = constants.todoList.map((item) => Object.assign({}, item));
    helper.pushDataLocalToList('subTodoList', dataSubTodo, types.SubTodo);
    this.setState({ subTodoList: dataSubTodo });
  }

  render() {
    return (
      <ul
        className={`app__detail ${
          this.props.detailState === true ? 'd-block' : ''
        }`}
      >
        <li
          className={`todo ${
            this.props.selectedTodo.status === types.Status.Active
              ? ''
              : 'todo-checked'
          }`}
        >
          <input className='todo__checkbox' type='checkbox' />
          <label className='todo__text'>{this.props.selectedTodo.title}</label>
        </li>
        <li className='todo-date'>
          <DueDate
            selectedTodo={this.props.selectedTodo}
            todoList={this.props.todoList}
          />
        </li>
        <li>
          <SubTodoList
            selectedTodo={this.props.selectedTodo}
            todoList={this.props.todoList}
            subTodoList={this.state.subTodoList}
            name={'subTodoList'}
            changeSubTodoList={this.changeSubTodoList}
          />
        </li>
        <SubTodoForm
          subTodoList={this.state.subTodoList}
          selectedTodo={this.props.selectedTodo}
          changeSubTodoList={this.changeSubTodoList}
          changeTodoList={this.props.changeTodoList}
        />
      </ul>
    );
  }
}

export default DetailApp;
