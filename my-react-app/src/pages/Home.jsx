// import React from 'react';
// import styled from 'styled-components';

// const HomeContainer = styled.div`
// `;

// const Title = styled.h2`
//   font-size: 24px;
// `;

function Home() {
    return (
        <HomeContainer>
            <Title>Hello, Emma</Title>
        </HomeContainer>
    )
}

import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  backgroundColor: lightblue;
`;

const Title = styled.h2`
  font-size: 24px;
`;

Home = ({ onPageChange }) => {
  return (
    <HomeContainer>
      <Title>Berkeley Wordle</Title>
      
    <button 
        style={{
            backgroundColor: '#3498db',  // Set your desired color
            color: '#ffffff',           // Set the text color
            padding: '10px 15px',       // Adjust padding as needed
            fontSize: '16px',           // Set the font size
            borderRadius: '5px',        // Add rounded corners
            cursor: 'pointer',          // Show pointer on hover
        }}
        onClick={() => onPageChange('game')}>Start Game</button>
        
    </HomeContainer>
  );
};

export default Home;