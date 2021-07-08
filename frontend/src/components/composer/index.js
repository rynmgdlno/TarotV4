import React from 'react'

// import Color from '../color'
import Color from './color'
import Editor from './color/editor'
import Slider from '../../features/slider'

import initColor from '../../assets/static/init-color'

import './composer.scss'

const Composer = () => {
  return (
    <div className='composer'>
      {initColor.map((color) => (
        <Color key={color.id} id={color.id}>
          <Editor id={color.id}>
            {/* <Slider id={color.id} channelName='red' channelValue={color.red}/> */}
            {/* <Slider id={color.id} channelName='green' channelValue={color.green}/> */}
            {/* <Slider id={color.id} channelName='blue' channelValue={color.blue}/> */}
          </Editor>
        </Color>
      ))}
    </div>
  )
}

export default Composer