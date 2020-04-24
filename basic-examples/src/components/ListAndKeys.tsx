import React from 'react';

interface Props {
  numbers: Array<number>;
}
interface ItemProps {
  value: number;
}

function NumberList(props: Props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number, index) =>
    <li key={index.toString()}>{number}: Hello</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

function ListItem(props: ItemProps) {
  return <li>{props.value}</li>;
}

function NumberListA(props: Props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
          value={number} />
      )}
    </ul>
  );
}

export default NumberList;