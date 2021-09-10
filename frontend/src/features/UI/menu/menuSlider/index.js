import React from 'react'
import { useDispatch } from 'react-redux'
import Hamburger from 'hamburger-react'

import { UI } from '../../../../redux/selectors' 
import { slideColor } from '../../composer/color/colorSliderSlice'
import { menuToggle } from './menuSliderSlice'
import { slideEditor } from '../../composer/editorSliderSlice'

import './menu-slider.scss'

const MenuSlider = () => {
  const dispatch = useDispatch()
  const { darkMode, editorSlider, menuToggled } = UI() 
  const fillColor = darkMode ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.5)'

  const setMenuToggle = () => {
    dispatch(menuToggle(!menuToggled))
    if (editorSlider !== null) {
      dispatch(slideEditor(false))
      dispatch(slideColor(false))
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
