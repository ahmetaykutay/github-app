import {
  FETCH_REPOSITORIES,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORIES_FAIL,
  SET_SEARCH_TYPE
} from '../actions/actionTypes'

const initialState = {
  repositories: [],
  isInProgress: false,
  error: null,
  searchType: {
    label: 'Search Repos',
    value: 'repos',
    title: 'Let\'s search some Github repos'
  }
}

export default function(state = initialState, action) {
  const { payload } = action
  switch (action.type) {
  case FETCH_REPOSITORIES:
    return { ...state, isInProgress: true }
  case FETCH_REPOSITORIES_FAIL:
    return { ...state, isInProgress: false, error: payload }
  case FETCH_REPOSITORIES_SUCCESS:
    return {
      ...state,
      repositories: payload,
      isInProgress: false,
      error: null
    }
  case SET_SEARCH_TYPE:
    return { ...state, searchType: payload }
  default:
    return state
  }
}
