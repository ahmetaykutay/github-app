import {
  FETCH_REPOSITORIES,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORIES_FAIL
} from '../actions/actionTypes'

const initialState = {
  repositories: [],
  isInProgress: false,
  error: null
}

export default function(state = initialState, action) {
  const { payload } = action
  switch (action.type) {
    case FETCH_REPOSITORIES:
      return { ...state, isInProgress: true }
    case FETCH_REPOSITORIES_FAIL:
      return { ...state, isInProgress: false, error: payload }
    case FETCH_REPOSITORIES_SUCCESS:
      return { ...state, repositories: payload, isInProgress: false, error: null }
    default:
      return state
  }
}
