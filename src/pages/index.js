import React from "react"
import { Link } from "gatsby"
import xImage from "../images/x.png" // Chemin vers votre image

const IndexPage = () => {
  const buttonStyles = {
    display: "block",
    width: "200px",
    margin: "10px auto",
    padding: "10px 20px",
    backgroundColor: "blue",
    color: "white",
    borderRadius: "5px",
    textAlign: "center",
    textDecoration: "none",
  }

  const containerStyles = {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
    backgroundImage: `url(${xImage})`, // Utilisation de l'image comme arrière-plan
    backgroundSize: "cover", // Pour ajuster la taille de l'image
  }

  return (
    <div style={containerStyles}>
      <h1>Welcome to Our Website</h1>
      <div>
        <Link to="/SignIn" style={buttonStyles}>
          Login
        </Link>
        <Link to="/SignUp" style={buttonStyles}>
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default IndexPage
