import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancers = [applyMiddleware(...middlewares)]

const store = createStore(rootReducer, composeEnhancers(...enhancers))

sagaMiddleware.run(rootSaga)

export { default as actions } from './actions'
export default store
