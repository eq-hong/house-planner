import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'

import Spinner from './Spinner'

function Home() {

  

  return (
    <>
    <section className='centre'>
    <a href='/test'>
    <div className='house-animation'/>
    </a>
    
    <div className='check-animation'/>
    </section>
  </>
  )
}


export default Home