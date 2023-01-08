import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { addRoom } from '../actions'

function AddRoom() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [newRoom, setNewRoom] = useState({
    room_name: '',
    room_type: '',
    room_notes: '',
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

  const northWindow = Boolean(newRoom.north)
  const eastWindow = Boolean(newRoom.east)
  const westWindow = Boolean(newRoom.west)
  const southWindow = Boolean(newRoom.south)
  const roomArea = (newRoom.width)*(newRoom.length)
  const roomWidthPx = (newRoom.width)*50
  const roomLengthPx = (newRoom.length)*50
  const northWindowDiagram = ( newRoom.north ? 'dashed' : 'solid')
  const eastWindowDiagram = ( eastWindow ? 'dashed' : 'solid')
  const westWindowDiagram = ( westWindow ? 'dashed' : 'solid')
  const southWindowDiagram = ( southWindow ? 'dashed' : 'solid')

  function roomBorder (){
    if (newRoom.width == 0 || newRoom.length == 0){
      return `0`
    } else {
      `4.5px`
    }
  }
  
  const roomDiagram = {
    border: `#797979`,
    borderWidth: roomBorder(),
    borderStyle: `${northWindowDiagram} ${eastWindowDiagram} ${southWindowDiagram} ${westWindowDiagram}`,
    width: `${roomWidthPx}px`,
    height: `${roomLengthPx}px`,
    textAlign: `center`,
  }

  const [isCheckedNorth, setIsCheckedNorth] = useState(northWindow)
  const [isCheckedEast, setIsCheckedEast] = useState(eastWindow)
  const [isCheckedWest, setIsCheckedWest] = useState(westWindow)
  const [isCheckedSouth, setIsCheckedSouth] = useState(southWindow)


  function handleChange(event) {
    setNewRoom({ ...newRoom,  [event.target.name]: event.target.value })
  }

  function handleCheckNorth() {
    setIsCheckedNorth(!isCheckedNorth)
    return ( isCheckedNorth ?  newRoom.north=false : newRoom.north=true )
  }
  function handleCheckEast() {
    setIsCheckedEast(!isCheckedEast)
    return ( isCheckedEast ?  newRoom.east=false : newRoom.east=true )
  }
  function handleCheckWest() {
    setIsCheckedWest(!isCheckedWest)
    return ( isCheckedWest ?  newRoom.west=false : newRoom.west=true )
  }
  function handleCheckSouth() {
    setIsCheckedSouth(!isCheckedSouth)
    return ( isCheckedSouth ?  newRoom.south=false : newRoom.south=true )
  }

  function addANewRoom(evt){
    evt.preventDefault()
    dispatch(addRoom(newRoom))
    navigate('/house')
  }

  return (
    <>
    <section className='' style={style}>
      <h4>Room Form</h4>
    <form>
      Room Name <br></br> <input name="room_name" onChange={handleChange} value={newRoom.room_name} placeholder="eg. main bedroom" /><br></br>
      
      Room Type <br></br> <select id="room_type" name="room_type" onChange={handleChange} value={newRoom.room_type}>
        <option value="" disabled>Select type</option>
        <option value="Bedroom">Bedroom</option>
        <option value="Bathroom">Bathroom</option>
        <option value="Living">Living</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Other">Other</option></select>  <br></br>
      
      Room Notes <br></br> <textarea name="room_notes" onChange={handleChange} value={newRoom.room_notes} placeholder="eg. large main bedroom with ensuite"/> <br></br>
      
      Priority  <br></br> <select id="priority" name="priority" onChange={handleChange} value={newRoom.priority}>
        <option value="" disabled>Select priority</option>
        <option value="High">High</option>
        <option value="Mid">Mid</option>
        <option value="Low">Low</option></select>  <br></br>

      Room Width <br></br> <input name="width" onChange={handleChange} value={newRoom.width} placeholder="eg. 3" /><br></br>
      Room Length <br></br> <input name="length" onChange={handleChange} value={newRoom.length} placeholder="eg. 3" /><br></br>

      Floor  <br></br> <select id="floor" name="floor" onChange={handleChange} value={newRoom.floor}>
        <option value="" disabled>Select floor</option>
        <option value="Ground / Level 1">Ground / Level 1</option>
        <option value="Level 2">Level 2</option>
        <option value="Level 3">Level 3</option></select>  <br></br>
    
        <input type="checkbox" id="north" name="north" onChange={handleCheckNorth} checked={newRoom.north} value={isCheckedNorth}/> North-facing (Daytime sun)  <br></br>
        <input type="checkbox" id="east" name="east" onChange={handleCheckEast} checked={eastWindow} value={isCheckedEast}/> East-facing (Morning sun)  <br></br>
        <input type="checkbox" id="west" name="west" onChange={handleCheckWest} checked={westWindow} value={isCheckedWest}/> West-facing (Afternoon sun)  <br></br>
        <input type="checkbox" id="south" name="south" onChange={handleCheckSouth} checked={southWindow} value={isCheckedSouth}/> South-facing (Indirect sun)  <br></br>

      <br></br><button onClick={addANewRoom}>Add</button>
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
          <p>{newRoom.room_name}<br></br>{roomArea}sqm</p>
        </div>
      </div>
     
  </section>
  </>
  )
}


export default AddRoom