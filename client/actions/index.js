export const SET_ROOMS = 'SET_ROOMS'
export const DEL_ROOM = 'DEL_ROOM'

import { deleteRoom, getAllRooms } from '../apiClient'

export function setRooms(rooms) {
  return {
    type: SET_ROOMS,
    payload: rooms,
  }
}

export function fetchRooms() {
  return (dispatch) => {
    return getAllRooms().then((data) => {
      dispatch(setRooms(data))
    })
  }
}

export function delRoom(id) {
  return (dispatch) => {
    return deleteRoom(id).then(() => {
      dispatch({
          type: DEL_ROOM,
          payload: id,
        }
      )
    })
}
}