import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'

import Spinner from './Spinner'

import { getAllRooms } from '../apiClient'

function House(){
  const [rooms, setRooms] = useState(null)

  const style = {
    marginTop: `2.5%`,
    marginLeft: `2.5%`,
  }


  useEffect(() => {
    getAllRooms()
      .then((room) => {
        setRooms(room)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log(rooms);

  return (
    <>
    <section style={style} className="container">
    <h4>HOUSE JSX</h4>
      {rooms && rooms?.map((oneRoom, i) => {
        console.log(Boolean(oneRoom.east))
        const northWindow = Boolean(oneRoom.north)
        const eastWindow = Boolean(oneRoom.east)
        const westWindow = Boolean(oneRoom.west)
        const southWindow = Boolean(oneRoom.south)

        return (
          <div key={i}>
            <div className="row">
            <div className="one column">
            <Link to={`/house/room/${oneRoom.id}`} >
              <b>{oneRoom.roomName}</b>
            </Link>
            </div>
            <br></br>
            <div className="ten columns">{oneRoom.roomNotes}</div>
            
            </div>
            <div className="row">
            <div className="two columns"></div><br></br>
            <div className="two columns"><b>Room Type</b><br></br> {oneRoom.roomType}</div>
            <div className="two columns"><b>Priority</b> <br></br>{oneRoom.priority}</div>
            <div className="two columns"><b>Size</b> <br></br>{oneRoom.width}w x {oneRoom.length}l</div>
            <div className="two columns"><b>Floor</b> <br></br>{oneRoom.floor}</div>
            <div className="three columns"><b>Windows</b> <br></br>{ northWindow ? `north` : null } { southWindow ? 'south' : null } { eastWindow ? 'east' : null } { westWindow ? 'west' : null } </div>
            </div>
            <p></p><br></br>
          </div>

        )
      })}
    </section>
    </>
  )
}
export default House


{/* <section>
{rooms && rooms?.rooms.map((oneRoom, i) => {
  console.log(oneRoom)
  return (
    <Link to={`/room/${oneRoom.id}`} key={i}>
      <div>
        <h2>{oneRoom.name}</h2>
      </div>
    </Link>
  )
})}
</section> */}