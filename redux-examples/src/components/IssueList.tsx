import React from 'react';
import styled from 'styled-components';
import { IssueListProps } from '../buildTypes/buildTypes';
import { secondaryColor } from '../theme/color';
import * as metric from '../theme/metric';
import IssueItem from './IssueItem';
import Context from '../contexts/contexts';

export const IssueListStyled = styled.ul`
  background: ${secondaryColor};
  width: ${(props: IssueListProps) =>
    props.selectedIssue.id || props.isShowForm ? '50%' : '100%'};
  padding: ${metric.PADDING.md};
  margin: 0;
  list-style: none;
  overflow: auto;
`;

const IssueList = (props: IssueListProps) => {
  const context = React.useContext(Context);
  console.log('list into', context.issueList);

  return (
    <IssueListStyled {...props}>
      {context.issueList.map((item) => (
        <IssueItem key={item.id!.toString()} issue={item} />
      ))}
    </IssueListStyled>
  );
};

IssueList.defaultProps = { selectedIssue: {}, isShowForm: false };

const areEqual = (prevProps: IssueListProps, nextProps: IssueListProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
};

export default React.memo(IssueList, areEqual);
