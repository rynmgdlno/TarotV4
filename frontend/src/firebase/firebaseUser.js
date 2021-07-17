import { userReAuth } from "./firebaseAuth";
import { auth } from "./firebaseConfig";

const user = auth.currentUser

// Update Username
export const updateUserName = async (newName) => {
  try {
    await user.updateProfile({
      displayName: newName
    })
    return 'Updated User Name Successfully'
  } catch (error) {
    return error
  }
}

// Update Email
export const updateEmail = async (newEmail) => {
  try {
    await user.updateEmail(newEmail)
    return 'Email Updated Successfully'
  } catch (error) {
    return error
  }
}

// Update Password
export const updatePass = async (currentPassword, newPassword) => {
  try {
    await userReAuth(currentPassword)
    await user.updatePassword(newPassword)
  } catch (error) {
    return error
  }
}

//TODO: Test this and remove unnecessary functions
// Update User // All Previous functions combined into one function
export const updateUser = async (newName, newEmail, newPassword, currentPassword) => {
  const user = auth.currentUser

  if (newName) {
    try {
      await user.updateProfile({
        displayName: newName
      })
      return 'Updated User Name Successfully'
    } catch (error) {
      return error
    }
  }

  if (newEmail) {
    try {
      await user.updateEmail(newEmail)
      return 'Email Updated Successfully'
    } catch (error) {
      return (error)
    }
  }

  if (newPassword) {
    try {
      await userReAuth(currentPassword)
      await user.updatePassword(newPassword)
    } catch (error) {
      return error
    }
  }
}