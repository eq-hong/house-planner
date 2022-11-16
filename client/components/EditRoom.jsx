import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate  } from 'react-router-dom'
import request from 'superagent'

import Spinner from './Spinner'

import { getRoom, deleteRoom, updateRoom } from '../apiClient'

function Room() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [room, setRoom] = useState({})

  // console.log(id);

  const style = {
    marginTop: `2.5%`,
    marginLeft: `2.5%`,
  }

  const northWindow = Boolean(room.north)
  const eastWindow = Boolean(room.east)
  const westWindow = Boolean(room.west)
  const southWindow = Boolean(room.south)
  const roomArea = (room.width)*(room.length)
  const roomWidthPx = (room.width)*50
  const roomLengthPx = (room.length)*50
  const northWindowDiagram = ( northWindow ? 'dashed' : 'solid')
  const eastWindowDiagram = ( eastWindow ? 'dashed' : 'solid')
  const westWindowDiagram = ( westWindow ? 'dashed' : 'solid')
  const southWindowDiagram = ( southWindow ? 'dashed' : 'solid')
  
  const roomDiagram = {
    border: `#797979`,
    borderWidth: `4.5px`,
    borderStyle: `${northWindowDiagram} ${eastWindowDiagram} ${southWindowDiagram} ${westWindowDiagram}`,
    width: `${roomWidthPx}px`,
    height: `${roomLengthPx}px`,
    textAlign: `center`,
  }

  useEffect(() => {
    getRoom(id)
      .then((data) => {
        setRoom(data)
        // console.log(data);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // console.log(room);

  function removeRoom(evt) {
    evt.preventDefault()
    deleteRoom(Number(id))
      .then(() => {
        navigate('/house')
      })
      .catch((err) => console.log(err))
  }

  function editRoom(evt){
    evt.preventDefault()
    updateRoom(id, room)
    .then(() => {
      navigate('/house')
    })
    .catch((err) => console.log(err))
  }

  function handleChange(event) {
    setRoom({ [event.target.name]: event.target.value })
  }

  console.log(room);
  console.log('console.log room')


  return (
    <>
    <section style={style}>
      <h4>Room Form</h4>
      <form>
        Room Name <br></br> <input name="room_name" onChange={handleChange} value={room.room_name} placeholder="eg. main bedroom" /><br></br>
        
        Room Type <br></br> <select id="room_type" name="room_type" onChange={handleChange} value={room.room_type}>
          <option value="" disabled>Select type</option>
          <option value="Bedroom">Bedroom</option>
          <option value="Bathroom">Bathroom</option>
          <option value="Living">Living</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Other">Other</option></select>  <br></br>
        
        Room Notes <br></br> <textarea name="room_notes" onChange={handleChange} value={room.room_notes} placeholder="eg. large main bedroom with ensuite"/> <br></br>
        
        Priority  <br></br> <select id="priority" name="priority" onChange={handleChange} value={room.priority}>
          <option value="" disabled>Select priority</option>
          <option value="High">High</option>
          <option value="Mid">Mid</option>
          <option value="Low">Low</option></select>  <br></br>

        Room Width <br></br> <input name="width" onChange={handleChange} value={room.width} placeholder="eg. 3" /><br></br>
        Room Length <br></br> <input name="length" onChange={handleChange} value={room.length} placeholder="eg. 3" /><br></br>

        Floor  <br></br> <select id="floor" name="floor" onChange={handleChange} value={room.floor}>
          <option value="" disabled>Select floor</option>
          <option value="Ground / Level 1">Ground / Level 1</option>
          <option value="Level 2">Level 2</option>
          <option value="Level 3">Level 3</option></select>  <br></br>
      
        <input type="checkbox" id="north" name="north" onChange={handleChange} checked={room.north}/> North-facing (Daytime sun)  <br></br>
        <input type="checkbox" id="east" name="east" onChange={handleChange} checked={room.east}/> East-facing (Morning sun)  <br></br>
        <input type="checkbox" id="west" name="west" onChange={handleChange} checked={room.west}/> West-facing (Afternoon sun)  <br></br>
        <input type="checkbox" id="south" name="south" onChange={handleChange} checked={room.south}/> South-facing (Indirect sun)  <br></br>

        <br></br><button onClick={editRoom}>Update</button>&nbsp;<button>Preview</button>&nbsp;<button onClick={removeRoom}>Delete</button>
      </form>

      <div className='add-button'>
        <Link to={`/house`} >
        <button>Back</button> 
        </Link>
      </div>
      
    </section>
    <section>
      
        <div className='centre-room-diagram' style={roomDiagram}>
          <div className='room-diagram-flex'>
          <p>{room.room_name}<br></br>{roomArea}sqm</p>
          </div>
          </div>
       
    </section>
  </>
  )
}


export default Room