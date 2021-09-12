import { useSelector } from "react-redux";

// Consolidated useSelector calls to keep code clean
// Usage: 
// import { UI, DATA } from './selectors'
// const { darkMode } = UI()

// UI Selectors
export const UI = () => {
  const colorData = useSelector((state) => state.ui.composer.channelEditor.colorData)
  const darkMode = useSelector((state) => state.ui.darkMode.toggled)
  const editorOpen = useSelector((state) => state.ui.composer.editor.editorOpen)
  const menuToggled = useSelector((state) => state.ui.menuToggle.menuToggled)
  const userToggled = useSelector((state) => state.ui.modals.userModalReducer.userToggled)
  return { colorData, darkMode, editorOpen, menuToggled, userToggled }
}

// Data Selectors
export const DATA = () => {

}