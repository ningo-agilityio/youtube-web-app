import * as types from '../buildTypes/buildTypes';

export const todoList: types.Todo[] = [];
export const groupList: types.Group[] = [];
export const filteredTodo: types.Todo[] = [];
export const selectedFilter = types.Status.All;
export const todoListName = 'todoList';
export const groupListName = 'groupList';
export const CHECKED = 'todo-checked';
export const displayBlock = 'd-block';
export const displayFlex = 'd-flex';
export const ACTIVE = 'active';

export const groupDefault = {
  id: 0,
  title: '',
  subTask: [],
};
export const todoDefault: types.Item = {
  id: 0,
  key: '',
  title: '',
  status: types.Status.Active,
  subTask: [],
};