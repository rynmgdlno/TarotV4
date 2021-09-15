import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { menuToggle } from '../../menu/menuSlider/menuSliderSlice'
import { palettesToggledSelector } from './palettesSlice'
import {
  currentUserSelector,
  savedPalettesSelector,
  setSavedPalettes
} from '../../../DATA/DATAReducer'

import CustomButton from '../../../../components/custom-button'
import FormInput from '../../../../components/formInput'

import './palettesModal.scss'
import { firestore } from '../../../../firebase/firebaseConfig'

const PalettesModal = () => {
  const dispatch = useDispatch()
  const palettesToggled = useSelector(palettesToggledSelector)
  const currentUser = useSelector(currentUserSelector)
  const modalInitialClass = palettesToggled == null ? 'modal-animate-off' : 'modal-animate-return'

  // search field filtering
  let search = ''
  const handleChange = e => {
    search = e.target.value
    console.log(search)
  }

  const updatePalettes = async () => {
    if (currentUser) {
      let newSavedPalettes = []
      const id = currentUser.id
      const palettes = firestore.collection(`users/${id}/palettes/`)
      console.log(palettes)
      const snapShot = await palettes.get()
      snapShot.docs.forEach((doc) => {
        newSavedPalettes.push(doc.data)
      })
      console.log(newSavedPalettes)
      dispatch(setSavedPalettes(newSavedPalettes))
    }
  }

  useEffect(() => {
    updatePalettes()
  }, [currentUser])

  return (
    <div className={palettesToggled ? 'modal modal-animate' : `modal ${modalInitialClass}`}>
      <div className='palettes-header'>
        <h4>Saved Palettes</h4>
        <FormInput
          onChange={handleChange}
          placeholder='search'
        />
      </div>
      <div className='palettes-window'>

      </div>
    </div>
  )
}

export default PalettesModal