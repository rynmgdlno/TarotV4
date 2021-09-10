import React from 'react'

import { UI } from '../../../../redux/selectors'

import './modal-drawer.scss'

const ModalDrawer = () => {
  const { darkMode } = UI()
  // const bgColor = darkMode ? { backgroundColor: '#212121' } : { backgroundColor: '#FAFAFA' }

  return (
    <div className='modal-drawer' />
  )
}

export default ModalDrawer