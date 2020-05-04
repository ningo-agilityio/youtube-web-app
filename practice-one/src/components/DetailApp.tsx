import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';

interface DueDateProps {
  selectedTodo: types.Item
  todoList: types.Todo[]
  changeDueDate: Function
}

class DueDate extends React.Component<DueDateProps> {
  textInput = React.createRef<HTMLInputElement>();

  constructor(props: DueDateProps) {
    super(props);
    this.onInput = this.onInput.bind(this);
  }

  onInput() {
    let dataTodo = this.props.todoList.map((todo) => Object.assign({}, todo));
    let todo: types.Item;
    this.props.selectedTodo.dueDate = helper.convertDate(this.textInput.current!.value);
    helper.pushDataToList('todoList', dataTodo, types.Todo);
    todo = helper.findItemById(dataTodo, this.props.selectedTodo.id)!;
    types.Todo.prototype.updateTodo(
      todo,
      dataTodo,
      todo.title,
      todo.subTask!,
      todo.status!,
      'todoList',
      this.props.selectedTodo.dueDate,
      todo.key
    );
    this.props.changeDueDate(this.props.selectedTodo.dueDate);
  }

  render() {
    return (
      <>
        <input className='date-picker' type='date' ref={this.textInput} onInput={this.onInput} />
        <label>Due date: <span id='getDate'>{this.props.selectedTodo.dueDate}</span></label>
      </>
    );
  }
}

interface SubTodoProps {
  subTodo: types.Item;
  subTodoList: types.SubTodo[];
  name: string;
  changeSubTodoList: Function;
}

class SubTodoItem extends React.Component<SubTodoProps> {
  text = React.createRef<HTMLLabelElement>();

  constructor(props: SubTodoProps) {
    super(props);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onClickCheckBox = this.onClickCheckBox.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onClickDelete() {
    types.SubTodo.prototype.deleteSubTodo(
      this.props.subTodo.id,
      this.props.subTodoList,
      this.props.name
    );
    this.props.changeSubTodoList(this.props.subTodoList);
  }

  onClickCheckBox() {
    helper.checkStatus(this.props.subTodo);
    types.SubTodo.prototype.updateSubTodo(
      this.props.subTodo,
      this.props.subTodoList!,
      this.props.subTodo.title,
      this.props.subTodo.status!,
      this.props.name,
    );
    this.props.changeSubTodoList(this.props.subTodoList);
  }

  onKeyPress(e: React.KeyboardEvent) {
    if (e.keyCode === 13) {
      let newText = this.text.current!.textContent!.trim();
      types.SubTodo.prototype.updateSubTodo(
        this.props.subTodo,
        this.props.subTodoList!,
        newText!,
        this.props.subTodo.status!,
        this.props.name,
      );
      this.props.changeSubTodoList(this.props.subTodoList);
      this.text.current!.blur();
    }
  }

  render() {
    return (
      <li className={`todo ${this.props.subTodo.status === types.Status.Active ? '' : 'todo-checked'}`} id={this.props.subTodo.id.toString()}>
        <input className='todo__checkbox' type='checkbox' onClick={this.onClickCheckBox} />
        <label
          className='todo__text'
          contentEditable='true'
          suppressContentEditableWarning={true}
          ref={this.text}
          onKeyDown={this.onKeyPress}
        >
          {this.props.subTodo.title}
        </label>
        <button className='todo__delete' onClick={this.onClickDelete}>x</button>
      </li>
    );
  }
}

interface SubTodoListProps {
  selectedTodo: types.Item;
  todoList: types.Todo[];
  name: string;
  changeSubTodoList: Function;
}

class SubTodoList extends React.Component<SubTodoListProps> {
  render() {
    let dataSubTodo = this.props.todoList.map((todo) => Object.assign({}, todo));
    let newSubTodoList: types.SubTodo[];
    helper.pushDataToList('subTodoList', dataSubTodo, types.SubTodo);
    newSubTodoList = helper.filterItemByProp(dataSubTodo, 'key', this.props.selectedTodo.id.toString());
    return (
      <ul className='sub-todo' aria-label='List of sub todo'>
        {newSubTodoList.map((subTodo) => (
          <SubTodoItem
            subTodo={subTodo}
            key={subTodo.id.toString()}
            subTodoList={newSubTodoList}
            name={this.props.name}
            changeSubTodoList={this.props.changeSubTodoList}
          />
        ))}
      </ul>
    );
  }
}

interface SubTodoFormProps {
  todoDefault: types.Item;
  subTodoList: types.SubTodo[];
  selectedTodo: types.Item;
  changeSubTodoList: Function;
  changeTodoList: Function;
}

class SubTodoForm extends React.Component<SubTodoFormProps> {
  textInput = React.createRef<HTMLInputElement>();
  form = React.createRef<HTMLFormElement>();

  constructor(props: SubTodoFormProps) {
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
      let subTodoObj: types.subTodoObj;
      let dataSubTodo = this.props.subTodoList.map((subTodo) => Object.assign({}, subTodo));
      helper.pushDataToList('subTodoList', dataSubTodo, types.SubTodo);
      subTodoObj = {
        text: newValue,
        item: this.props.todoDefault,
        key: this.props.selectedTodo.id.toString(),
        subTodoList: dataSubTodo,
        todoList: this.props.selectedTodo.subTask!,
        name: 'subTodoList',
      };
      types.SubTodo.prototype.addSubTodo(subTodoObj);
      this.props.changeSubTodoList(this.props.selectedTodo.subTask!);
      this.form.current!.reset();
    }
  }

  render() {
    return (
      <form className='sub-form' onSubmit={this.onSubmit} ref={this.form} action='#'>
        <input className='detail-input app-input' type='text' ref={this.textInput} placeholder='Add a subtask' aria-label='Enter to do text' />
      </form>
    );
  }
}

interface DetailProps {
  detailState: boolean;
  todoDefault: types.Item;
  selectedTodo: types.Item;
  subTodoList: types.SubTodo[]
  todoList: types.Todo[];
  changeSubTodoList: Function;
  changeTodoList: Function;
  changeDueDate: Function;
}

const DetailApp = (props: DetailProps) => {
  return (
    <ul className={`app__detail ${props.detailState === true ? 'd-block' : ''}`}>
      <li id='detailTitle' className={`todo ${props.selectedTodo.status === types.Status.Active ? '' : 'todo-checked'}`}>
        <input className='todo__checkbox' type='checkbox' />
        <label className='todo__text' >{props.selectedTodo.title}</label>
      </li>
      <li className='todo-date'>
        <DueDate
          selectedTodo={props.selectedTodo}
          todoList={props.todoList}
          changeDueDate={props.changeDueDate}
        />
      </li>
      <li>
        <SubTodoList
          selectedTodo={props.selectedTodo}
          todoList={props.todoList}
          name={'subTodoList'}
          changeSubTodoList={props.changeSubTodoList}
        />
      </li>
      <SubTodoForm
        todoDefault={props.todoDefault}
        subTodoList={props.subTodoList}
        selectedTodo={props.selectedTodo}
        changeSubTodoList={props.changeSubTodoList}
        changeTodoList={props.changeTodoList}
      />
    </ul>
  )
}

export default DetailApp