/* eslint-disable prefer-destructuring */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { RootState } from 'buildTypes';
import { colors } from 'theme/color';
import { fetchVideoPending } from 'actions';
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
    // const gapi = window.gapi;
    // // gapi.load('auth2', () => {
    // //   const auth2 = gapi.auth2;
    // // });
    // const auth2 = gapi.auth2;
    // auth2.authorize(
    //   {
    //     client_id:
    //       '573746775859-s6pug3gjv9tch0vae2gvjjdlkr4mdkmf.apps.googleusercontent.com',
    //     scope: 'https://www.googleapis.com/auth/youtube',
    //     // immediate: false,
    //   },
    //   (response) => {
    //     console.log('response', response);



    
    //   }
    // );
    // dispatch(fetchVideoPending());
    
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
