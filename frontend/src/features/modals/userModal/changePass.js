import React from 'react'

import CustomButton from '../../../components/custom-button'
import FormInput from '../../../components/formInput'

import './user-modal.scss'

const ChangePass = ({ handleChange, handleSubmit, currentPassword, newPassword, confirmPassword }) => {
  return (
    <div className='sign-in-form'>
      <p>Change Password</p>
      <FormInput
        name='currentPassword'
        label='Current Password:'
        type='password'
        placeholder='current password'
        onChange={handleChange}
        value={currentPassword}
      />
      <FormInput
        name='newPassword'
        label='New Password:'
        type='password'
        placeholder='new password'
        onChange={handleChange}
        value={newPassword}
      />
      <FormInput
        name='Password'
        label='Confirm Password:'
        type='password'
        placeholder='confirm password'
        onChange={handleChange}
        value={confirmPassword}
      />
      <CustomButton type='submit' onClick={() => handleSubmit()}>
        Submit
      </CustomButton>
    </div>
  )
}

export default ChangePass