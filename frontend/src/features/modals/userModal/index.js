import React, { useState } from 'react'
import { auth } from '../../../firebase/firebaseConfig'
import { createUserProfileDocument } from '../../../firebase/firebaseAuth'
import { useSelector } from 'react-redux'

import AccountSettings from './accountSettings'
import SignIn from './signIn'
import SignUp from './signUp'

import CustomButton from '../../../components/custom-button'

import './user-modal.scss'
import '../modal-animate.css'

const UserModal = () => {
  const [account, setAccount] = useState(false)
  const [currentUser, setCurrentUser] = useState(auth.currentUser)
  const [isGoogle, setIsGoogle] = useState(false)
  const [signUp, setSignUp] = useState(false)
  const darkMode = useSelector((state) => state.setDarkMode.darkMode)
  const userToggled = useSelector((state) => state.userModalToggle.userToggled)
  const modalInitialClass = userToggled == null ? 'modal-animate-off' : 'modal-animate-return'
  const bgColor = darkMode ? { backgroundColor: '#212121' } : { backgroundColor: '#FAFAFA' }

  auth.onAuthStateChanged(function(user){
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
  
  console.log(userToggled, modalInitialClass)

  return (
    <div className={userToggled ? 'user-modal modal-animate' : `user-modal ${modalInitialClass}`} >
    <p>User Modal</p>
      {/* <SignIn />
      <CustomButton onClick={setSignUp(true)}>Create New Account</CustomButton>
      <SignUp />
      <AccountSettings /> */}
    </div>
  )
}

export default UserModal