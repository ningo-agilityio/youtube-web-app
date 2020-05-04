import * as types from '../buildTypes/buildTypes';

export let todoList: types.Todo[] = [];
export let groupList: types.Group[] = [];
export let filteredTodo: types.Todo[] = [];
export let selectedFilter = types.Status.All;
export let groupDefault = {
  id: 0,
  title: '',
  subTask: [],
};
export let todoDefault: types.Item = {
  id: 0,
  key: '',
  title: '',
  status: types.Status.Active,
  subTask: [],
};