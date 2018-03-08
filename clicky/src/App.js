import React from "react";
import Board from "./components/Board";
import "./App.css";

const App = () => 

    <div className="container">
        <div className="center">
            <h1 className="display">"Infinity: the Game"</h1>
            <p className="lead">Don't click the same picture twice - a memory game</p>
        </div>
        
        
        <div className="row">
            <Board />
        </div>
    </div>

export default App;