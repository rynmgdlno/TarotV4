import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  activeResultSelector,
  currentPageSelector,
  resultLengthSelector,
  setActiveResult,
  decrementActive,
  incrementActive
} from '../../../features/UI/swipe/swipeSlice'
import { editorSelector } from './editorSliderSlice'
import { menuSelector } from '../menu/menuSlider/menuSliderSlice'
import { setColor, colorDataSelector } from './color/editor/slider/channelEditorSlice'
import { queryPagesSelector, queryResultSelector } from '../../../features/DATA/apiSlice'

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
  const queryPages = useSelector(queryPagesSelector)
  const queryResult = useSelector(queryResultSelector)
  const resultLength = useSelector(resultLengthSelector)

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
  const swipeRight = () => {
    if (activeResult === resultLength - 1) {
      dispatch(setActiveResult(1))
      updateColor()
      // update active color
    } else if (currentPage < queryPages && activeResult === resultLength - 10) {
      // fetch new page
      dispatch(incrementActive())
      updateColor()
      // update active color
    } else {
      dispatch(incrementActive())
      updateColor()
      // update active color
    }
  }

  const swipeLeft = () => {
    if (resultLength) {
      if (activeResult === 0) {
        dispatch(setActiveResult(resultLength))
      } else {
        dispatch(decrementActive())
      }
    }
  }

  const keyNav = useCallback(e => {
    if (resultLength) {
      if (e.key === 'ArrowRight') swipeRight()
      if (e.key === 'ArrowLeft') swipeLeft()
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