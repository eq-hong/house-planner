import React, { useEffect, useState } from 'react'
import request from 'superagent'

import Spinner from './Spinner'

function Affirmation(){
const [affirmation, setAffirmation] = useState('')
const [isLoading, setIsLoading] = useState(true)
const [isError, setIsError] = useState(false)

useEffect(() => {
  setIsLoading(true)
  request
    .get(`/api/v1/affirmation`)
    .then((response) => {
      setAffirmation(response.body.affirmation)
      setIsError(false)
    })
    .finally(() => {
      setIsLoading(false)
    })
    .catch(() => {
      setIsError(true)
    })
}, [])

if (isLoading) return <Spinner />
if (isError) return <h1>{"Oops can't fetch 'em today!"}</h1>

return (
<>
<p><b>Affirmation |</b> {affirmation}</p>
</>
)

}

export default Affirmation