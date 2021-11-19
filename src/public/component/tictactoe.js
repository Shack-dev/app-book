import React from "react";
import "./../../Assets/css/tictactoe.css";
import Title from "./title";

export default class TicTacToe extends React.Component {


    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.control = this.control.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
                one : undefined,
                two : undefined,
                three : undefined,
                four : undefined,
                five : undefined,
                six : undefined,
                seven : undefined,
                height : undefined,
                nine : undefined,
                playerOne : undefined,
                playerTwo : undefined,
                message : "",
        }

        this.name = {
            name : "Tic Tac Toe",
        }

        this.className = {
            game : "board-game",
            head : "title-head",
            crossGame : "cross-game",
            circleGame : "circle-game",
            player : "board-player",
            board : "board",
            message : "message",
        }

        this.id = {
            case1 : "case-one",
            case2 : "case-two",
            case3 : "case-three",
            case4 : "case-four",
            case5 : "case-five",
            case6 : "case-six",
            case7 : "case-seven",
            case8 : "case-height",
            case9 : "case-nine",
            playerOne : "input-player-one",
            playerTwo : "input-player-two",
        }

        this.values = {
            one : undefined,
            two : undefined,
            three : undefined,
            four : undefined,
            five : undefined,
            six : undefined,
            seven : undefined,
            height : undefined,
            nine : undefined,
        }

        this.element = {
            cross : <div className={this.className.crossGame}></div>,
            circle : <div className={this.className.circleGame}></div>
        }

        this.rules = {
            maxLength : "12",
        }

        this.player = {
            input : {
                playerOne : <input type="text" id={this.id.playerOne} maxLength={this.rules.maxLength} required="required"/> ,
                playerTwo : <input type="text" id={this.id.playerTwo} maxLength={this.rules.maxLength} required="required"/>,
            },
            text : {
                playerOne : null,
                playerTwo : null,
            }
        }

        this.count = 0;
    }

    componentDidMount() {
        this.control();
    }

    control(){

        if (this.player.text.playerOne === null && this.player.text.playerTwo === null) {
            const playerOne = this.player.input.playerOne;
            const playerTwo = this.player.input.playerTwo;

            this.setState({playerOne : playerOne, playerTwo : playerTwo});
        }
    }

    handleChange(e){
        document.querySelector(`#${this.id.message}`).innerHTML = "";
        const id = e.target.id;
        const tab = id.split("-");
        let message;

        for (const key in this.id) {
            if (Object.hasOwnProperty.call(this.id, key)) {
                const element = this.id[key];
                const objectResult = element.split("-");

                if (objectResult[1] === tab[1]) {                               //Teste si la case cliquée correspond à celle récuperé dans la liste des ID
                    let val = this.state[objectResult[1]];                   
                    if(!val){                                                   //Vérifie si la case n'a pas déjà été jouée                                   
                        if (this.count % 2 === 0) {                             //Le compteur de tour est en pair ou impair
                            val = this.element.cross;
                            this.setState({[objectResult[1]] : val});
                            this.count++;
                            this.values[objectResult[1]] = 1;
                        } else {
                            val = this.element.circle;
                            this.setState({[objectResult[1]] : val});
                            this.count++;
                            this.values[objectResult[1]] = 0;
                        }
                    } else {
                        message = "Cette case est déja jouée.";
                    }
                }               
            }
        }
        this.setState({message : message});
    }

    handleSubmit(){
        const firstValue = document.querySelector(`#${this.id.playerOne}`).value;
        const secondValue = document.querySelector(`#${this.id.playerTwo}`).value;
        let message;

        if (firstValue === "") {
            message = "Le joueur 1 n' à pas de pseudo.";
        } else if (secondValue === ""){
            message = "Le joueur 2 n' à pas de pseudo.";
        } else if (firstValue === secondValue){
            message = "Les pseudos ne peuvent pas être identique.";
        } else {
            const playerOne = <p>{ firstValue }</p>;
            const playerTwo = <p>{ secondValue }</p>;
            message = "";

            this.setState({playerOne, playerTwo});
        }

        this.setState({message : message});

    }

    render(){
        return(
            <div>
                <div className={this.className.head}>
                    <Title {...this.name}/>
                </div>
                <div className={this.className.board}>
                    <div className={this.className.player}>
                        <div>
                            <p>Joueur 1 :</p>
                            {this.state.playerOne}
                        </div>
                        <div>
                            <p>Joueur 2 :</p>
                            {this.state.playerTwo}
                        </div>
                        <div>
                            <input type="submit" onClick={this.handleSubmit} value="Commencer la partie"/>
                        </div>
                    </div>
                    <div>
                        plateau score
                    </div>
                </div>
                <div>
                    <div className={this.className.game} >
                        <div>
                            <div id={this.id.case1} onClick={this.handleChange}>{this.state.one}</div>
                            <div id={this.id.case2} onClick={this.handleChange}>{this.state.two}</div>
                            <div id={this.id.case3} onClick={this.handleChange}>{this.state.three}</div>
                        </div>
                        <div>
                            <div id={this.id.case4} onClick={this.handleChange}>{this.state.four}</div>
                            <div id={this.id.case5} onClick={this.handleChange}>{this.state.five}</div>
                            <div id={this.id.case6} onClick={this.handleChange}>{this.state.six}</div>
                        </div>
                        <div>
                            <div id={this.id.case7} onClick={this.handleChange}>{this.state.seven}</div>
                            <div id={this.id.case8} onClick={this.handleChange}>{this.state.height}</div>
                            <div id={this.id.case9} onClick={this.handleChange}>{this.state.nine}</div>
                        </div>
                    </div>
                </div>
                <div className={this.className.message}>
                    <p>{this.state.message}</p>
                </div>
            </div>
        )
    }
}