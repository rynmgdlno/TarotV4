import React from 'react'
import { useSelector } from 'react-redux'

import Color from './color'
import Editor from './color/editor'
import Slider from '../slider'

import initColor from '../../assets/static/init-color'

import './composer-animate.css'
import './composer.scss'
import UserModal from '../modals/userModal'

const Composer = () => {
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
          <Editor
            id={color.id}
            className={
              editorSlider === color.id ?
                'editor editor-animate' :
                `editor ${editorInitialClass}`}>
            <Slider id={color.id} channelName='red' />
            <Slider id={color.id} channelName='green' />
            <Slider id={color.id} channelName='blue' />
          </Editor>
        </Color>
      ))}
      <UserModal/>
    </div>
  )
}

export default Composer