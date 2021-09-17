import React from 'react'

import { auth } from '../../firebase/firebaseConfig'
import { useFirebaseAuth } from '../../firebase/firebaseAuth'

import Composer from '../../features/UI/composer'
import Menu from '../../features/UI/menu'
// import PalettesModal from '../../features/UI/modals/palettesModal'
import UserModal from '../../features/UI/modals/userModal'
import TopBar from '../../features/UI/top-bar'

import './tarot.scss'

const Tarot = () => {

  useFirebaseAuth(auth)


  console.log('rerender')
  return (
    <div className='primary'>
      <TopBar />
      <div className='secondary'>
        <Composer />
        <Menu />
      </div>
      {/* <PalettesModal /> */}
      <UserModal />
    </div>
  )
}

export default Tarot