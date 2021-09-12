import React, { useState } from 'react'
import { auth } from '../../../../firebase/firebaseConfig'
import { useDispatch, useSelector } from 'react-redux'

import { darkModeSelector } from '../../darkMode/darkModeSlice'
import { menuToggle } from '../../menu/menuSlider/menuSliderSlice'
import { userModalSelector, userModalToggle } from './userModalSlice'

import AccountSettings from './accountSettings/accountSettings'
import SignIn from './signIn/signIn'
import SignUp from './signUp/signUp'

import CustomButton from '../../../../components/custom-button'

import '../modal.scss'
import '../modal-animate.css'

const UserModal = () => {
  const dispatch = useDispatch()
  const [account, setAccount] = useState(false) // account page toggle
  const [currentUser, setCurrentUser] = useState(auth.currentUser) // stores user object
  const [isThirdParty, setThirdParty] = useState(false) // Bool for if login method is Google/Apple/FB/GitHub
  const [signUp, setSignUp] = useState(false)
  const darkMode = useSelector(darkModeSelector)
  const userToggled = useSelector(userModalSelector)
  const modalInitialClass = userToggled == null ? 'modal-animate-off' : 'modal-animate-return'
  const bgColor = darkMode ? { backgroundColor: 'rgba(33, 33, 33, 1)' } : { backgroundColor: 'rgba(250, 250, 250, 1)' }

  auth.onAuthStateChanged(function (user) {
    if (user) {
      setCurrentUser(user)
      if (currentUser && currentUser.providerData[0].providerId === 'google.com') {
        setThirdParty(true)
      }
    } else {
      setCurrentUser(null)
      setThirdParty(false)
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
            <SignUp setSignUp={setSignUp}/> :
            !currentUser ?
              <SignIn /> :
              <div className='user-header'>
                <h3 className="medFont">{currentUser ? currentUser.displayName : 'error'}</h3>
                <div className='user-button-container'>
                  <CustomButton
                    onClick={() => auth.signOut()}
                    className='custom-button secondary-button'>Sign Out</CustomButton>
                  {
                    isThirdParty ?
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
            setAccount(false)
          }}
          className='basic-button close-button'>Close</CustomButton>
      </div>
    </div>
  )
}

export default UserModal