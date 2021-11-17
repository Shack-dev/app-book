import React from "react";
import "./../../Assets/css/tictactoe.css";
import Title from "./title";

export default class TicTacToe extends React.Component {


    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {

        }

        this.name = {
            name : "Tic Tac Toe",
        }

        this.className = {
            board : "board-game",
            head : "title-head",
            crossGame : "cross-game",
            circleGame : "circle-game",
        }

        this.id = {
            case1 : "case-1",
            case2 : "case-2",
            case3 : "case-3",
            case4 : "case-4",
            case5 : "case-5",
            case6 : "case-6",
            case7 : "case-7",
            case8 : "case-8",
            case9 : "case-9",
        }

        this.element = {
            cross : <div className={this.className.crossGame}></div>,
            circle : <div className={this.className.circleGame}></div>
        }
    }

    handleChange(e){
        console.log(e.target.children);
    }


    render(){
        return(
            <div>
                <div className={this.className.head}>
                    <Title {...this.name}/>
                </div>
                <div>
                    <board className={this.className.board} >
                        <div>
                            <div id={this.id.case1} onClick={this.handleChange}></div>
                            <div id={this.id.case2} onClick={this.handleChange}></div>
                            <div id={this.id.case3} onClick={this.handleChange}></div>
                        </div>
                        <div>
                            <div id={this.id.case4} onClick={this.handleChange}></div>
                            <div id={this.id.case5} onClick={this.handleChange}></div>
                            <div id={this.id.case6} onClick={this.handleChange}></div>
                        </div>
                        <div>
                            <div id={this.id.case7} onClick={this.handleChange}></div>
                            <div id={this.id.case8} onClick={this.handleChange}></div>
                            <div id={this.id.case9} onClick={this.handleChange}></div>
                        </div>
                    </board>
                </div>
            </div>
        )
    }
}