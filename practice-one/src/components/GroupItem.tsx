import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';
import * as storage from '../storage/storage';
import * as constants from '../constants/Constants';

interface GroupItemProps {
  group: types.Group;
  groupList: types.Group[];
  name: string;
  selectedFilterId: string;
  changeGroupList: Function;
  changeTodoList: Function;
  changeSelectedFilterId: Function;
  resetSelectedFilterId: Function;
}

const GroupItem = (props: GroupItemProps) => {
  const {
    group,
    groupList,
    name,
    selectedFilterId,
    changeGroupList,
    changeTodoList,
    changeSelectedFilterId,
    resetSelectedFilterId,
  } = props;

  const deleteGroup = () => {
    // eslint-disable-next-line prefer-object-spread
    const dataTodo = constants.todoList.map((item) => Object.assign({}, item));
    const newTodoList = helper.filterItemByKey(dataTodo, group.id.toString());
    helper.pushDataLocalToList('todoList', dataTodo, types.Todo);
    storage.setData('todoList', newTodoList);
    types.Group.prototype.deleteGroup(group.id, groupList, name);
    changeGroupList(groupList);
    changeTodoList(newTodoList);
    resetSelectedFilterId('ALL');
  };

  return (
    <li
      className={`group filter ${
        selectedFilterId === group.id.toString() ? 'active' : ''
      }`}
    >
      <label
        className="group__text"
        onClick={() => changeSelectedFilterId(group.id.toString())}
        role="presentation"
      >
        {group.title}
      </label>
      <button className="group__delete" type="button" onClick={deleteGroup}>
        x
      </button>
    </li>
  );
};

export default GroupItem;
