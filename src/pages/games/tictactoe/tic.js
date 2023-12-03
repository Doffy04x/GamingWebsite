import React from 'react';

const Games = () => {
  const styles = {
    body: {
      /* Set the path to your GIF as the background image */
      backgroundColor: '#000000',
      backgroundSize: 'cover',
    },
    homepageContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh', /* Adjust the height as needed */
    },
    helloUserTitle: {
        color: 'black', // You can use 'black' or '#000000'
        fontWeight: 'bold',
        fontSize: '2rem', /* Adjust the font size as needed */
        /* Add any other styles you want for the title */
      },
    title2: {
      color: 'rgb(189, 7, 7)',
      fontWeight: 'bold',
      fontSize: '2rem', /* Adjust the font size as needed */
      /* Add any other styles you want for the title */
    },
    choiceMenu: {
      listStyle: 'none',
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
    },
    choiceMenuItem: {
      margin: '0 20px',
      backgroundColor: 'rgba(30, 81, 123)', /*ground color of the cube */
      padding: '13px', /* Adjust the padding as needed */
      borderRadius: '5px', /* Optional: Adds rounded corners to the cube */
      transition: 'background-color 0.3s', /* Add a smooth transition */
    },
    choiceMenuItemHover: {
      backgroundColor: '#e41e14', /* Change the background color on hover */
    },
    choiceMenuLink: {
      textDecoration: 'none',
      color: 'rgb(255, 255, 255)', /* Text color inside the cube */
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.homepageContainer}>
      {/* Alien element added here */}
      <div className="alien"></div>

      <h1 style={styles.helloUserTitle}>👻Welcome to Tic Tac Toe game</h1>
      <h1 style={styles.title2}>🦴 Please Select the mode you want to play: 🦴</h1>
      <ul style={styles.choiceMenu}>
      <li style={styles.choiceMenuItem}><a href="./player-vs-player" style={styles.choiceMenuLink}>👱‍♂️Player vs Player👨🏿 </a></li>
      <li style={styles.choiceMenuItem}><a href="./player-vs-computer" style={styles.choiceMenuLink}>👱‍♂️Player vs Computer 🧛‍♂️ </a></li>

      </ul>
    </div>
  );
};

export default Games;
