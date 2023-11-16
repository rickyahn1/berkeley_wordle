import React from 'react';
import { Component } from "./Component";
import { Group } from "./Group";
import { Leaderboard } from "./Leaderboard";
import { PersonalProgress } from "./PersonalProgress";
import "../styles/Home.css"

const HomeContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
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