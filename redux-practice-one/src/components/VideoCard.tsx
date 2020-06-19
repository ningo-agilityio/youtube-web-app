import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import { VideoCardProps } from 'buildTypes';
import { BTN, API } from 'constants/index';
import { selectedVideo, fetchCommentSuccess } from 'actions';
import Button from './Button';

const VideoCardStyled = styled.li`
  max-width: 20rem;
  min-height: 17.5rem;
  margin: 2rem 0.5rem;
  cursor: pointer;
  position: relative;
`;

const Thumbnail = styled.img``;

const Title = styled.h4`
  margin: 0.5rem 0;
`;

const WrapperBottom = styled.div`
  position: absolute;
  bottom: 0;
  text-align:right;
  min-width: 20rem;
`;

export const VideoCard = (props: VideoCardProps) => {
  const { video } = props;
  const dispatch = useDispatch();

  const handleOnClickView = () => {
    dispatch(selectedVideo(video));
    axios
      .get(
        `${API.URL}commentThreads?&part=snippet&key=${API.KEY}&videoId=${video.id.videoId}&${API.MAX_RESULTS}`
      )
      .then((response) => {
        dispatch(fetchCommentSuccess(response.data.items));
      });
  };

  return (
    <VideoCardStyled>
      <Thumbnail src={video.snippet.thumbnails.medium.url} />
      <Title>{video.snippet.title}</Title>
      <WrapperBottom>
        <Button
          name={BTN.SECONDARY}
          value="view comments"
          type="button"
          onClick={handleOnClickView}
        />
      </WrapperBottom>
    </VideoCardStyled>
  );
};
