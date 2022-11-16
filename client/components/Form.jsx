import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import request from 'superagent'

import Spinner from './Spinner'

import { addRoom } from '../apiClient'

function Form() {
  const navigate = useNavigate()
  const [newRoom, setNewRoom] = useState({
    roomName: '',
    roomType: '',
    roomNotes: '',
    priority: '',
    width: '',
    length: '',
    north: '',
    east: '',
    south: '',
    floor: '',
  })

  const style = {
    marginTop: `2.5%`,
    marginLeft: `2.5%`,
  }

  // function handleChange(event) {
  //   setNewRoom(event.target.value)
  // }

  function handleChange(event) {
    setNewRoom({ ...newRoom,  [event.target.name]: event.target.value })
  }

  function addNewRoom(evt, newRoom){
    evt.preventDefault()
    addRoom(newRoom)
    .then(() => {
      navigate('/house')
    })
    .catch((err) => console.log(err))
  }

  console.log(newRoom);
  console.log('YEEEE')

  return (
    <>
    <section className='' style={style}>
      <h4>Room Form</h4>
    <form>
      Room Name <br></br> <input name="roomName" onChange={handleChange} value={newRoom.roomName} placeholder="eg. main bedroom" /><br></br>
      
      Room Type <br></br> <select id="roomType" name="roomType" onChange={handleChange} value={newRoom.roomType}>
        <option value="" disabled selected>Select type</option>
        <option value="Bedroom">Bedroom</option>
        <option value="Bathroom">Bathroom</option>
        <option value="Living">Living</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Other">Other</option></select>  <br></br>
      
      Room Notes <br></br> <textarea name="roomNotes" onChange={handleChange} value={newRoom.roomNotes} placeholder="eg. large main bedroom with ensuite"/> <br></br>
      
      Priority  <br></br> <select id="priority" name="priority" onChange={handleChange} value={newRoom.priority}>
        <option value="" disabled selected>Select priority</option>
        <option value="High">High</option>
        <option value="Mid">Mid</option>
        <option value="Low">Low</option></select>  <br></br>

      Room Width <br></br> <input name="width" onChange={handleChange} value={newRoom.width} placeholder="eg. 3" /><br></br>
      Room Length <br></br> <input name="length" onChange={handleChange} value={newRoom.length} placeholder="eg. 3" /><br></br>

      Floor  <br></br> <select id="floor" name="floor" onChange={handleChange} value={newRoom.floor}>
        <option value="" disabled selected>Select floor</option>
        <option value="Ground / Level 1">Ground / Level 1</option>
        <option value="Level 2">Level 2</option>
        <option value="Level 3">Level 3</option></select>  <br></br>
    
      <input type="checkbox" id="north" name="north" onChange={handleChange} checked={newRoom.north}/> North-facing (Daytime sun)  <br></br>
      <input type="checkbox" id="east" name="east" onChange={handleChange} checked={newRoom.east}/> East-facing (Morning sun)  <br></br>
      <input type="checkbox" id="west" name="west" onChange={handleChange} checked={newRoom.west}/> West-facing (Afternoon sun)  <br></br>
      <input type="checkbox" id="south" name="south" onChange={handleChange} checked={newRoom.south}/> South-facing (Indirect sun)  <br></br>

      <br></br><button onClick={addNewRoom}>Add</button>&nbsp;<button>Preview</button>
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


export default Form