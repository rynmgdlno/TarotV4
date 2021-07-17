import { auth, firestore } from "./firebaseConfig";

// Save Palette
export const savePalette = async (currentUser, palette, name) => {
  const nameCheck = firestore.collection(`users/${currentUser.id}/palettes`).where('name', '==', name)
  const snapShot = await nameCheck.get()
  if (snapShot.size === 1) {
    return false
  } else if (!snapShot.size) {
    try {
      await firestore.collection(`users/${currentUser.id}/palettes`).add({
        name: name,
        palette: palette
      })
    } catch (error) {
      alert('Error saving palette, please try again', error)
      return true
    }
    return true
  }
}

// Delete Palette
export const deletePalette = async (paletteName, currentUser) => {
  const docRef = firestore.collection(`users/${currentUser.id}/palettes/`).where('name', '==', paletteName)
  const snapShot = await docRef.get()
  const id = snapShot.docs[0].id
  const docToDelete = firestore.doc(`users/${currentUser.id}/palettes/${id}`)
  try {
    await docToDelete.delete()
  } catch (error) {
    return error
  }
}

// Rename Palette
export const renamePalette = async (paletteName, currentUser, newPaletteName) => {
  const docRef = firestore.collection(`users/${currentUser.id}/palettes/`).where('name', '==', paletteName)
  const snapShot = await docRef.get()
  const id = snapShot.docs[0].id
  const docToUpdate = firestore.doc(`users/${currentUser.id}/palettes/${id}`)

  try {
    await docToUpdate.set({
      name: newPaletteName
    }, { merge: true }
    )
  } catch (error) {
    return error
  }
}