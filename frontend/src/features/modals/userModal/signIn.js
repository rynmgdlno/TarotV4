import React, { useState } from 'react'
import { auth } from '../../../firebase/firebaseConfig'
import { signInWithGoogle } from '../../../firebase/firebaseAuth'

import CustomButton from '../../../components/custom-button'
import GoogleIcon from '../../../assets/icons/google.icon'

import FormInput from '../../../components/formInput'

import './user-modal.scss'

const SignIn = ({setAccount}) => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  })
  const [errorMessage, setErrorMessage] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setUserInfo({
      ...userInfo, [name]: value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const { email, password } = userInfo

    try {
      await auth.signInWithEmailAndPassword(email, password)
      setUserInfo({
        email: '',
        password: ''
      })
    } catch (error) {
      setErrorMessage(error)
    }
  }

  console.log(errorMessage)

  return (
    <div className='sign-in'>
      <p>Hello!</p>
      <form className='sign-in-form'>
        <FormInput
          placeholder='email'
          label='email:'
          name='email'
          type='email'
          onChange={handleChange} />
        <FormInput
          placeholder='password'
          label='password:'
          name='password'
          type='password'
          onChange={handleChange} />
        <CustomButton
          onClick={handleSubmit}
          type='submit'
          className='afm-btn'>Sign In</CustomButton>
        {
          errorMessage && <span>{errorMessage.message}</span>
        }
      </form>
      <CustomButton
        onClick={signInWithGoogle}
        className='google-button'>
        Sign In with<GoogleIcon className='btn-icn' /></CustomButton>
      <CustomButton>Create New Account</CustomButton>
    </div>
  )
}

export default SignIn