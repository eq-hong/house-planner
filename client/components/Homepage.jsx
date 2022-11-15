import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'

import Spinner from './Spinner'

function Home() {

  const style = {
    marginTop: `20%`,
  }

  return (
    <>
    <section className='centre' style={style}>
    <a href='/house'>
    <div className='house-animation' />
    </a>
    
    <div className='list-animation'/>
    </section>
  </>
  )
}


export default Home