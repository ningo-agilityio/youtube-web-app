import { call, put, takeLatest } from 'redux-saga/effects';
import { API, ACTION } from 'constants/index';
import api from 'apis';

export function* fetchCommentList() {
  try {
    const response = yield call(() =>
      api.get(
        `search?key=${API.KEY}&channelId=${API.ID_CHANNEL}&${API.URL_PARAMS}&${API.MAX_RESULTS}`
      )
    );
    yield put({
      type: ACTION.FETCH_VIDEO_SUCCESS,
      videoList: response.data.items,
    });
  } catch (error) {
    yield put({
      type: ACTION.FETCH_VIDEO_ERROR,
      error,
    });
  }
}

function* videoListSaga() {
  yield takeLatest(ACTION.FETCH_VIDEO_PENDING, fetchCommentList);
}

export default videoListSaga;
