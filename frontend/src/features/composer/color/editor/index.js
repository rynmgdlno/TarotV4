import React from 'react'

import './editor.scss'
import './editor-animate.css'

const Editor = ({ className, children }) => {
  console.log(className)
  return (
    <div className={className}>
    <span>Editor</span>
      {children}
    </div>
  )
}

export default Editor