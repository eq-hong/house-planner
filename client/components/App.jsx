import React, { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient'
import Affirmation from './Affirmation'
import Greeting from './Greeting'
import Pokemon from './Pokemon'

const App = () => {

  return (
    <>
      <Greeting />
      <Affirmation />
      <Pokemon />
    </>
  )
}

export default App
