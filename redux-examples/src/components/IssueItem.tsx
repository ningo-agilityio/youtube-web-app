import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import * as constants from '../constants/constants';
import { Issue, IssueItemProps } from '../buildTypes/buildTypes';
import { grayColor } from '../theme/color';
import * as metric from '../theme/metric';
import Context from '../contexts/contexts';
import Label from './Label';
import Button from './Button';
import { editIssue, toggleDetail } from '../actions';

export const IssueItemStyled = styled.li`
  border-bottom: 0.05rem solid ${grayColor};
  padding: ${metric.PADDING.sm} 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  &:last-child {
    border-bottom: none;
  }
`;

const IssueItem = (props: IssueItemProps) => {
  const { issue } = props;
  const dispatch = useDispatch();

  const context = React.useContext(Context);

  // set value of button
  const valueButton = issue.locked ? constants.BTN_UNLOCK : constants.BTN_LOCK;

  // get an issue from api change selected issue
  const getIssue = (issueItem: Issue) => {
    axios.get(`${constants.API.url}/${issueItem.number}`).then(() => {
      context.handleChangeSelectedIssue(issueItem);
    });
  };

  // lock an issue
  const lockIssue = (issueItem: Issue) => {
    axios
      .put(`${constants.API.url}/${issueItem.number}/lock`, { locked: true })
      .then(() => {
        const newIssue = { ...issueItem };
        newIssue.locked = !newIssue.locked;
        dispatch(editIssue(newIssue));
      });
  };

  // unlock an issue
  const unLockIssue = (issueItem: Issue) => {
    axios.delete(`${constants.API.url}/${issueItem.number}/lock`).then(() => {
      const newIssue = { ...issueItem };
      newIssue.locked = !newIssue.locked;
      dispatch(editIssue(newIssue));
    });
  };

  // when click on issue then show info of issue in detail form
  const handleOnClickTitle = (issueItem: Issue) => () => {
    getIssue(issueItem);
    dispatch(toggleDetail());
  };

  // toggle lock status
  const handleChangeStatus = () => {
    if (issue) {
      !issue.locked ? lockIssue(issue) : unLockIssue(issue);
    }
  };

  // set style name title issue when lock and unlock
  const nameLabel = issue.locked ? constants.LABEL_DARK : constants.LABEL_LIGHT;

  // set style name button when lock an unlock
  const nameBtn = issue.locked
    ? constants.BTN_NO_OUTLINE_DARK
    : constants.BTN_NO_OUTLINE_LIGHT;

  return (
    <IssueItemStyled id={issue.id!.toString()}>
      <Label
        name={nameLabel}
        locked={issue.locked}
        value={issue.title}
        onClick={handleOnClickTitle(issue)}
      />
      <Button
        name={nameBtn}
        value={valueButton}
        type="button"
        onClick={handleChangeStatus}
      />
    </IssueItemStyled>
  );
};

IssueItem.defaultProps = { issue: {} };

const areEqual = (prevProps: IssueItemProps, nextProps: IssueItemProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
};

export default React.memo(IssueItem, areEqual);
