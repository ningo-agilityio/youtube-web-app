import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';
import * as constants from '../constants/Constants';
import DueDate from './DueDate';
import SubTodoList from './SubTodoList';
import SubTodoForm from './SubTodoForm';

interface DetailBoxProps {
  detailState: boolean;
  selectedTodo: types.Item;
  todoList: types.Todo[];
  changeTodoList: (dataTodo: types.Todo[]) => void;
}

interface DetailBoxState {
  subTodoList: types.Item[];
}

class DetailBox extends React.Component<DetailBoxProps, DetailBoxState> {
  constructor(props: DetailBoxProps) {
    super(props);
    this.state = { subTodoList: [] };
  }

  componentDidMount() {
    let subTodoList = [] as types.Item[];
    const dataSubTodo = constants.todoList.map((item) => ({ ...item }));

    helper.pushDataLocalToList('subTodoList', dataSubTodo, types.SubTodo);
    subTodoList = helper.filterItemByProp(
      dataSubTodo,
      'key',
      this.props.selectedTodo.id.toString()
    );
    this.changeSubTodoList(subTodoList);
  }

  changeSubTodoList = (newSubTodoList: types.Item[]) => {
    this.setState({ subTodoList: newSubTodoList });
  };

  render() {
    const { detailState, selectedTodo, changeTodoList } = this.props;
    const displayBlock = detailState === true ? constants.displayBlock : '';
    const todoChecked =
      selectedTodo.status === types.Status.Active ? '' : constants.CHECKED;

    return (
      <ul className={`app__detail ${displayBlock}`}>
        <li className={`todo ${todoChecked}`}>
          <input className="todo__checkbox" type="checkbox" />
          <label className="todo__text">{selectedTodo.title}</label>
        </li>
        <li className="todo-date">
          <DueDate
            selectedTodo={selectedTodo}
            dueDateValue={selectedTodo.dueDate!}
          />
        </li>
        <li>
          <SubTodoList
            selectedTodo={selectedTodo}
            name="subTodoList"
            changeSubTodoList={this.changeSubTodoList}
          />
        </li>
        <SubTodoForm
          subTodoList={this.state.subTodoList}
          selectedTodo={selectedTodo}
          changeSubTodoList={this.changeSubTodoList}
          changeTodoList={changeTodoList}
        />
      </ul>
    );
  }
}

export default DetailBox;
