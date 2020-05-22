import React, { useState, useRef, useLayoutEffect } from 'react';
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
  const inputRef = useRef<HTMLInputElement>(null);
  const [issueList, setIssueList] = useLocalStorage('issueList', data);
  const [selectedIssue, setSelectedIssue] = useState<types.Issue>(
    constants.issueDefault
  );
  const [isShowForm, setIsShowForm] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(false);

  const handleUpdateIssue = (newList: types.Issue[]) => {
    setIssueList([...newList]);
  };

  const handleChangeSelectedIssue = (issue: types.Issue) => {
    setSelectedIssue(issue);
  };

  const handleShowForm = (isShow: boolean) => () => {
    setIsShowDetail(false);
    setIsShowForm(isShow);
  };

  const handleShowDetail = (isShow: boolean) => () => {
    setIsShowForm(false);
    setIsShowDetail(isShow);
  };

  const handleClickNew = () => {
    if (!isShowDetail) {
      setIsShowForm(true);
    }
  };

  useLayoutEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  });

  return (
    <AppStyled>
      <Title value={constants.TITLE} />
      <Button
        name="main-btn"
        value="New issue"
        handleOnClick={handleClickNew}
      />
      <Wrapper>
        <IssueList
          issueList={issueList}
          isShowDetail={isShowDetail}
          isShowForm={isShowForm}
          handleShowDetail={handleShowDetail(true)}
          handleChangeSelectedIssue={handleChangeSelectedIssue}
          handleUpdateIssue={handleUpdateIssue}
        />
        {isShowForm && (
          <Form
            inputRef={inputRef}
            issueList={issueList}
            selectedIssue={selectedIssue}
            handleChangeSelectedIssue={handleChangeSelectedIssue}
            handleShowForm={handleShowForm(!isShowForm)}
            handleUpdateIssue={handleUpdateIssue}
          />
        )}
        {isShowDetail && (
          <IssueDetail
            issue={selectedIssue}
            handleChangeSelectedIssue={handleChangeSelectedIssue}
            handleShowForm={handleShowForm(!isShowForm)}
            handleShowDetail={handleShowDetail(false)}
          />
        )}
      </Wrapper>
    </AppStyled>
  );
};

export default App;
