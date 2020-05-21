import React from 'react';
import styled from 'styled-components';
import * as types from '../buildTypes/buildTypes';
import IssueItem from './IssueItem';

const IssueListStyled = styled.ul`
  background: rgba(236, 103, 37, 0.1);
  width: ${(props: IssueListProps) =>
    props.isShowDetail === true || props.isShowForm === true ? '50%' : '100%'};
  padding: 1rem;
  margin: 0;
  list-style: none;
  overflow: auto;
`;

interface IssueListProps {
  issueList: types.Issue[];
  isShowDetail: boolean;
  isShowForm: boolean;
  handleShowDetail: Function;
  handleChangeSelectedIssue: (issue: types.Issue) => void;
}

export const IssueList = React.memo((props: IssueListProps) => {
  const {
    issueList,
    isShowDetail,
    handleShowDetail,
    handleChangeSelectedIssue,
  } = props;

  const renderList = (list: types.Issue[]) =>
    list.map((item) => (
      <IssueItem
        key={item.id.toString()}
        issue={item}
        isShowDetail={isShowDetail}
        handleShowDetail={handleShowDetail}
        handleChangeSelectedIssue={handleChangeSelectedIssue}
      />
    ));

  return <IssueListStyled {...props}>{renderList(issueList)}</IssueListStyled>;
});
