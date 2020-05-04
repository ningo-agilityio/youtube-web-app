import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';

interface TodoProps {
  todo: types.Todo;
  todoList: types.Todo[];
  groupList: types.Group[];
  name: string;
  idFilter: string;
  detailState: boolean;
  changeTodoList: Function;
  showDetail(todo: types.Item): Function;
  showOptionPopUp(todo: types.Item): Function
}

class TodoItem extends React.Component<TodoProps> {
  constructor(props: TodoProps) {
    super(props);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onClickCheckBox = this.onClickCheckBox.bind(this);
    this.onDoubleClick = this.onDoubleClick.bind(this);
    this.onRightClick = this.onRightClick.bind(this);
  }

  onClickDelete(e: React.MouseEvent) {
    types.Todo.prototype.deleteTodo(
      this.props.todo.id,
      this.props.todoList,
      this.props.name
    );
    this.props.changeTodoList((e.target as HTMLLIElement).value);
  }

  onClickCheckBox(e: React.MouseEvent) {
    helper.checkStatus(this.props.todo);
    types.Todo.prototype.updateTodo(
      this.props.todo,
      this.props.todoList,
      this.props.todo.title,
      this.props.todo.subTask!,
      this.props.todo.status,
      'todoList',
      this.props.todo.dueDate!,
      this.props.todo.key
    );
    this.props.changeTodoList((e.target as HTMLLIElement).value);
    if (this.props.detailState) {
      this.props.showDetail(this.props.todo);
    }
  }

  onDoubleClick = (todo: types.Todo) => () => {
    this.props.showDetail(todo);
  }

  onRightClick = (todo: types.Todo) => (e: React.MouseEvent) => {
    e.preventDefault();
    this.props.showOptionPopUp(todo);
  }

  render() {
    return (
      <li className={`todo ${this.props.todo.status === types.Status.Active ? '' : 'todo-checked'}`} id={this.props.todo.id.toString()}>
        <input className='todo__checkbox' type='checkbox' onClick={this.onClickCheckBox} />
        <label className='todo__text' onDoubleClick={this.onDoubleClick(this.props.todo)} onContextMenu={this.onRightClick(this.props.todo)}>{this.props.todo.title}</label>
        <button className='todo__delete' onClick={this.onClickDelete}>x</button>
      </li>
    );
  }
}

interface TodoListProps {
  todoList: types.Todo[];
  groupList: types.Group[];
  name: string;
  idFilter: string;
  detailState: boolean;
  changeTodoList: Function;
  showDetail: Function;
  showOptionPopUp: Function
}
class TodoList extends React.Component<TodoListProps> {
  render() {
    let dataTodo = this.props.todoList.map((todo) => Object.assign({}, todo));
    let newTodoList: types.Todo[];
    helper.pushDataToList('todoList', dataTodo, types.Todo);
    newTodoList = this.props.idFilter === 'ALL' ? dataTodo
      : this.props.idFilter === 'ACTIVE' ? helper.filterItemByProp(dataTodo, 'status', 'ACTIVE')
        : this.props.idFilter === 'COMPLETED' ? helper.filterItemByProp(dataTodo, 'status', 'COMPLETED')
          : helper.filterItemByProp(dataTodo, 'key', this.props.idFilter);
    return (
      <ul className='app__content__todo' aria-label='List of todo'>
        {newTodoList.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id.toString()}
            todoList={dataTodo}
            groupList={this.props.groupList}
            name={this.props.name}
            idFilter={this.props.idFilter}
            detailState={this.props.detailState}
            changeTodoList={this.props.changeTodoList}
            showDetail={this.props.showDetail(todo)}
            showOptionPopUp={this.props.showOptionPopUp(todo)}
          />
        ))}
      </ul>
    );
  }
}

interface TodoFormProps {
  todoDefault: types.Item;
  todoList: types.Todo[];
  idFilter: string;
  changeTodoList: Function;
}

class TodoForm extends React.Component<TodoFormProps> {
  textInput = React.createRef<HTMLInputElement>();
  form = React.createRef<HTMLFormElement>();

  constructor(props: TodoFormProps) {
    super(props);
    this.form = React.createRef();
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.textInput.current!.focus();
  }

  onSubmit(e: React.FormEvent) {
    e.preventDefault();
    let newValue = this.textInput.current!.value.trim();

    if (newValue.length) {
      let id = Date.now();
      let todoObj: types.todoObj;
      let dataTodo = this.props.todoList.map((todo) => Object.assign({}, todo));
      helper.pushDataToList('todoList', dataTodo, types.Todo);
      todoObj = {
        newId: id,
        text: newValue,
        item: this.props.todoDefault,
        key: this.props.idFilter,
        todoList: dataTodo,
        name: 'todoList',
      };
      types.Todo.prototype.addTodo(todoObj);
      this.props.changeTodoList((e.target as HTMLFormElement).value);
      this.form.current!.reset();
    }
  }

  render() {
    return (
      <form className='app__content__form' onSubmit={this.onSubmit} ref={this.form} action='#'>
        <input className='main-input app-input' type='text' ref={this.textInput} placeholder='What do you need to do?' aria-label='Enter to do text' />
      </form>
    );
  }
}

interface MainAppProps {
  todoDefault: types.Item;
  todoList: types.Todo[];
  groupList: types.Group[];
  idFilter: string;
  detailState: boolean;
  changeTodoList: Function;
  showDetail: Function;
  showOptionPopUp: Function;
}

const MainApp = (props: MainAppProps) => {
  return (
    <div className='app__content'>
      <TodoForm
        todoDefault={props.todoDefault}
        todoList={props.todoList}
        idFilter={props.idFilter}
        changeTodoList={props.changeTodoList}
      />
      <TodoList
        todoList={props.todoList}
        groupList={props.groupList}
        name={'todoList'}
        idFilter={props.idFilter}
        detailState={props.detailState}
        changeTodoList={props.changeTodoList}
        showDetail={props.showDetail}
        showOptionPopUp={props.showOptionPopUp}
      />
    </div>
  );
}

export default MainApp