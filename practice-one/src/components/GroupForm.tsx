import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';

interface GroupFormProps {
  groupList: types.Group[];
  changeGroupList: Function;
}

interface GroupFormState {
  inputValue: string;
}

class GroupForm extends React.Component<GroupFormProps, GroupFormState> {
  constructor(props: GroupFormProps) {
    super(props);
    this.state = { inputValue: '' };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.updateGroupList = this.updateGroupList.bind(this);
  }

  updateInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: (e.target as HTMLInputElement).value.trim(),
    });
  };

  updateGroupList = (e: React.FormEvent) => {
    if (this.state.inputValue.length) {
      let groupObj: types.groupObj;
      groupObj = {
        text: this.state.inputValue,
        item: constants.groupDefault,
        groupList: this.props.groupList,
        name: 'groupList',
      };
      types.Group.prototype.addGroup(groupObj);
      this.props.changeGroupList(this.props.groupList);
      (e.target as HTMLFormElement).reset();
    }
  };

  render() {
    return (
      <form
        className='app__nav__form'
        onSubmit={this.updateGroupList}
        action='#'
      >
        <input
          className='app__nav__input app-input'
          type='text'
          placeholder='Create list...'
          aria-label='Enter to do text'
          onInput={this.updateInputValue}
        />
      </form>
    );
  }
}

export default GroupForm;
