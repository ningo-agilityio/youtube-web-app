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
  changeDetailBoxState: Function;
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
    changeDetailBoxState,
    resetSelectedFilterId,
  } = props;

  const deleteGroup = () => {
    const dataTodo = constants.todoList.map((item) => ({
      ...item,
    })) as types.Todo[];
    let newTodoList = [];

    helper.pushDataLocalToList('todoList', dataTodo, types.Todo);
    newTodoList = helper.filterItemByKey(dataTodo, group.id.toString());
    storage.setData('todoList', newTodoList);
    types.Group.prototype.deleteGroup(group.id, groupList, name);
    changeGroupList(groupList);
    changeTodoList(newTodoList);
    resetSelectedFilterId('ALL');
  };

  const onChangeSelectedFilterId = (id: string) => {
    changeSelectedFilterId(id);
    changeDetailBoxState(false);
  };

  const active = selectedFilterId === group.id.toString() ? 'active' : '';

  return (
    <li className={`group filter ${active}`}>
      <label
        className="group__text"
        onClick={(e) => onChangeSelectedFilterId(group.id.toString())}
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
