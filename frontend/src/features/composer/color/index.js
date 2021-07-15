import React from 'react'
import { useSelector } from 'react-redux'

import { makeHex } from '../../../utility-functions/makeHex'

import './color.scss'
import './color-animate.css'

const Color = ({ className, children, id }) => {
  const colorData = useSelector((state) => state.changeColor.colorData)
  const { red, green, blue } = colorData[id]
  const bgColor = { backgroundColor: `rgb(${red}, ${green}, ${blue})` }

  const hex = makeHex([red, green, blue])

  return (
    <div className={className} style={bgColor}>
      <span>{hex}</span>
      {children}
    </div>
  )
}

export default Color