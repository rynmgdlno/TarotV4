import { useSelector } from "react-redux";

// Consolidated useSelector calls to keep code clean
// Usage: 
// import { UI, DATA } from './selectors'
// const { darkMode } = UI()

// UI Selectors
export const UI = () => {
  const colorData = useSelector((state) => state.UI.composerReducer.channelEditorReducer.colorData)
  const colorSlider = useSelector((state) => state.UI.composerReducer.colorSliderReducer.colorSlide)
  const darkMode = useSelector((state) => state.UI.darkModeReducer.darkMode)
  const editorSlider = useSelector((state) => state.UI.composerReducer.editorSliderReducer.editorSlider)
  const menuToggled = useSelector((state) => state.UI.menuToggleReducer.menuToggled)
  const userToggled = useSelector((state) => state.UI.modalsReducer.userModalReducer.userToggled)
  return { colorData, colorSlider, darkMode, editorSlider, menuToggled, userToggled }
}

// Data Selectors
export const DATA = () => {

}