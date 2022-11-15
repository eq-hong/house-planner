import request from 'superagent'

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

// export function getDataLength() {
//   return request.get(`https://acnhapi.com/v1/${data}`)
//   .then ((response) => {
//     console.log(response.body);
//     const id = Object.values(response.body).length
//     return id
//   })
// }

// ARCHIVE //


// from charlottes-web-log-api START //

export function getAllRooms() {
  return request
    .get('api/v1/home/all')
    .then((res) => {
      res.body.forEach((room) => validateNoSnakeCase(room))
      return res.body
    })
    .catch(errorHandler('GET', 'api/v1/home/all'))
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

function validatePostResponse(method, route, post) {
  if (!post) {
    throw Error(`Error: ${method} ${route} should return a blog post`)
  }

  const { title, text } = post

  if (!title || !text) {
    throw Error(
      `Error: ${method} ${route} is not returning a correct blog post`
    )
  }
}

// from charlottes-web-log-api END //