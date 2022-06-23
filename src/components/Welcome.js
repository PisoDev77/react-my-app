import React from "react";
import cat from "./logo.png";

export default function Welcome(props){

    return (
        <>
            <img src={cat} alt="coupang" height="200" />
            <h1>{props.fname}</h1>
            <h1>{props.lname}</h1>
        </>
    );
}