import React, { useState } from 'react';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';
import Context from '../contexts/Context';
import { Form } from './common/Form';

interface GroupFormProps {
  handleUpdateGroup: (dataGroup: types.Group[]) => void;
}

const GroupForm = (props: GroupFormProps) => {
  const context = React.useContext(Context);
  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (e: React.ChangeEvent) => {
    setInputValue((e.target as HTMLInputElement).value);
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue.trim().length) {
      const item = {} as types.Item;
      const Group = new types.Group(item);
      const groupObj = {
        text: inputValue.trim(),
        item: constants.groupDefault,
        groupList: context.groupList!,
        name: constants.groupListName,
      };

      Group.addGroup(groupObj);
      props.handleUpdateGroup!(context.groupList!);
      setInputValue('');
    }
  };

  return (
    <Form
      name="sub-form"
      nameInput="sub-input"
      value={inputValue}
      type="text"
      placeholder="Create list..."
      ariaLabel="Enter to do text"
      action="#"
      handleOnChange={handleOnChange}
      handleOnSubmit={handleOnSubmit}
    />
  );
};

export default GroupForm;
