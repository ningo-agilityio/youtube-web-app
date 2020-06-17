import { Video } from 'buildTypes';
import { ACTION } from 'constants/index';

export const toggleForm = () => ({
  type: ACTION.TOGGLE_FORM,
});

export const fetchDataPending = () => ({
  type: ACTION.FETCH_DATA_PENDING,
});

export const fetchDataSuccess = (videoList: Video[]) => ({
  type: ACTION.FETCH_DATA_SUCCESS,
  videoList,
});

export const fetchDataError = (error: Error) => ({
  type: ACTION.FETCH_DATA_ERROR,
  error,
});

export const uploadVideo = (video: Video) => ({
  type: ACTION.UPLOAD_VIDEO,
  video,
});

export const editVideo = (video: Video) => ({
  type: ACTION.EDIT_VIDEO,
  video,
});

export const deleteVideo = (video: Video) => ({
  type: ACTION.DELETE_VIDEO,
  video,
});

export const selectedVideo = (video: Video) => ({
  type: ACTION.SELECTED_VIDEO,
  video,
});
