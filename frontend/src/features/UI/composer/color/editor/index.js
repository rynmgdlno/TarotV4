import React from 'react'

import { UI } from '../../../../../redux/selectors'

import './editor.scss'
import './editor-animate.css'

const Editor = ({ children, className, id  }) => {
  const { colorData } = UI()
  const { red, green, blue } = colorData[id]
  const bgColor = { backgroundColor: `rgb(${red}, ${green}, ${blue})` }

  return (
    <div 
    onClick={(e) => e.stopPropagation()}
    className={className} style={bgColor}>
      {children}
    </div>
  )
}

export default Editor