import React from 'react'
import { useSelector } from 'react-redux'

import Color from './color'
import Editor from './color/editor'
import Slider from '../../features/slider'

import initColor from '../../assets/static/init-color'

import './composer.scss'
import './composer-animate.css'

const Composer = () => {
  const menuToggled = useSelector((state) => state.menuToggle.menuToggled)
  const composerInitialClass = useSelector((state) => state.composerAnimate.composerInitialClass)

  return (
    <div className={menuToggled ? 'composer composer-animate' : `composer ${composerInitialClass}`}>
      {initColor.map((color) => (
        <Color key={color.id} id={color.id}>
          <Editor id={color.id}>
            <Slider id={color.id} channelName='red' channelValue={color.red}/>
            <Slider id={color.id} channelName='green' channelValue={color.green}/>
            <Slider id={color.id} channelName='blue' channelValue={color.blue}/>
          </Editor>
        </Color>
      ))}
    </div>
  )
}

export default Composer