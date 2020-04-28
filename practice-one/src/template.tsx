import React from 'react';
import * as types from './buildTypes';

function CreateElementTodo(props: types.Item) {
  return (
    <li className='todo' id={props.id.toString()} key ={props.id.toString()}>
      <input className='todo__checkbox' type='checkbox' />
      <label className='todo__text'>{props.title}</label>
      <button className='todo__delete'>x</button>
    </li>
  );
}

function CreateElementTodoChecked(props: types.Item) {
  return (
    <li className='todo todo-checked' id={props.id.toString()} key = {props.id.toString()}>
      <input className='todo__checkbox' type='checkbox' />
      <label className='todo__text'>{props.title}</label>
      <button className='todo__delete'>x</button>
    </li>
  );
}

function CreateElementTitleDetail(props: types.Item) {
  return (<>
    <input className='todo__checkbox' type='checkbox' />
    <label className='todo__text' contentEditable='true'>{props.title}</label>
  </>
  );
}

function CreateElementGroup(props: types.Item) {
  return (
    <li className='group filter' id={props.id.toString()} key = {props.id.toString()}>
      <label className='group__text' contentEditable='false'>{props.title}</label>
      <button className='group__delete'>x</button>
    </li>
  );
}


function CreateElementOption(props: types.Item) {
  return (
    <li className='option' id={props.id.toString()}>
      <label className='option__text'>{props.title}</label>
    </li>
  )
}

// /**
//  * render group
//  * @param  {types.Group[]} groupList
//  * @param  {HTMLUListElement} listUl
//  */
// export function RenderGroup(groupList: types.Group[], groupUl: HTMLUListElement) {
//   groupUl.innerHTML = '';
//   return (
//     <GroupList groupList={groupList} />
//   )
// }
interface GroupList {
  groupList: types.Group[]
}
export function GroupList(props: GroupList) {
  const groupList = props.groupList;
  return (
    <>
      {groupList.map((group) =>
        <CreateElementGroup id={group.id} key = {group.id.toString()} title={group.title} />
      )}
    </>
  )
}

// /**
//  *  render todo
//  * @param  {types.Item[]} todoList
//  * @param  {HTMLUListElement} todoUl
//  */
// export function RenderTodo(todoList: types.Item[], todoUl: HTMLUListElement) {
//   todoUl.innerHTML = '';
//   return (
//     <TodoList todoList={todoList} />
//   )
// }

interface TodoList {
  todoList: types.Item[];
}

export function TodoList(props: TodoList) {
  const todoList = props.todoList;
  return (
    <>
      {todoList.map((todo) =>
        todo.status === types.Status.Completed ?
          <CreateElementTodo id={todo.id} key = {todo.id.toString()} title={todo.title} />
          : <CreateElementTodoChecked id={todo.id} key = {todo.id.toString()} title={todo.title} />
      )}
    </>
  )

}

interface Title {
  todo: types.Item;
}
export function DetailTitle(props: Title) {
  const todo = props.todo;
  return (
    todo.status === types.Status.Completed ?
    < CreateElementTitleDetail title={todo.title/>
      // <CreateElementTodo id={todo.id} key = {todo.id.toString()} title={todo.title} />
      : <CreateElementTodoChecked id={todo.id} key = {todo.id.toString()} title={todo.title} />
  )
}
interface DueDate {
  dueDate: string;
}
export function DetailDuaDate(props: DueDate) {
  return (
    <label >Due date:
      <span id="getDate">{props.dueDate}</span>
    </label>
  )
}

// /**
//  * render option list for move todo
//  * @param  {types.Group[]} list
//  * @param  {HTMLUListElement} optionUl
//  */
// export function renderOptionList(
//   list: types.Group[],
//   optionUl: HTMLUListElement
// ) {
//   optionUl.innerHTML = '';
//   return (
//     < OptionList optionList={list} />
//   );
// }

interface OptionList {
  optionList: types.Group[]
}
export function OptionList(props: OptionList) {
  const optionList = props.optionList;
  return (
    <>
      {optionList.map((option) =>
        <CreateElementOption id={option.id} title={option.title} />
      )}
    </>
  )
}
