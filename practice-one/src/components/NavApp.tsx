import React from 'react';
import * as types from '../buildTypes';
import * as helper from '../helper';
import { selectedFilter } from '../constants/Constants';

let groupList: types.Group[] = [];
let groupDefault = {
  id: 0,
  title: '',
  subTask: [],
};

let data = groupList.map((item) => (Object).assign({}, item));
helper.pushDataToList('groupList', data, types.Group);

interface GroupProps {
  group: types.Group,
  groupList: types.Group[],
  todoList: types.Todo[],
  name: string,
  dataChange: Function,
  selectedTodoChange: Function
}


class GroupItem extends React.Component<GroupProps> {
  constructor(props: GroupProps) {
    super(props);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onClickText = this.onClickText.bind(this);
  }
  onClickDelete(e: React.MouseEvent) {
    types.Group.prototype.deleteGroup(this.props.group.id, this.props.groupList, this.props.name);
    this.props.dataChange((e.target as HTMLLIElement).value);
  }

  onClickText(e: React.MouseEvent) {}

  addClassName = (id: number) => {
    let filterSelected = document.querySelectorAll('.filter');
    filterSelected.forEach((filter) => {
      helper.removeClassName(filter, 'active');
    });
    let groupElement = document.getElementById(id.toString());
    helper.addClassName(groupElement!, 'active');
    let newList = helper.filterItemByKey(this.props.todoList, id.toString())!;
    // this.props.selectedTodo(selectedItem);
    // if(selectedItem) {

    // }
    // let id = (e.target as HTMLLIElement).parentElement!.id;
  }

  abc = () => {
    this.setState({
      groupId: this.props.group.id
    })
    // this.addClassName(this.props.group.id) 
  }
  
  render() {
    return (
      <li className={`group filter `} >
        <label className='group__text' onClick={this.abc}>{this.props.group.title}</label>
        <button className='group__delete' onClick={this.onClickDelete}>x</button>
      </li>
    );
  }
}

interface GroupListProps {
  groupList: types.Group[],
  todoList: types.Todo[],
  name: string,
  dataChange: Function,
  selectedTodo: Function
}
class GroupList extends React.Component<GroupListProps> {
  render() {
    let list = this.props.groupList.map((group) => {
      return (
        <GroupItem
          group={group}
          key={group.id.toString()}
          groupList={this.props.groupList}
          todoList={this.props.todoList}
          name={this.props.name}
          dataChange={this.props.dataChange}
          selectedTodo={this.props.selectedTodo} />
      );
    });
    return (
      <ul id='navGroup' className='app__nav__filter' aria-label='List of groups'> {list} </ul>
    );
  }
}

interface GroupFormProps {
  groupList: types.Group[],
  dataChange: Function
}

class GroupForm extends React.Component<GroupFormProps> {
  textInput = React.createRef<HTMLInputElement>();
  form = React.createRef<HTMLFormElement>();
  constructor(props: GroupFormProps) {
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
      let groupObj: types.groupObj;
      groupObj = {
        text: newValue,
        item: groupDefault,
        groupList: this.props.groupList,
        name: 'groupList',
      };
      types.Group.prototype.addGroup(groupObj);
      this.props.dataChange((e.target as HTMLFormElement).value);
      this.form.current!.reset();
    }
  }
  render() {
    return (
      <form className='app__nav__form' onSubmit={this.onSubmit} ref={this.form} action='#'>
        <input className='app__nav__input app-input' type='text' ref={this.textInput} placeholder='Create list...' aria-label='Enter to do text' />
      </form>
    );
  }
}

interface NavAppProps {
  todoList: types.Todo[],
  selectedTodo: Function
}

interface NavAppState {
  groupList: types.Group[],
  selectedFilter: string
}

const filters = [{
  id: "ALL",
  label: "Show list of all todo",
  text: "All",
}]
export default class NavApp extends React.Component<NavAppProps, NavAppState> {

  constructor(props: NavAppProps) {
    super(props);
    this.state = {
      groupList: data,
      selectedFilter: 'ALL'
    };

    // This binding is necessary to make `this` work in the callback
    this.handleChangeData = this.handleChangeData.bind(this);
    this.handleAddClass = this.handleAddClass.bind(this);
  }

  handleChangeData() {
    this.setState({ groupList: data });
  }

  handleAddClass(e: React.MouseEvent) {
    // let filterSelected = document.querySelectorAll('.filter');
    // filterSelected.forEach((filter) => {
    //   helper.removeClassName(filter, 'active');
    // });
    // helper.addClassName((e.target as HTMLLIElement), 'active');

    let id = (e.target as HTMLLIElement).id;
    this.setState({ selectedFilter: id });
  }


  render() {

    return (
      <div className='app__nav'>
        <ul className='app__nav__filter'>
          {
            filters.map((item) => <li id={item.id} className={`filter ${this.state.selectedFilter == item.id ? 'active' : ''}`} onClick={this.handleAddClass} aria-label='Show list of all todo'>All</li>)
          }
          {/* <li id='ALL' className={'filter active'} onClick={this.handleAddClass} aria-label='Show list of all todo'>All</li>
          <li id='ACTIVE' className={'filter '} onClick={this.handleAddClass} aria-label='Show list of active todo'>Active</li>
          <li id='COMPLETED' className={'filter '} onClick={this.handleAddClass} aria-label='Show list of completed todo'>Completed</li> */}
        </ul>
        <GroupList groupList={data} todoList={this.props.todoList} name={'groupList'} dataChange={this.handleChangeData} selectedTodo={this.props.selectedTodo} />
        <GroupForm groupList={data} dataChange={this.handleChangeData} />
      </div>
    )
  }
}
