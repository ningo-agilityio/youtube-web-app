import React, { useState, useEffect, useMemo, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Issue } from './buildTypes/buildTypes';
import * as constants from './constants/constants';
import * as metric from './theme/metric';
import Context from './contexts/contexts';
import { Title } from './components/Title';
import Button from './components/Button';
import { Form } from './components/Form';
import IssueList from './components/IssueList';
import { IssueDetail } from './components/IssueDetail';
import { Spinner } from './components/Spinner';
import './configs/api';

const AppStyled = styled.div`
  padding: 0 ${metric.PADDING.lg};
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const WrapperForm = styled.div`
  width: 50%;
  margin-left: 1rem;
`;

const App = () => {
  const [issueList, setIssueList] = useState<Issue[]>(constants.listDefault);
  const [selectedIssue, setSelectedIssue] = useState<Issue>(
    constants.issueDefault
  );
  const [isShowForm, setIsShowForm] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleSaveChange = useCallback((issue: Issue) => {
    const newList = issueList.slice();
    const editItem = newList.find((item) => item.id === issue.id);
    if (editItem) {
      editItem.title = issue.title;
      editItem.body = issue.body;
    } else {
      newList.unshift(issue);
    }
    setIssueList(newList);
  }, [issueList]);

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

  const valueContext = useMemo(
    () => ({
      issueList,
      isShowDetail,
      toggleDetail: toggleDetail(true),
      handleSaveChange,
      handleChangeSelectedIssue,
    }),
    [handleSaveChange, isShowDetail, issueList]
  );

  useEffect(() => {
    axios
      .get(`${constants.API.url}?timestamp=${new Date().getTime()}`)
      .then((response) => {
        setIssueList(response.data);
        setLoading(false);
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
        <Context.Provider value={valueContext}>
          {loading ? (
            <Spinner />
          ) : (
            <IssueList selectedIssue={selectedIssue} isShowForm={isShowForm} />
          )}
        </Context.Provider>

        {isShowForm && (
          <WrapperForm>
            <Form
              selectedIssue={selectedIssue}
              handleChangeSelectedIssue={handleChangeSelectedIssue}
              toggleForm={toggleForm(!isShowForm)}
              handleSaveChange={handleSaveChange}
            />
          </WrapperForm>
        )}
        {isShowDetail && (
          <WrapperForm>
            <IssueDetail
              issue={selectedIssue}
              handleChangeSelectedIssue={handleChangeSelectedIssue}
              toggleForm={toggleForm(!isShowForm)}
              toggleDetail={toggleDetail(false)}
            />
          </WrapperForm>
        )}
      </Wrapper>
    </AppStyled>
  );
};

export default App;
