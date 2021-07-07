import React from 'react'
// import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
// import { changeValue } from './sliderSlice'
import { changeColor } from './rangeSlice'

import './slider.scss'

const Slider = ({ id, channelName, channelValue }) => {
  const dispatch = useDispatch()
  const colorData = useSelector((state) => state.range.colorData[id])
  // const channelValue = colorData[channelName]
  console.log(colorData)

  const test = (e) => {
    // dispatch(changeValue(parseInt(e.target.value)))
    dispatch(changeColor(e.target.value, id, channelName))
  }
  return (
    <div>
      <p>{channelValue}</p>
      <input type='range' min='0' max='255' onChange={test} colorid={id} name={channelName} value={channelValue}/>
    </div>
  )
}



export default Slider