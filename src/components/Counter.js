import React from "react";
import {useState} from "react";
// Hook

export default function Counter(){

    // const [cnt, setCnt] = useState(0);
    // const [show, setShow] = useState(true);

    const operators = ["+","-","*"];
    // const [operator, setOperator] = useState(operators[0]);
    
    const [info, setInfo] = useState({
        cnt:0,
        show:true,
        operator: operators[0]
    })

    return(
        <div>
            <button onClick={() => {
                let res = info.cnt;
                if(info.operator === operators[0]){
                    res += 1;
                }
                if(info.operator === operators[1]){
                    res -= 1;
                }
                if(info.operator === operators[2]){
                    res *= 1;
                }
                setInfo({...info, cnt:res})
            }
                }>{info.operator}</button>
            <button onClick={() => {
                setInfo({...info, show:!info.show})
            }}>Show and Hide</button>
            <button onClick={() => {
                const idx = Math.floor(Math.random() * operators.length);
                setInfo({...info, operator:operators[idx]});
            }}>Change Operator</button>
            {info.show && <h1>Counter: {info.cnt} !!</h1>} 
        </div>
    );
}