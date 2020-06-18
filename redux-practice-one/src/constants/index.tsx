export const API = {
  URL: 'https://www.googleapis.com/youtube/v3/',
  KEY: 'AIzaSyBogS86rxllvIzWciwD3eXNO_s8r9y0LzM',
  ID_CHANNEL: 'UCuhAUMLzJxlP1W7mEk0_6lA',
  CLIENT_ID:
    '1051706527491-g4gklvsde8s3fcgsd3vhhlc5vkokargu.apps.googleusercontent.com',
  URL_PARAMS: 'part=snippet,id&order=date',
  MAX_RESULTS: 'maxResults=10',
};

export const ACTION = {
  TOGGLE_FORM: 'TOGGLE_FORM',
  FETCH_DATA_PENDING: 'FETCH_DATA_PENDING',
  FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
  FETCH_DATA_ERROR: 'FETCH_DATA_ERROR',
  UPLOAD_VIDEO: 'UPLOAD_VIDEO',
  EDIT_VIDEO: 'EDIT_VIDEO',
  DELETE_VIDEO: 'DELETE_VIDEO',
  SELECTED_VIDEO: 'SELECTED_VIDEO',
  FETCH_DATA_COMMENT: 'FETCH_DATA__COMMENT',
};

export const BTN = {
  PRIMARY: 'BTN-PRIMARY',
  SECONDARY: 'BTN-SECONDARY',
};

export const initHandleVideoListState = {
  pending: false,
  videoList: [],
  error: null,
};

export const initVideo = {
  id: {
    videoId: '',
  },
  snippet: {
    title: '',
    description: '',
    thumbnails: {
      medium: {
        url: '',
      },
    },
  },
};
