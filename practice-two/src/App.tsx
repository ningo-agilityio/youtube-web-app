import React, { useState } from 'react';
import styled from 'styled-components';
import * as types from './buildTypes/buildTypes';
import * as constants from './constants/constants';
import { useLocalStorage } from './components/Storage';
import { Title } from './components/Title';
import { Button } from './components/Button';
import { Form } from './components/Form';
import { IssueList } from './components/IssueList';
import { IssueDetail } from './components/IssueDetail';
import data from './data.json';

const AppStyled = styled.div`
  padding: 0 2rem;
  background: ;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const App = () => {
  const [issueList, setIssueList] = useLocalStorage('issueList', data);
  const [selectedIssue, setSelectedIssue] = useState<types.Issue>(
    constants.issueDefault
  );
  const [isShowForm, setIsShowForm] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(false);

  const handleChangeSelectedIssue = (issue: types.Issue) => {
    setSelectedIssue(issue);
  };

  const handleShowForm = (isShow: boolean) => () => {
    setIsShowForm(isShow);
  };

  const handleShowDetail = (isShow: boolean) => {
    setIsShowDetail(isShow);
  };

  return (
    <AppStyled>
      <Title />
      <Button
        name="main-btn"
        value="New issue"
        handleOnClick={handleShowForm(true)}
      />
      <Wrapper>
        {isShowForm && (
          <Form
            nameForm="New Issue"
            handleIsShowForm={handleShowForm(!isShowForm)}
          />
        )}
        <IssueList
          issueList={issueList}
          isShowDetail={isShowDetail}
          isShowForm={isShowForm}
          handleShowDetail={handleShowDetail}
          handleChangeSelectedIssue={handleChangeSelectedIssue}
        />
        {isShowDetail && <IssueDetail issue={selectedIssue} />}
      </Wrapper>
    </AppStyled>
  );
};

export default App;
