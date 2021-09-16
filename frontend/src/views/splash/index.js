import React from 'react'
import Spinner from '../../components/SVG/spinner'

import './splash.scss'

const Splash = () => {
  return (
    <div>
      <a href="/tarot">
        <h1>Welcome</h1>
      </a>
      <Spinner />
    </div>
  )
}

export default Splash