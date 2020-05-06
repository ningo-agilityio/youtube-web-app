import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';
import * as constants from '../constants/Constants';
import DueDate from './DueDate';
import SubTodoList from './SubTodoList';
import SubTodoForm from './SubTodoForm';

interface DetailAppProps {
  detailState: boolean;
  selectedTodo: types.Item;
  todoList: types.Todo[];
  changeTodoList: (dataTodo: types.Todo[]) => void;
}

interface DetailAppState {
  subTodoList: types.Item[];
  dueDateValue: string;
}

class DetailApp extends React.Component<DetailAppProps, DetailAppState> {
  constructor(props: DetailAppProps) {
    super(props);
    this.state = { subTodoList: [], dueDateValue: '' };
  }

  componentDidMount() {
    this.changeSubTodoList();
    this.changeDueDate();
  }

  changeSubTodoList = () => {
    const dataSubTodo = constants.todoList.map((item) => ({ ...item }));
    helper.pushDataLocalToList('subTodoList', dataSubTodo!, types.SubTodo);
    const newSubTodoList = helper.filterItemByProp(
      dataSubTodo,
      'key',
      this.props.selectedTodo.id.toString()
    );
    this.setState({ subTodoList: newSubTodoList });
  };

  changeDueDate = () => {
    this.setState({ dueDateValue: this.props.selectedTodo.dueDate! });
  };

  render() {
    const dataSubTodo = constants.todoList.map((item) => ({ ...item }));
    helper.pushDataLocalToList('subTodoList', dataSubTodo!, types.SubTodo);
    const newSubTodoList = helper.filterItemByProp(
      dataSubTodo,
      'key',
      this.props.selectedTodo.id.toString()
    );
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
          <input className="todo__checkbox" type="checkbox" />
          <label className="todo__text">{this.props.selectedTodo.title}</label>
        </li>
        <li className="todo-date">
          <DueDate
            dueDateValue={this.state.dueDateValue}
            changeDueDate={this.changeDueDate}
          />
        </li>
        <li>
          <SubTodoList
            subTodoList={newSubTodoList}
            name="subTodoList"
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
