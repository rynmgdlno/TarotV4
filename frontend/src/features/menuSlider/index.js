import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { slideColor } from '../composer/color/colorSliderSlice'
import { menuToggle } from './menuSliderSlice'
import { slideEditor } from '../composer/editorSliderSlice'

import CustomButton from '../../components/custom-button'

import './menu-slider.scss'

const MenuSlider = () => {
  const dispatch = useDispatch()
  const menuToggled = useSelector((state) => state.menuToggle.menuToggled)
  const editorSlider = useSelector((state) => state.slideEditor.editorSlider)

  const setMenuToggle = () => {
    dispatch(menuToggle(!menuToggled))
    if (editorSlider !== null) {
      dispatch(slideEditor(false))
      dispatch(slideColor(false))
    }
  }

  return (
    <div>
      <CustomButton onClick={setMenuToggle}>TEST</CustomButton>
    </div>
  )
}

export default MenuSlider