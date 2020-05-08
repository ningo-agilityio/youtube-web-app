import React from 'react';

interface LabelProps {
  name: string;
  value: string;
  contentEditable?: boolean;
  spanValue?: string;
  handleOnContextMenu?: (e: React.MouseEvent) => void;
  handleOnClick?: (e: React.MouseEvent) => void;
  handelKeyDown?: (e: React.KeyboardEvent) => void;
}

export const Label = (props: LabelProps) => {
  return (
    <label
      className={props.name}
      contentEditable={props.contentEditable}
      onClick={props.handleOnClick}
      onContextMenu={props.handleOnContextMenu}
      onKeyDown={props.handelKeyDown}
      suppressContentEditableWarning={true}
      role="presentation"
    >
      {props.value}
      <span>{props.spanValue}</span>
    </label>
  );
};
