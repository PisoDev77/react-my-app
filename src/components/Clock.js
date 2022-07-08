import React from "react";

export default class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    tick() {
        this.setState({
            //date 초기화
            date: new Date(),
        });
    }

    //렌더 후 실행
    componentDidMount() {
        console.log("YES MOUNT");
        this.timerID = setInterval(()=>this.tick(), 1000);
    }

    componentDidUpdate() {
        console.log("YES UPDATE");
        console.log(this.state.date);
    }

    componentWillUnmount() {
        console.log("YES UNMOUNT");
        clearInterval(this.timerID);
    }


    render(){
        return(
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleString()}.</h2>
            </div>
        );
    }
}