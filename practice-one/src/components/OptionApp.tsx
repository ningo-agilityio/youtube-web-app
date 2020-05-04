import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';

interface OptionListProps {
  selectedTodo: types.Item;
  selectedGroupList: types.Group[];
  todoList: types.Todo[];
  idFilter: string;
  changeTodoList: Function;
  changeOptionPopUpState: Function
}
class OptionList extends React.Component<OptionListProps> {
  constructor(props: OptionListProps) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick = (groupMoveIn: types.Group) => () => {
    let dataTodo = this.props.todoList.map((todo) => Object.assign({}, todo));
    let todo: types.Item;
    let todoList: types.Todo[];
    helper.pushDataToList('todoList', dataTodo, types.Todo);
    todo = helper.findItemById(dataTodo, this.props.selectedTodo.id)!;
    this.props.selectedTodo.key = groupMoveIn.id.toString();
    types.Todo.prototype.updateTodo(
      todo,
      dataTodo,
      todo.title,
      todo.subTask!,
      todo.status!,
      'todoList',
      todo.dueDate,
      this.props.selectedTodo.key
    );
    todoList = helper.filterItemByProp(dataTodo, 'key', this.props.idFilter)
    this.props.changeTodoList(todoList);
    this.props.changeOptionPopUpState(false)
  }

  render() {
    return (
      <ul className='app__nav__filter' aria-label='List of groups'>
        {this.props.selectedGroupList.map((group) => (
          <li className='option' id={group.id.toString()} key={group.id.toString()}>
            <label className='option__text' onClick={this.onClick(group)}>{group.title}</label>
          </li>
        ))}
      </ul>
    );
  }
}

interface OptionProps {
  optionState: boolean;
  selectedTodo: types.Item;
  selectedGroupList: types.Group[];
  todoList: types.Todo[];
  idFilter: string;
  changeTodoList: Function;
  changeOptionPopUpState: Function
}

const OptionApp = (props: OptionProps) => {
  return (
    <div className={`wrapper-option ${props.optionState === true ? 'd-flex' : ''}`}>
      <div className='option-box'>
        <p>Move to-do to...</p>
        <OptionList
          selectedTodo={props.selectedTodo}
          selectedGroupList={props.selectedGroupList}
          todoList={props.todoList}
          idFilter={props.idFilter}
          changeTodoList={props.changeTodoList}
          changeOptionPopUpState={props.changeOptionPopUpState}
        />
      </div>
    </div>
  );
}

export default OptionApp;