import React from 'react';

interface Props { }

export default class MainApp extends React.Component<Props> {
  render() {
    return (
      <div className="app__content">
        <form className="app__content__form" action="#">
          <input className="main-input app-input" type="text" placeholder="What do you need to do?"
            aria-label="Enter to do text" />
        </form>
        <ul className="app__content__todo" aria-label="List of todo"></ul>
      </div>
    )
  }
}