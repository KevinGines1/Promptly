import {createStore, applyMiddleware} from 'redux'
import homeworkReducer from './reducers'
import thunk from 'redux-thunk'

const store = createStore(homeworkReducer, applyMiddleware(thunk))

export default store