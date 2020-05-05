import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';
import * as constants from '../constants/Constants';

interface SubTodoFormProps {
  subTodoList: types.SubTodo[];
  selectedTodo: types.Item;
  changeSubTodoList: Function;
  changeTodoList: Function;
}

interface SubTodoFormState {
  inputValue: string;
}

class SubTodoForm extends React.Component<SubTodoFormProps, SubTodoFormState> {
  constructor(props: SubTodoFormProps) {
    super(props);
    this.state = { inputValue: '' };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.updateSubTodoList = this.updateSubTodoList.bind(this);
  }

  updateInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: (e.target as HTMLInputElement).value.trim(),
    });
  };

  updateSubTodoList = (e: React.FormEvent) => {
    if (this.state.inputValue.length) {
      let subTodoObj: types.subTodoObj;
      let dataSubTodo = this.props.subTodoList.map((subTodo) =>
        Object.assign({}, subTodo)
      );
      helper.pushDataLocalToList('subTodoList', dataSubTodo, types.SubTodo);
      subTodoObj = {
        text: this.state.inputValue,
        item: constants.todoDefault,
        key: this.props.selectedTodo.id.toString(),
        subTodoList: dataSubTodo,
        todoList: this.props.selectedTodo.subTask!,
        name: 'subTodoList',
      };
      types.SubTodo.prototype.addSubTodo(subTodoObj);
      this.props.changeSubTodoList(this.props.selectedTodo.subTask!);
      (e.target as HTMLFormElement).reset();
    }
  };

  render() {
    return (
      <form className='sub-form' onSubmit={this.updateSubTodoList} action='#'>
        <input
          className='detail-input app-input'
          type='text'
          placeholder='Add a subtask'
          aria-label='Enter to do text'
          onInput={this.updateInputValue}
        />
      </form>
    );
  }
}

export default SubTodoForm;
