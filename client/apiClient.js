import request from 'superagent'
const serverPrefix = 'http://localhost:3000'

 // ARCHIVE //

export function getGreeting() {
  return request.get('/greeting').then((res) => res.body.greeting)
}

export function getPokemon() {
  return request.get(`https://pokeapi.co/api/v2/pokemon/`).then((res) => res.body)
}


export function getPokemonSearch(searchTerm) {
  return request.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`).then((res) => res.body)
}

// ARCHIVE //


// from charlottes-web-log-api START //

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
  console.log(id);
  return request
    .get(`${serverPrefix}/api/v1/house/${id}`)
    .then((res) => {
      console.log(res.body)
      return res.body
    })
    .catch(errorHandler('GET', 'api/v1/house/:id'))
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



// from charlottes-web-log-api END //