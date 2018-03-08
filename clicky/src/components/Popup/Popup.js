import React from "react";

class Popup extends React.Component {

    title = gameState => {
        gameState === "won" ? "Oh Happy Day, You Won!" : "Game Over!"
    }

    message = gameState => {
        gameState === "won" ? "You clicked all of the pictures without any repeats, Can you do it again?" : "Try to do less bad next time."
    }

    render = () => 
        
        this.props.gameState ?
        <div id="popup">
            <h1>Here's a thing</h1>
            <h1>{this.message(this.props.title)}</h1>
            <p>{this.title(this.props.gameState)}</p>
            <button className="btn btn-primary" onClick={this.props.onClick()}>Play Again</button>
        </div>
        :
        null
    
};

export default Popup;
