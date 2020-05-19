import 'reflect-metadata';
import * as storage from '../storage/storage';
import * as helper from '../helper/helper';

export type ItemList = SubTodo[] | Todo[] | Group[];
export type ConstructList = typeof SubTodo | typeof Todo | typeof Group;
export type Filter = {
  id: string;
  text: string;
};
export type groupObj = {
  text: string;
  item: Item;
  groupList: Group[];
  name: string;
};

export type groupUpdateObj = {
  filterItem: Item;
  newTitle: string;
  groupList: Group[];
  name: string;
};

export type deleteGroupObj = {
  id: number;
  groupList: Group[];
  name: string;
};

export type todoObj = {
  newId: number;
  text: string;
  item: Item;
  key: string;
  todoList: Item[];
  name: string;
};

export type updateTodoObj = {
  todo: Item;
  todoList: Item[];
  newContent: string;
  newSubTask: Item[];
  check: boolean;
  name: string;
  newDate?: string;
  newKey?: string;
};

export type deleteTodoObj = {
  id: number;
  todoList: Item[];
  name: string;
};

export type subTodoObj = {
  text: string;
  item: Item;
  subTodoList: Item[];
};

export type updateSubTodoObj = {
  subTodo: Item;
  newContent: string;
  check: boolean;
};

export type deleteSubTodoObj = {
  id: number;
  subTodoList: Item[];
};

export enum Status {
  All = 'ALL',
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
}

export interface Item {
  id: number;
  title: string;
  status?: boolean;
  key?: string;
  dueDate?: string;
  subTask?: Item[];
}

export class SubTodo implements Item {
  id: number;
  title: string;
  key: string;
  status: boolean;

  constructor(item: Item) {
    this.id = item.id;
    this.title = item.title;
    this.key = item.key!;
    this.status = item.status!;
  }

  /**
   * Add new sub todo
   * @param  {subTodoObj} subTodoObj
   */
  addSubTodo = (subTodoObj: subTodoObj) => {
    const subTodo = new SubTodo(subTodoObj.item);
    subTodo.id = Date.now();
    subTodo.title = subTodoObj.text;
    subTodo.status = false;
    subTodoObj.subTodoList.push(subTodo);
  };

  /**
   * Update sub todo
   * @param  {newObj} updateSubTodoObj
   */
  updateSubTodo = (newObj: updateSubTodoObj) => {
    newObj.subTodo.title = newObj.newContent;
    newObj.subTodo.status = newObj.check;
  };

  /**
   * Delete sub todo
   * @param  {newObj} deleteSubTodoObj
   */
  deleteSubTodo = (newObj: deleteSubTodoObj) => {
    const newList = newObj.subTodoList.filter((item) => item.id !== newObj.id);
    helper.pushItem(newObj.subTodoList, newList, SubTodo);
  };
}

// tslint:disable-next-line:max-classes-per-file
export class Todo extends SubTodo {
  key: string;
  subTask?: Item[];
  dueDate: string;

  constructor(item: Item) {
    super(item);
    this.key = item.key!;
    this.dueDate = item.dueDate!;
    this.subTask = item.subTask;
  }

  /**
   * Add new todo
   * @param  {todoObj} todoObj
   */
  addTodo = (todoObj: todoObj) => {
    const todo = new Todo(todoObj.item);
    todo.id = todoObj.newId;
    todo.title = todoObj.text;
    todo.subTask = [];
    todo.dueDate = null!;
    todo.status = false;
    todo.key = todoObj.key;
    todoObj.todoList.push(todo);
    storage.setData(todoObj.name, todoObj.todoList);
  };

  /**
   * Update todo
   * @param  {newObj} updateTodoObj
   */
  updateTodo = (newObj: updateTodoObj) => {
    newObj.todo.title = newObj.newContent;
    newObj.todo.subTask = newObj.newSubTask;
    newObj.todo.status = newObj.check;
    newObj.todo.dueDate = newObj.newDate;
    newObj.todo.key = newObj.newKey;
    storage.setData(newObj.name, newObj.todoList);
  };

  /**
   * Delete todo
   * @param  {newObj} deleteTodoObj
   */
  deleteTodo = (newObj: deleteTodoObj) => {
    const newList = newObj.todoList.filter((item) => item.id !== newObj.id);
    helper.pushItem(newObj.todoList, newList, Todo);
    storage.setData(newObj.name, newObj.todoList);
  };
}

// tslint:disable-next-line:max-classes-per-file
export class Group implements Item {
  id: number;
  title: string;
  subTask?: Item[];

  constructor(item: Item) {
    this.id = item.id;
    this.title = item.title;
    this.subTask = item.subTask;
  }

  /**
   * Add new group
   * @param  {groupObj} groupObj
   */
  addGroup = (groupObj: groupObj) => {
    const group = new Group(groupObj.item);
    group.id = Date.now();
    group.title = groupObj.text;
    group.subTask = [];
    groupObj.groupList.push(group);
    storage.setData(groupObj.name, groupObj.groupList);
  };

  /**
   * Update group
   * @param  {newObj} groupUpdateObj
   */
  updateGroup = (newObj: groupUpdateObj) => {
    newObj.filterItem.title = newObj.newTitle;
    storage.setData(newObj.name, newObj.groupList);
  };

  /**
   * Delete group
   * @param  {newObj} deleteGroupObj
   */
  deleteGroup = (newObj: deleteGroupObj) => {
    const newList = newObj.groupList.filter((item) => item.id !== newObj.id);
    helper.pushItem(newObj.groupList, newList, Group);
    // storage.setData(newObj.name, newObj.groupList);
  };
}
