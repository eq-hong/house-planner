export const SET_ROOMS = 'SET_ROOMS'
export const DEL_ROOM = 'DEL_ROOM'
export const UPDATE_ROOM = 'UPDATE_ROOM'
export const ADD_ROOM = 'ADD_ROOM'
export const NEW_TOTAL_AREA = 'NEW_TOTAL_AREA'

import { deleteRoom, getAllRooms, updateRoom, addNewRoom } from '../apiClient'

export function setRooms(rooms) {
  return {
    type: SET_ROOMS,
    payload: rooms,
  }
}

export function fetchRooms() {
  return (dispatch) => {
    return getAllRooms().then((data) => {
      console.log('fetch rooms in actions', data)
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
      })
    })
  } 
}

export function editRoom(id, room) {
  return (dispatch) => {
    return updateRoom(id, room).then((updatedRoom) => {
      dispatch({
        type: UPDATE_ROOM,
        payload: { 
          id: id,
          updatedRoom: updatedRoom 
        }
      })
    })
  }
}

export function addRoom(newRoom) {
  return (dispatch) => {
    return addNewRoom(newRoom).then((newRoomInfo) => {
      console.log(newRoom, 'newRoom inside addNewRoom apiClient')
      dispatch({
        type: ADD_ROOM,
        payload: newRoomInfo,
      })
    })
  }
}

export function updateTotalArea(newTotalArea){
  return (dispatch) => {
    dispatch ({
    type: NEW_TOTAL_AREA,
    payload: newTotalArea
    })
  }
}