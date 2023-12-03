import React, { useState } from "react"
import firebase from "gatsby-plugin-firebase"

const SignUpComponent = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      console.log("User created successfully!")
      // Redirect or perform actions after successful sign-up
    } catch (error) {
      console.error("Error signing up:", error)
    }
  }

  return (
    <div>
      <h2>Sign Up</h2>
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
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  )
}

export default SignUpComponent
