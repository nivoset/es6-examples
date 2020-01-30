const arrowFunction = () => {
    console.log(this);
};
function normalFunction () {
    console.log(this);
}
const test = {
    test: 'variable'
};

console.log(arrowFunction);
arrowFunction.call(test) //bind/call doesn't work
normalFunction.call(test) //bind/call does work!

const argumentsArrow = (...args) => {
    console.log(`in arrow functions; arguments works differently ${arguments[3]}`); //but doesn't give arguments
    console.log('exampleArgumentsFunction', args);
};
function argumentsFunction () {
    console.log('exampleArgumentsFunction', arguments);
}

argumentsArrow("first", "second", "third");
argumentsFunction("first", "second", "third");

const arrowWithoutBrackets = variable => console.log(`bracketless arrow function passed: ${variable}`);

arrowWithoutBrackets("variable");