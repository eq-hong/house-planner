import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import request from 'superagent'

import Spinner from './Spinner'

import { getRoom } from '../apiClient'

function Room() {
  const [room, setRoom] = useState('')
  const { id } = useParams()
  // console.log(id);

  const style = {
    marginTop: `2.5%`,
    marginLeft: `2.5%`,
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

  function handleChange(event) {
    setRoom(event.target.value)
  }

  // function handleAdd() {
  //   dispatch(addWombat(newWombat))
  //   setNewWombat('')
  // }

  return (
    <>
    <section className='' style={style}>
      <h4>Room Form</h4>
    <form>
      Room Name <br></br> <input name="room name" onChange={handleChange} value={room.roomName} /><br></br>
      
      Room Type <br></br> <select id="room type" name="room type" value={room.roomType}>
        <option value="Bedroom">Bedroom</option>
        <option value="Bathroom">Bathroom</option>
        <option value="Living">Living</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Other">Other</option></select>  <br></br>
      
      Room Notes <br></br> <textarea name="room notes" onChange={handleChange} value={room.roomNotes}/> <br></br>
      
      Priority  <br></br> <select id="priority" name="priority" value={room.priority}>
        <option value="High">High</option>
        <option value="Mid">Mid</option>
        <option value="Low">Low</option></select>  <br></br>

      Room Width <br></br> <input name="test" onChange={handleChange} value={room.width} /><br></br>
      Room Length <br></br> <input name="test" onChange={handleChange} value={room.length} /><br></br>

      Floor  <br></br> <select id="floor" name="floor" value={room.floor}>
        <option value="Ground / Level 1">Ground / Level 1</option>
        <option value="L2">Level 2</option>
        <option value="L3">Level 3</option></select>  <br></br>
    
      <input type="checkbox" id="North" name="North" checked={room.north}/> North-facing (Daytime sun)  <br></br>
      <input type="checkbox" id="East" name="East" checked={room.east}/> East-facing (Morning sun)  <br></br>
      <input type="checkbox" id="West" name="West" checked={room.west}/> West-facing (Afternoon sun)  <br></br>
      <input type="checkbox" id="South" name="South" checked={room.south}/> South-facing (Indirect sun)  <br></br>

      <br></br><button>Update</button>&nbsp;<button>Preview</button>
    </form>
    <div className='add-button'>
     <Link to={`/house`} >
     <button>Back</button> 
     </Link>
     </div>
    </section>
  </>
  )
}


export default Room