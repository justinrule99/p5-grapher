import React, { Component } from "react";
import Sketch from "react-p5";


// pass object of (x,y) here as props (everything already calculated)

class P5Sketch extends Component {
    x = 50;
    y = 50;



    setup = (p5, canvasParentRef) => {
        p5.createCanvas(600, 600).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    };

    // this runs ~30 times/sec
    draw = (p5) => {
        // to access built in variables: p5.mouseX, etc
        // customize
        p5.background("rgb(193,240,255)");
        p5.ellipse(p5.mouseX, p5.mouseY, 70, 70);
        p5.line(300,0,300,600);
        p5.line(0,300,600,300);
        this.x++;
    };

    mouseClicked = () => {
        console.log("CCKD");
    };

    render() {
        return <Sketch setup={this.setup} draw={this.draw} mouseClicked={this.mouseClicked}/>;
    }
}

export default P5Sketch;