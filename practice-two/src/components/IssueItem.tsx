import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import * as types from '../buildTypes/buildTypes';
import Context from '../contexts/contexts';
import * as constants from '../constants/constants';
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

  const valueButton = issue.locked === false ? 'Lock' : 'Unlock';

  const getIssue = (issueItem: types.Issue) => {
    axios
      .get(`${constants.URL_API}/${issueItem.id}`)
      .then((response) => context.handleChangeSelectedIssue(response.data));
  };

  const lockIssue = (issueItem: types.Issue) => {
    axios
      .put(`${constants.URL_API}/${issueItem.id}/lock`, { locked: true })
      .then(() => true);
  };

  const unLockIssue = (issueItem: types.Issue) => {
    axios.delete(`${constants.URL_API}/${issueItem.id}/lock`).then(() => false);
  };

  const handleOnClickTitle = (issueItem: types.Issue) => () => {
    getIssue(issueItem);
    context.handleShowDetail(!isShowDetail);
  };

  const handleChangeStatus = () => {
    issueList.map((item) =>
      item.id === issue.id
        ? {
            ...item,
            locked: issue.locked ? unLockIssue(item) : lockIssue(item),
          }
        : item
    );
    context.handleUpdateIssue(issueList);
  };

  return (
    <IssueItemStyled id={issue.id!.toString()}>
      <Label
        locked={issue.locked}
        value={issue.title}
        handleOnClick={handleOnClickTitle(issue)}
      />
      <Button
        name="lock-btn"
        value={valueButton}
        type="button"
        handleOnClick={handleChangeStatus}
      />
    </IssueItemStyled>
  );
};

export default IssueItem;
