import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Affirmation from './Affirmation'
import Greeting from './Greeting'
import Pokemon from './Pokemon'
import Blathers from './Blathers'
import Homepage from './Homepage'
import Form from './Form'
import House from './House'
import EditRoom from './EditRoom'

const App = () => {

  return (
    <>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/house" element={<House />} />
      <Route path="/house/form" element={<Form />} />
      <Route path="/house/room/:id" element={<EditRoom />} />
      <Route path="/blathers" element={<Blathers/>} />
      <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
      <footer><Affirmation /></footer>

      {/* <div className='footer-gradient'></div> */}

      {/* <Greeting /> */}
      {/* <Blathers /> */}
      {/* <Pokemon /> */}

    
    </>
  )
}

export default App
