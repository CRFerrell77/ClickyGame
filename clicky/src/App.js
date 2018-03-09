import React from "react";
import Game from "./components/Game";
import "./App.css";

const App = () => 

    <div className="container">
        <div className="center">
            <h1 className="display">"Infinity: the Game"</h1>
            <p className="lead">Don't click the same picture twice - a memory game</p>
        </div>
        
        
        <div className="row">
        <Game />
        </div>
    </div>

export default App;