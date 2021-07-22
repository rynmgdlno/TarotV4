import React, { useState } from 'react'
import { auth } from '../../../firebase/firebaseConfig'
// import { createUserProfileDocument } from '../../../firebase/firebaseAuth'
import { useDispatch, useSelector } from 'react-redux'

import { userModalToggle } from './userModalSlice'
import { menuToggle } from '../../menu/menuSlider/menuSliderSlice'

import AccountSettings from './accountSettings'
import SignIn from './signIn'
import SignUp from './signUp'

import CustomButton from '../../../components/custom-button'

import '../modal.scss'
import '../modal-animate.css'

const UserModal = () => {
  const [account, setAccount] = useState(false)
  const [currentUser, setCurrentUser] = useState(auth.currentUser)
  const dispatch = useDispatch()
  const [isGoogle, setIsGoogle] = useState(false)
  const [signUp, setSignUp] = useState(false)
  const darkMode = useSelector((state) => state.setDarkMode.darkMode)
  const userToggled = useSelector((state) => state.userModalToggle.userToggled)
  const modalInitialClass = userToggled == null ? 'modal-animate-off' : 'modal-animate-return'
  const bgColor = darkMode ? { backgroundColor: 'rgba(33, 33, 33, 1)' } : { backgroundColor: 'rgba(250, 250, 250, 1)' }

  auth.onAuthStateChanged(function (user) {
    if (user) {
      setCurrentUser(user)
      if (currentUser && currentUser.providerData[0].providerId === 'google.com') {
        setIsGoogle(true)
      }
    } else {
      setCurrentUser(null)
      setIsGoogle(false)
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
            <SignUp /> :
            !currentUser ?
              <SignIn /> :
              <div className='user-header'>
                <h3 className="medFont">{currentUser ? currentUser.displayName : 'error'}</h3>
                <div className='user-button-container'>
                  <CustomButton
                    onClick={() => auth.signOut()}
                    className='custom-button secondary-button'>Sign Out</CustomButton>
                  {
                    isGoogle ?
                      null :
                      <CustomButton
                        onClick={() => setAccount(!account)}
                        className='' >Account Settings</CustomButton>
                  }
                </div>
              </div>

        }
      </div>
      {
        account &&
        <AccountSettings />
      }
      <div className='close-button-container'>
        <CustomButton
          onClick={() => {
            dispatch(userModalToggle(false))
            dispatch(menuToggle(false))
          }}
          className='basic-button close-button'>Close</CustomButton>
      </div>
    </div>
  )
}

export default UserModal