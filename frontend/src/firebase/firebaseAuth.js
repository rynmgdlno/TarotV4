import { auth, firestore } from "./firebaseConfig";

// Google Sign In 
const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

// Add User Doc to DB on Auth
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAudi.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email} = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      return error
    }
  }
  return userRef
}

// Re-Authenticate User
export const userReAuth = async (currentPassword) => {
  const user = auth.currentUser
  const credential = firebase.auth.EmailAuthProvider.credential(
    user.email,
    currentPassword
  )
  try {
    await user.reauthenticateWithCredential(credential)
  } catch (error) {
    return error
  }
}