import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeColor } from './rangeSlice'

import './slider.scss'


const Slider = ({ id, channelName }) => {
  const dispatch = useDispatch()
  const colorData = useSelector((state) => state.changeColor.colorData)
  const channelValue = colorData[id][channelName]
  const newColorData = JSON.parse(JSON.stringify(colorData))
  let sliderColor = ''

  const onSlider = (e) => {
    newColorData[id][channelName] = parseInt(e.target.value)
    dispatch(changeColor(newColorData))
  }

  return (
    <div className='slider-container'>
      <p>{`${channelValue}`}</p>
      <input
        className='slider'
        type='range'
        min='0'
        max='255'
        onChange={onSlider}
        colorid={id}
        name={channelName}
        defaultValue={channelValue} />
    </div>
  )
}

export default Slider