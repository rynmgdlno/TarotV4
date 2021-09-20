import React, { useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { darkModeSelector } from '../darkMode/darkModeSlice'
import { searchSelector, setSearchField } from './topBarSlice'

import CustomButton from '../../../components/custom-button'
import FormInput from '../../../components/formInput'
import MenuSlider from '../menu/menuSlider'
import Search from '../../../assets/icons/search.icon'

import './top-bar.scss'

const TopBar = () => {
  const dispatch = useDispatch()
  const darkMode = useSelector(darkModeSelector)
  const searchToggled = useSelector(searchSelector)
  const [query, setQuery] = useState('')
  const searchRef = React.createRef()
  const fillColor = darkMode ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.5)'

  const onEnter = e => {
    if (e.key === 'Enter') {
      fetchQuery()
      dispatch(setSearchField())
      searchRef.current.blur()
    }
  }

  const fetchQuery = async () => {
    console.log(query)
  }

  const handleChange = e => {
    setQuery(e.target.value)
  }

  const showSearch = () => {
    dispatch(setSearchField())
    searchRef.current.focus()
  }

  return (
    <div className='top-bar'>
      <CustomButton
        className={searchToggled ?
          'search-button search-active' :
          `search-button`}
        type='submit'
        onClick={showSearch}>
        <Search className='icon search-icon' fillColor={fillColor} />
      </CustomButton>
      <FormInput
        className={searchToggled ?
          'search' :
          'search search-active'}
        placeholder='search'
        onChange={handleChange}
        onKeyDown={onEnter}
        ref={searchRef}
      />
      <h1>Tarot</h1>
      <MenuSlider />
    </div>
  )
}

export default TopBar