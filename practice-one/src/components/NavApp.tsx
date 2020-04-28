import React from 'react';

interface Props { }

export default class NavApp extends React.Component<Props> {
  render() {
    return (
      <div className="app__nav">
        <ul className="app__nav__filter">
          <li id="ALL" className="filter active" aria-label="Show list of all todo">All</li>
          <li id="ACTIVE" className="filter" aria-label="Show list of active todo">Active</li>
          <li id="COMPLETED" className="filter" aria-label="Show list of completed todo">Completed</li>
        </ul>
        <ul id="navGroup" className="app__nav__filter" aria-label="List of groups"></ul>
        <form className="app__nav__form" action="#">
          <input className="app__nav__input app-input" type="text" placeholder="Create list" aria-label="Enter to do text" />
        </form>
      </div>
    )
  }
}
