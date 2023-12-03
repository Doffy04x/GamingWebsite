import React, { useState } from "react"
import firebase from "gatsby-plugin-firebase"

const SignInComponent = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      console.log("Signed in successfully!")
      // Redirect or perform actions after successful sign-in
    } catch (error) {
      console.error("Error signing in:", error)
    }
  }

  return (
    <div>
      <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  )
}

export default SignInComponent
