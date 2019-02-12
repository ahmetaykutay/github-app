import {
  FETCH_REPOSITORIES,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORIES_FAIL
} from '../actions/actionTypes'

export const fetchRepos = payload => ({ type: FETCH_REPOSITORIES, payload })
export const fetchReposFail = payload => ({ type: FETCH_REPOSITORIES_FAIL, payload })
export const fetchReposSuccess = payload => ({
  type: FETCH_REPOSITORIES_SUCCESS,
  payload
})
