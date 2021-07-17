import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setDarkMode } from './darkMode/darkModeSlice'
import { userModalToggle } from '../modals/userModal/userModalSlice'

import CustomButton from '../../components/custom-button'

import HelpIcon from '../../assets/icons/help.icon'
import OpenIcon from '../../assets/icons/open.icon'
import SaveIcon from '../../assets/icons/save.icon'
import ThemeIcon from '../../assets/icons/theme.icon'
import UserIcon from '../../assets/icons/user.icon'

import './menu.scss'
import './menu-animate.css'

const Menu = () => {
  const dispatch = useDispatch()
  const darkMode = useSelector((state) => state.setDarkMode.darkMode)
  const menuToggled = useSelector((state) => state.menuToggle.menuToggled)
  const userToggled = useSelector((state) => state.userModalToggle.userToggled)

  const menuInitialClass = menuToggled == null ? 'menu-animate-off' : 'menu-animate-return' 
  const fillColor = darkMode ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.5)'

  return (
    <div className={menuToggled ? 'menu menu-animate' : `menu ${menuInitialClass}`}>
      <CustomButton className='menu-button' onClick={() => dispatch(userModalToggle(!userToggled))}>
        <UserIcon className='icon' fillColor={fillColor}/>
      </CustomButton>
      <CustomButton className='menu-button'>
        <OpenIcon className='icon' fillColor={fillColor}/>
      </CustomButton>
      <CustomButton className='menu-button'>
        <SaveIcon className='icon' fillColor={fillColor}/>
      </CustomButton>
      <CustomButton className='menu-button' onClick={() => dispatch(setDarkMode(!darkMode))}>
        <ThemeIcon className='icon' fillColor={fillColor}/>
      </CustomButton>
      <CustomButton className='menu-button'>
        <HelpIcon className='icon' fillColor={fillColor}/>
      </CustomButton>
    </div>
  )
}

export default Menu