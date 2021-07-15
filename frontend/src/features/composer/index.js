import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Color from './color'
import Editor from './color/editor'
import Slider from '../editorRange'

import { slideEditor } from './editorSliderSlice'

import initColor from '../../assets/static/init-color'

import './composer-animate.css'
import './composer.scss'

const Composer = () => {
  const dispatch = useDispatch()
  const menuToggled = useSelector((state) => state.menuToggle.menuToggled)
  const composerInitialClass = menuToggled == null ? 'composer-animate-off' : 'composer-animate-return' 
  const editorSlider = useSelector((state) => state.slideEditor.editorSlider)

  const toggleEditor = (id) => {
    if (editorSlider !== null && editorSlider === id) {
      dispatch(slideEditor(false))

    } else {
      dispatch(slideEditor(id))
    }
  }



  return (
    <div className={menuToggled ? 'composer composer-animate' : `composer ${composerInitialClass}`}>
      {initColor.map((color) => (
        <Color key={color.id} id={color.id}>
          <button onClick={() => toggleEditor(color.id)}>editor button test</button>
          <Editor
            id={color.id}
            className={
              editorSlider === color.id ? 'visible' : 'hidden'
            } >
            <Slider id={color.id} channelName='red' channelValue={color.red}/>
            <Slider id={color.id} channelName='green' channelValue={color.green}/>
            <Slider id={color.id} channelName='blue' channelValue={color.blue}/>
            <span>Editor for color {color.id}</span>
          </Editor>
        </Color>
      ))}
    </div>
  )
}

export default Composer