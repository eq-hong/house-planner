import { combineReducers } from 'redux'

import roomsReducer from './rooms'

const reducer = combineReducers({
  rooms: roomsReducer,
})

export default reducer