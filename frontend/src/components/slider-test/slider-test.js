import React from 'react'
import { useSelector } from 'react-redux'
// import { changeValue } from '../../features/slider/sliderSlice'


const SliderTest = () => {
  const sliderValue = useSelector((state) => state.slider.sliderValue)
  return (
    <div>
      <p>{sliderValue}</p>
    </div>
  )
}

export default SliderTest