import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { fetchRooms, updateTotalArea } from '../actions'

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

  function sortByPriority() {
    // https://stackoverflow.com/questions/65687818/js-sort-array-of-objets-by-specific-string-property-not-ascending-or-descending
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

  const buildCostEstimate = new Intl.NumberFormat('en-NZ', { style: 'currency', currency: 'NZD' }).format(totalArea*buildCostSqm)
  const roomsCopy = [...rooms]
  const roomsSorted = roomsCopy?.sort(sortByPriority())

  function filterItems(array, query, value) {
    // console.log(array, 'array');
    // console.log(value, 'value');
    return array.filter( ( {roomType} ) => roomType.toLowerCase().includes(query.toLowerCase()));
  }

  function mapRoom(roomtype) {
    const filteredRoom = filterItems(roomsSorted, roomtype)
   return filteredRoom?.map((oneRoom) => {
      const { id, roomName, roomType, priority, width, length, } = oneRoom
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
    <h5>Total area | {totalArea}sqm</h5>
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

        
// const { id, roomName, roomType, roomNotes, priority, width, length, north, east, west, south, floor } = oneRoom


  // // https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values
  // const sort_by = (field, reverse, primer) => {

  //   const key = primer ?
  //     function(x) {
  //       return primer(x[field])
  //     } :
  //     function(x) {
  //       return x[field]
  //     };
  
  //   reverse = !reverse ? 1 : -1;
  
  //   return function(a, b) {
  //     return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
  //   }
  // }