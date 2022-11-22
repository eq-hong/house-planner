const initialRoomState = []

const roomsReducer = (state = initialRoomState, action) => {
  const { type , payload } = action
  switch (type) {
    case 'SET_ROOMS':
      return payload
    case 'DEL_ROOM':
      return state.filter((room) => room.id !== payload)
    default:
      return state
  }


}

export default roomsReducer

