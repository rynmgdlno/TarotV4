import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { slideColor } from './colorSliderSlice'
import { slideEditor } from '../editorSliderSlice'
import { menuToggle } from '../../menuSlider/menuSliderSlice'

import { makeHex } from '../../../utility-functions/makeHex'

import './color.scss'
import './color-animate.css'

const Color = ({ className, children, id }) => {
  const dispatch = useDispatch()
  const colorData = useSelector((state) => state.changeColor.colorData)
  const editorSlider = useSelector((state) => state.slideEditor.editorSlider)
  const menuToggled = useSelector((state) => state.menuToggle.menuToggled)
  const { red, green, blue } = colorData[id]
  const bgColor = { backgroundColor: `rgb(${red}, ${green}, ${blue})` }

  const hex = makeHex([red, green, blue])

  const toggleEditor = (id) => {
    if (editorSlider !== null && editorSlider === id) {
      dispatch(slideColor(false))
      dispatch(slideEditor(false))
    } else {
      dispatch(slideColor(true))
      dispatch(slideEditor(id))
      if (menuToggled !== null) {
        dispatch(menuToggle(false))
      }
    }
  }

  return (
    <div
      onClick={() => toggleEditor(id)}
      className={className} style={bgColor}>
      {
        editorSlider === id &&
        <div className='indicator-container'>
          <span className='hex'>{hex}</span>
          <div className='indicator' />
        </div>
      }
      {children}
    </div>
  )
}

export default Color