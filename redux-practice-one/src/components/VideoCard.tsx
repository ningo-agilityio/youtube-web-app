import React from 'react';
import styled from 'styled-components';
import { VideoCardProps } from 'buildTypes';
import { BTN } from 'constants/index';
import Button from './Button';

const VideoCardStyled = styled.div`
  max-width: 20rem;
  min-height: 17rem;
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
  min-width: 20rem;
`;

const WrapperFlex = styled.div`
  display: flex;
  justify-content: space-between;

`;

export const VideoCard = (props: VideoCardProps) => {
  const { video } = props;
  const handleOnClickEdit = () => {};
  const handleOnClickDelete = () => {};

  return (
    <VideoCardStyled>
      <Thumbnail src={video.snippet.thumbnails.medium.url} />
      <Title>{video.snippet.title}</Title>
      <WrapperBottom>
        <WrapperFlex>
          <Button
            name={BTN.SECONDARY}
            value="edit"
            type="button"
            onClick={handleOnClickEdit}
          />
          <Button
            name={BTN.SECONDARY}
            value="delete"
            type="button"
            onClick={handleOnClickDelete}
          />
        </WrapperFlex>
      </WrapperBottom>
    </VideoCardStyled>
  );
};
