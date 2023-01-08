const initialRoomState = null

const areaReducer = (state = initialRoomState, action) => {
  const { type , payload } = action
  switch (type) {
    case 'NEW_TOTAL_AREA':
      return payload
    default:
      return state
  }
}

export default areaReducer