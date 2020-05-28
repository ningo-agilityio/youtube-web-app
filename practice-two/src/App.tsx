import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Issue } from './buildTypes/buildTypes';
import * as constants from './constants/constants';
import * as metric from './theme/metric';
import Context from './contexts/contexts';
import { Title } from './components/Title';
import { Button } from './components/Button';
import { Form } from './components/Form';
import { IssueList } from './components/IssueList';
import { IssueDetail } from './components/IssueDetail';
import './configs/api';

const AppStyled = styled.div`
  padding: 0 ${metric.PADDING_4};
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const App = () => {
  const [issueList, setIssueList] = useState<Issue[]>(constants.listDefault);
  const [selectedIssue, setSelectedIssue] = useState<Issue>(
    constants.issueDefault
  );
  const [isShowForm, setIsShowForm] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(false);

  const handleUpdateIssue = (list: Issue[]) => {
    setIssueList(list);
  };

  const handleChangeSelectedIssue = (issue: Issue) => {
    setSelectedIssue(issue);
  };

  const toggleForm = (isShow: boolean) => () => {
    setIsShowDetail(false);
    setIsShowForm(isShow);
  };

  const toggleDetail = (isShow: boolean) => () => {
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

  return (
    <AppStyled>
      <Title value={constants.TITLE} />
      <Button
        name={constants.BTN_PRIMARY}
        value={constants.BTN_NEW}
        type="button"
        onClick={handleClickNew}
      />
      <Wrapper>
        <Context.Provider
          value={{
            toggleDetail: toggleDetail(true),
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
            issueList={issueList}
            selectedIssue={selectedIssue}
            handleChangeSelectedIssue={handleChangeSelectedIssue}
            toggleForm={toggleForm(!isShowForm)}
            handleUpdateIssue={handleUpdateIssue}
          />
        )}
        {isShowDetail && (
          <IssueDetail
            issue={selectedIssue}
            handleChangeSelectedIssue={handleChangeSelectedIssue}
            toggleForm={toggleForm(!isShowForm)}
            toggleDetail={toggleDetail(false)}
          />
        )}
      </Wrapper>
    </AppStyled>
  );
};

export default App;
