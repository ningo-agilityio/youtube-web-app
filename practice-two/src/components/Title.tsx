import React from 'react';
import styled from 'styled-components';
import { TitleProps } from '../buildTypes/buildTypes';
import { primaryColor } from '../theme/color';

const TitledStyled = styled.h1`
  color: ${primaryColor};
  font-size: 2rem;
  text-transform: uppercase;
`;

export const Title = React.memo((props: TitleProps) => {
  return <TitledStyled>{props.value}</TitledStyled>;
});
