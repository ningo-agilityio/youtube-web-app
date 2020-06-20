import { Video, Comment } from 'buildTypes';
import { ACTION } from 'constants/index';

export const toggleForm = () => ({
  type: ACTION.TOGGLE_FORM,
});

export const fetchVideoPending = () => ({
  type: ACTION.FETCH_VIDEO_PENDING,
});

export const fetchVideoSuccess = (videoList: Video[]) => ({
  type: ACTION.FETCH_VIDEO_SUCCESS,
  videoList,
});

export const fetchVideoError = (error: Error) => ({
  type: ACTION.FETCH_VIDEO_ERROR,
  error,
});

export const uploadVideo = (video: Video) => ({
  type: ACTION.UPLOAD_VIDEO,
  video,
});

export const selectedVideo = (video: Video) => ({
  type: ACTION.SELECTED_VIDEO,
  video,
});

export const fetchCommentPending = () => ({
  type: ACTION.FETCH_COMMENT_PENDING,
});

export const fetchCommentSuccess = (commentList: Comment[]) => ({
  type: ACTION.FETCH_COMMENT_SUCCESS,
  commentList,
});

export const fetchCommentError = (error: Error) => ({
  type: ACTION.FETCH_COMMENT_ERROR,
  error,
});
