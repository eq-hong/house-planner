import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Affirmation from './Affirmation'
import Greeting from './Greeting'
import Pokemon from './Pokemon'
import Blathers from './Blathers'
import Homepage from './Homepage'
import AddRoom from './AddRoom'
import House from './House'
import EditRoom from './EditRoom'
import Calculation from './Calculation'

const App = () => {
  const dispatch = useDispatch()


  return (
    <>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/house" element={<House />} />
      <Route path="/house/add" element={<AddRoom />} />
      <Route path="/house/room/:id" element={<EditRoom />} />
      <Route path="/house/calc" element={<Calculation />} />
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
