import React from 'react';
import * as types from '../buildTypes';
import * as helper from '../helper';

let todoList: types.Todo[] = [];
let todoDefault: types.Item = {
  id: 0,
  key: '',
  title: '',
  status: types.Status.Active,
  subTask: [],
};

let data = todoList.map((item) => (Object).assign({}, item));
helper.pushDataToList('todoList', data, types.Todo);

interface TodoProps {
  todo: types.Todo,
  todoList: types.Todo[],
  name: string,
  dataChange: Function
}

class TodoItem extends React.Component<TodoProps> {
  constructor(props: TodoProps) {
    super(props);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onClickCheckBox = this.onClickCheckBox.bind(this);
  }
  onClickDelete(e: React.MouseEvent) {
    types.Todo.prototype.deleteTodo(
      this.props.todo.id,
      this.props.todoList,
      this.props.name);
    this.props.dataChange((e.target as HTMLLIElement).value);
  }
  onClickCheckBox(e: React.MouseEvent) {
    let idFilter = document.querySelector('.active')!.id;
    helper.checkStatus(this.props.todo);
    types.Todo.prototype.updateTodo(
      this.props.todo,
      this.props.todoList,
      this.props.todo.title,
      this.props.todo.subTask!,
      this.props.todo.status,
      'todoList',
      this.props.todo.dueDate!,
      idFilter);
    this.props.dataChange((e.target as HTMLLIElement).value);
  }
  render() {
    let className = this.props.todo.status === types.Status.Active ? '' : 'todo-checked';
    return (
      <li className={'todo ' + className} id={this.props.todo.id.toString()}>
        <input className='todo__checkbox' type='checkbox' onClick={this.onClickCheckBox} />
        <label className='todo__text'>{this.props.todo.title}</label>
        <button className='todo__delete' onClick={this.onClickDelete}>x</button>
      </li>
    );
  }
}

interface TodoListProps {
  todoList: types.Todo[],
  name: string
  dataChange: Function
}
class TodoList extends React.Component<TodoListProps> {
  render() {
    let list = this.props.todoList.map((todo) => {
      return (
        <TodoItem todo={todo} key={todo.id.toString()} todoList={this.props.todoList} name={this.props.name} dataChange={this.props.dataChange} />
      );
    });
    return (
      <ul className="app__content__todo" aria-label="List of todo">{list}</ul>
    );
  }
}

interface TodoFormProps {
  todoList: types.Todo[],
  dataChange: Function
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
      let idFilter = document.querySelector('.active')!.id;
      let id = Date.now();
      let todoObj: types.todoObj;
      todoObj = {
        newId: id,
        text: newValue,
        item: todoDefault,
        key: idFilter,
        todoList: this.props.todoList,
        name: 'todoList',
      };
      types.Todo.prototype.addTodo(todoObj);
      this.props.dataChange((e.target as HTMLFormElement).value);
      this.form.current!.reset();
    }
  }
  render() {
    return (
      <form className="app__content__form" onSubmit={this.onSubmit} ref={this.form} action="#">
        <input className="main-input app-input" type="text" ref={this.textInput} placeholder="What do you need to do?"
          aria-label="Enter to do text" />
      </form>
    );
  }
}

interface MainAppProps { selectedTodo: types.Todo[] }

interface MainAppState {
  todoList: types.Todo[],
  selectedTodo: types.Todo[]
}

export default class MainApp extends React.Component<MainAppProps, MainAppState> {
  constructor(props: MainAppProps) {
    super(props);
    this.state = {
      todoList: data,
      selectedTodo: this.props.selectedTodo
    };

    // This binding is necessary to make `this` work in the callback
    this.handleChangeData = this.handleChangeData.bind(this);
  }

  handleChangeData() {
    this.setState({ todoList: data });
  }

  render() {
    // let selectedTodo = 
    return (
      <div className="app__content">
        <TodoForm todoList={data} dataChange={this.handleChangeData} />
        <TodoList todoList={this.props.selectedTodo} name={'todoList'} dataChange={this.handleChangeData} />
      </div>
    )
  }
}