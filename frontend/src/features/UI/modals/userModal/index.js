import React, { useEffect, useState } from 'react'
import { auth } from '../../../../firebase/firebaseConfig'
import { useDispatch, useSelector } from 'react-redux'

import { darkModeSelector } from '../../darkMode/darkModeSlice'
import { menuToggle } from '../../menu/menuSlider/menuSliderSlice'
import {
  userNameSelector,
  userModalSelector,
  userModalToggle,
  thirdPartySelector,
  thirdParty
} from './userModalSlice'

import AccountSettings from './accountSettings/accountSettings'
import SignIn from './signIn/signIn'
import SignUp from './signUp/signUp'

import CustomButton from '../../../../components/custom-button'

import '../modal.scss'
import '../modal-animate.css'

const UserModal = () => {
  const dispatch = useDispatch()
  const darkMode = useSelector(darkModeSelector)
  const userName = useSelector(userNameSelector)
  const userToggled = useSelector(userModalSelector)
  const isThirdParty = useSelector(thirdPartySelector)
  // local state / form & page control
  const [currentUser, setCurrentUser] = useState(auth.currentUser)
  const [account, setAccount] = useState(false) // account page toggle
  const [signUp, setSignUp] = useState(false) // signup page toggle
  // UI state
  const modalInitialClass = userToggled == null ? 'modal-animate-off' : 'modal-animate-return'
  const bgColor = darkMode ? { backgroundColor: 'rgba(33, 33, 33, 1)' } : { backgroundColor: 'rgba(250, 250, 250, 1)' }

  // listening to firebase auth and setting current user and login type
  auth.onAuthStateChanged(function (user) {
    if (user) {
      setCurrentUser(user)
      if (currentUser && currentUser.providerData[0].providerId === 'google.com') {
        dispatch(thirdParty('Google'))
      }
    } else {
      setCurrentUser(null)
      dispatch(thirdParty(false))
    }
  })

  return (
    <div
      className={userToggled ? 'modal modal-animate' : `modal ${modalInitialClass}`}
      style={bgColor}
    >
      <div style={{ width: '100%' }}>
        {
          !currentUser && signUp ?
            <SignUp setSignUp={setSignUp} /> :
            !currentUser ?
              <SignIn /> :
              <div className='user-header'>
                <h3 className="medFont">{currentUser ? userName || currentUser.displayName : 'error'}</h3>
                <div className='user-button-container'>
                  <CustomButton
                    onClick={() => auth.signOut()}
                    className='custom-button secondary-button'>Sign Out</CustomButton>
                  {
                    isThirdParty ?
                      <div className='third-party'>You are signed in with {isThirdParty}</div> :
                      <CustomButton
                        onClick={() => setAccount(!account)}
                        className=''>Account Settings</CustomButton>
                  }
                </div>
              </div>
        }
      </div>
      {
        account &&
        <AccountSettings />
      }
      {
        !signUp &&
        <div className='modal-button'>
          <CustomButton onClick={() => setSignUp(true)}>Create New Account</CustomButton>
        </div>
      }
      <div className='close-button-container'>
        <CustomButton
          onClick={() => {
            dispatch(userModalToggle(false))
            dispatch(menuToggle(false))
            setAccount(false)
            setSignUp(false)
          }}
          className='basic-button close-button'>Close</CustomButton>
      </div>
    </div>
  )
}

export default UserModal