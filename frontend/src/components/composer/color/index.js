import React from 'react'
import { useSelector } from 'react-redux'

import { makeHex } from '../../../utility-functions/makeHex'

import './color.scss'

const Color = ({ id, children }) => {
  const colorData = useSelector((state) => state.range.colorData)
  const { red, green, blue } = colorData[id]
  const bgColor = { backgroundColor: `rgb(${red}, ${green}, ${blue})` }

  const hex = makeHex([red, green, blue])

  return (
    <div className='color' style={bgColor}>
      <span>{hex}</span>
      {children}
    </div>
  )
}

export default Color