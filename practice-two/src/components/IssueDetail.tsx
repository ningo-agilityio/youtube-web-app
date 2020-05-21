import React from 'react';
import styled from 'styled-components';
import * as types from '../buildTypes/buildTypes';
import { Button } from './Button';

const IssueDetailStyled = styled.div`
  width: 50%;
  margin-left: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 0.1rem solid rgba(236, 103, 37, 0.3);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem solid rgba(236, 103, 37, 0.3);
  align-content: center;
  padding: 0.5rem 0;
`;

const Title = styled.h3`
  margin: 0.3rem 0 0 0;
  text-align: center;
  font-size: 1.5rem;
`;

const Description = styled.p`
  font-size: 0.8rem;
`;

interface IssueDetailProps {
  issue: types.Issue;
}

export const IssueDetail = (props: IssueDetailProps) => {
  const { issue } = props;

  return (
    <IssueDetailStyled>
      <Wrapper>
        <Title>{issue.title}</Title>
        <Button name="main-btn" value="Edit" />
      </Wrapper>
      <Description>{issue.description}</Description>
    </IssueDetailStyled>
  );
};
