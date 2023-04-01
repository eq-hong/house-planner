import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { updateTotalArea } from '../actions'

function Calculation(){
  const rooms = useSelector((state) => state.rooms)
  const totalArea = useSelector((state) => state.totalArea)
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const [buildCostSqm, setBuildCostSqm] = useState(4000)

  const style = {
    marginTop: `2.5%`,
    marginLeft: `2.5%`,
  }

  useEffect(() => {
    const newTotalArea = rooms?.reduce((previous, room) => {
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

  function sortByPriority() {
    const sortingScheme = [
      "High",
      "Mid",
      "Low",
      ""
    ]
    return function(a, b) {
      const indexOfa = sortingScheme.indexOf(a.priority);
      const indexOfb = sortingScheme.indexOf(b.priority);
      if (indexOfa > indexOfb)
        return 1
      if (indexOfa < indexOfb)
        return -1
      return 0;
    }
  }

  function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
  }

  const roundedTotalArea = roundToTwo(totalArea)
  const buildCostEstimate = new Intl.NumberFormat('en-NZ', { style: 'currency', currency: 'NZD' }).format(roundedTotalArea*buildCostSqm)
  const roomsCopy = [...rooms]
  const roomsSorted = roomsCopy?.sort(sortByPriority())

  function filterItems(array, query) {
    return array.filter( ( {roomType} ) => roomType.toLowerCase().includes(query.toLowerCase()));
  }

  function mapRoom(roomType) {
    const filteredRoom = filterItems(roomsSorted, roomType)
   return filteredRoom?.map((oneRoom) => {
      const { id, roomName, priority, width, length, } = oneRoom
      const roomArea = (width)*(length)
      return (
        <div key={id}>
          {roomArea}sqm ({roomName}, {priority}) 
        </div>
      )
    })
  }

  return(
    <section style={style} className="container">
    <h4>Calculation</h4>
    
    <b>Living</b><br></br>
    {mapRoom('Living')}
    <p></p>
    
    <b>Kitchen</b><br></br>
    {mapRoom('kitchen')}
    <p></p>

    <b>Bedroom</b><br></br>
    {mapRoom('Bedroom')}
    <p></p>

    <b>Bathroom</b><br></br>
    {mapRoom('Bathroom')}
    <p></p>

    <b>Other</b><br></br>
    {mapRoom('Other')}
    <p></p>

    <br></br>
    <h5>Total area | {roundedTotalArea}sqm</h5>
    Build cost per sqm = {new Intl.NumberFormat('en-NZ', { style: 'currency', currency: 'NZD' }).format(buildCostSqm)}
    <p>Approx. build cost = <b>{buildCostEstimate}</b></p>

    <p></p>
    <form>
    Update build cost per sqm <br></br> <input name="input" onChange={handleChangeBuildCostSqm} placeholder={buildCostSqm}/> 
    <br></br><button onClick={handleUpdateBuildCostSqm}>Update Build Cost</button>
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