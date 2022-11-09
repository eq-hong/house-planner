import React, { useEffect, useState } from 'react'
import request from 'superagent'

import Spinner from './Spinner'

function Blathers() {
  const [bugData, setBugData] = useState(null)
  const [bugID, setBugID] = useState('')
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    request
      .get(`https://acnhapi.com/v1/bugs/1`)
      .then ((response) => {
        setBugData(response.body)
        console.log(response.body)
        setIsError(false)
      })
      .catch(() => {
        setIsError(true)
  })
}, [])

if (isError) return <h1>{"Oops can't fetch 'em all today!"}</h1>

  return(
    <section>
    <h3>Museum Text:</h3>
    <h4>{bugData?.['museum-phrase']}</h4>
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