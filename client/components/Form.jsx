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
      <lable>Room Name <br></br> <input name="room name" onChange={handleChange} placeholder="eg. main bedroom" /></lable><br></br>
      
      <lable>Room Type <br></br> <select id="room type" name="room type">
        <option value="bedroom">Bedroom</option>
        <option value="bathroom">Bathroom</option>
        <option value="living">Living</option>
        <option value="kitchen">Kitchen</option>
        <option value="other">Other</option></select> </lable> <br></br>
      
      <lable>Room Notes <br></br> <textarea name="room notes" onChange={handleChange} placeholder="eg. large main bedroom with ensuite"/></lable> <br></br>
      
      <lable>Priority  <br></br> <select id="priority" name="priority">
        <option value="high">High</option>
        <option value="mid">Mid</option>
        <option value="low">Low</option></select> </lable> <br></br>

      <lable>Room Width <br></br> <input name="test" onChange={handleChange} placeholder="eg. 3" /></lable><br></br>
      <lable>Room Length <br></br> <input name="test" onChange={handleChange} placeholder="eg. 3" /></lable><br></br>

      <lable>Floor  <br></br> <select id="floor" name="floor">
        <option value="ground">Ground / Level 1</option>
        <option value="L2">Level 2</option>
        <option value="L3">Level 3</option></select> </lable> <br></br>
    
      <input type="checkbox" id="test" name="test" value="test"/> North-facing (Daytime sun)  <br></br>
      <input type="checkbox" id="test" name="test" value="test"/> East-facing (Morning sun)  <br></br>
      <input type="checkbox" id="test" name="test" value="test"/> West-facing (Afternoon sun)  <br></br>
      <input type="checkbox" id="test" name="test" value="test"/> South-facing (Indirect sun)  <br></br>

      <br></br><button>Add</button>&nbsp;<button>Preview</button>
    </form>
    </section>
  </>
  )
}


export default Form