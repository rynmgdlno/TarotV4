import React from 'react'
import { useSelector } from 'react-redux'

// Components
import CustomButton from '../../components/custom-button'

// Icons
import HelpIcon from '../../assets/icons/help.icon'
import OpenIcon from '../../assets/icons/open.icon'
import SaveIcon from '../../assets/icons/save.icon'
import ThemeIcon from '../../assets/icons/theme.icon'
import UserIcon from '../../assets/icons/user.icon'

// Styles
import './menu.scss'
import './menu-animate.css'

const Menu = () => {
  const menuToggled = useSelector((state) => state.menuToggle.menuToggled)
  const menuInitialClass = useSelector((state) => state.menuAnimate.menuInitialClass)
  console.log(menuInitialClass)

  return (
    <div className={menuToggled ? 'menu menu-animate' : `menu ${menuInitialClass}`}>
      <CustomButton className='menu-button'>
        <UserIcon />
      </CustomButton>
      <CustomButton className='menu-button'>
        <OpenIcon />
      </CustomButton>
      <CustomButton className='menu-button'>
        <SaveIcon />
      </CustomButton>
      <CustomButton className='menu-button'>
        <ThemeIcon />
      </CustomButton>
      <CustomButton className='menu-button'>
        <HelpIcon />
      </CustomButton>
    </div>
  )
}

export default Menu