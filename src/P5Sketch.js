import React, { Component } from "react";
import Sketch from "react-p5";


// pass object of (x,y) here as props (everything already calculated)
const adjustCoordinates = (pairs, height, width) => {
    // get diff between first and last x


    // return new array of coordinates ready to be graphed
    let newPairs = [];
    for (let i = 0; i < 10; i++) {
        newPairs[i] = {
            x: 50*i,
            y: i
        }
    }

    // unnecessary???
    return newPairs;
};

// only works on change, not onclick
class P5Sketch extends Component {
    x = 50;
    y = 50;




    // only gets passed once, so we don't have an updated value
    // values = this.props.values;
    // eqn = this.props.equation;

    setup = (p5, canvasParentRef) => {
        p5.createCanvas(600, 600).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    };

    // this runs ~30 times/sec
    draw = (p5) => {
        // draw based on this.props.values
        // to access built in variables: p5.mouseX, etc
        // must paint background first, everything else goes on top
        // customize
        p5.background("rgb(193,240,255)");
        p5.translate(300,300);

        let adjustedValues = adjustCoordinates(this.props.values, p5.height, p5.width);
        p5.strokeWeight(1);
        // adjustedValues.map(value => {
        //     // value.x, value.y
        //     console.log(value);
        //     p5.point(value.x, value.y);
        // });

        this.props.values.map(value => {
            // value.x, value.y
            console.log(value);
            p5.point(value.x, value.y);
        });



        p5.point(-100,-40);


        p5.strokeWeight(1);
        p5.line(300,0,300,600);
        p5.line(0,300,600,300);
        // undefined for click???
        this.x++;
    };

    mouseClicked = () => {
        console.log("CCKD");
    };

    // how to use props inside draw??
    render() {
        return <Sketch setup={this.setup} draw={this.draw} mouseClicked={this.mouseClicked}/>;
    }
}

export default P5Sketch;