import {
  FETCH_REPOSITORIES,
  FETCH_REPOSITORIES_SUCCESS
} from '../actions/actionTypes'

const initialState = {
  repositories: [],
  isInProgress: false
}

export default function(state = initialState, action) {
  const { payload } = action
  switch (action.type) {
    case FETCH_REPOSITORIES:
      return { ...state, isInProgress: true }
    case FETCH_REPOSITORIES_SUCCESS:
      return { ...state, repositories: payload, isInProgress: false }
    default:
      return state
  }
}
