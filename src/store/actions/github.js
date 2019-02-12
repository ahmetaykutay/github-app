import {
  FETCH_REPOSITORIES,
  FETCH_ORGANIZATIONS,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORIES_FAIL,
  SET_SEARCH_TYPE
} from './actionTypes'

export const fetchRepos = payload => ({ type: FETCH_REPOSITORIES, payload })
export const fetchOrgs = payload => ({ type: FETCH_ORGANIZATIONS, payload })
export const fetchReposFail = payload => ({
  type: FETCH_REPOSITORIES_FAIL,
  payload
})
export const fetchReposSuccess = payload => ({
  type: FETCH_REPOSITORIES_SUCCESS,
  payload
})
export const setSearchType = payload => ({ type: SET_SEARCH_TYPE, payload })
