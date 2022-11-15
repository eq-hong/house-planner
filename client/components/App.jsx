import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Affirmation from './Affirmation'
import Greeting from './Greeting'
import Pokemon from './Pokemon'
import Blathers from './Blathers'
import Home from './Home'
import Form from './Form'

const App = () => {

  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/blathers" element={<Blathers/>} />
      <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
      <footer><Affirmation /></footer>

      {/* <Greeting /> */}
      {/* <Blathers /> */}
      {/* <Pokemon /> */}

    
    </>
  )
}

export default App
