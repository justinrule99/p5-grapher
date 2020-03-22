import React from 'react';
import ShuntingYard from "shunting-yard.js/src/ShuntingYard";
import {calculateForRange} from "./utils";
import styled from 'styled-components';
import './App.css';
import P5Sketch from "./P5Sketch";


const Button = styled.button`
    height: 54px;
    width: 200px;
    border-radius: 10px;
    background-color: #d4d4d4;
    color: black;
    margin-bottom: 25px;
`;

const Input = styled.input`
    margin: 20px;
    width: 400px;
    font-size: 20px;
    border-radius: 10px;
    padding: 15px;
`;

const compute = (equation) => {
    const shuntingYard = new ShuntingYard();
    const val = shuntingYard.resolve(equation);
    // console.log("val: "+val);
    const vals = calculateForRange(-20,20,equation);
    // console.log(JSON.stringify(vals, null, 2));
    // format: 5x+3 === 5*(.1) + 3
    // if const before x: replace x with *(i)
    // x + 4 === (1) + 4

    // DONT DO ANYTHING IF VALS EMPTY
    return vals;
};

// full component with state
class App extends React.Component {

    constructor(props) {
        super(props);


        this.handleChange = this.handleChange.bind(this);
        this.handleGraph = this.handleGraph.bind(this);
        this.state = {equation: '', values: []};

    }

    handleChange = (event) => {
        this.setState({
            equation: event.target.value,
            values: compute(this.state.equation)
        });
    };


    handleGraph = (event) => {
        console.log("on submit: "+this.state.equation);
        this.setState({
            values: compute(this.state.equation)
        });
        event.preventDefault();
    };
    // need to kill default onsubmit

    render() {
        const values = this.state.values;
        let eqn = this.state.equation;
        return (
            <div className="App">
                <header className="App-header">
                    {/*<Input type="text" id="eqn" name="eqn" />*/}
                    {/*<Button onClick={()=>{return compute(equation)}}>{"Graph"}</Button>*/}
                    <form onSubmit={this.handleGraph}>
                        <Input type="text" value={this.state.value} onChange={this.handleChange} />
                        <Button type="submit" value="Graph">{"Graph"}</Button>
                    </form>
                    <p>{this.state.equation}</p>
                    <P5Sketch values={values} equation={eqn}/>
                </header>
            </div>
        );
    }
}

export default App;
