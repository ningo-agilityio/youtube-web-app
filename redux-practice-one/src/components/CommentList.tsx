import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { colors } from 'theme/color';
import { CommentListProps } from 'buildTypes';
import { BTN, initVideo } from 'constants/index';
import { selectedVideo } from 'actions';
import Button from 'components/Button';

const Container = styled.div`
  background: ${colors.WHITE};
  border: 0.05rem solid ${colors.GRAY};
  border-radius: 0.5rem;
  padding: 2rem;
`;

const Wrapper = styled.div`
  display:flex;
  justify-content: space-between;
`;

const CommentListStyled = styled.ul`
  background: ${colors.WHITE};
  min-width: 25rem;
  max-width: 70vh;
  max-height: 80vh;
  box-sizing: border-box;
  list-style: none;
  overflow: scroll;
  padding: 0;
`;

const CommentStyled = styled.li`
  margin: 1rem 0;
`;

const ImgStyled = styled.img`
  border-radius: 50%;
`;

const NameAuthor = styled.h5`
  margin: 0;
`;

const Text = styled.p`
  margin: 0;
`;

export const CommentList = (props: CommentListProps) => {
  const { commentList } = props;
  const dispatch = useDispatch();
  const handleOnClickExit = () => {
    dispatch(selectedVideo(initVideo));
  };
  const handleOnClickAdd = () => {};

  return (
    <Container>
      <CommentListStyled>
        {commentList.map((comment) => (
          <CommentStyled key={comment.snippet.topLevelComment.id}>
            <ImgStyled
              src={
                comment.snippet.topLevelComment.snippet.authorProfileImageUrl
              }
              alt="avatar author"
            />
            <NameAuthor>
              {comment.snippet.topLevelComment.snippet.authorDisplayName}
            </NameAuthor>
            <Text>{comment.snippet.topLevelComment.snippet.textOriginal}</Text>
          </CommentStyled>
        ))}
      </CommentListStyled>
      <Wrapper>
        <Button
          name={BTN.SECONDARY}
          value="add comment"
          type="button"
          onClick={handleOnClickAdd}
        />
        <Button
          name={BTN.SECONDARY}
          value="exit"
          type="button"
          onClick={handleOnClickExit}
        />
      </Wrapper>
    </Container>
  );
};
