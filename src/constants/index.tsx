export const API = {
  URL: 'https://www.googleapis.com/youtube/v3/',
  KEY: 'AIzaSyARbna02GAVO_QTAW_8GQ_yYDcDbqM2hIw',
  ID_CHANNEL: 'UCuhAUMLzJxlP1W7mEk0_6lA',
  CLIENT_ID:
    '1051706527491-g4gklvsde8s3fcgsd3vhhlc5vkokargu.apps.googleusercontent.com',
  URL_PARAMS: 'part=snippet,id&order=date',
  MAX_RESULTS: 'maxResults=10',
};

export const ACTION = {
  TOGGLE_FORM: 'TOGGLE_FORM',
  FETCH_VIDEO_PENDING: 'FETCH_VIDEO_PENDING',
  FETCH_VIDEO_SUCCESS: 'FETCH_VIDEO_SUCCESS',
  FETCH_VIDEO_ERROR: 'FETCH_VIDEO_ERROR',
  FETCH_COMMENT_PENDING: 'FETCH_COMMENT_PENDING',
  FETCH_COMMENT_SUCCESS: 'FETCH_COMMENT_SUCCESS',
  FETCH_COMMENT_ERROR: 'FETCH_COMMENT_SUCCESS',
  UPLOAD_VIDEO: 'UPLOAD_VIDEO',
  SELECTED_VIDEO: 'SELECTED_VIDEO',
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
