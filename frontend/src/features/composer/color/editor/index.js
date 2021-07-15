import React from 'react'
import { useSelector } from 'react-redux'

import './editor.scss'
import './editor-animate.css'

const Editor = ({ children, className, id  }) => {
  const colorData = useSelector((state) => state.changeColor.colorData)
  const { red, green, blue } = colorData[id]
  const bgColor = { backgroundColor: `rgb(${red}, ${green}, ${blue})` }

  return (
    <div className={className} style={bgColor}>
      {children}
    </div>
  )
}

export default Editor