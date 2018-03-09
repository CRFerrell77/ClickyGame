import React from "react";
import Tile from "../Tile";
import images from "../../images.json";
import "./Game.css";

function shuffleArr(array) {

    let currIndex = array.length;
    let tempValue;
    let rndIndex;

    while(currIndex !== 0){
        rndIndex = Math.floor(Math.random() * currIndex);
        currIndex -= 1

        tempValue = array[currIndex];
        array[currIndex] = array[rndIndex];
        array[rndIndex] = tempValue;
    }

    return array
}

class Game extends React.Component {

    state = {
        images: shuffleArr(images),
        clicked: [],
        score: 0,
        highScore: 0,
        gameState: null,
        message: "Game in Progress"
    };

    checkWL = (ending)=> {
        let newMsg = this.state

        if (ending === "lost") {
            newMsg.message = "You have lost this game";
            this.setState(newMsg);
            console.log(this.state);
        } else if (ending === "won") {
            newMsg.message = "You have won this game";
            this.setState(newMsg);
            console.log(this.state);
        } else {}

    }

    tileClickHandler = (id) => {

        if(this.state.gameState){
            return;
        }

        let newState = this.state

        if(newState.clicked.includes(id)){
            newState.gameState = "lost";
            this.checkWL("lost")
        } 
        else {
            newState.clicked.push(id);
            newState.images = shuffleArr(this.state.images);
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

        newState.images = shuffleArr(images);
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
                <div>
                    <h2 className="centerB">{this.state.message}</h2>
                </div>
            </div>

            {this.state.images.map(image => <Tile key={image.id} {...image} clickHandler={() => this.tileClickHandler(image.id)}/>)}

        </div>
}

export default Game;