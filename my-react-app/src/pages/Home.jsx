import React from 'react';
import { Component } from "./Component";
import { Group } from "./Group";
import { Leaderboard } from "./Leaderboard";
import { PersonalProgress } from "./PersonalProgress";
import "../styles/Home.css"

function Home() {
    return (
        <div className="home">
            <div className="div-2">
                <Group className="group-2" />
                <Component className="component-1" />
                <div className="overlap">
                    <div className="text-wrapper-3">Select Category</div>
                        <img className="drop-down-arrow" alt="Drop down arrow" src="drop-down-arrow-1.png" />
                    </div>
                <div className="overlap-group">
                    <div className="text-wrapper-4">Login</div>
                    <div className="text-wrapper-5">Alerts</div>
                    <img className="user" alt="User" src="user-1.png" />
                </div>
                <Leaderboard className="leaderboard-instance" />
                <PersonalProgress className="personal-progress-instance" />
                <img className="bell" alt="Bell" src="bell-1.png" />
            </div>
        </div>
    )
}

export default Home