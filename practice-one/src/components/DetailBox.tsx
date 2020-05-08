import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';
import * as constants from '../constants/Constants';
import { Input } from './common/Input';
import { Label } from './common/Label';
import DueDate from './DueDate';
import SubTodoList from './SubTodoList';
import SubTodoForm from './SubTodoForm';

interface DetailBoxProps {
  detailState: boolean;
  selectedTodo: types.Item;
  todoList: types.Todo[];
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
    const dataSubTodo = constants.todoList.map((item) => ({
      ...(item as object),
    })) as types.Item[];

    helper.pushDataLocalToList(
      constants.subTodoListName,
      dataSubTodo,
      types.SubTodo
    );
    subTodoList = helper.filterItemByProp(
      dataSubTodo,
      'key',
      this.props.selectedTodo.id.toString()
    );
    this.handleUpdateSubTodo(subTodoList);
  }

  handleUpdateSubTodo = (newSubTodoList: types.Item[]) => {
    this.setState({ subTodoList: newSubTodoList });
  };

  render() {
    const { detailState, selectedTodo } = this.props;
    const displayBlock = detailState === true ? constants.displayBlock : '';
    const todoChecked = selectedTodo.status === false ? '' : constants.CHECKED;

    return (
      <ul className={`app__detail ${displayBlock}`}>
        <li className={`todo ${todoChecked}`}>
          <Input name="todo__checkbox" type="checkbox" />
          <Label name="todo__text" value={selectedTodo.title} />
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
            handleUpdateSubTodo={this.handleUpdateSubTodo}
          />
        </li>
        <SubTodoForm
          subTodoList={this.state.subTodoList}
          selectedTodo={selectedTodo}
          handleUpdateSubTodo={this.handleUpdateSubTodo}
        />
      </ul>
    );
  }
}

export default DetailBox;
