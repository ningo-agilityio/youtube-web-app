import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';
import * as constants from '../constants/Constants';
import { Form } from './common/Form';

interface SubTodoFormProps {
  subTodoList: types.Item[];
  selectedTodo: types.Item;
  handleUpdateSubTodo: Function;
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
      inputValue: (e.target as HTMLInputElement).value.trim(),
    });
  };

  handleOnSubmit = () => {
    if (this.state.inputValue.length) {
      const item = {} as types.Item;
      const SubTodo = new types.SubTodo(item);
      let subTodoObj = {} as types.subTodoObj;
      const dataSubTodo = this.props.subTodoList.map((subTodo) => ({
        ...subTodo,
      }));

      helper.pushDataLocalToList(
        constants.subTodoListName,
        dataSubTodo,
        types.SubTodo
      );
      subTodoObj = {
        text: this.state.inputValue,
        item: constants.todoDefault,
        key: this.props.selectedTodo.id.toString(),
        subTodoList: dataSubTodo,
        todoList: this.props.selectedTodo.subTask!,
        name: constants.subTodoListName,
      };
      SubTodo.addSubTodo(subTodoObj);
      this.props.handleUpdateSubTodo(this.props.selectedTodo.subTask!);
      this.setState({ inputValue: '' });
    }
  };

  render() {
    return (
      <Form
        nameForm="sub-form"
        nameInput="detail-input app-input"
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
