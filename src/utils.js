import ShuntingYard from "shunting-yard.js/src/ShuntingYard";

const isNumber = (c) => c >= '0' && c <= '9';

const calculate = (expression) => {
    const shuntingYard = new ShuntingYard();
    return shuntingYard.resolve(expression);
};

export const calculateForRange = (start, end, equation) => {
    let results = [];
    let inParen;
    let inParenTimes;
    let replaced;
    let splitEqn = equation.split('');

    // indices contains all indices of 'x'
    let indices = [];
    for(let i=0; i< equation.length; i++) {
        if (splitEqn[i] === "x") indices.push(i);
    }

    for (let j = 0; j < indices.length; j++) {
        // look at char at indices[j]-1
        if (indices[j] === 0) continue;
        if (isNumber(splitEqn[indices[j]-1])) {
            // replace x with y if it needs to be *(i) instead of (i)
            splitEqn[indices[j]] = "y";
        }
    }
    // current form with 'x' and 'y'
    let joined = splitEqn.join('');

    for (let i = start; i <= end; i+=.01) {
        inParen = "("+i.toFixed(3)+")";
        inParenTimes = "*("+i.toFixed(3)+")";

        replaced = joined.split("x").join(inParen);
        let replacedFinal = replaced.split("y").join(inParenTimes);
        console.log(replacedFinal);
        console.log(calculate(replacedFinal));
        results.push(calculate(replacedFinal));
    }

    return results;
};