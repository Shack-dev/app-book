import React from "react";

export default class Title extends React.Component {

    constructor(props){
        super(props);

        this.className = {
            Title : "title-sample",
        }
    }

    render(){
        return (
            <div className={this.className.Title}>{this.props.name}</div>
        )
    }
}