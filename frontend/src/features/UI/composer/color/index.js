import React from 'react'
import { useDispatch } from 'react-redux'
import ColorLib from 'color'

import { UI } from '../../../../redux/selectors'

import { slideColor } from './colorSliderSlice'
import { slideEditor } from '../editorSliderSlice'
import { menuToggle } from '../../menu/menuSlider/menuSliderSlice'

import { makeHex } from '../../../../utility-functions/makeHex'

import './color.scss'
import './color-animate.css'

const Color = ({ className, children, id }) => {
  const dispatch = useDispatch()
  const { colorData, editorSlider, menuToggled } = UI()
  const { red, green, blue } = colorData[id]
  const bgColor = { backgroundColor: `rgb(${red}, ${green}, ${blue})` }
  const colorForProc = ColorLib.rgb(parseInt(red), parseInt(green), parseInt(blue))
  const foreColor = colorForProc.isLight() ? 'rgba(0,0,0,.5)' : 'rgba(255,255,255,.5)'

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
          <span className='hex' style={{ color: foreColor }}>{hex}</span>
          <div className='indicator' style={{ backgroundColor: foreColor }} />
        </div>
      }
      {children}
    </div>
  )
}

export default Color