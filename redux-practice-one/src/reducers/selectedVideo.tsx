import { ACTION, initVideo } from '../constants/index';
import { Video, SelectedVideoAction } from '../buildTypes';

export const selectedVideo = (
  state: Video = initVideo,
  action: SelectedVideoAction
) => {
  switch (action.type) {
    case ACTION.SELECTED_VIDEO:
      return action.video;
    default:
      return state;
  }
};
