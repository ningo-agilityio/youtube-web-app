import React from 'react';
import styled from 'styled-components';
import * as constants from '../constants/constants';
import * as metric from '../theme/metric';
import * as color from '../theme/color';
import { IssueDetailProps } from '../buildTypes/buildTypes';
import Button from './Button';

const IssueDetailStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: ${metric.PADDING.md};
  border-radius: 0.5rem;
  border: 0.1rem solid ${color.lightOrangeColor};
  box-sizing: border-box;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem solid ${color.lightOrangeColor};
  align-content: center;
  padding: ${metric.PADDING.sm} 0;
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

export const IssueDetail = (props: IssueDetailProps) => {
  const { issue } = props;

  const handleOnClickEdit = (e: React.MouseEvent) => {
    props.toggleForm(e);
  };

  const handleOnClickExit = (e: React.MouseEvent) => {
    props.toggleDetail(e);
    props.handleChangeSelectedIssue(constants.issueDefault);
  };

  return (
    <IssueDetailStyled>
      <Wrapper>
        <Title>{issue.title}</Title>
        <Button
          name={constants.BTN_PRIMARY}
          value={constants.BTN_EDIT}
          type="button"
          onClick={handleOnClickEdit}
        />
      </Wrapper>
      <Description>{issue.body}</Description>
      <Button
        name={constants.BTN_GRAY}
        value={constants.BTN_EXIT}
        type="button"
        onClick={handleOnClickExit}
      />
    </IssueDetailStyled>
  );
};
