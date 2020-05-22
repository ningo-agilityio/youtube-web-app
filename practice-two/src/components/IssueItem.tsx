import React from 'react';
import styled from 'styled-components';
import * as types from '../buildTypes/buildTypes';
import { Label } from './Label';
import { Button } from './Button';

const IssueItemStyled = styled.li`
  border-bottom: 0.05rem solid rgba(0, 0, 0, 0.2);
  padding: 0.5rem 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  &:last-child {
    border-bottom: none;
  }
`;

interface IssueItemProps {
  issue: types.Issue;
  issueList: types.Issue[];
  isShowDetail: boolean;
  handleShowDetail: Function;
  handleChangeSelectedIssue: (issue: types.Issue) => void;
  handleUpdateIssue: (newList: types.Issue[]) => void;
}

const IssueItem = (props: IssueItemProps) => {
  const {
    issue,
    issueList,
    isShowDetail,
    handleShowDetail,
    handleChangeSelectedIssue,
    handleUpdateIssue,
  } = props;

  const valueButton = issue.isOpen === true ? 'Close' : 'Reopen';

  const handleOnClickTitle = (issueItem: types.Issue) => () => {
    handleChangeSelectedIssue(issueItem);
    handleShowDetail(!isShowDetail);
  };

  const handleChangeStatus = () => {
    handleUpdateIssue(
      issueList.map((item) =>
        item.id === issue.id
          ? {
              ...item,
              isOpen: !item.isOpen,
            }
          : item
      )
    );
  };

  return (
    <IssueItemStyled id={issue.id.toString()}>
      <Label
        isOpen={issue.isOpen}
        value={issue.title}
        handleOnClick={handleOnClickTitle(issue)}
      />
      <Button name="status-btn" value={valueButton} handleOnClick={handleChangeStatus} />
    </IssueItemStyled>
  );
};

export default IssueItem;
