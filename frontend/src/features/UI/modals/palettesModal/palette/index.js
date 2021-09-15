import React from 'react'
import { useDispatch } from 'react-redux'

import { changeColor } from '../../../composer/color/editor/slider/channelEditorSlice'

import CustomButton from '../../../../../components/custom-button'

import './palette.scss'

// Individual color component
const Color = (values) => {
  const {red, green, blue} = values.values
  const bgColor = { backgroundColor: `rgb(${red}, ${green}, ${blue})` }
  return <div className='ind-color' style={bgColor}/>
}

const Palette = ({ key, data }) => {
  const dispatch = useDispatch()
  const {name, palette} = data
  const loadPalette = (palette) => {
    dispatch(changeColor(palette))
  }

  return (
    <div key={key} className='palette'>
      <p>{name}</p>
      <span className='colors'>
        {
          palette.map((color, i) => (
            <Color values={color}/>
          ))
        }
      </span>
      <span>
        <CustomButton onClick={() => loadPalette(palette)}>Open</CustomButton>
        <CustomButton>Rename</CustomButton>
        <CustomButton>Delete</CustomButton>
      </span>
    </div>
  )
}

export default Palette