import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Color from './color'
import Editor from './color/editor'
import Slider from '../editorRange'

// import { slideColor } from './color/colorSliderSlice'
// import { slideEditor } from './editorSliderSlice'
// import { menuToggle } from '../menuSlider/menuSliderSlice'

import initColor from '../../assets/static/init-color'

import './composer-animate.css'
import './composer.scss'

const Composer = () => {
  const dispatch = useDispatch()
  const colorSlider = useSelector((state) => state.colorSlider.colorSlide)
  const editorSlider = useSelector((state) => state.slideEditor.editorSlider)
  const menuToggled = useSelector((state) => state.menuToggle.menuToggled)

  const composerInitialClass = menuToggled == null ?
    'composer-animate-off' :
    'composer-animate-return'
  const editorInitialClass = editorSlider == null ?
    'editor-animate-off' :
    'editor-animate-return'
  const colorInitialClass = editorSlider == null ?
    'color-animate-off' :
    'color-animate-return'

  // const toggleEditor = (id) => {
  //   if (editorSlider !== null && editorSlider === id) {
  //     dispatch(slideColor(false))
  //     dispatch(slideEditor(false))
  //   } else {
  //     dispatch(slideColor(true))
  //     dispatch(slideEditor(id))
  //     if (menuToggled !== null) {
  //       dispatch(menuToggle(false))
  //     }
  //   }
  // }

  return (
    <div className={
      menuToggled ?
        'composer composer-animate' :
        `composer ${composerInitialClass}`}>
      {initColor.map((color) => (
        <Color
          key={color.id}
          id={color.id}
          className={
            colorSlider ?
              'color color-animate' :
              `color ${colorInitialClass}`
          }>
          {/* <button className='invisible-button' onClick={() => toggleEditor(color.id)}/> */}
          <Editor
            id={color.id}
            className={
              editorSlider === color.id ?
                'editor editor-animate' :
                `editor ${editorInitialClass}`}>
            <Slider id={color.id} channelName='red' channelValue={color.red} />
            <Slider id={color.id} channelName='green' channelValue={color.green} />
            <Slider id={color.id} channelName='blue' channelValue={color.blue} />
            {/* <span>Editor for color {color.id}</span> */}
          </Editor>
        </Color>
      ))}
    </div>
  )
}

export default Composer