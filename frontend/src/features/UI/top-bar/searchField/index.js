import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { setColor } from '../../composer/color/editor/slider/channelEditorSlice'
import {
  setIsLoading,
  setNoResults,
  setQueryResult,
  setQueryPages,
} from '../../../DATA/apiSlice'
import {
  setActiveResult,
  setCurrentPage,
  setResultLength
} from '../../swipe/swipeSlice'

import FormInput from '../../../../components/formInput'

require('dotenv').config({
  path: '../../.env.local'
})


const SearchField = React.forwardRef(({ setSearchField, searchToggled }, ref) => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')

  const onEnter = e => {
    if (e.key === 'Enter') {
      fetchQuery()
      dispatch(setSearchField())
      ref.current.blur()
    }
  }

  const fetchQuery = async () => {
    try {
      console.log(query)
      dispatch(setIsLoading(true))
      dispatch(setCurrentPage(1))
      const result = await fetch(`http://localhost:7000/?query=${query}&page=1`, {
        mode: 'cors'
      })
      console.log(result)
      const data = await result.json()
      console.log(data)
      if (!data[2].length) {
        console.log('no results')
        dispatch(setIsLoading(false))
        dispatch(setNoResults(true))
      } else {
        console.log('post fetch updating')
        dispatch(setQueryResult(data[2]))
        dispatch(setQueryPages(data[1]))
        dispatch(setCurrentPage(data[0]))
        dispatch(setActiveResult(1))
        dispatch(setResultLength(data[2].length))
        dispatch(setColor(data[2][0]))
        dispatch(setIsLoading(false))
      }
    } catch (error) {
      console.log(error)
      return error
    }
  }

  const handleChange = e => {
    setQuery(e.target.value)
  }

  return (
    <>
      <FormInput
        className={searchToggled ?
          'search' :
          'search search-active'}
        placeholder='search'
        onChange={handleChange}
        onKeyDown={onEnter}
        ref={ref}
      />
    </>
  )
})

export default SearchField