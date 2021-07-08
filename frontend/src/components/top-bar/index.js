import React from 'react'

import MenuSlider from '../../features/menuSlider'

import './top-bar.scss'

const TopBar = () => {
  return (
    <div className='top-bar'>
      <MenuSlider />
      {/* <span>Top Bar</span> */}
    </div>
  )
}

export default TopBar