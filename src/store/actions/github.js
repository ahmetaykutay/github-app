import {
  FETCH_REPOSITORIES,
  FETCH_REPOSITORIES_SUCCESS
} from '../actions/actionTypes'

export const fetchRepos = payload => ({ type: FETCH_REPOSITORIES, payload })
export const fetchReposSuccess = payload => ({
  type: FETCH_REPOSITORIES_SUCCESS,
  payload
})
