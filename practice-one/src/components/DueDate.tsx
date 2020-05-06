import React from 'react';
import * as helper from '../helper/helper';

interface DueDateProps {
  dueDateValue: string;
  changeDueDate: Function;
}

const DueDate = (props: DueDateProps) => {
  const { dueDateValue, changeDueDate } = props;

  const onChangeDueDate = (e: React.FormEvent<HTMLInputElement>) => {
    const newDueDate = helper.convertDate((e.target as HTMLInputElement).value);
    changeDueDate(newDueDate);
  };

  return (
    <>
      <input className="date-picker" type="date" onInput={onChangeDueDate} />
      <label>
        Due date: <span>{dueDateValue}</span>
      </label>
    </>
  );
};

export default DueDate;
