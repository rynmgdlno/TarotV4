import React from 'react'

import Composer from '../../components/composer'
import Menu from '../../features/menu'
import TopBar from '../../components/top-bar'

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