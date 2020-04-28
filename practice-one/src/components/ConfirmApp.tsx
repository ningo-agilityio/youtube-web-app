import React from 'react';

interface Props { }

export default class ConfirmApp extends React.Component<Props> {
  render() {
    return (
      <div className="confirm-box">
        <form className="confirm-content">
          <p>Are you sure you want to delete?</p>
          <div className="wrapper">
            <button className="cancel btn-confirm" type="button">Cancel</button>
            <button className="delete btn-confirm" type="button">Delete</button>
          </div>
        </form>
      </div>
    )
  }
}