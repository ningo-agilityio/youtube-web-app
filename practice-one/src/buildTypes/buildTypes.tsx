import 'reflect-metadata';
import * as storage from '../storage/storage';
import * as helper from '../helper/helper';

export type ItemList = SubTodo[] | Todo[] | Group[];
export type ConstructList = typeof SubTodo | typeof Todo | typeof Group;
export type a = SubTodo | Todo | Group;
export type Filter = {
  id: string;
  text: string;
}
export type groupObj = {
  text: string;
  item: Item;
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
export type subTodoObj = {
  text: string;
  item: Item;
  key: string;
  subTodoList: Item[];
  todoList: Item[];
  name: string;
};

export enum Status {
  All = 'ALL',
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
}

export interface Item {
  id: number;
  title: string;
  status?: Status;
  key?: string;
  dueDate?: string;
  subTask?: Item[];
}

export class SubTodo implements Item {
  id: number;
  title: string;
  key: string;
  status: Status;

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
  addSubTodo(subTodoObj: subTodoObj) {
    const subTodo = new SubTodo(subTodoObj.item);
    subTodo.id = Date.now();
    subTodo.title = subTodoObj.text;
    subTodo.key = subTodoObj.key;
    subTodo.status = Status.Active;
    subTodoObj.subTodoList.push(subTodo);
    storage.setData(subTodoObj.name, subTodoObj.subTodoList);
  }

  /**
   * Update sub todo
   * @param  {Item} subTodo
   * @param  {Todo[]} todoList
   * @param  {string} newContent
   * @param  {Status} check
   * @param  {string} name
   */
  updateSubTodo(
    subTodo: Item,
    subTodoList: Item[],
    newContent: string,
    check: Status,
    name: string
  ) {
    subTodo.title = newContent;
    subTodo.status = check;
    storage.setData(name, subTodoList);
  }

  /**
   * Delete sub todo
   * @param  {number} id
   * @param  {Item[]} subTodoList
   * @param  {Todo[]} todoList
   * @param  {string} name
   */
  deleteSubTodo(id: number, subTodoList: Item[], name: string) {
    const newList = subTodoList.filter((item) => item.id !== id);
    helper.pushItem(subTodoList, newList, SubTodo);
    storage.setData(name, subTodoList);
  }
}

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
  addTodo(todoObj: todoObj) {
    let todo = new Todo(todoObj.item);
    todo.id = todoObj.newId;
    todo.title = todoObj.text;
    todo.subTask = [];
    todo.dueDate = null!;
    todo.status = Status.Active;
    todo.key = todoObj.key;
    todoObj.todoList.push(todo);
    storage.setData(todoObj.name, todoObj.todoList);
  }

  /**
   * Update todo
   * @param  {Item} todo
   * @param  {Item[]} todoList
   * @param  {string} newContent
   * @param  {Item[]} newSubTask
   * @param  {Status} check
   * @param  {string} name
   * @param  {string} newDate?
   * @param  {string} newKey?
   */
  updateTodo(
    todo: Item,
    todoList: Item[],
    newContent: string,
    newSubTask: Item[],
    check: Status,
    name: string,
    newDate?: string,
    newKey?: string
  ) {
    todo.title = newContent;
    todo.subTask = newSubTask;
    todo.status = check;
    todo.dueDate = newDate;
    todo.key = newKey;
    storage.setData(name, todoList);
  }

  /**
   * Delete todo
   * @param  {number} id
   * @param  {Item[]} todoList
   * @param  {string} name
   */
  deleteTodo(id: number, todoList: Item[], name: string) {
    let newList = todoList.filter((item) => item.id !== id);
    helper.pushItem(todoList, newList, Todo);
    storage.setData(name, todoList);
  }
}

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
  addGroup(groupObj: groupObj) {
    let group = new Group(groupObj.item);
    group.id = Date.now();
    group.title = groupObj.text;
    group.subTask = [];
    groupObj.groupList.push(group);
    storage.setData(groupObj.name, groupObj.groupList);
  }

  /**
   * Update group
   * @param  {Item} filterItem
   * @param  {string} newTitle
   * @param  {Group[]} groupList
   * @param  {string} name
   */
  updateGroup(
    filterItem: Item,
    newTitle: string,
    groupList: Group[],
    name: string
  ) {
    filterItem.title = newTitle;
    storage.setData(name, groupList);
  }

  /**
   * Delete group
   * @param  {number} id
   * @param  {Group[]} groupList
   * @param  {string} name
   */
  deleteGroup(id: number, groupList: Group[], name: string) {
    let newList = groupList.filter((item) => item.id !== id);
    helper.pushItem(groupList, newList, Group);
    storage.setData(name, groupList);
  }
}
