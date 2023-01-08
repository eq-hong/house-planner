import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { fetchRooms } from '../actions'

import Affirmation from './Affirmation'
import Homepage from './Homepage'
import AddRoom from './AddRoom'
import House from './House'
import EditRoom from './EditRoom'
import Calculation from './Calculation'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRooms())
  }, [])

  return (
    <>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/house" element={<House />} />
      <Route path="/house/add" element={<AddRoom />} />
      <Route path="/house/room/:id" element={<EditRoom />} />
      <Route path="/house/calc" element={<Calculation />} />
      </Routes>
      <footer><Affirmation /></footer>    
    </>
  )
}

export default App
