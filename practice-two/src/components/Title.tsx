import React from 'react';
import styled from 'styled-components';
import { TitleProps } from '../buildTypes/buildTypes';
import { primaryColor } from '../theme/color';

const TitledStyled = styled.h1`
  color: ${primaryColor};
  font-size: 2rem;
  text-transform: uppercase;
`;

const Title = (props: TitleProps) => {
  return <TitledStyled>{props.value}</TitledStyled>;
};

Title.defaultProps = { value: 'github issues app' };

export default React.memo(Title);
