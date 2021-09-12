import { useSelector } from "react-redux";

// Consolidated useSelector calls to keep code clean
// Usage: 
// import { UI, DATA } from './selectors'
// const { darkMode } = UI()

// UI Selectors
export const UI = () => {
  const colorData = useSelector((state) => state.UI.composer.channelEditorReducer.colorData)
  const darkMode = useSelector((state) => state.UI.darkMode.toggled)
  const editorOpen = useSelector((state) => state.UI.composer.editorSliderReducer.editorSlider)
  const menuToggled = useSelector((state) => state.UI.menuToggle.menuToggled)
  const userToggled = useSelector((state) => state.UI.modals.userModalReducer.userToggled)
  return { colorData, darkMode, editorOpen, menuToggled, userToggled }
}

// Data Selectors
export const DATA = () => {

}