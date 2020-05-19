import * as types from '../buildTypes/buildTypes';

export const todoList : types.Todo[] = [];
export const groupList: types.Group[] = [];
export const filteredTodo = [];
export const selectedFilter = 'ALL';
export const todoListName = 'todoList';
export const groupListName = 'groupList';
export const CHECKED = 'todo-checked';
export const ACTIVE = 'active';
export const displayBlock = 'd-block';
export const displayFlex = 'd-flex';
export const displayMinSize = 'd-detail';

export const groupDefault = {
  id: 0,
  title: '',
  subTask: [],
};
export const todoDefault = {
  id: 0,
  key: '',
  title: '',
  status: false,
  subTask: [],
};
