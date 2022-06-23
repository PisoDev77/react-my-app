import React from "react";
import {useState} from "react";
// Hook

export default function Counter(){

    
    const [cnt, setCnt] = useState(0);

    return(
        <div>
            <button onClick={() => {setCnt(cnt + 1)}}>+</button>
            <h1>Counter: {cnt} !!</h1> 
        </div>
    );
}