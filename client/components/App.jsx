import React, { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient'
import Affirmation from './Affirmation'
import Greeting from './Greeting'

const App = () => {

  return (
    <>
      {/* <Greeting /> */}
      <Affirmation />
    </>
  )
}

export default App
