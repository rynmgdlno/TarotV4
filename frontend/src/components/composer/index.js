import React from 'react'

import Color from '../color'
import Editor from '../editor'
import Slider from '../../features/slider'

import initColor from '../../assets/static/init-color'

import './composer.module.scss'

const Composer = () => {
  return (
    <div>
      {initColor.map((color) => (
        <Color key={color.id}>
          <Editor>
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