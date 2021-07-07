import React from 'react'
import { useSelector } from 'react-redux'

import './color.module.scss'

const Color = ({ id, children }) => {
  const colorData = useSelector((state) => state.range.colorData)
  const {red, green, blue} = colorData[id]
  const bgColor = { backgroundColor: `rgb(${red}, ${green}, ${blue})`}

  return (
    <div style={bgColor}>
      {children}
    </div>
  )
}

export default Color