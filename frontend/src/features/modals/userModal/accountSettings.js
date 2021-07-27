import React, { useState } from 'react'

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
      <p>Account Settings</p>
    </div>
  )
}

export default AccountSettings