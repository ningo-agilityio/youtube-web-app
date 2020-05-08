import React from 'react';

interface ButtonProps {
  name: string;
  value?: string;
  handleOnClick?: (e: React.MouseEvent) => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <button className={props.name} type="button" onClick={props.handleOnClick}>
      {props.value}
    </button>
  );
};
