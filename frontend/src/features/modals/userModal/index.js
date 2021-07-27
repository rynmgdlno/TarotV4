import React, { useState } from 'react'
import { auth } from '../../../firebase/firebaseConfig'
import { createUserProfileDocument } from '../../../firebase/firebaseAuth'
import { useSelector } from 'react-redux'

import AccountSettings from './accountSettings'
import SignIn from './signIn'
import SignUp from './signUp'

import CustomButton from '../../../components/custom-button'
import FormInput from '../../../components/formInput'

import '../modal.scss'
import '../modal-animate.css'

const UserModal = () => {
  const [account, setAccount] = useState(false)
  const [currentUser, setCurrentUser] = useState(auth.currentUser)
  const [isGoogle, setIsGoogle] = useState(false)
  const [signUp, setSignUp] = useState(false)
  const darkMode = useSelector((state) => state.setDarkMode.darkMode)
  const userToggled = useSelector((state) => state.userModalToggle.userToggled)
  const modalInitialClass = userToggled == null ? 'modal-animate-off' : 'modal-animate-return'
  const bgColor = darkMode ? { backgroundColor: 'rgba(33, 33, 33, .8)' } : { backgroundColor: 'rgba(250, 250, 250, .8)' }

  auth.onAuthStateChanged(function (user) {
    if (user) {
      setCurrentUser(user)
      if (currentUser & currentUser.providerData[0].providerId === 'google.com') {
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
      <p>User Modal</p>
      {/* <SignIn /> */}
      <CustomButton onClick={() => setSignUp(!signUp)}>Create New Account</CustomButton>
      {
        signUp && <SignUp />
      }
      {/* <AccountSettings /> */}
      <div className='test-form-container'>
        <span>First Name:</span>
        <FormInput placeholder='test' />
        <span>Last Name:</span>
        <FormInput placeholder='test' />
        <span>Email:</span>
        <FormInput placeholder='test' />
        <span>Phone:</span>
        <FormInput placeholder='test' />
        <span>Password:</span>
        <FormInput placeholder='test' />
      </div>
    </div>
  )
}

export default UserModal