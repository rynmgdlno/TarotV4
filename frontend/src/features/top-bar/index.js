import React from 'react'

import MenuSlider from '../menuSlider'
import Search from '../../assets/icons/search.icon'

import './top-bar.scss'

const TopBar = () => {
  return (
    <div className='top-bar'>
      <Search className='search-icon'/>
      <h1>Tarot</h1>
      <MenuSlider />
    </div>
  )
}

export default TopBar