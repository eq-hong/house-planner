import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import request from 'superagent'

import Spinner from './Spinner'

import { getAllRooms } from '../apiClient'

function House(){
  const [rooms, setRooms] = useState(null)
  const navigate = useNavigate()

  const style = {
    marginTop: `2.5%`,
    marginLeft: `2.5%`,
  }

  const customPadding = {
    marginBottom: `5px`,
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
    <h4>House Planner</h4>
  <br></br>
      {rooms && rooms?.map((oneRoom, i) => {
        // console.log(Boolean(oneRoom.east))
        const northWindow = Boolean(oneRoom.north)
        const eastWindow = Boolean(oneRoom.east)
        const westWindow = Boolean(oneRoom.west)
        const southWindow = Boolean(oneRoom.south)
        const roomArea = (oneRoom.width)*(oneRoom.length)
        const roomWidthPx = (oneRoom.width)*10
        const roomLengthPx = (oneRoom.length)*10
        const northWindowDiagram = ( northWindow ? 'dashed' : 'solid')
        const eastWindowDiagram = ( eastWindow ? 'dashed' : 'solid')
        const westWindowDiagram = ( westWindow ? 'dashed' : 'solid')
        const southWindowDiagram = ( southWindow ? 'dashed' : 'solid')
        
        const roomDiagram = {
          border: `#797979`,
          borderStyle: `${northWindowDiagram} ${eastWindowDiagram} ${southWindowDiagram} ${westWindowDiagram}`,
          width: `${roomWidthPx}px`,
          height: `${roomLengthPx}px`,
        }

        return (
          <div key={i}>
            <div className="row">
            <div className="six columns">
            <Link to={`/house/room/${oneRoom.id}`} >
              <button className="button button-primary">{oneRoom.roomName}</button>
            </Link>
            </div>
            <br></br>
            <div className="ten columns" style={customPadding}>{oneRoom.roomNotes}</div>
            
            </div>
            <div className="row">
            <div className="two columns"></div>
            <div className="two columns"><b>Room Type</b><br></br> {oneRoom.roomType}</div>
            <div className="two columns"><b>Priority</b> <br></br>{oneRoom.priority}</div>
            <div className="two columns"><b>Size</b> <br></br>{oneRoom.width}m x {oneRoom.length}m <br></br> {roomArea}sqm</div>
            <div className="two columns"><b>Floor</b> <br></br>{oneRoom.floor}</div>
            <div className="three columns"><b>Facing</b> <br></br>{ northWindow ? `North` : null } { southWindow ? 'South' : null } { eastWindow ? 'East' : null } { westWindow ? 'West' : null } </div>
            </div>
            <div style={roomDiagram}></div>
            <br></br>
            <hr className='remove-margin'></hr>
          </div>
        )}
      )}
      <div className='add-button'>
     <Link to={`/house/form`} >
     <button >Add a Room</button>
     </Link>
     &nbsp;
     <Link to={`/`} >
     <button>Homepage</button>
     </Link>
     </div>
    </section>
    </>
  )
}
export default House