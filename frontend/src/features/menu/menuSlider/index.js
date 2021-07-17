import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Hamburger from 'hamburger-react'

import { slideColor } from '../../composer/color/colorSliderSlice'
import { menuToggle } from './menuSliderSlice'
import { slideEditor } from '../../composer/editorSliderSlice'

import './menu-slider.scss'

const MenuSlider = () => {
  const dispatch = useDispatch()
  const darkMode = useSelector((state) => state.setDarkMode.darkMode)
  const editorSlider = useSelector((state) => state.slideEditor.editorSlider)
  const fillColor = darkMode ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.5)'
  const menuToggled = useSelector((state) => state.menuToggle.menuToggled)

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
