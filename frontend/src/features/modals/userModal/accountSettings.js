import React, { useState } from 'react'
import CustomButton from '../../../components/custom-button'

// import ChangeEmail from './changeEmail'
import ChangeEmail from './changeEmail'
import ChangePass from './changePass'
import ChangeUser from './changeUser'

import './user-modal.scss'

const AccountSettings = () => {
  const [userInfo, setUserInfo] = useState({
    newDisplayName: '',
    newEmail: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
    passwordError: null
  })

  const clearUserInfo = () => {
    setUserInfo({
      newDisplayName: '',
      newEmail: '',
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    })
  }

  const [acctPage, setAcctPage] = useState({
    home: true,
    user: false,
    email: false,
    password: false
  })

  return (
    <div>
      <h3>Account Settings</h3>
      {
        acctPage.home &&
        <div className='account-settings'>
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
    </div>
  )
}

export default AccountSettings