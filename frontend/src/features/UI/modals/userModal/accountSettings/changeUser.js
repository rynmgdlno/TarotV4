import React from 'react'

import CustomButton from '../../../../../components/custom-button'
import FormInput from '../../../../../components/formInput'

import '../user-modal.scss'

const ChangeUser = ({ handleChange, handleSubmit }) => {
  return (
    <div className='sign-in-form'>
      <p>Change Username</p>
      <FormInput 
        name='newName'
        label='New Username'
        type='text'
        placeholder='new username'
        onChange={handleChange}
        autoComplete='new-password'
      />
      <CustomButton onClick={() => handleSubmit()}>
        Submit
      </CustomButton>
    </div>
  )
}

export default ChangeUser