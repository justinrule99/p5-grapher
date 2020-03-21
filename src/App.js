import React from 'react';
import ShuntingYard from "shunting-yard.js/src/ShuntingYard";
import {calculateForRange} from "./utils";
import styled from 'styled-components';
import './App.css';


const Button = styled.button`
    height: 50px;
    width: 200px;
    border-radius: 10px;
    background-color: #d4d4d4;
    color: black;
`;

const Input = styled.input`
    margin: 20px;
    width: 400px;
    font-size: 22px;
    border-radius: 10px;
    padding: 15px;
`;

const compute = (equation) => {
    const shuntingYard = new ShuntingYard();
    const val = shuntingYard.resolve(equation);
    console.log("val: "+val);
    const vals = calculateForRange(1,2,equation);
    console.log(vals);
    // format: 5x+3 === 5*(.1) + 3
    // if const before x: replace x with *(i)
    // x + 4 === (1) + 4
    return vals;
};

// functional (stateless) component
const App = () => {
    const equation = "2x^2+3x";
    return (
        <div className="App">
            <header className="App-header">
                <Input type="text" id="eqn" name="eqn" />
                <Button onClick={()=>{return compute(equation)}}>{"Click Me"}</Button>
            </header>
        </div>
    );
};

export default App;
