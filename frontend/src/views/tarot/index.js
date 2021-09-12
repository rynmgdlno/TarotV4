import React from 'react'

import Composer from '../../features/UI/composer'
import Menu from '../../features/UI/menu'
import TopBar from '../../features/UI/top-bar'

import './tarot.scss'

const Tarot = () => {
  return (
    <div className='primary'>
      <TopBar />
      <div className='secondary'>
        <Composer />
        <Menu />
      </div>
    </div>
  )
}

export default Tarot