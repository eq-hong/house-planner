import React, { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient'
import Affirmation from './Affirmation'
import Greeting from './Greeting'
import Pokemon from './Pokemon'
import Blathers from './Blathers'
import Home from './Home'

const App = () => {

  return (
    <>
      <Affirmation />
      <Home />
      {/* <Greeting /> */}
      {/* <Blathers /> */}
      {/* <Pokemon /> */}
    </>
  )
}

export default App
