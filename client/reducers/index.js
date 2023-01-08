import { combineReducers } from 'redux'

import roomsReducer from './rooms'
import areaReducer from './totalArea'

const reducer = combineReducers({
  rooms: roomsReducer,
  totalArea: areaReducer
})

export default reducer