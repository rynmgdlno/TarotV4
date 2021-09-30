import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  activeResultSelector,
  currentPageSelector,
  setCurrentPage,
  resultLengthSelector,
  setResultLength,
  setActiveResult,
  decrementActive,
  incrementActive
} from '../../../features/UI/swipe/swipeSlice'
import { editorSelector } from './editorSliderSlice'
import { menuSelector } from '../menu/menuSlider/menuSliderSlice'
import { setColor, colorDataSelector } from './color/editor/slider/channelEditorSlice'
import { queryPagesSelector, queryResultSelector, setQueryResult, querySelector } from '../../../features/DATA/apiSlice'

import Color from './color'
import Editor from './color/editor'
import Slider from './color/editor/slider'

import './composer-animate.css'
import './composer.scss'

const Composer = () => {
  const dispatch = useDispatch()
  const activeResult = useSelector(activeResultSelector)
  const colorData = useSelector(colorDataSelector)
  const currentPage = useSelector(currentPageSelector)
  const editorOpen = useSelector(editorSelector)
  const menuToggled = useSelector(menuSelector)
  const query = useSelector(querySelector)
  const queryPages = useSelector(queryPagesSelector)
  const queryResult = useSelector(queryResultSelector)
  const resultLength = useSelector(resultLengthSelector)

  // TODO: Unnecessary init classes, need to refactor
  const composerInitialClass = menuToggled == null ?
    'composer-animate-off' :
    'composer-animate-return'
  const editorInitialClass = editorOpen == null ?
    'editor-animate-off' :
    'editor-animate-return'
  const colorInitialClass = editorOpen == null ?
    'color-animate-off' :
    'color-animate-return'

  // query result navigation
  const updateColor = () => {
    dispatch(setColor(queryResult[activeResult]))
  }
  const swipeLeft = () => {
    if (resultLength) {
      // looping to beginning when at the end
      if (activeResult === resultLength - 1) {
        dispatch(setActiveResult(1))
        // pre-fetching next page
      } else if (currentPage < queryPages && activeResult === resultLength - 10) {
        fetchNewPage()
        dispatch(incrementActive())
      } else {
        dispatch(incrementActive())
      }
      updateColor()
    }
  }

  const swipeRight = () => {
    if (resultLength) {
      if (activeResult === 0) {
        dispatch(setActiveResult(resultLength - 1))
        updateColor()
      } else {
        dispatch(decrementActive())
        updateColor()
      }
    }
  }

  const fetchNewPage = async () => {
    const currentResult = queryResult
    const encodedQuery = encodeURIComponent(query).replace(/%20/g, "+")
    const nextPage = currentPage + 1
    if (currentPage === queryPages) {
      dispatch(setCurrentPage(1))
    } else {
      dispatch(setCurrentPage(nextPage))
      const result = await fetch(`http://localhost:7000/?query=${encodedQuery}&page=${nextPage}`, {
        mode: 'cors'
      })
      const data = await result.json()
      let augmentedQueryResult = currentResult.concat(data[2])
      dispatch(setQueryResult(augmentedQueryResult))
      dispatch(setResultLength(augmentedQueryResult.length))
    }
  }

  const keyNav = useCallback(e => {
    if (resultLength) {
      if (e.key === 'ArrowRight') swipeLeft()
      if (e.key === 'ArrowLeft') swipeRight()
    }
  })

  useEffect((e) => {
    window.addEventListener('keydown', keyNav)
    return () => {
      window.removeEventListener('keydown', keyNav)
    }
  }, [keyNav])

  return (
    <div
      onKeyDown={keyNav}
      className={
        menuToggled ?
          'composer composer-animate' :
          `composer ${composerInitialClass}`}>
      {colorData.map((color) => (
        <Color
          key={color.id}
          id={color.id}
          swipeLeft={swipeLeft}
          swipeRight={swipeRight}
          className={
            editorOpen !== null && editorOpen !== false ?
              'color color-animate' :
              `color ${colorInitialClass}`
          }>
          <Editor
            id={color.id}
            className={
              editorOpen === color.id ?
                'editor editor-animate' :
                `editor ${editorInitialClass}`}>
            <Slider id={color.id} channelName='red' color={color} />
            <Slider id={color.id} channelName='green' color={color} />
            <Slider id={color.id} channelName='blue' color={color} />
          </Editor>
        </Color>
      ))}
    </div>
  )
}

export default Composer