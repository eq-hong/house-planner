export const SET_ROOM_AREA = 'SET_ROOM_AREA'

export function setRoomArea(id, area) {
  return {
    type: SET_ROOM_AREA,
    payload: { id , area },
  }
}