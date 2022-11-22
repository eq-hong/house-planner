import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { fetchRooms } from '../actions'
import { getAllRooms } from '../apiClient'

function Calculation(){
  // const [rooms, setRooms] = useState(null)
  const rooms = useSelector((state) => state.rooms)
  const dispatch = useDispatch()

  const style = {
    marginTop: `2.5%`,
    marginLeft: `2.5%`,
  }

  useEffect(() => {
    dispatch(fetchRooms())
  }, [])
  
 
  return(
    <section style={style} className="container">
    <h4>Calculation</h4>

    <h5>Total area</h5>
    {rooms && rooms?.map((oneRoom, i) => {
      const roomArea = (oneRoom.width)*(oneRoom.length)
      
      // dispatch(setRoomArea(oneRoom.id, roomArea))
      //   console.log('oneRoom.id', oneRoom.id,);
      //   console.log('roomArea', roomArea)
      //   console.log('setRoomArea', setRoomArea())

      return (
        <div key={i}>
           {roomArea}sqm ({oneRoom.roomName})
        </div>
      )
      })
    }
    </section>
  )
}

export default Calculation