import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'

import Spinner from './Spinner'

function Form() {
  const [newRoom, setNewRoom] = useState('')

  const style = {
    marginTop: `2.5%`,
    marginLeft: `2.5%`,
  }

  function handleChange(event) {
    setNewRoom(event.target.value)
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
      Room Name <br></br> <input name="room name" onChange={handleChange} placeholder="eg. main bedroom" /><br></br>
      
      Room Type <br></br> <select id="room type" name="room type">
        <option value="Bedroom">Bedroom</option>
        <option value="Bathroom">Bathroom</option>
        <option value="Living">Living</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Other">Other</option></select>  <br></br>
      
      Room Notes <br></br> <textarea name="room notes" onChange={handleChange} placeholder="eg. large main bedroom with ensuite"/> <br></br>
      
      Priority  <br></br> <select id="priority" name="priority">
      <option value="High">High</option>
        <option value="Mid">Mid</option>
        <option value="Low">Low</option></select>  <br></br>

      Room Width <br></br> <input name="test" onChange={handleChange} placeholder="eg. 3" /><br></br>
      Room Length <br></br> <input name="test" onChange={handleChange} placeholder="eg. 3" /><br></br>

      Floor  <br></br> <select id="floor" name="floor">
        <option value="ground">Ground / Level 1</option>
        <option value="L2">Level 2</option>
        <option value="L3">Level 3</option></select>  <br></br>
    
      <input type="checkbox" id="North" name="North" /> North-facing (Daytime sun)  <br></br>
      <input type="checkbox" id="East" name="East" /> East-facing (Morning sun)  <br></br>
      <input type="checkbox" id="West" name="West" /> West-facing (Afternoon sun)  <br></br>
      <input type="checkbox" id="South" name="South" /> South-facing (Indirect sun)  <br></br>

      <br></br><button>Add</button>&nbsp;<button>Preview</button>
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