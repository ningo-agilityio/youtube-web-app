import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';
import * as constants from '../constants/Constants';
import { Form } from './common/Form';

interface SubTodoFormProps {
  subTodoList: types.Item[];
  selectedTodo: types.Item;
  handleUpdateSubTodo: (list: types.Item[]) => void;
}

interface SubTodoFormState {
  inputValue: string;
}

class SubTodoForm extends React.Component<SubTodoFormProps, SubTodoFormState> {
  constructor(props: SubTodoFormProps) {
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
      const itemSubTodo = {} as types.Item;
      let itemTodo = {} as types.Item;
      let subTodoObj = {} as types.subTodoObj;
      let updateTodoObj = {} as types.updateTodoObj;
      const SubTodo = new types.SubTodo(itemSubTodo);
      const Todo = new types.Todo(itemTodo);
      const dataTodo = constants.todoList.map((item) => ({
        ...(item as object),
      })) as types.Item[];

      helper.pushDataLocalToList(constants.todoListName, dataTodo, types.Todo);
      itemTodo = helper.findItemById(dataTodo, this.props.selectedTodo.id)!;
      subTodoObj = {
        text: this.state.inputValue.trim(),
        item: constants.todoDefault,
        subTodoList: this.props.selectedTodo.subTask!,
      };
      updateTodoObj = {
        todo: itemTodo,
        todoList: dataTodo,
        newContent: itemTodo.title,
        newSubTask: this.props.selectedTodo.subTask!,
        check: itemTodo.status!,
        name: constants.todoListName,
        newDate: itemTodo.dueDate,
        newKey: itemTodo.key,
      };
      SubTodo.addSubTodo(subTodoObj);
      Todo.updateTodo(updateTodoObj);
      this.props.handleUpdateSubTodo(this.props.selectedTodo.subTask!);
      this.setState({ inputValue: '' });
    }
  };

  render() {
    return (
      <Form
        name="sub-form"
        nameInput="sub-input"
        value={this.state.inputValue}
        type="text"
        placeholder="Create subtask..."
        ariaLabel="Enter to do text"
        action="#"
        handleOnChange={this.handleOnChange}
        handleOnSubmit={this.handleOnSubmit}
      />
    );
  }
}

export default SubTodoForm;
