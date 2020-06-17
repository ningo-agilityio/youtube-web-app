import { combineReducers } from 'redux';
import { toggleForm } from './toggleForm';
import { handleVideoList } from './videoList';
import { selectedVideo } from './selectedVideo';

const rootReducer = combineReducers({
  toggleForm,
  handleVideoList,
  selectedVideo,
});

export default rootReducer;
