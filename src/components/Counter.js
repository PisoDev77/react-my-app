import React from "react";
import {useState} from "react";
// Hook

export default function Counter(){

    const [cnt, setCnt] = useState(0);
    const [show, setShow] = useState(true);

    const operators = ["+","-","*"];
    const [operator, setOperator] = useState(operators[0]);

    return(
        <div>
            <button onClick={() => {
                let res = cnt;
                if(operator === operators[0]){
                    res += 1;
                }
                if(operator === operators[1]){
                    res -= 1;
                }
                if(operator === operators[2]){
                    res *= 1;
                }
                setCnt(res)
                }}>{operator}</button>
            <button onClick={() => setShow(!show)}>Show and Hide</button>
            <button onClick={() => {
                const idx = Math.floor(Math.random() * operators.length);
                setOperator(operators[idx]);
            }}>Change Operator</button>
            {show && <h1>Counter: {cnt} !!</h1>} 
        </div>
    );
}