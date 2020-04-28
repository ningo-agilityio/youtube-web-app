import React from 'react';

interface Props { }

export default class DetailApp extends React.Component<Props> {
  render() {
    return (
      <ul className="app__detail">
        <li id="detailTitle" className="todo"></li>
        <li className="todo-date">
          <input className="date-picker" type="date" />
          <label>Due date: <span id="getDate"></span></label>
        </li>
        <li>
          <ul className="sub-todo" aria-label="List of sub todo"></ul>
        </li>
        <form className="sub-form" action="#">
          <input className="detail-input app-input" type="text" placeholder="Add a subtask"
            aria-label="Enter to do text" />
        </form>
      </ul>
    )
  }
}