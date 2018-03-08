import React from "react";
import Tile from "../Tile";
import Popup from "../Popup";
import images from "../../images.json";
import "./Board.css";

function shuffleArray(array) {

    let currentIndex = array.length;
    let tempValue;
    let randomIndex;

    while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1

        tempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempValue;
    }

    return array
}

class Board extends React.Component {

    state = {
        images: shuffleArray(images),
        clicked: [],
        score: 0,
        highScore: 0,
        gameState: null
    };

    tileClickHandler = (id) => {

        if(this.state.gameState){
            return;
        }

        let newState = this.state

        if(newState.clicked.includes(id)){
            newState.gameState = "lost";
        } 
        else {
            newState.clicked.push(id);
            newState.images = shuffleArray(this.state.images);
            newState.score ++;
            if(newState.score > newState.highScore){
                newState.highScore = newState.score
            }
            if(newState.score === 12){
                newState.gameState = "won"
            }
        };

        this.setState(newState);
        console.log(this.state);
    };

    newGame = () => {
        let newState = this.state

        newState.images = shuffleArray(images);
        newState.clicked = []
        newState.score = 0
        newState.gameState = null

        this.setState(newState);
    }

    render = () => 

        
        <div className="col col-xs-12 text-center">
            <div className="row">
                <div className="col col-xs-12 text-center">
                    <h4 className="centerB">Score: {this.state.score} <span className="spacer"> | </span> High Score: {this.state.highScore}</h4>
                </div>
            </div>

            {this.state.images.map(image => <Tile key={image.id} {...image} clickHandler={() => this.tileClickHandler(image.id)}/>)}

            {this.state.gameState ? 
            <Popup gameState={this.state.gameState} onClick={this.newGame}/>
            :
            null
            }

        </div>
}

export default Board;