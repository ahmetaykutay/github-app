import { fork, takeEvery, put } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'
import actions from '../actions'
import { getRepos } from '../../lib/github-api'

function* fetchRepos(action) {
  const { payload: username } = action
  try {
    const res = yield getRepos(username)
    yield put(actions.github.fetchReposSuccess(res))
  } catch (error) {
    yield put(actions.github.fetchReposFail(error))
  }
}

function* watch() {
  yield takeEvery(actionTypes.FETCH_REPOSITORIES, fetchRepos)
}

export default [fork(watch)]
