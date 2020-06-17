import Reactotron from 'reactotron-react-js';
import React, { useState, useEffect, useMemo, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import { Issue, RootState } from './buildTypes/buildTypes';
import * as constants from './constants/constants';
import * as color from './theme/color';
import * as metric from './theme/metric';
import Context from './contexts/contexts';
import Title from './components/Title';
import Button from './components/Button';
import { Form } from './components/Form';
import IssueDetail from './components/IssueDetail';
import ErrorBoundary from './components/ErrorBoundary';
import {
  toggleForm,
  fetchDataSuccess,
} from './actions';
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

const SpinnerStyled = styled.div`
  width: 100%;
  height: 100%;
  color: ${color.primaryColor};
  text-align: center;
`;

const IssueList = lazy(() => import('./components/IssueList'));

const App = () => {
  const dispatch = useDispatch();
  const [selectedIssue, setSelectedIssue] = useState<Issue>(
    constants.issueDefault
  );

  const isShowForm = useSelector((state: RootState) => state.toggleForm);
  const isShowDetail = useSelector((state: RootState) => state.toggleDetail);
  const issueList = useSelector(
    (state: RootState) => state.handleIssueList.issueList
  );

  // handle update selected issue
  const handleChangeSelectedIssue = (issue: Issue) => {
    setSelectedIssue(issue);
  };

  // handle open form when click new issue button
  const handleOnClickNew = () => {
    if (!isShowDetail) {
      dispatch(toggleForm());
    }
  };

  // set value of context
  const valueContext = useMemo(
    () => ({
      isShowDetail,
      issueList,
      handleChangeSelectedIssue,
    }),
    [isShowDetail, issueList]
  );

  // get data from api
  useEffect(() => {
    axios
      .get(`${constants.API.url}?timestamp=${new Date().getTime()}`)
      .then((response) => {
        dispatch(fetchDataSuccess(response.data));
        console.log(response.data);
      });
  }, [dispatch]);

  // Reactotron.log('hello rendering world');

  return (
    <AppStyled>
      <Title value={constants.TITLE} />
      <Button
        name={constants.BTN_PRIMARY}
        value={constants.BTN_NEW}
        type="button"
        onClick={handleOnClickNew}
      />
      <Wrapper>
        <Context.Provider value={valueContext}>
          <Suspense fallback={<SpinnerStyled>Loading...</SpinnerStyled>}>
            <IssueList selectedIssue={selectedIssue} isShowForm={isShowForm} />
          </Suspense>
        </Context.Provider>

        {isShowForm && (
          <WrapperForm>
            <Form
              selectedIssue={selectedIssue}
              handleChangeSelectedIssue={handleChangeSelectedIssue}
            />
          </WrapperForm>
        )}

        {isShowDetail && (
          <WrapperForm>
            <ErrorBoundary>
              <IssueDetail
                issue={selectedIssue}
                handleChangeSelectedIssue={handleChangeSelectedIssue}
              />
            </ErrorBoundary>
          </WrapperForm>
        )}
      </Wrapper>
    </AppStyled>
  );
};

export default App;
