import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { fetchRooms, updateTotalArea } from '../actions'
import { getAllRooms } from '../apiClient'

function Calculation(){
  // const [rooms, setRooms] = useState(null)
  const rooms = useSelector((state) => state.rooms)
  const totalArea = useSelector((state) => state.totalArea)
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const [buildCostSqm, setBuildCostSqm] = useState(3500)

  const style = {
    marginTop: `2.5%`,
    marginLeft: `2.5%`,
  }

  useEffect(() => {
    const newTotalArea = rooms?.reduce((previous, room) => {
      console.log(previous);
      return previous + room.width*room.length
    }, 0)
    dispatch(updateTotalArea(newTotalArea))
  }, [rooms])


  function handleChangeBuildCostSqm(event){
    event.preventDefault()
    setInput(event.target.value)
  }

  function handleUpdateBuildCostSqm(event){
    event.preventDefault()
    setBuildCostSqm(input)
  }

  const costEstimatePerSqm = 3500
  const buildCostEstimate = new Intl.NumberFormat('en-NZ', { style: 'currency', currency: 'NZD' }).format(totalArea*buildCostSqm)

  return(
    <section style={style} className="container">
    <h4>Calculation</h4>
    
    {rooms && rooms?.map((oneRoom) => {
      const { id, roomName, width, length, } = oneRoom
      const roomArea = (width)*(length)
      return (
        <div key={id}>
          {roomArea}sqm ({roomName})
        </div>
      )
      })
    }
    <br></br>
    <h5>Total area | {totalArea}sqm</h5>
    Build cost per sqm = {new Intl.NumberFormat('en-NZ', { style: 'currency', currency: 'NZD' }).format(buildCostSqm)}
    <p>Approx. build cost = <b>{buildCostEstimate}</b></p>

    <p></p>
    <form>
    Update build cost per sqm <br></br> <input name="input" onChange={handleChangeBuildCostSqm} placeholder={buildCostSqm}/> 
    <br></br><button onClick={handleUpdateBuildCostSqm}>Update</button>
    </form>
    
    <div className='add-button'>
     <Link to={`/house`} >
     <button>Back</button>
     </Link>
     &nbsp;
     <Link to={`/`} >
     <button>Homepage</button>
     </Link>
     </div>
    </section>
  )
}

export default Calculation

        
// const { id, roomName, roomType, roomNotes, priority, width, length, north, east, west, south, floor } = oneRoom

// dispatch(setRoomArea(oneRoom.id, roomArea))
//   console.log('oneRoom.id', oneRoom.id,);
//   console.log('roomArea', roomArea)
//   console.log('setRoomArea', setRoomArea())