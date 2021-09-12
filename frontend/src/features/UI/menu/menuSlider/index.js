import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Hamburger from 'hamburger-react'

import { darkModeSelector } from '../../darkMode/darkModeSlice'
import { editorSelector, slideEditor } from '../../composer/editorSliderSlice'
import { menuSelector, menuToggle } from './menuSliderSlice'

import './menu-slider.scss'

const MenuSlider = () => {
  const dispatch = useDispatch()
  const darkMode = useSelector(darkModeSelector)
  const editorOpen = useSelector(editorSelector)
  const menuToggled = useSelector(menuSelector)
  const fillColor = darkMode ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.5)'

  const setMenuToggle = () => {
    dispatch(menuToggle())
    if (editorOpen !== null) {
      dispatch(slideEditor(false))
    }
  }

  return (
    <div className='hamburger icon'>
      <Hamburger
        className='icon'
        color={fillColor}
        toggle={setMenuToggle}
        toggled={menuToggled}
      />
    </div>
  )
}

export default MenuSlider
