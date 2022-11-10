import React, { useEffect, useState } from 'react'
import request from 'superagent'

import Spinner from './Spinner'

const initialData = 'fish'
const dataTypes = ['fish', 'sea', 'bugs', 'fossils']

const idTest = 80

function getDataLength() {
  return request
    .get(`https://acnhapi.com/v1/${initialData}`)
    .then((response) => {
      console.log(response.body)
      const id = Object.values(response.body).length
      // console.log(id)
      return id
    })
}

// console.log(getDataLength())

function Blathers() {
  const [apiData, setApiData] = useState(null)
  // const [apiID, setApiID] = useState('')
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    getDataLength()
      .then((id) => {
        return request.get(`https://acnhapi.com/v1/${initialData}/${id}`)
      })
      .then((response) => {
        setApiData(response.body)
        // console.log(response.body)
        setIsError(false)
      })
      .catch(() => {
        setIsError(true)
      })
  }, [])

  if (isError) return <h1>{'Oops not working!'}</h1>

  return (
    <section>
      <img
        src="https://dodo.ac/np/images/f/fe/Blathers_NH_2.png"
        width="200px"
      />
      <h3>museum-phrase:</h3>
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
