import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeColor } from '../../../composer/color/editor/slider/channelEditorSlice'
import { darkModeSelector } from '../../../darkMode/darkModeSlice'
import { menuSelector, menuToggle } from '../../../menu/menuSlider/menuSliderSlice'
import { palettesToggle } from '../palettesSlice'

import CustomButton from '../../../../../components/custom-button'
import Dots from '../../../../../components/SVG/dots'

// Individual color component
const Color = (values) => {
  const { red, green, blue } = values.values
  const bgColor = { backgroundColor: `rgb(${red}, ${green}, ${blue})` }
  return <div className='ind-color' style={bgColor} />
}

const fill = `rgba(119, 119, 119, .5)`

const Palette = ({ key, data }) => {
  const [showButtons, setShowButtons] = useState(false)
  const buttonClass = showButtons ? '' : 'buttons-hidden'
  const dispatch = useDispatch()
  const darkMode = useSelector(darkModeSelector)
  const fill = darkMode ? '#FAFAFA' : '#212121'
  const { name, palette } = data
  console.log(buttonClass)
  const loadPalette = (palette) => {
    dispatch(changeColor(palette))
    dispatch(menuToggle())
    dispatch(palettesToggle())
  }

  return (
    <div key={key} className='palette'>
      <span className='palette-top'>
        <p>{name}</p>
        <CustomButton
          className='dots'
          onClick={() => setShowButtons(!showButtons)}>
          <Dots fill={fill} />
        </CustomButton>
      </span>
      <span className='colors'>
        {
          palette.map((color, i) => (
            <Color values={color} />
          ))
        }
        <div className={`${buttonClass} palette-buttons`}>
          <CustomButton className='palette-button' onClick={() => {
            loadPalette(palette)
            setShowButtons(false)
          }}>Open</CustomButton>
          <CustomButton className='palette-button'>Rename</CustomButton>
          <CustomButton className='palette-button'>Delete</CustomButton>
        </div>
      </span>
    </div>
  )
}

export default Palette