import React, { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient'
import Affirmation from './Affirmation'
import Greeting from './Greeting'
import Pokemon from './Pokemon'
import Blathers from './Blathers'

const App = () => {

  return (
    <>
      <Greeting />
      <Affirmation />
      <Blathers />
      {/* <Pokemon /> */}
    </>
  )
}

export default App
