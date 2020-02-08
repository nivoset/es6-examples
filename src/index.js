// import './examples/destructuring';

// import './examples/freeze';
// import './examples/set'
// import './examples/symbol'

// import './examples/arrow_functions'
// import './examples/array_adjustments';

// import './examples/async_await';
// import './examples/promises';
// // import './example_objectapis'

import './examples/filter_match'



// import uuid from 'uuid';
//import being used, as well as template literals
// console.log(`new UUID is: ${uuid()}`);


const readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Press any key to continue...", function (answer) {
    rl.close();
    process.exit(0);
});