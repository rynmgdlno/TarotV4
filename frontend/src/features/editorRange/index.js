import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ColorLib from 'color'

import { changeColor } from './rangeSlice'

import './slider.scss'


const Slider = ({ id, channelName }) => {
  const dispatch = useDispatch()
  const colorData = useSelector((state) => state.changeColor.colorData)
  const channelValue = colorData[id][channelName]
  const newColorData = JSON.parse(JSON.stringify(colorData))
  const { red, green, blue } = colorData[id]
  const colorForProc = ColorLib.rgb(parseInt(red), parseInt(green), parseInt(blue))
  const foreColor = colorForProc.isLight() ? 'rgba(0,0,0,.5)' : 'rgba(255,255,255,.5)'

  const onSlider = (e) => {
    newColorData[id][channelName] = parseInt(e.target.value)
    dispatch(changeColor(newColorData))
  }

  return (
    <div className='slider-container'>
      <p style={{ color: foreColor }}>{`${channelName[0]}:${channelValue}`}</p>
      <input
        className='slider'
        type='range'
        min='0'
        max='255'
        onChange={onSlider}
        colorid={id}
        name={channelName}
        defaultValue={channelValue}
        style={
          { backgroundColor: foreColor }
        }
      />
    </div>
  )
}

export default Slider