import React from 'react';
import styled from 'styled-components';
import { LabelProps } from '../buildTypes/buildTypes';
import * as constants from '../constants/constants';
import { mutedColor } from '../theme/color';

const LabelStyled = styled.label`
  cursor: ${(props) =>
    (props.className === `${constants.LABEL_DARK}` ||
      props.className === `${constants.LABEL_LIGHT}`) &&
    'pointer'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) =>
    props.className === `${constants.LABEL_DARK}` && `${mutedColor}`};
  :hover {
    text-decoration: ${(props) =>
      (props.className === `${constants.LABEL_DARK}` ||
        props.className === `${constants.LABEL_LIGHT}`) &&
      'underline'};
  }
`;

const Label = (props: LabelProps) => {
  return (
    <LabelStyled className={props.name} onClick={props.onClick}>
      {props.value}
    </LabelStyled>
  );
};

Label.defaultProps = {
  name: 'label-light',
  value: 'Issue',
  locked: false,
  onClick: () => {},
};

export default React.memo(Label);