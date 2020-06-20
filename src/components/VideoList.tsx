import React from 'react';
import styled from 'styled-components';
import { colors } from 'theme/color';
import { VideoListProps } from 'buildTypes';
import { VideoCard } from './VideoCard';

const VideoListStyled = styled.ul`
  background-color: ${colors.LIGHT_GRAY};
  padding: 2rem;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const VideoList = (props: VideoListProps) => {
  const { videoList } = props;
  return (
    <VideoListStyled>
      {videoList.map((video) => (
        <VideoCard key={video.id.videoId} video={video} />
      ))}
    </VideoListStyled>
  );
};
