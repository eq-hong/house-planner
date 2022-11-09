import React, { useEffect, useState } from 'react'
import request from 'superagent'

import { getPokemon, getPokemonSearch } from '../apiClient'
import Spinner from './Spinner'

// user stories:
// 1: I want to see a pokemon when I first load the page
// 2: I want to be able to type a pokemon's name and see its details

// what we'll learn:
// 1: how to fetch data from apis
// 2: how to use useEffect's dependencies array
// 3: what CORS is and what you can do about it

function Pokemon() {
  const [pokemonData, setPokemonData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [input, setInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('pikachu')

  useEffect(() => {
    setIsLoading(true)
    request
      .get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
      .then((response) => {
        setPokemonData(response.body)
        setIsError(false)
      })
      // getPokemon()
      // .then(() => {
      //   setIsError(false)
      // })
      .finally(() => {
        setIsLoading(false)
      })
      .catch(() => {
        setIsError(true)
      })
  }, [searchTerm])

  function handleChange(evt) {
   setInput(evt.target.value)
  }
  

  function handleSubmit(evt) {
    evt.preventDefault()
    setSearchTerm(input.toLowerCase())
  }

  if (isLoading) return <Spinner />
  if (isError) return <h1>{"Oops can't fetch 'em all today!"}</h1>
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type='text' name='input' id='input' onChange={handleChange} />
        <button type='submit'>Search</button>
      </form>
      <h1>{"Gotta fetch 'em all!"}</h1>
      <h2>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h2>

          <img
        src={pokemonData.sprites.front_default}
        alt={`sprite of ${pokemonData.name}`}
      />

<h3>Types:</h3>
      <ul>
        {pokemonData.types.map((typeData, index) => (
          <li key={index}>
            <h4>{typeData.type.name}</h4>
          </li>
        ))}
      </ul>

      <h3>Abilities:</h3>
      <ol>
        {pokemonData.abilities.map((abilityData, index) => (
          <li key={index}>
            <h4>{abilityData.ability.name} {abilityData.is_hidden ? '(hidden ability)' : '(normal ability)'}</h4>
          </li>
        ))}
      </ol>

    </section>
  )
}

export default Pokemon