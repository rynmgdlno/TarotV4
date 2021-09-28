import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { auth } from '../../firebase/firebaseConfig'
import { useFirebaseAuth } from '../../firebase/firebaseAuth'

// import { queryPagesSelector  } from '../../features/DATA/apiSlice'

// import {
//   activeResultSelector,
//   currentPageSelector,
//   resultLengthSelector,
//   setActiveResult,
//   decrementActive,
//   incrementActive
// } from '../../features/UI/swipe/swipeSlice'

import Composer from '../../features/UI/composer'
import Menu from '../../features/UI/menu'
import PalettesModal from '../../features/UI/modals/palettesModal'
import SaveModal from '../../features/UI/modals/saveModal'
import UserModal from '../../features/UI/modals/userModal'
import TopBar from '../../features/UI/top-bar'

import './tarot.scss'
import Overlay from './overlay'

const Tarot = () => {
  // const dispatch = useDispatch()
  // const activeResult = useSelector(activeResultSelector)
  // const currentPage = useSelector(currentPageSelector)
  // const resultLength = useSelector(resultLengthSelector)
  // const queryPages = useSelector(queryPagesSelector)

  useFirebaseAuth(auth)

  // query result navigation
  // const swipeRight = () => {
  //   console.log('right')
  //   if (resultLength > 1) {
  //     if (activeResult === resultLength - 1) {
  //       console.log('loop')
  //       dispatch(setActiveResult(0))
  //       // update active color
  //     } else if (currentPage < queryPages && activeResult === resultLength - 10) {
  //       // fetch new page
  //       console.log('increment refetch')
  //       dispatch(incrementActive())
  //       // update active color
  //     } else {
  //       console.log('increment norm')
  //       dispatch(incrementActive())
  //       // update active color
  //     }
  //   }
  // }

  // const swipeLeft = () => {
  //   console.log('left')
  //   if (resultLength > 1) {
  //     if (activeResult === 0) {
  //       console.log('test')
  //       dispatch(setActiveResult(resultLength))
  //     } else {
  //       console.log(activeResult)
  //       dispatch(decrementActive())
  //     }
  //   }
  // }

  // const keyNav = (e) => {
  //   if (e.key === 'ArrowRight') swipeRight()
  //   if (e.key === 'ArrowLeft') swipeLeft()
  //   console.log('Active Result: ', activeResult, 'Current Page: ', currentPage, 'Result Length: ', resultLength, 'Query Pages: ', queryPages)
  // }

  // useEffect(() => {
  //   window.addEventListener('keydown', keyNav, false)
  // }, [])

  return (
    <div className='primary'>
      <TopBar />
      <div className='secondary'>
        <Composer />
        <Menu />
      </div>
      <PalettesModal />
      <SaveModal />
      <UserModal />
      {/* <Overlay /> */}
    </div>
  )
}

export default Tarot