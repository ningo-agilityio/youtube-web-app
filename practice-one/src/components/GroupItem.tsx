import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';
import * as storage from '../storage/storage';
import * as constants from '../constants/Constants';
import { Label } from './common/Label';
import { Button } from './common/Button';

interface GroupItemProps {
  group: types.Group;
  groupList: types.Group[];
  name: string;
  selectedFilter: string;
  handleUpdateGroup: Function;
  handleUpdateTodo: Function;
  handleChangeSelectedFilter: Function;
  handleUpdateDetailBox: Function;
}

const GroupItem = (props: GroupItemProps) => {
  const {
    group,
    groupList,
    name,
    selectedFilter,
    handleUpdateGroup,
    handleUpdateTodo,
    handleChangeSelectedFilter,
    handleUpdateDetailBox
  } = props;

  const handleOnClickDelete = () => {
    let newTodoList = [];
    const itemGroup = {} as types.Item;
    const Group = new types.Group(itemGroup);
    const dataTodo = constants.todoList.map((item) => ({
      ...(item as object),
    })) as types.Todo[];
    const groupObj = {
      id: group.id,
      groupList,
      name,
    };

    helper.pushDataLocalToList(constants.todoListName, dataTodo, types.Todo);
    newTodoList = helper.filterItemByKey(dataTodo, group.id.toString());
    storage.setData(constants.todoListName, newTodoList);
    Group.deleteGroup(groupObj);
    handleUpdateGroup(groupList);
    handleUpdateTodo(newTodoList);
    handleChangeSelectedFilter(types.Status.All);
  };

  const handleOnClickText = (id: string) => {
    handleChangeSelectedFilter(id);
    handleUpdateDetailBox(false);
  };

  const active =
    selectedFilter === group.id.toString() ? constants.ACTIVE : '';

  return (
    <li className={`group filter ${active}`}>
      <Label
        name="group__text"
        value={group.title}
        handleOnClick={(e) => handleOnClickText(group.id.toString())}
      />
      <Button name="group__delete" value="x" handleOnClick={handleOnClickDelete} />
    </li>
  );
};

export default GroupItem;
