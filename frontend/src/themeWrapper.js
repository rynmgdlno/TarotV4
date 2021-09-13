import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { darkModeSelector, setTheme, themeSelector } from './features/UI/darkMode/darkModeSlice'
import { lightTheme, darkTheme } from './global/theme'

const ThemeWrapper = ({ children }) => {
  // const theme = useSelector(themeSelector)
  const darkMode = useSelector(darkModeSelector)

  const updateTheme = (newTheme) => {
    const cssKeys = Object.keys(newTheme)
    const cssValues = Object.values(newTheme)

    console.log(newTheme)
    cssKeys.forEach((key, i) => {
      document.documentElement.style.setProperty(
        key,
        cssValues[i]
      )
    })
  }


  useEffect(() => {
    if (darkMode) updateTheme(darkTheme)
    else updateTheme(lightTheme)
  }, [darkMode])

  return <>{children}</>
}

export default ThemeWrapper