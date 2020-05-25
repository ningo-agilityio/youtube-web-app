import React from 'react';
import styled from 'styled-components';
import * as types from '../buildTypes/buildTypes';
import Context from '../contexts/contexts';
import { Label } from './Label';
import { Button } from './Button';

export const IssueItemStyled = styled.li`
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
}

const IssueItem = (props: IssueItemProps) => {
  const { issue, issueList, isShowDetail } = props;

  const context = React.useContext(Context);

  const valueButton = issue.isOpen === true ? 'Close' : 'Reopen';

  const handleOnClickTitle = (issueItem: types.Issue) => () => {
    context.handleChangeSelectedIssue(issueItem);
    context.handleShowDetail(!isShowDetail);
  };

  const handleChangeStatus = () => {
    context.handleUpdateIssue(
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
      <Button
        name="status-btn"
        value={valueButton}
        type="button"
        handleOnClick={handleChangeStatus}
      />
    </IssueItemStyled>
  );
};

export default IssueItem;
