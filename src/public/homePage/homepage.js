import { Component } from "react";
import './../../Assets/css/header.css';
import './../../Assets/css/general.css';
import banniere from "./../../Assets/img/banniere.jpg";
import { Link } from "react-router-dom";

export default class HomePage extends Component{

    constructor(props){
        super(props)

        this.handleMenu = this.handleMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);

        this.state = {
            menu : undefined,
        }

        this.className = {
            home : "head",
            header : "header",
            titleOne : "title1",
            titleTwo : "title2",
            menu : "modal-menu",
            banniere : "banniere",
            element : {
                navbar : "modal-menu",
                navbarIn : "modal-menu-in",
                navbarOut : "modal-menu-out",
                cross : "cross",
            }
        }

        this.id = {
            element : {
                ticTacToe : "",
                navbar : "modal-menu",
            }
        }

        this.route = {
            ticTacToe : "/TicTacToe"
        }


    }

    handleMenu(){
        const menu = 
                        <nav className={this.className.element.navbar + " " +this.className.element.navbarIn} id={this.id.element.navbar}>
                            <div>
                                <div className={this.className.element.cross} onClick={this.closeMenu}></div>
                            </div>
                            <div>
                                <div><Link to="/TicTacToe">Tic Tac Toe</Link></div>
                            </div>
                        </nav>;
    
        this.setState({menu : menu});
    }

    closeMenu(){
        document.querySelector(`#${this.id.element.navbar}`).className = `${this.className.element.navbar} ${this.className.element.navbarOut}`;
        const menu = undefined;
        this.setState({menu : menu});
    }

    /*-------------------------------------render-------------------------------------------------------------------*/

    render(){
        return(<div>
                    <div className={this.className.home}>
                        <header className={this.className.header}>
                            <nav>
                                <p className={this.className.titleTwo} onClick={this.handleMenu}>Menu</p>
                            </nav>
                            <div>
                                <p className={this.className.titleOne}>Sample application</p>
                            </div>
                            <div>
                                <p className={this.className.titleTwo}>Bienvenue</p> 
                            </div>
                        </header>
                        <div>
                            <img className={this.className.banniere} src={banniere} alt=""/>
                        </div>
                    </div>
                    {this.state.menu}
                </div>)
            
    }
}