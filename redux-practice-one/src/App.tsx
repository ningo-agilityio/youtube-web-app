import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import { RootState } from 'buildTypes';
import { API } from 'constants/index';
import { colors } from 'theme/color';
import { fetchDataSuccess } from 'actions';
import { Header } from 'components/Header';
import { Form } from 'components/Form';
import { VideoList } from 'components/VideoList';
import { CommentList } from 'components/CommentList';
import './App.css';

const AppStyled = styled.div``;

const WrapperForm = styled.div`
  position: fixed;
  z-index: 1;
  background-color: ${colors.SILVER};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  const dispatch = useDispatch();
  const isShowForm = useSelector((state: RootState) => state.toggleForm);
  const videoList = useSelector(
    (state: RootState) => state.handleVideoList.videoList
  );

  const commentList = useSelector((state: RootState) => state.commentList);
  const selectedVideo = useSelector((state: RootState) => state.selectedVideo);

  useEffect(() => {
    axios
      .get(
        `${API.URL}search?key=${API.KEY}&channelId=${API.ID_CHANNEL}&${API.URL_PARAMS}&${API.MAX_RESULTS}`
      )
      .then((response) => {
        dispatch(fetchDataSuccess(response.data.items));
      });
  }, [dispatch]);

  return (
    <AppStyled>
      <Header />
      <VideoList videoList={videoList} />
      {isShowForm && (
        <WrapperForm>
          <Form />
        </WrapperForm>
      )}

      {selectedVideo.id.videoId && (
        <WrapperForm>
          <CommentList commentList={commentList} />
        </WrapperForm>
      )}
    </AppStyled>
  );
};

export default App;
