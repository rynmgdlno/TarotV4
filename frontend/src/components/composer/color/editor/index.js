import React from 'react'

import './editor.scss'

const Editor = ({ children }) => {
  return (
    <div className='editor'>
      {children}
    </div>
  )
}

export default Editor