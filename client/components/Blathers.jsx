import React, { useEffect, useState } from 'react'
import request from 'superagent'

import Spinner from './Spinner'

const initialData='fish'
const dataTypes=['fish','sea','bugs','fossils']

const idTest=80

function getDataLength() {
  return request.get(`https://acnhapi.com/v1/${initialData}`)
  .then ((response) => {
    console.log(response.body)
    const id = Object.values(response.body).length
    // console.log(id)
    return id
  })
}

console.log(getDataLength());


function Blathers() {
  const [apiData, setApiData] = useState(null)
  const [apiID, setApiID] = useState('')
  const [isError, setIsError] = useState(false)


  function typeOfData(data, id) {
    // const id = getDataLength()
    useEffect(() => {
    request
    .get(`https://acnhapi.com/v1/${data}/${id}`)
    .then ((response) => {
      setApiData(response.body)
      // console.log(response.body)
      setIsError(false)
    })
    .catch(() => {
      setIsError(true)
    })
   }, [])
  }

  typeOfData(initialData, idTest)


  if (isError) return <h1>{"Oops not working!"}</h1>

  return(
    <section>
    <h3>Blathers' phrase:</h3>
    <h4>{apiData?.['museum-phrase']}</h4>
    </section>
  )
}

export default Blathers



// return(
//   <section>
//   <h3>Museum Text:</h3>
//   <h4>{bugData.name.map((data, index) => (
//     <div key={index}>
//       {data.name-USen}
//     </div>
//   ))}</h4>
//   </section>
// )