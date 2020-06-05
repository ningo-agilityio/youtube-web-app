import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  lazy,
  Suspense,
} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Issue } from './buildTypes/buildTypes';
import * as constants from './constants/constants';
import * as color from './theme/color';
import * as metric from './theme/metric';
import Context from './contexts/contexts';
import Title from './components/Title';
import Button from './components/Button';
import { Form } from './components/Form';
import IssueDetail from './components/IssueDetail';
import ErrorBoundary from './components/ErrorBoundary';
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
  const [selectedIssue, setSelectedIssue] = useState<Issue>(
    constants.issueDefault
  );
  const [isShowForm, setIsShowForm] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [dataRequest, setDataRequest] = useState({
    loading: true,
    issueList: constants.listDefault,
  });

  // handle update list of issue after change data
  const handleSaveChange = useCallback(
    (issue: Issue) => {
      const newList = dataRequest.issueList.slice();
      const editItem = newList.find((item) => item.id === issue.id);
      if (editItem) {
        editItem.title = issue.title;
        editItem.body = issue.body;
      } else {
        newList.unshift(issue);
      }
      setDataRequest({ loading: false, issueList: newList });
    },
    [dataRequest.issueList]
  );

  // handle update selected issue
  const handleChangeSelectedIssue = (issue: Issue) => {
    setSelectedIssue(issue);
  };

  // handle toggle form
  const toggleForm = (isShow: boolean) => () => {
    setIsShowDetail(false);
    setIsShowForm(isShow);
  };

  // handle toggle detail box
  const toggleDetail = (isShow: boolean) => () => {
    setIsShowForm(false);
    setIsShowDetail(isShow);
  };

  // set value of context
  const valueContext = useMemo(
    () => ({
      isShowDetail,
      issueList: dataRequest.issueList,
      toggleDetail: toggleDetail(true),
      handleSaveChange,
      handleChangeSelectedIssue,
    }),
    [isShowDetail, dataRequest.issueList, handleSaveChange]
  );

  // get data from api
  useEffect(() => {
    axios
      .get(`${constants.API.url}?timestamp=${new Date().getTime()}`)
      .then((response) => {
        setDataRequest({ loading: false, issueList: response.data });
      });
  }, []);

  return (
    <AppStyled>
      <Title value={constants.TITLE} />
      <Button
        name={constants.BTN_PRIMARY}
        value={constants.BTN_NEW}
        type="button"
        onClick={toggleForm(true)}
      />
      <Wrapper>
        <Context.Provider value={valueContext}>
          <Suspense fallback={<SpinnerStyled>Loading...</SpinnerStyled>}>
            {!dataRequest.loading && (
              <IssueList
                selectedIssue={selectedIssue}
                isShowForm={isShowForm}
              />
            )}
          </Suspense>
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
            <ErrorBoundary>
              <IssueDetail
                issue={selectedIssue}
                handleChangeSelectedIssue={handleChangeSelectedIssue}
                toggleForm={toggleForm(!isShowForm)}
                toggleDetail={toggleDetail(false)}
              />
            </ErrorBoundary>
          </WrapperForm>
        )}
      </Wrapper>
    </AppStyled>
  );
};

export default App;
