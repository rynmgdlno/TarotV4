import React from 'react'
import { UI } from '../../../redux/selectors'

import Color from './color'
import Editor from './color/editor'
import Slider from './color/editor/slider'

import initColor from '../../../assets/static/init-color'

import './composer-animate.css'
import './composer.scss'
import UserModal from '../modals/userModal'

const Composer = () => {
  const { colorSlider, editorSlider, menuToggled } = UI()

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