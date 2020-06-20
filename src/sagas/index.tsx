import { all } from 'redux-saga/effects';
import videoListSaga from './fetchVideoList';

export default function* RootSagas() {
  yield all([videoListSaga()]);
}
