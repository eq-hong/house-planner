import React, { useEffect, useState } from 'react'
import request from 'superagent'

import Spinner from './Spinner'

const initialData='fish'
const dataTypes=['fish','sea','bugs','fossils']

const idTest=1

function Blathers() {
  const [apiData, setApiData] = useState(null)
  const [apiID, setApiID] = useState('')
  const [isError, setIsError] = useState(false)

  function typeOfData(data, id) {
    useEffect(() => {
    request
    .get(`https://acnhapi.com/v1/${data}/${id}`)
    .then ((response) => {
      setApiData(response.body)
      console.log(response.body)
      setIsError(false)
    })
    .catch(() => {
      setIsError(true)
    })
   }, [])
  }

  typeOfData(initialData, idTest)


  if (isError) return <h1>{"Oops can't fetch 'em all today!"}</h1>

  return(
    <section>
    <h3>Museum Text:</h3>
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