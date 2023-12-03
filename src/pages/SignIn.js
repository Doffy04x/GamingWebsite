import React, { useState } from "react"
import { navigate } from "gatsby"
import firebase from "gatsby-plugin-firebase"
import backgroundImage from "../images/c.png"  // Import your background image

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [error, setError] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.password)

      console.log("User logged in successfully:", result.user)
      setSuccessMessage("Signed in successfully.") // Set success message
      setError(null) // Clear any previous error messages
      navigate("/games") // Redirect to the Games page after a successful login
    } catch (error) {
      console.error("Error logging in:", error.message)
      setError("Invalid email or password.") // Set the error message
      setSuccessMessage(null) // Clear any previous success messages
    }
  }

  const styles = {
    container: {
      position: "relative",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "100vh",
      backgroundImage: `url(${backgroundImage})`,  // Add background image
      backgroundSize: "cover",
    },
    title: {
      marginTop: "30px",  // Adjust the margin to move the title up
    },
    input: {
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #000",  // Black border
      width: "300px",
      marginBottom: "20px",
      fontStyle: "italic",  // Italic style
      fontWeight: "bold",  // Make it bold
    },
    label: {
      marginBottom: "8px",
      color: "#000",  // Black text color
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "blue",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    errorMessage: {
      position: "absolute",
      top: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      padding: "10px",
      borderRadius: "5px",
      color: "red",
    },
    successMessage: {
      position: "absolute",
      top: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "rgba(0, 128, 0, 0.2)",
      padding: "10px",
      borderRadius: "5px",
      color: "green",
    },
  }

  return (
    <div style={styles.container}>
      {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
      <h1 style={styles.title}>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div>
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div>
          <button type="submit" style={styles.button}>
            Login
          </button>
        </div>
      </form>
      {error && <p style={styles.errorMessage}>{error}</p>}
    </div>
  )
}

export default SignInPage
