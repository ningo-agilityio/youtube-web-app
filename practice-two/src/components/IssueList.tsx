import React from 'react';
import styled from 'styled-components';
import { IssueListProps, Issue } from '../buildTypes/buildTypes';
import { secondaryColor } from '../theme/color';
import * as metric from '../theme/metric';
import IssueItem from './IssueItem';

export const IssueListStyled = styled.ul`
  background: ${secondaryColor};
  width: ${(props: IssueListProps) =>
    props.isShowDetail || props.isShowForm ? '50%' : '100%'};
  padding: ${metric.PADDING.md};
  margin: 0;
  list-style: none;
  overflow: auto;
`;

const IssueList = (props: IssueListProps) => {
  const { issueList, isShowDetail } = props;

  const renderList = (list: Issue[]) =>
    list.map((item) => (
      <IssueItem
        key={item.id!.toString()}
        issue={item}
        issueList={list}
        isShowDetail={isShowDetail}
      />
    ));

  return <IssueListStyled {...props}>{renderList(issueList)}</IssueListStyled>;
};

const areEqual = (prevProps: IssueListProps, nextProps: IssueListProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
};

export default React.memo(IssueList, areEqual);
