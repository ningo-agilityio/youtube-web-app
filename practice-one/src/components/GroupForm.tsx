import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';
import { Form } from './common/Form';

interface GroupFormProps {
  groupList: types.Group[];
  handleUpdateGroup: (list: types.Group[]) => void;
}

interface GroupFormState {
  inputValue: string;
}

class GroupForm extends React.Component<GroupFormProps, GroupFormState> {
  constructor(props: GroupFormProps) {
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
        groupList: this.props.groupList,
        name: constants.groupListName,
      };

      Group.addGroup(groupObj);
      this.props.handleUpdateGroup(this.props.groupList);
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

export default GroupForm;
