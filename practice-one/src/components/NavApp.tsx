import React from 'react';
import * as storage from '../storage/storage';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';

const filterList = [
  {
    id: 'ALL',
    label: 'Show list of all todo',
    text: 'All',
  },
  {
    id: 'ACTIVE',
    label: 'Show list of all todo',
    text: 'Active',
  },
  {
    id: 'COMPLETED',
    label: 'Show list of all todo',
    text: 'Completed',
  },
];

interface GroupProps {
  group: types.Group;
  groupList: types.Group[];
  todoList: types.Todo[];
  name: string;
  selectedFilterId: string;
  changeGroupList: Function;
  changeSelectedFilterId(id: string): Function;
}

class GroupItem extends React.Component<GroupProps> {
  constructor(props: GroupProps) {
    super(props);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onClickText = this.onClickText.bind(this);
  }

  onClickDelete = (id: string) => () => {
    let dataTodo = this.props.todoList.map((todo) => Object.assign({}, todo));
    let newTodoList: types.Todo[];
    helper.pushDataToList('todoList', dataTodo, types.Todo);
    newTodoList = helper.filterItemByKey(dataTodo, id)
    storage.setData('todoList', newTodoList);
    types.Group.prototype.deleteGroup(
      this.props.group.id,
      this.props.groupList,
      this.props.name
    );
    this.props.changeGroupList(this.props.groupList);
  }

  onClickText = (id: string) => () => {
    this.props.changeSelectedFilterId(id);
  };

  render() {
    return (
      <li
        className={`group filter ${this.props.selectedFilterId === this.props.group.id.toString() ? 'active' : ''}`}>
        <label className='group__text' onClick={this.onClickText(this.props.group.id.toString())}>
          {this.props.group.title}
        </label>
        <button className='group__delete' onClick={this.onClickDelete(this.props.group.id.toString())}>x</button>
      </li>
    );
  }
}

interface GroupListProps {
  groupList: types.Group[];
  todoList: types.Todo[];
  name: string;
  selectedFilter: string;
  changeGroupList: Function;
  changeSelectedFilterId: Function;
}
class GroupList extends React.Component<GroupListProps> {
  render() {
    return (
      <ul className='app__nav__filter' aria-label='List of groups'>
        {this.props.groupList.map((group) => (
          <GroupItem
            group={group}
            key={group.id.toString()}
            groupList={this.props.groupList}
            todoList={this.props.todoList}
            name={this.props.name}
            selectedFilterId={this.props.selectedFilter}
            changeGroupList={this.props.changeGroupList}
            changeSelectedFilterId={this.props.changeSelectedFilterId(group.id.toString())}
          />
        ))}
      </ul>
    );
  }
}

interface GroupFormProps {
  groupDefault: types.Item;
  groupList: types.Group[];
  changeGroupList: Function;
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
    // this.textInput.current!.focus();
  }

  onSubmit(e: React.FormEvent) {
    e.preventDefault();
    let newValue = this.textInput.current!.value.trim();

    if (newValue.length) {
      let groupObj: types.groupObj;
      groupObj = {
        text: newValue,
        item: this.props.groupDefault,
        groupList: this.props.groupList,
        name: 'groupList',
      };
      types.Group.prototype.addGroup(groupObj);
      this.props.changeGroupList(this.props.groupList);
      this.form.current!.reset();
      // this.textInput.current!.focus();
    }
  }
  render() {
    return (
      <form
        className='app__nav__form'
        onSubmit={this.onSubmit}
        ref={this.form}
        action='#'
      >
        <input
          className='app__nav__input app-input'
          type='text'
          ref={this.textInput}
          placeholder='Create list...'
          aria-label='Enter to do text'
        />
      </form>
    );
  }
}

interface NavAppProps {
  groupDefault: types.Item;
  todoList: types.Todo[];
  groupList: types.Group[];
  selectedFilterId: string;
  changeGroupList: Function;
  changeSelectedFilterId: Function;
}

const NavApp = (props: NavAppProps) => {
  return (
    <div className='app__nav'>
      <ul className='app__nav__filter'>
        {filterList.map((item) => (
          <li
            id={item.id}
            key={item.id}
            className={`filter ${props.selectedFilterId === item.id ? 'active' : ''}`}
            onClick={props.changeSelectedFilterId(item.id)}
            aria-label={item.label}
          >
            {item.text}
          </li>
        ))}
      </ul>
      <GroupList
        groupList={props.groupList}
        todoList={props.todoList}
        name={'groupList'}
        selectedFilter={props.selectedFilterId}
        changeGroupList={props.changeGroupList}
        changeSelectedFilterId={props.changeSelectedFilterId}
      />
      <GroupForm
        groupDefault={props.groupDefault}
        groupList={props.groupList}
        changeGroupList={props.changeGroupList}
      />
    </div>
  );
}

export default NavApp