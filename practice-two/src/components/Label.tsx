import React from 'react';
import styled from 'styled-components';
import { LabelProps } from '../buildTypes/buildTypes';
import * as constants from '../constants/constants';
import { mutedColor } from '../theme/color';

const LabelStyled = styled.label`
  cursor: ${(props: LabelProps) =>
    (props.name === `${constants.LABEL_DARK}` ||
      props.name === `${constants.LABEL_LIGHT}`) &&
    'pointer'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props: LabelProps) =>
    props.name === `${constants.LABEL_DARK}` && `${mutedColor}`};
  :hover {
    text-decoration: ${(props: LabelProps) =>
      (props.name === `${constants.LABEL_DARK}` ||
        props.name === `${constants.LABEL_LIGHT}`) &&
      'underline'};
  }
`;

export const Label = React.memo((props: LabelProps) => {
  return (
    <LabelStyled {...props} className={props.name} onClick={props.onClick}>
      {props.value}
    </LabelStyled>
  );
});
