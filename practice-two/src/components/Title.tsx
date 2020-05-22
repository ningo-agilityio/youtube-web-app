import React from 'react';
import styled from 'styled-components';

const TitledStyled = styled.h1`
  color: rgb(236, 103, 37);
  font-size: 2rem;
  text-transform: uppercase;
`;

interface TitleProps {
  value: string;
}

export const Title = React.memo((props: TitleProps) => {
  return <TitledStyled>{props.value}</TitledStyled>;
});
