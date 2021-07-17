import React from 'react'
import { useSelector } from 'react-redux'

import MenuSlider from '../menu/menuSlider'
import Search from '../../assets/icons/search.icon'

import './top-bar.scss'

const TopBar = () => {
  const darkMode = useSelector((state) => state.setDarkMode.darkMode)
  const fillColor = darkMode ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.5)'

  return (
    <div className='top-bar'>
      <Search className='icon search-icon' fillColor={fillColor}/>
      <h1 style={{ color: fillColor }}>Tarot</h1>
      <MenuSlider />
    </div>
  )
}

export default TopBar