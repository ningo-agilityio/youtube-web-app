export const API = {
  URL: 'https://www.googleapis.com/youtube/v3/',
  KEY: 'AIzaSyD_aSsu01KOQGhKLTa6QBfp-a7OG7SAr4Q',
  ID_CHANNEL: 'UCWu91J5KWEj1bQhCBuGeJxw',
  // VIDEOS_URL:
  //   'videos?part=snippet,statistics&chart=mostPopular&key=AIzaSyBa2DGCYWqDFDihKuwgEEa1ztfgWTwI4O0&regionCode=vn',
  // CLIENT_ID:
  //   '573746775859-s6pug3gjv9tch0vae2gvjjdlkr4mdkmf.apps.googleusercontent.com',
  URL_PARAMS: 'part=snippet,id&order=date&fields=items',
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
