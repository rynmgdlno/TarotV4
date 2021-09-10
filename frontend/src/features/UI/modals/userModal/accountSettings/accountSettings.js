import React, { useState, useEffect } from 'react'
import { updateUser } from '../../../../../firebase/firebaseUser'
// import { userReAuth } from '../../../../../firebase/firebaseAuth'

import ChangeEmail from './changeEmail'
import ChangePass from './changePass'
import ChangeUser from './changeUser'
import CustomButton from '../../../../../components/custom-button'

import '../user-modal.scss'

const AccountSettings = () => {
  const [firebaseMessage, setFirebaseMessage] = useState(null)
  const [userInfo, setUserInfo] = useState({
    newName: '',
    newEmail: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    passwordError: null
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserInfo({
      ...userInfo,
      [name]: value
    }, console.log(userInfo))
  }

  const clearUserInfo = () => {
    setUserInfo({
      newName: '',
      newEmail: '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    })
  }

  // Initial state for acct page. Using this to easily reset state on update completion, resetting to 'home' account page.
  const acctInitState = {
    home: true,
    user: false,
    email: false,
    password: false
  }
  // State object for conditionally rendering correct Account Setting page.
  const [acctPage, setAcctPage] = useState({
    home: true,
    user: false,
    email: false,
    password: false
  })

  // Submits to multi-firebase function at 'firebaseUser.js'. 
  // The content passed dictates what operation to attempt (update, user, email, or pass, respectively)
  // Then handles necessary UI updates and message/error display. 
  const handleSubmit = async () => {
    console.log('handle submit')
    const { newName, newEmail, newPassword, currentPassword } = userInfo
    const firebaseReturn = await updateUser(newName, newEmail, newPassword, currentPassword)
    setFirebaseMessage(firebaseReturn)
    clearUserInfo()
    setAcctPage({ ...acctInitState })
  }

  return (
    <div className='account-settings'>
      <h3>Account Settings</h3>
      {
        acctPage.home &&
        <div className='account-button-container'>
          <CustomButton
            onClick={() => {
              setAcctPage({
                home: false,
                user: true
              })
            }}>
            Change User Name
          </CustomButton>
          <CustomButton
            onClick={() => {
              setAcctPage({
                home: false,
                email: true
              })
            }}>
            Change Email
          </CustomButton>
          <CustomButton
            onClick={() => {
              setAcctPage({
                home: false,
                password: true
              })
            }}>
            Change Password
          </CustomButton>
        </div>
      }
      {
        acctPage.user &&
        <ChangeUser
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      }
      {
        acctPage.email &&
        <ChangeEmail
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      }
      {
        acctPage.password &&
        <ChangePass
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          currentPassword={userInfo.currentPassword}
          confirmPassword={userInfo.confirmPassword}
          newPassword={userInfo.newPassword}
        />
      }
      {
        firebaseMessage && <span>{firebaseMessage.message}</span>
      }
    </div>
  )
}

export default AccountSettings