import React from 'react';

interface Props { }

export default class OptionApp extends React.Component<Props> {
  render() {
    return (
      <div className="wrapper-option">
        <div className="option-box">
          <p>Move to-do to...</p>
          <ul className="option-list"></ul>
        </div>
      </div>
    )
  }
}