import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { editorSelector } from './editorSliderSlice'
import { menuSelector } from '../menu/menuSlider/menuSliderSlice'

import Color from './color'
import Editor from './color/editor'
import Slider from './color/editor/slider'

// import initColor from '../../../assets/static/init-color'

import './composer-animate.css'
import './composer.scss'
import HelpModal from '../modals/helpModal'
import PalettesModal from '../modals/palettesModal'
import UserModal from '../modals/userModal'
import { colorDataSelector } from './color/editor/slider/channelEditorSlice'

const Composer = () => {
  const colorData = useSelector(colorDataSelector)
  const editorOpen = useSelector(editorSelector)
  const menuToggled = useSelector(menuSelector)

  const composerInitialClass = menuToggled == null ?
    'composer-animate-off' :
    'composer-animate-return'
  const editorInitialClass = editorOpen == null ?
    'editor-animate-off' :
    'editor-animate-return'
  const colorInitialClass = editorOpen == null ?
    'color-animate-off' :
    'color-animate-return'

  return (
    <div className={
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
            <Slider id={color.id} channelName='red' color={color}/>
            <Slider id={color.id} channelName='green' color={color}/>
            <Slider id={color.id} channelName='blue' color={color}/>
          </Editor>
        </Color>
      ))}
      <PalettesModal />
      <UserModal />
    </div>
  )
}

export default Composer