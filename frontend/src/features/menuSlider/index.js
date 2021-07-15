import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { menuToggle } from './menuSliderSlice'

import CustomButton from '../../components/custom-button'

import './menu-slider.scss'

const MenuSlider = () => {
  const dispatch = useDispatch()
  const menuToggled = useSelector((state) => state.menuToggle.menuToggled)

  const setMenuToggle = () => {
    dispatch(menuToggle(!menuToggled))
  }

  return (
    <div>
      <CustomButton onClick={setMenuToggle}>TEST</CustomButton>
    </div>
  )
}

export default MenuSlider