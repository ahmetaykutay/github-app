import { fork, takeEvery, put } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'
import actions from '../actions'
import { getRepos, getUserData } from '../../lib/github-api'

function* fetchRepos(action) {
  const { payload: username } = action
  try {
    const res = yield getRepos(username)
    yield put(actions.github.fetchReposSuccess(res))
  } catch (error) {
    yield put(actions.github.fetchReposFail(error.response.data.message))
  }
}

function* fetchOrgs(action) {
  const { payload: username } = action
  try {
    const res = yield getUserData(username)
    yield put(actions.github.fetchReposSuccess(res.orgs))
  } catch (error) {
    yield put(actions.github.fetchReposFail(error.response.data.message))
  }
}

function* watch() {
  yield takeEvery(actionTypes.FETCH_REPOSITORIES, fetchRepos)
  yield takeEvery(actionTypes.FETCH_ORGANIZATIONS, fetchOrgs)
}

export default [fork(watch)]
