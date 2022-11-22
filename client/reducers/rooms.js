const initialRoomState = []

const roomsReducer = (state = initialRoomState, action) => {
  const { type , payload } = action
  switch (type) {
    case 'SET_ROOMS':
      return payload
    case 'DEL_ROOM':
      return state.filter((room) => room.id !== payload)
    case 'UPDATE_ROOM': 
      return state.map((room) => room.id == payload.id ? payload.updatedRoom : room)
    default:
      return state
  }
}

export default roomsReducer


