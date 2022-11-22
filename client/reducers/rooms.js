const initialRoomState = {
  room_name: '',
  room_type: '',
  room_notes: '',
  priority: '',
  width: '',
  length: '',
  north: '',
  east: '',
  south: '',
  floor: '',
}

const roomsReducer = (state = initialRoomState, action) => {
  const { type , payload } = action
  switch (type) {
    // case 'SET_ROOM_AREA':
    //  { const { id , area } = payload
    //   const newState = [...state]
    //   const indexOfFoundRoom = newState.indexOf(id)
    //   console.log(newState[indexOfFoundRoom])
    //   return newState
    // }
    default:
      return state
  }


}

export default roomsReducer

