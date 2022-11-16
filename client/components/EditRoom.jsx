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
      <label>Room Name <br></br> <input name="room name" onChange={handleChange} value={room.roomName} /></label><br></br>
      
      <label>Room Type <br></br> <select id="room type" name="room type">
        <option value="Bedroom">Bedroom</option>
        <option value="Bathroom">Bathroom</option>
        <option value="Living">Living</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Other">Other</option></select> </label> <br></br>
      
      <label>Room Notes <br></br> <textarea name="room notes" onChange={handleChange} placeholder="eg. large main bedroom with ensuite"/></label> <br></br>
      
      <label>Priority  <br></br> <select id="priority" name="priority">
        <option value="High">High</option>
        <option value="Mid">Mid</option>
        <option value="Low">Low</option></select> </label> <br></br>

      <label>Room Width <br></br> <input name="test" onChange={handleChange} placeholder="eg. 3" /></label><br></br>
      <label>Room Length <br></br> <input name="test" onChange={handleChange} placeholder="eg. 3" /></label><br></br>

      <label>Floor  <br></br> <select id="floor" name="floor">
        <option value="Ground">Ground / Level 1</option>
        <option value="L2">Level 2</option>
        <option value="L3">Level 3</option></select> </label> <br></br>
    
      <input type="checkbox" id="test" name="test" value="test"/> North-facing (Daytime sun)  <br></br>
      <input type="checkbox" id="test" name="test" value="test"/> East-facing (Morning sun)  <br></br>
      <input type="checkbox" id="test" name="test" value="test"/> West-facing (Afternoon sun)  <br></br>
      <input type="checkbox" id="test" name="test" value="test"/> South-facing (Indirect sun)  <br></br>

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