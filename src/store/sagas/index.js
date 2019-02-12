import { all } from 'redux-saga/effects'
import github from './github'

export default function* () {
  yield all([...github])
}
