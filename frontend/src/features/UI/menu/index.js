import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { darkModeSelector, setDarkMode } from '../darkMode/darkModeSlice'
import { menuSelector, menuToggle } from '../menu/menuSlider/menuSliderSlice'
import { palettesToggledSelector, palettesToggle } from '../modals/palettesModal/palettesSlice'
import { userModalSelector, userModalToggle } from '../modals/userModal/userModalSlice'

import CustomButton from '../../../components/custom-button'

import HelpIcon from '../../../assets/icons/help.icon'
import OpenIcon from '../../../assets/icons/open.icon'
import SaveIcon from '../../../assets/icons/save.icon'
import ThemeIcon from '../../../assets/icons/theme.icon'
import UserIcon from '../../../assets/icons/user.icon'

import './menu.scss'
import './menu-animate.css'

const Menu = () => {
  const dispatch = useDispatch()
  const darkMode = useSelector(darkModeSelector)
  const menuToggled = useSelector(menuSelector)
  const palettesToggled = useSelector(palettesToggledSelector)
  const userToggled = useSelector(userModalSelector)
  const menuInitialClass = menuToggled == null ? 'menu-animate-off' : 'menu-animate-return' 
  const fillColor = darkMode ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.5)'

  const toggleUser = () => {
    dispatch(userModalToggle())
    if (palettesToggled) dispatch(palettesToggle())
  }

  const togglePalettes = () => {
    dispatch(palettesToggle())
    if (userToggled) dispatch(userModalToggle())
  }

  const toggleDarkMode = () => {
    dispatch(setDarkMode())
    dispatch(menuToggle())
  }

  return (
    <div className={menuToggled ? 'menu menu-animate' : `menu ${menuInitialClass}`}>
      <CustomButton className='menu-button' onClick={toggleUser}>
        <UserIcon className='icon' fillColor={fillColor}/>
      </CustomButton>
      <CustomButton className='menu-button' onClick={togglePalettes}>
        <OpenIcon className='icon' fillColor={fillColor}/>
      </CustomButton>
      <CustomButton className='menu-button'>
        <SaveIcon className='icon' fillColor={fillColor}/>
      </CustomButton>
      <CustomButton className='menu-button' onClick={toggleDarkMode}>
        <ThemeIcon className='icon' fillColor={fillColor}/>
      </CustomButton>
      <CustomButton className='menu-button'>
        <HelpIcon className='icon' fillColor={fillColor}/>
      </CustomButton>
    </div>
  )
}

export default Menu