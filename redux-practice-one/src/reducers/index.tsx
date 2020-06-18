import { combineReducers } from 'redux';
import { toggleForm } from './toggleForm';
import { handleVideoList } from './videoList';
import { selectedVideo } from './selectedVideo';
import { commentList } from './commentList';

const rootReducer = combineReducers({
  toggleForm,
  handleVideoList,
  selectedVideo,
  commentList,
});

export default rootReducer;
