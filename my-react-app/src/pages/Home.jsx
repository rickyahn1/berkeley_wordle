
function Home() {
    return (
        <HomeContainer>
        </HomeContainer>
    )
}

import React from 'react';
import styled from 'styled-components';
import '../styles/Home.css';

const HomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  backgroundColor: lightblue;
`;

const Title = styled.h2`
  font-size: 48px;
  color: #E8AF15;
`;

Home = ({ onPageChange }) => {
  return (
    <HomeContainer>
      <Title>Berkeley Wordle</Title>
      
    <img src="https://wallpapers.com/images/hd/wordle-green-yellow-white-tiles-2uig08t2nk5vd1nz.jpg" 
      alt="background" class="fix"></img>
      <br></br>
      <br></br>
    <button 
        style={{
            backgroundColor: '#E8AF15',  // Set your desired color
            color: '#ffffff',           // Set the text color
            padding: '10px 15px',       // Adjust padding as needed
            fontSize: '16px',           // Set the font size
            borderRadius: '5px',        // Add rounded corners
            cursor: 'pointer',          // Show pointer on hover
            zIndex:1
        }}
        onClick={() => onPageChange('game')}>Start Game</button>
    </HomeContainer>
  );
};

export default Home;