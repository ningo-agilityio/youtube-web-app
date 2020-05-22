import React from 'react';
import styled from 'styled-components';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/constants';
import { Button } from './Button';

const IssueDetailStyled = styled.div`
  width: 50%;
  margin-left: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 0.1rem solid rgba(236, 103, 37, 0.3);
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem solid rgba(236, 103, 37, 0.3);
  align-content: center;
  padding: 0.5rem 0;
`;

const Title = styled.h3`
  max-width: calc(100% - 5rem);
  margin: 0.3rem 0 0 0;
  text-align: center;
  font-size: 1.5rem;
  word-wrap: break-word;
`;

const Description = styled.p`
  font-size: 0.8rem;
`;

interface IssueDetailProps {
  issue: types.Issue;
  handleShowForm: (e: React.MouseEvent) => void;
  handleShowDetail: (e: React.MouseEvent) => void;
  handleChangeSelectedIssue: (newIssue: types.Issue) => void;
}

export const IssueDetail = (props: IssueDetailProps) => {
  const { issue } = props;

  const handleOnClickEdit = (e: React.MouseEvent) => {
    props.handleShowForm(e);
  };

  const handleOnClickClose = (e: React.MouseEvent) => {
    props.handleShowDetail(e);
    props.handleChangeSelectedIssue(constants.issueDefault);
  };

  return (
    <IssueDetailStyled>
      <Wrapper>
        <Title>{issue.title}</Title>
        <Button
          name="main-btn"
          value="Edit"
          handleOnClick={handleOnClickEdit}
        />
      </Wrapper>
      <Description>{issue.description}</Description>
      <Button
        name="close-btn"
        value="Close"
        handleOnClick={handleOnClickClose}
      />
    </IssueDetailStyled>
  );
};
