import request from 'superagent'
const serverPrefix = 'http://localhost:3000'

export function getAllRooms() {
  return request
    .get(`${serverPrefix}/api/v1/house/all`)
    .then((res) => {
      res.body.forEach((room) => validateNoSnakeCase(room))
      return res.body
    })
    .catch(errorHandler('GET', 'api/v1/house/all'))
}

export function getRoom(id) {
  return request
    .get(`${serverPrefix}/api/v1/house/${id}`)
    .then((res) => {
      return res.body
    })
    .catch(errorHandler('GET', 'api/v1/house/:id'))
}

export function addNewRoom(newRoom) {
  return request
    .post(`${serverPrefix}/api/v1/house/all`)
    .send(newRoom)
    .then((res) => {
      return res.body
    })
    .catch(errorHandler('POST', '/api/v1/house'))
}

export function updateRoom(id, room) {
  return request
    .patch(`${serverPrefix}/api/v1/house/${id}`)
    .send(room)
    .then((res) => {
      return res.body
    })
    .catch(errorHandler('PATCH', 'api/v1/house/:id'))
}

export function deleteRoom(id) {
  return request
    .del(`${serverPrefix}/api/v1/house/${id}`)
    .then((res) => res)
    .catch(errorHandler('DELETE', 'api/v1/house/:id'))
}

function errorHandler(method, route) {
  return (err) => {
    if (err.message === 'Not Found') {
      throw Error(
        `Error: You need to implement an API route for ${method} ${route}`
      )
    } else {
      throw Error(`${err.message} on ${method} ${route}`)
    }
  }
}

function validateNoSnakeCase(response) {
  const hasSnakeCase = Object.keys(response).some((key) => key.includes('_'))
  if (hasSnakeCase) {
    throw Error('Error: you should not be returning properties in snake_case')
  }
}