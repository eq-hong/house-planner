import request from 'superagent'

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