import React from 'react'
import { auth } from '../../../../../firebase/firebaseConfig'

import CustomButton from '../../../../../components/custom-button'
import FormInput from '../../../../../components/formInput'

import '../user-modal.scss'



const ChangeEmail = ({ handleChange, handleSubmit }) => {
  const currentEmail = auth ? auth.currentUser.email : ''
  return (
    <div className='sign-in-form'>
      <p>Change Email</p>
      {
        currentEmail && <p>Current Email: {currentEmail}</p>
      }
      <FormInput
        name='newEmail'
        label='New Email'
        type='text'
        placeholder='new email'
        onChange={handleChange}
      />
      <FormInput
        name='currentPassword'
        label='Password'
        type='password'
        placeholder='password'
        onChange={handleChange}
      />
      <CustomButton onClick={() => handleSubmit()}>
        Submit
      </CustomButton>
    </div>
  )
}

export default ChangeEmail