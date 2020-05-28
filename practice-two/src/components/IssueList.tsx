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
  padding: ${metric.PADDING_3};
  margin: 0;
  list-style: none;
  overflow: auto;
`;

export const IssueList = React.memo((props: IssueListProps) => {
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
});
