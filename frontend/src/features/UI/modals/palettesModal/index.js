import React, { useEffect, useState } from 'react'
import { firestore } from '../../../../firebase/firebaseConfig'
import { useDispatch, useSelector } from 'react-redux'

import { palettesToggledSelector } from './palettesSlice'
import {
  currentUserSelector,
  savedPalettesSelector,
  setSavedPalettes
} from '../../../DATA/DATAReducer'

import Palette from './palette'
import FormInput from '../../../../components/formInput'

import './palettesModal.scss'

const PalettesModal = () => {
  const dispatch = useDispatch()
  const palettesToggled = useSelector(palettesToggledSelector)
  const savedPalettes = useSelector(savedPalettesSelector)
  const currentUser = useSelector(currentUserSelector)
  const [search, setSearch] = useState('')
  const modalInitialClass = palettesToggled == null ? 'modal-animate-off' : 'modal-animate-return'

  // search field filtering
  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredPalettes = savedPalettes && savedPalettes.filter(palette =>
    palette.name.toLowerCase().includes(search.toLowerCase()))

  // ! // ALL FIREBASE PALETTE LOGIC NEEDS TO BE RE SORTED.
  // ! // CALLING THE COLLECTION HERE IS HITTING YOUR FB QUOTA
  // updating saved palettes array on user object change
  const updatePalettes = async () => {
    if (currentUser) {
      let newSavedPalettes = []
      const id = currentUser.id
      const palettes = firestore.collection(`users/${id}/palettes/`)
      const snapShot = await palettes.get()
      snapShot.docs.forEach((doc) => {
        newSavedPalettes.push(doc.data())
      })
      dispatch(setSavedPalettes(newSavedPalettes))
    }
  }

  useEffect(() => {
    updatePalettes()
  }, [currentUser])

  // Individual palette operations
  // Load Palette

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
        {filteredPalettes && filteredPalettes.map((palette, i) => (
          <Palette key={i} data={palette} />
        ))}
      </div>
    </div>
  )
}

export default PalettesModal