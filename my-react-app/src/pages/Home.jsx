import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
`;

const Title = styled.h2`
  font-size: 24px;
`;

function Home() {
    return (
        <HomeContainer>
            <Title>Hello, Emma</Title>
        </HomeContainer>
    )
}

export default Home