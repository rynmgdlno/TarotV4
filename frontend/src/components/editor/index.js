import React from 'react'

import styles from './editor.module.scss'

const Editor = ({ children }) => {
  return (
    <div className={styles.editor}>
      {children}
    </div>
  )
}

export default Editor