import { all, fork, takeLatest, call, put } from 'redux-saga/effects';

import { getFeedData } from '../api/index';
import * as feed from './feed';

function* getMainFeed(action: feed.FeedAction) {
  try {
    const feedData = yield call(getFeedData, action.payload);
    yield put({
      type: feed.GET_FEED_SUCCESS,
      payload: feedData,
    });
  } catch (error) {
    yield put({
      type: feed.GET_FEED_FAILURE,
      payload: error,
    });
  }
}

export function* feedSaga() {
  yield takeLatest(feed.GET_FEED, getMainFeed);
}
