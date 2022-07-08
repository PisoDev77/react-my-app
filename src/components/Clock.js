import React from "react";

export default class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    render(){
        return(
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleString}.</h2>
            </div>
        );
    }
}