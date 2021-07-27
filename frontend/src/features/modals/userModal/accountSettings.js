import React, { useState, useEffect } from 'react'
import { updateUser } from '../../../firebase/firebaseUser'
import { userReAuth } from '../../../firebase/firebaseAuth'

import ChangeEmail from './changeEmail'
import ChangePass from './changePass'
import ChangeUser from './changeUser'
import CustomButton from '../../../components/custom-button'

import './user-modal.scss'

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
    })
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

  const handleSubmit = async (e) => {
    console.log('handle submit')
    const { newName, newEmail, newPassword, currentPassword } = userInfo
    const firebaseReturn = await updateUser(newName, newEmail, newPassword, currentPassword)
    setFirebaseMessage(firebaseReturn)
    clearUserInfo()
  }

  const [acctPage, setAcctPage] = useState({
    home: true,
    user: false,
    email: false,
    password: false
  })

  console.log(firebaseMessage)

  return (
<<<<<<< HEAD
    <div>
      <p>Account Settings</p>
=======
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
          newPassword= {userInfo.newPassword}
        />
      }
      {
        firebaseMessage && <span>{firebaseMessage.message}</span>
      }
>>>>>>> 71c67b04d909ce1358f93dcc2c59a0ecdffa1497
    </div>
  )
}

export default AccountSettings