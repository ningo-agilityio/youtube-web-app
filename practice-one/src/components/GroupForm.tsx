import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';
import NavContext from '../contexts/Contexts';
import { Form } from './common/Form';

interface GroupFormState {
  inputValue: string;
}

class GroupForm extends React.Component<{}, GroupFormState> {
  constructor(props: {}) {
    super(props);
    this.state = { inputValue: '' };
  }

  handleOnChange = (e: React.ChangeEvent) => {
    this.setState({
      inputValue: (e.target as HTMLInputElement).value,
    });
  };

  handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (this.state.inputValue.trim().length) {
      const item = {} as types.Item;
      const Group = new types.Group(item);
      const groupObj = {
        text: this.state.inputValue.trim(),
        item: constants.groupDefault,
        groupList: this.context.groupList,
        name: constants.groupListName,
      };

      Group.addGroup(groupObj);
      this.context.handleUpdateGroup(this.context.groupList);
      this.setState({ inputValue: '' });
    }
  };

  render() {
    return (
      <Form
        nameForm="app__nav__form"
        nameInput="app__nav__input app-input"
        value={this.state.inputValue}
        type="text"
        placeholder="Create list..."
        ariaLabel="Enter to do text"
        action="#"
        handleOnChange={this.handleOnChange}
        handleOnSubmit={this.handleOnSubmit}
      />
    );
  }
}

GroupForm.contextType = NavContext;

export default GroupForm;
