import React from 'react'
import { useSelector } from 'react-redux'

import './modal-drawer.scss'

const ModalDrawer = () => {
  const darkMode = useSelector((state) => state.setDarkMode.darkMode)
  // const bgColor = darkMode ? { backgroundColor: '#212121' } : { backgroundColor: '#FAFAFA' }

  return (
    <div className='modal-drawer' />
  )
}

export default ModalDrawer