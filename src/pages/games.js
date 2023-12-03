import React from 'react';
import xImage from "../images/b.png"

const Games = () => {
  const styles = {
    body: {
      backgroundImage: `url(${xImage})`,
      backgroundSize: 'cover',
      // Add other background properties here (position, repeat, etc.) if needed
    },
    homepageContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh', /* Adjust the height as needed */
    },
    helloUserTitle: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: '2rem',
      /* Add any other styles you want for the title */
    },
    title2: {
      color: 'rgb(189, 7, 7)',
      fontWeight: 'bold',
      fontSize: '2rem',
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
      backgroundColor: 'rgba(30, 81, 123)',
      padding: '13px',
      borderRadius: '5px',
      transition: 'background-color 0.3s',
    },
    choiceMenuItemHover: {
      backgroundColor: '#e41e14',
    },
    choiceMenuLink: {
      textDecoration: 'none',
      color: 'rgb(255, 255, 255)',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={{ ...styles.body, ...styles.homepageContainer }}>
      {/* Alien element added here */}
      <div className="alien"></div>

      <h1 style={styles.helloUserTitle}>Hello User</h1>
      <h1 style={styles.title2}> Select which game you want to play: </h1>
      <ul style={styles.choiceMenu}>
        <li style={styles.choiceMenuItem}><a href="./tictactoe/tic" style={styles.choiceMenuLink}>Tic Tac Toe</a></li>
        <li style={styles.choiceMenuItem}><a href="./Pong/Pong" style={styles.choiceMenuLink}>Pong</a></li>
        <li style={styles.choiceMenuItem}><a href="/Trivia" style={styles.choiceMenuLink}>TriviaQuiz</a></li>
        {/* Add more game options if needed */}
      </ul>
    </div>
  );
};

export default Games;