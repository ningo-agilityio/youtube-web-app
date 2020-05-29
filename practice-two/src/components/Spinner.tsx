import React from 'react';
import styled from 'styled-components';
import * as color from '../theme/color';

const SpinnerStyled = styled.div`
  width: 100%;
  height: 100%;
  color: ${color.primaryColor};
  text-align: center;
`;

export const Spinner = () => {
  return <SpinnerStyled>Loading...</SpinnerStyled>;
};
