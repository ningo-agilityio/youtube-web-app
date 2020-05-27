import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import * as types from './buildTypes/buildTypes';
import * as constants from './constants/constants';
import Context from './contexts/contexts';
import { Title } from './components/Title';
import { Button } from './components/Button';
import { Form } from './components/Form';
import { IssueList } from './components/IssueList';
import { IssueDetail } from './components/IssueDetail';

axios.defaults.headers.common.Authorization = `Bearer ${constants.API.token}`;

const AppStyled = styled.div`
  padding: 0 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const App = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [issueList, setIssueList] = useState<types.Issue[]>(
    constants.listDefault
  );
  const [selectedIssue, setSelectedIssue] = useState<types.Issue>(
    constants.issueDefault
  );
  const [isShowForm, setIsShowForm] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(false);

  const handleUpdateIssue = (list: types.Issue[]) => {
    setIssueList(list);
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

  useEffect(() => {
    axios.get(`${constants.API.url}`).then((response) => {
      setIssueList(response.data);
    });
  }, []);

  useLayoutEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current!.focus();
    }
  });

  return (
    <AppStyled>
      <Title value={constants.TITLE} />
      <Button
        name="main-btn"
        value="New issue"
        type="button"
        handleOnClick={handleClickNew}
      />
      <Wrapper>
        <Context.Provider
          value={{
            handleShowDetail: handleShowDetail(true),
            handleUpdateIssue,
            handleChangeSelectedIssue,
          }}
        >
          <IssueList
            issueList={issueList}
            isShowDetail={isShowDetail}
            isShowForm={isShowForm}
          />
        </Context.Provider>
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
