import { HandleVideoListAction, HandleVideoListState } from 'buildTypes';
import { ACTION, initHandleVideoListState } from 'constants/index';

export const handleVideoList = (
  state: HandleVideoListState = initHandleVideoListState,
  action: HandleVideoListAction
) => {
  switch (action.type) {
    case ACTION.FETCH_DATA_PENDING:
      return {
        ...state,
        pending: true,
      };
    case ACTION.FETCH_DATA_SUCCESS:
      return {
        ...state,
        pending: false,
        videoList: action.videoList,
      };
    case ACTION.FETCH_DATA_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case ACTION.UPLOAD_VIDEO:
      return {
        ...state,
        pending: false,
        videoList: [...state.videoList, action.video],
      };
    case ACTION.EDIT_VIDEO:
      return {
        ...state,
        pending: false,
        videoList: state.videoList.map((video) =>
          video.id === action.video.id ? action.video : video
        ),
      };
    default:
      return state;
  }
};
