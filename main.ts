#! /usr/bin/env node


import inquirer from 'inquirer';
import chalk from 'chalk';
import Table from 'cli-table3';
import { table } from 'console';

// Veriable Data_base
let Veriable_Data_Base: any[] = [];
let Last_value = 0;


// module ka main Data_base or currunt value veriable
let Modules_Data_Base: any[] = [];
let Last_value_M = 0;


// Loops ka main Data_base or currunt value store karne wala veriable bana rhy hain...
let  Loops_Data_Base: any[] = [];
let  Last_value_L = 0;


// js-ts ka main Data_base or currunt value store karne wala veriable bana rhy hain...
let  js_ts_Data_Base: any[] = [];
let  Last_value_js = 0;

// Asynchronous function ka main Data_base or currunt value store karne wala veriable bana rhy hain...
let  Asyn_Data_Base: any[] = [];
let  Last_value_A = 0;


// Asynchronous function ka main Data_base or currunt value store karne wala veriable bana rhy hain...
let  Syn_Data_Base: any[] = [];
let  Last_value_S = 0;


// Asynchronous function ka main Data_base or currunt value store karne wala veriable bana rhy hain...
let  Array_Data_Base: any[] = [];
let  Last_value_Ar = 0;




// Ye veriables data ke questions hain
const All_questions = [
    {
        question: '\n Q.1 Which keyword is used to declare a variable that can be reassigned in JavaScript?',
        choices: ['(a): let', '(b): const', '(c): var', '(d): static'],
        correctAnswer: '(a): let'
    },
    {
        question: '\n Q.2 Which keyword is used to declare a variable with a block scope in JavaScript?',
        choices: ['(a): global', '(b): static', '(c): var', '(d): let'],
        correctAnswer: '(d): let'
    },
    {
        question: "\n Q.3 What does the 'const' keyword in JavaScript prevent?",
        choices: ['(a): Redeclaration', '(b): Reassignment', '(c): Block scoping', '(d): Accessing global variables'],
        correctAnswer: '(b): Reassignment'
    },
    {
        question: "\n Q.4 Which TypeScript feature ensures a variable can only hold a specific type of value?",
        choices: ["(a): Interfaces", "(b): Classes", "(c): Type annotations", "(d): Packages"],
        correctAnswer: "(c): Type annotations"
    },
    {
        question: "\n Q.5 What value does an uninitialized variable hold in JavaScript?",
        choices: ["(a): null", "(b): undefined", "(c): NaN", "(d): empty"],
        correctAnswer: "(b): undefined"
    },
    {
        question: "\n Q.6 In TypeScript, which keyword allows you to explicitly specify the type of a variable?",
        choices: ["(a): instanceof", "(b): typeof", "(c): type", "(d): as"],
        correctAnswer: "(c): type"
    },
    {
        question: "\n Q.7 Which of the following is a valid TypeScript type annotation?",
        choices: ["(a): let age: integer = 30", "(b): let age = '30' as integer", "(c): let age: number = 30", "(d): let age! = 30"],
        correctAnswer: "(c): let age: number = 30"
    },
    {
        question: "\n Q.8 In TypeScript, which type can store values of any data type?",
        choices: ["(a): string", "(b): unknown", "(c): number", "(d): any"],
        correctAnswer: "(d): any"
    },
    {
        question: "\n Q.9 Which JavaScript variable keyword has function-level scope?",
        choices: ["(a): let", "(b): const", "(c): global", "(d): var"],
        correctAnswer: "(d): var"
    },
    {
        question: "\n Q.10 Which TypeScript type ensures a variable can only have `true` or `false` values?",
        choices: ["(a): boolean", "(b): bit", "(c): logical", "(d): binary"],
        correctAnswer: "(a): boolean"
    }
];


// <------------------------------------------------END---------------------------------------->
// modules quiz

const Modules_questions = [
    {
        question: '\n Q.1 What is the purpose of JavaScript modules?',
        choices: ['(a): To separate code into reusable chunks', '(b): To add comments to the code', '(c): To enable multi-threaded programming', '(d): To convert JavaScript to another language'],
        correctAnswer: '(a): To separate code into reusable chunks'
    },
    {
        question: '\n Q.2 Which keyword is used to export a function from a module?',
        choices: ['(a): return', '(b): export', '(c): module', '(d): public'],
        correctAnswer: '(b): export'
    },
    {
        question: "\n Q.3 What file extension is typically used for ES6 modules?",
        choices: ['(a): .txt', '(b): .js', '(c): .md', '(d): .mod'],
        correctAnswer: '(b): .js'
    },
    {
        question: '\n Q.4 Which of the following statements allows you to import specific exports from a module?',
        choices: ['(a): require', '(b): fetch', '(c): load', '(d): import'],
        correctAnswer: '(d): import'
    },
    {
        question: '\n Q.5 What will happen if you attempt to import a non-existent export from a module?',
        choices: ['(a): It will return null', '(b): It will create a new export', '(c): It will cause a syntax error', '(d): It will throw an error at runtime'],
        correctAnswer: '(d): It will throw an error at runtime'
    },
    {
        question: '\n Q.6 What is a named export in JavaScript modules?',
        choices: ['(a): A function that uses the `export` keyword', '(b): An export that uses a specific name and can be imported with that name', '(c): An export that has no name', '(d): An import that is automatically loaded'],
        correctAnswer: '(b): An export that uses a specific name and can be imported with that name'
    },
    {
        question: '\n Q.7 Which syntax allows importing everything from a module as an object?',
        choices: ["(a): import * as name from 'module'", "(b): import all from 'module'", "(c): require('module')", "(d): fetch * as name from 'module'"],
        correctAnswer: "(a): import * as name from 'module'"
    },
    {
        question: '\n Q.8 How many default exports can a module have?',
        choices: ['(a): Zero', '(b): Multiple', '(c): Exactly one', '(d): Unlimited'],
        correctAnswer: '(c): Exactly one'
    },
    {
        question: '\n Q.9 Which of the following is an advantage of using ES6 modules?',
        choices: ['(a): Enables JavaScript to run in the backend', '(b): Allows splitting code into smaller, maintainable files', '(c): Increases processing speed', '(d): Makes all variables globally accessible'],
        correctAnswer: '(b): Allows splitting code into smaller, maintainable files'
    },
    {
        question: '\n Q.10 What is the purpose of a `package.json` file in a project using Node.js modules?',
        choices: ['(a): To list all module dependencies', "(b): To store the project's main HTML file", '(c): To describe the UI structure', '(d): To import styles'],
        correctAnswer: '(a): To list all module dependencies'
    },
 

]


// <------------------------------------------------END---------------------------------------->
// Loops quiz

let Loops_questions = [
    {
        question: '\n Q.1 What is the main purpose of using loops in JavaScript?',
        choices: ['(a): To perform repetitive tasks efficiently', '(b): To generate random numbers', '(c): To create user interfaces', '(d): To debug JavaScript code'],
        correctAnswer: '(a): To perform repetitive tasks efficiently'
    },
    {
        question: '\n Q.2 Which loop will always execute the code block at least once before checking the condition?',
        choices: ['(a): For loop', '(b): While loop', '(c): Switch loop', '(d): Do-while loop'],
        correctAnswer: '(d): Do-while loop'
    },
    {
        question: '\n Q.3 Which loop should you use to iterate over the properties of an object?',
        choices: ['(a): While loop', '(b): For-in loop', '(c): Do-while loop', '(d): For-of loop'],
        correctAnswer: '(b): For-in loop'
    },
    {
        question: '\n Q.4 What happens if the condition of a loop is always `true`?',
        choices: ['(a): The loop will exit immediately', '(b): The loop will skip to the next iteration', '(c): The loop will run indefinitely', '(d): The loop will return null'],
        correctAnswer: '(c): The loop will run indefinitely'
    },
    {
        question: '\n Q.5 Which keyword can be used to exit a loop early?',
        choices: ['(a): continue', '(b): return', '(c): end', '(d): break'],
        correctAnswer: '(d): break'
    },
    {
        question: '\n Q.6 What are the three main components of a `for` loop?',
        choices: ['(a): Declaration, definition, execution', '(b): Type, scope, yield', '(c): Initialization, condition, update', '(d): Try, catch, finally'],
        correctAnswer: '(c): Initialization, condition, update'
    },
    {
        question: '\n Q.7 In a `for` loop, which component sets the starting value of the loop counter?',
        choices: ['(a): Initialization', '(b): Condition', '(c): Update', '(d): Execution'],
        correctAnswer: '(a): Initialization'
    },
    {
        question: '\n Q.8 In a `for` loop, which component determines when to stop the loop?',
        choices: ['(a): Initialization', '(b): Condition', '(c): Update', '(d): Execution'],
        correctAnswer: '(b): Condition'
    },
    {
        question: '\n Q.9 "Which `for` loop component changes the value of the loop counter?',
        choices: ['(a): Initialization', '(b): Condition', '(c): Update', '(d): Execution'],
        correctAnswer: '(c): Update'
    },
    {
        question: '\n Q.10 How would you write a `for` loop to iterate from 0 up to 5, inclusive?',
        choices: ['(a): for (let i = 0; i < 5; i++)', '(b): for (let i = 0; i <= 5; i++)', '(c): for (let i = 0; i > 5; i++)', '(d): for (let i = 0; i >= 5; i++)'],
        correctAnswer: '(b): for (let i = 0; i <= 5; i++)'
    },

];



// <------------------------------------------------END---------------------------------------->
// js-ts quiz

let js_ts_questions = [

    {
        question: '\n Q.1 What is the primary use of JavaScript in web development?',
        choices: ['(a): To style web pages', '(b): To structure web pages', '(c): To add interactivity to web pages', '(d): To create server-side applications'],
        correctAnswer: '(c): To add interactivity to web pages'
    },
    {
        question: '\n Q.2 Which company developed JavaScript in the 1990s?',
        choices: ['(a): Microsoft', '(b): Netscape', '(c): Google', '(d): Apple'],
        correctAnswer: '(b): Netscape'
    },
    {
        question: '\n Q.3 What is a common abbreviation for JavaScript?',
        choices: ['(a): JS', '(b): JVM', '(c): JSE', '(d): JDK'],
        correctAnswer: '(a): JS'
    },
    {
        question: '\n Q.4 Which of the following is a common data type in JavaScript?',
        choices: ['(a): Record', '(b): Object', '(c): Matrix', '(d): Tuple'],
        correctAnswer: '(b): Object'
    },
    {
        question: '\n Q.5 How do you declare a variable that cannot be reassigned in JavaScript?',
        choices: ['(a): let', '(b): var', '(c): const', '(d): immutable'],
        correctAnswer: '(c): const'
    },
    {
        question: '\n Q.6 What feature does TypeScript add to JavaScript?',
        choices: ['(a): Automated testing', '(b): Static typing', '(c): CSS integration', '(d): Server management'],
        correctAnswer: '(b): Static typing'
    },
    {
        question: '\n Q.7 How can you compile a TypeScript file to JavaScript?',
        choices: ["(a): Use the command `ts-compile`", "(b): Run `ts-node` in the terminal", "(c): Run `tsc` (TypeScript Compiler) in the terminal", '(d): Write a TypeScript program directly'],
        correctAnswer: "(c): Run `tsc` (TypeScript Compiler) in the terminal"
    },
    {
        question: '\n Q.8 What file extension is used for TypeScript files?',
        choices: ['(a): .java', '(b): .js', '(c): .ts', '(d): .jsx'],
        correctAnswer: '(c): .ts'
    },
    {
        question: '\n Q.9 Which TypeScript feature helps identify and fix errors before running the code?',
        choices: ['(a): Unit tests', '(b): Type checking', '(c): API testing', '(d): Code splitting'],
        correctAnswer: '(b): Type checking'
    },
    {
        question: "\n Q.10 What does TypeScript's `interface` keyword allow you to define?",
        choices: ['(a): HTML elements', '(b): Backend services', '(c): Structured data types', '(d): Database schemas'],
        correctAnswer: '(c): Structured data types'
    },
                                        

]


// <------------------------------------------------END---------------------------------------->
// Asynchronous quiz

let Asynchronous_questions = [
    {
        question: '\n Q.1 What is a promise in JavaScript?',
        choices: ['(a): A function that runs immediately', '(b): An object representing the eventual completion or failure of an asynchronous operation', '(c): A method for synchronous operations', '(d): A type of callback function'],
        correctAnswer: '(b): An object representing the eventual completion or failure of an asynchronous operation'
    },
    {
        question: '\n Q.2 What is callback hell?',
        choices: ['(a): A state of having too many functions', '(b): Nested callbacks that make code hard to read and maintain', '(c): An error caused by too many promises', '(d): A technique for handling multiple callbacks'],
        correctAnswer: '(b): Nested callbacks that make code hard to read and maintain'
    },
    {
        question: '\n Q.3 Which of the following is a solution to callback hell?',
        choices: ['(a): Using more nested callbacks', '(b): Using promises', '(c): Using loops', '(d): Using synchronous code'],
        correctAnswer: '(b): Using promises'
    },
     {
        question: "\n Q.4 What does the 'then' method do in a promise?",
        choices: ['(a): Declares an asynchronous function', '(b): Handles a rejected promise', '(c): Chains actions to be performed after a promise is fulfilled', '(d): Catches errors in an asynchronous function'],
        correctAnswer: '(c): Chains actions to be performed after a promise is fulfilled'
    },
    {
        question: "\n Q.5 What is the purpose of the 'catch' method in promises?",
        choices: ['(a): To handle rejected promises', '(b): To declare an asynchronous function', '(c): To chain actions after a promise', '(d): To create a new promise'],
        correctAnswer: '(a): To handle rejected promises'
    },
    {
        question: "\n Q.6 What does the 'async' keyword do when placed before a function?",
        choices: ['(a): Makes the function run synchronously', "(b): Marks the function as asynchronous, allowing the use of 'await' inside it", '(c): Immediately resolves a promise', '(d): Rejects a promise'],
        correctAnswer: "(b): Marks the function as asynchronous, allowing the use of 'await' inside it"
    },
    {
        question: '\n Q.7 What is a common benefit of using async/await over promises?',
        choices: ['(a): It makes the code run faster', '(b): It makes asynchronous code look and behave more like synchronous code', '(c): It eliminates the need for callbacks', '(d): It prevents all errors'],
        correctAnswer: '(b): It makes asynchronous code look and behave more like synchronous code'
    },
    {
        question: '\n Q.8 How do you create a new promise?',
        choices: ["(a): Using the 'new Promise()' constructor", "(b): Using the 'async' keyword", "(c): Using the 'await' keyword", '(d): Using a callback function'],
        correctAnswer: "(a): Using the 'new Promise()' constructor"
    },
    {
        question: '\n Q.9 Which of the following can be a state of a promise?',
        choices: ['(a): Waiting', '(b): Paused', '(c): Fulfilled', '(d): Sleeping'],
        correctAnswer: '(c): Fulfilled'
    },
    {
        question: '\n Q.10 What happens when a promise is rejected?',
        choices: ['(a): The code execution stops immediately', "(b): The 'then' method is called", "(c): The 'catch' method is called", '(d): The function becomes synchronous'],
        correctAnswer: "(c): The 'catch' method is called"
    },
]



// <------------------------------------------------END---------------------------------------->
// Synchronous quiz

let Synchronous_question = [
    {
        question: '\n Q.1 What is asynchronous programming?',
        choices: ['(a): A programming style where operations happen sequentially', '(b): A programming style where operations can happen independently of the main program flow', '(c): A type of synchronous programming', '(d): A programming style that only uses loops'],
        correctAnswer: '(b): A programming style where operations can happen independently of the main program flow'
    },
    {
        question: '\n Q.2 Why is asynchronous programming important?',
        choices: ['(a): It makes the code run slower', '(b): It helps manage tasks that take an unknown amount of time to complete, like network requests', '(c): It simplifies writing code', '(d): It only works with databases'],
        correctAnswer: '(b): It helps manage tasks that take an unknown amount of time to complete, like network requests'
    },
    {
        question: '\n Q.3 Which of the following is a common use case for asynchronous programming?',
        choices: ['(a): Running a for loop', '(b): Performing a network request', '(c): Declaring variables', '(d): Reading static files'],
        correctAnswer: '(b): Performing a network request'
    },
    {
        question: '\n Q.4 What is a callback function in asynchronous programming?',
        choices: ['(a): A function that runs after another function has finished', '(b): A function that calls another function', '(c): A function that runs immediately', '(d): A function that sets a timeout'],
        correctAnswer: '(a): A function that runs after another function has finished'
    },
    {
        question: '\n Q.5 What is the keyword used to declare an asynchronous function?',
        choices: ['(a): async', '(b): await', '(c): promise', '(d): then'],
        correctAnswer: '(a): async'
    },
    {
        question: '\n Q.6 Which keyword is used to wait for a promise to resolve in an async function?',
        choices: ['(a): wait', '(b): then', '(c): async', '(d): await'],
        correctAnswer: '(d): await'
    },
    {
        question: "\n Q.7 What does the 'await' keyword do?",
        choices: ['(a): Makes the function synchronous', '(b): Pauses the function execution until the promise settles', '(c): Rejects a promise', '(d): Declares an asynchronous function'],
        correctAnswer: '(b): Pauses the function execution until the promise settles'
    },
    {
        question: '\n Q.8 How do you handle errors in an async function?',
        choices: ['(a): Using a try-catch block', '(b): Using if-else statements', '(c): Using an async-catch block', '(d): Using a promise-catch block'],
        correctAnswer: '(a): Using a try-catch block'
    },
    {
        question: '\n Q.9 Which method is used to chain actions for a promise?',
        choices: ['(a): await', '(b): then', '(c): catch', '(d): finally'],
        correctAnswer: '(b): then'
    },

    {
        question: '\n Q.10 Which method is used to handle a rejected promise?',
        choices: ['(a): then', '(b): await', '(c): catch', '(d): async'],
        correctAnswer: '(c): catch'
    },
]


// <------------------------------------------------END---------------------------------------->
// Array quiz

let Array_questions = [
    {
        question: '\n Q.1 How do you declare an empty array in JavaScript?',
        choices: ['(a): let myArray = [];', '(b): let myArray = {};', '(c): let myArray = "";', '(d): let myArray = null;'],
        correctAnswer: '(a): let myArray = [];'
    },
    {
        question: '\n Q.2 Which of the following is a valid way to access the first element of an array?',
        choices: ['(a): array.first', '(b): array(0)', '(c): array[0]', '(d): array.getFirst('],
        correctAnswer: '(c): array[0]'
    },
    {
        question: "\n Q.3 Which statement correctly returns the number of elements in an array named 'data'?",
        choices: ['(a): data.size', '(b): data.count()', '(c): data.length', '(d): data.capacity'],
        correctAnswer: '(c): data.length'
    },
    {
        question: '\n Q.4 Which method allows you to add new elements to the end of an array?',
        choices: ['(a): shift', '(b): unshift', '(c): push', '(d): pop'],
        correctAnswer: '(c): push'
    },
    {
        question: "\n Q.5 What is the index of the last element in an array 'items' that contains 5 elements?",
        choices: ['(a): 0', '(b): 4', '(c): 5', '(d): 6'],
        correctAnswer: '(b): 4'
    },
    {
        question: '\n Q.6 Which array method creates a new array by filtering elements that meet a specified condition?',
        choices: ['(a): filter', '(b): forEach', '(c): reduce', '(d): map'],
        correctAnswer: '(a): filter'
    },
    {
        question: '\n Q.7 Which method is used to combine all elements of an array into a single string?',
        choices: ['(a): join', '(b): slice', '(c): concat', '(d): splice'],
        correctAnswer: '(a): join'
    },
    {
        question: '\n Q.8 Which method creates a new array by modifying each element in the original array?',
        choices: ['(a): async', '(b): await', '(c): promise', '(d): then'],
        correctAnswer: '(a): async'
    },
    {
        question: '\n Q.9 Which method creates a new array by modifying each element in the original array?',
        choices: ['(a): reduce', '(b): filter', '(c): map', '(d): concat'],
        correctAnswer: '(c): map'
    },
    {
        question: "\n Q.10 Which array method returns the index of the first occurrence of a specified element, or -1 if it isn't found?",
        choices: ['(a): findIndex', '(b): indexOf', '(c): includes', '(d): find'],
        correctAnswer: '(a): async'
    },

]



// Main function jahn se program start ho rha hai
async function main() {

    console.log('\n');
    console.log(chalk.bgGreen.bold.italic.whiteBright('\t\t WELCOME TO GIAIC TYPESCIPT QUIZ WORLD'));
    console.log(chalk.bold.green("\t....................................................."))
    console.log('\n');

    // Start All Methods list from here
    let Quiz = await inquirer.prompt([
        {
            name: 'data',
            message: 'Please select topic to continue Test Quiz',
            type: 'list',
            choices: ['Veriables', 'Modules', 'Loops', 'Js_Ts', 'Asynchronous', 'Synchronous', 'Arrays', "All_Data", chalk.red("Exit")]
        }
    ]);

    switch (Quiz.data) {
        case 'Veriables':
            await Veriables();
            break;

            case "Modules":
                await Modules();
                break;

                case "Loops":
                    await Loops();
                    break;

                    case "Js_Ts":
                      await  Js_Ts();
                   break;

                     case "Asynchronous":
                        await Asynchronous();
                        break;

                        case "Synchronous":
                         await Synchronous();
                         break;

                            case "Arrays":
                             await Arrays();
                             break;

                                case "All_Data":
                                 await All_Data();
                                  break;

                              case 'Exit':
                              break;

                            default:
                            await main();
                            break;
    }
}



// veriables function start
async function Veriables() {

    console.log('\n');
    console.log(chalk.bgGrey.bold.italic('\t Welcome to Veriables Test Quiz'));
    console.log('\n');


    for (let i = Last_value; i < All_questions.length; i++) {
        let oneObject = All_questions[i];

        let Getting = await inquirer.prompt([
            {
                name: 'answer',
                message: oneObject.question,
                type: 'list',
                choices: [...oneObject.choices, '\n Check Results', 'Exit']
            }
        ]);


        if (Getting.answer === oneObject.correctAnswer) {
            console.log(`You choose a correct Answer:  ${chalk.bold.green(Getting.answer)}`);
        } 
        else if (Getting.answer === '\n Check Results') {
            Last_value = i; 
            await showResults();
            return;
        } 
        else if (Getting.answer === 'Exit') {
            Last_value = i;
           await  main();
             return;
        } 
        else {
            console.log(`Your Answer is wrong!: ${chalk.bold.red(Getting.answer)}`);
        }


        // Store user's answer in the array
        Veriable_Data_Base.push({
            Question: oneObject.question,
            YourAns: Getting.answer,
            CorrectAnswer: oneObject.correctAnswer,
            Result: Getting.answer === oneObject.correctAnswer ? 'Correct' : 'Wrong'
        });

        
        // Result nikal rhy hain correct answers ka or wrong ka
        let correctAnswers = Veriable_Data_Base.filter((item) => item.Result === 'Correct').length;
        let wrongAnswers = Veriable_Data_Base.filter((item) => item.Result === 'Wrong').length;

        console.log('\n');
        console.log('Total Questions:', chalk.white(Veriable_Data_Base.length));
        console.log(chalk.green.italic('Correct Answers:', correctAnswers));
        console.log(chalk.red.italic('Wrong Answers:', wrongAnswers));
    }

    showResults();

    // ye reset kar dega last value mein jitne bhi question save honge unko jab sary question complete ho jaenge
    Last_value = 0;
}


// yahn veriable ka data show hoga
async function showResults() {

    let table = new Table({
        head: [
            chalk.white.bold('Question'),
            chalk.white.bold('Your Answer'),
            chalk.white.bold('Result')
        ],

        colWidths: [70, 30, 10]
    });

    Veriable_Data_Base.forEach((item) => {
        table.push([
            item.Question,
            item.YourAns,
            item.Result === 'Correct' ? chalk.green.bold(item.Result) : chalk.red.bold(item.Result)
        ]);
    });

    console.log(table.toString());


// table show krwany ke bad 2 option jo pochty hain continue or exit ka
    let what = await inquirer.prompt([
        {
            name: 'toDo',
            message: 'What do you want to do?',
            type: 'list',
            choices: ['Continue', 'Exit']
        }
    ]);

    if (what.toDo === 'Continue') {
        await Veriables();
    } 
    else {
        await main();
    }
}


// <------------------------------------------------END---------------------------------------->
// modules quix ka function

async function Modules(){

    console.log('\n');
    console.log(chalk.bgGrey.bold.italic('\t Welcome to Modules Test Quiz'));
    console.log('\n');

    for (let i = Last_value_M; i < Modules_questions.length; i++) {
        let oneObject = Modules_questions[i];

        let Getting = await inquirer.prompt([
            {
                name: 'answer',
                message: oneObject.question,
                type: 'list',
                choices: [...oneObject.choices, '\n Check Results', 'Exit']
            }
        ]);


        if (Getting.answer === oneObject.correctAnswer) {
            console.log(`You choose a correct Answer:  ${chalk.bold.green(Getting.answer)}`);
        } 
        else if (Getting.answer === '\n Check Results') {
            Last_value_M = i; 
            await showResults2();
            return;
        } 
        else if (Getting.answer === 'Exit') {
            Last_value_M = i;
            await main();
            return
        } 
        else {
            console.log(`Your Answer is wrong!: ${chalk.bold.red(Getting.answer)}`);
        }


        // yahn main_data base mein question answer save krwa rhy hain ham
        Modules_Data_Base.push({
            Question: oneObject.question,
            YourAns: Getting.answer,
            CorrectAnswer: oneObject.correctAnswer,
            Result: Getting.answer === oneObject.correctAnswer ? 'Correct' : 'Wrong'
        });

        // yahn han correct ya wrong answers ko filter ke zariye nikal rhy hain
        let correctAnswers = Modules_Data_Base.filter((item) => item.Result === 'Correct').length;
        let wrongAnswers = Modules_Data_Base.filter((item) => item.Result === 'Wrong').length;

        console.log('\n');
        console.log('Total Questions:', chalk.white(Modules_Data_Base.length));
        console.log(chalk.green.italic('Correct Answers:', correctAnswers));
        console.log(chalk.red.italic('Wrong Answers:', wrongAnswers));
    }

    showResults2();
    // ye reset kar dega last value mein jitne bhi question save honge unko jab sary question complete ho jaenge
    Last_value_M = 0;
}


async function showResults2() {

    let table = new Table({
        head: [
            chalk.white.bold('Question'),
            chalk.white.bold('Your Answer'),
            chalk.white.bold('Result')
        ],

        colWidths: [70, 30, 10]
    });

    Modules_Data_Base.forEach((item) => {
        table.push([
            item.Question,
            item.YourAns,
            item.Result === 'Correct' ? chalk.green.bold(item.Result) : chalk.red.bold(item.Result)
        ]);
    });

    console.log(table.toString());


// table show krwany ke bad kya karna hai
    let what = await inquirer.prompt([
        {
            name: 'toDo',
            message: 'What do you want to do?',
            type: 'list',
            choices: ['Continue', 'Exit']
        }
    ]);

    if (what.toDo === 'Continue') {
        await Modules();
    } 
    else {
        await main();
    }
}


// <------------------------------------------------END---------------------------------------->
// modules quix ka function

async function Loops(){
    
    console.log('\n');
    console.log(chalk.bgGrey.bold.italic('\t Welcome to Loops Test Quiz'));
    console.log('\n');


    for (let i = Last_value_L; i < Loops_questions.length; i++) {
        let oneObject = Loops_questions[i];

        let Getting = await inquirer.prompt([
            {
                name: 'answer',
                message: oneObject.question,
                type: 'list',
                choices: [...oneObject.choices, '\n Check Results', 'Exit']
            }
        ]);

        if (Getting.answer === oneObject.correctAnswer) {
            console.log(`You choose a correct Answer:  ${chalk.bold.green(Getting.answer)}`);
        } 
        else if (Getting.answer === '\n Check Results') {
            Last_value_L = i; 
            await showResults3();
            return;
        } 
        else if (Getting.answer === 'Exit') {
            Last_value_L = i; 
           await main();
           return
        } 
        else {
            console.log(`Your Answer is wrong!: ${chalk.bold.red(Getting.answer)}`);
        }

        // yahn ham user se liya hua data main array mein oush krwa rhy hain alag alag kar ke
        Loops_Data_Base.push({
            Question: oneObject.question,
            YourAns: Getting.answer,
            CorrectAnswer: oneObject.correctAnswer,
            Result: Getting.answer === oneObject.correctAnswer ? 'Correct' : 'Wrong'
        });


        let correctAnswers = Loops_Data_Base.filter((item) => item.Result === 'Correct').length;
        let wrongAnswers = Loops_Data_Base.filter((item) => item.Result === 'Wrong').length;


        console.log('\n');
        console.log('Total Questions:', chalk.white(Loops_Data_Base.length));
        console.log(chalk.green.italic('Correct Answers:', correctAnswers));
        console.log(chalk.red.italic('Wrong Answers:', wrongAnswers));
    }

    showResults3();

    // ye reset kar dega last value mein jitne bhi question save honge unko jab sary question complete ho jaenge
    Last_value_L = 0;
}


async function showResults3() {

    let table = new Table({
        head: [
            chalk.white.bold('Question'),
            chalk.white.bold('Your Answer'),
            chalk.white.bold('Result')
        ],

        colWidths: [70, 30, 10]
    });

    Loops_Data_Base.forEach((item) => {
        table.push([
            item.Question,
            item.YourAns,
            item.Result === 'Correct' ? chalk.green.bold(item.Result) : chalk.red.bold(item.Result)
        ]);
    });

    console.log(table.toString());


// table show krwany ke bad kya karna hai
    let what = await inquirer.prompt([
        {
            name: 'toDo',
            message: 'What do you want to do?',
            type: 'list',
            choices: ['Continue', 'Exit']
        }
    ]);

    if (what.toDo === 'Continue') {
        await Loops();
    } 
    else {
        await main();
    }
}


// <------------------------------------------------END---------------------------------------->
// Js_Ts quix ka function


async function Js_Ts(){
    
    console.log('\n');
    console.log(chalk.bgGrey.bold.italic('\t Welcome to Js_Ts Test Quiz'));
    console.log('\n');

    for (let i = Last_value_js; i < js_ts_questions.length; i++) {
        let oneObject = js_ts_questions[i];

        let Getting = await inquirer.prompt([
            {
                name: 'answer',
                message: oneObject.question,
                type: 'list',
                choices: [...oneObject.choices, '\n Check Results', 'Exit']
            }
        ]);


        if (Getting.answer === oneObject.correctAnswer) {
            console.log(`You choose a correct Answer:  ${chalk.bold.green(Getting.answer)}`);
        } 
        else if (Getting.answer === '\n Check Results') {
            Last_value_js = i; 
            await showResults4();
            return;
        } 
        else if (Getting.answer === 'Exit') {
            Last_value_js = i; 
           await main();
           return
        } 
        else {
            console.log(`Your Answer is wrong!: ${chalk.bold.red(Getting.answer)}`);
        }


        js_ts_Data_Base.push({
            Question: oneObject.question,
            YourAns: Getting.answer,
            CorrectAnswer: oneObject.correctAnswer,
            Result: Getting.answer === oneObject.correctAnswer ? 'Correct' : 'Wrong'
        });

        let correctAnswers = js_ts_Data_Base.filter((item) => item.Result === 'Correct').length;
        let wrongAnswers = js_ts_Data_Base.filter((item) => item.Result === 'Wrong').length;

        console.log('\n');
        console.log('Total Questions:', chalk.white(js_ts_Data_Base.length));
        console.log(chalk.green.italic('Correct Answers:', correctAnswers));
        console.log(chalk.red.italic('Wrong Answers:', wrongAnswers));
    }

    showResults4();

    // ye reset kar dega last value mein jitne bhi question save honge unko jab sary question complete ho jaenge
    Last_value_js = 0;
}


async function showResults4() {

    let table = new Table({
        head: [
            chalk.white.bold('Question'),
            chalk.white.bold('Your Answer'),
            chalk.white.bold('Result')
        ],

        colWidths: [70, 30, 10]
    });

    js_ts_Data_Base.forEach((item) => {
        table.push([
            item.Question,
            item.YourAns,
            item.Result === 'Correct' ? chalk.green.bold(item.Result) : chalk.red.bold(item.Result)
        ]);
    });

    console.log(table.toString());


// table show krwany ke bad kya karna hai
    let what = await inquirer.prompt([
        {
            name: 'toDo',
            message: 'What do you want to do?',
            type: 'list',
            choices: ['Continue', 'Exit']
        }
    ]);

    if (what.toDo === 'Continue') {
        await Js_Ts();
    } 
    else {
        await main();
    }
}


// <------------------------------------------------END---------------------------------------->
// Asynchronous function quix ka function

async function Asynchronous(){

    console.log('\n');
    console.log(chalk.bgGrey.bold.italic('\t Welcome to Asynchronous Test Quiz'));
    console.log('\n');

    for (let i = Last_value_A; i < Asynchronous_questions.length; i++) {
        let oneObject = Asynchronous_questions[i];

        let Getting = await inquirer.prompt([
            {
                name: 'answer',
                message: oneObject.question,
                type: 'list',
                choices: [...oneObject.choices, '\n Check Results', 'Exit']
            }
        ]);


        if (Getting.answer === oneObject.correctAnswer) {
            console.log(`You choose a correct Answer:  ${chalk.bold.green(Getting.answer)}`);
        } 
        else if (Getting.answer === '\n Check Results') {
            Last_value_A = i; 
            await showResults5();
            return;
        } 
        else if (Getting.answer === 'Exit') {
            Last_value_A = i;
            await main();
            return;
        } 
        else {
            console.log(`Your Answer is wrong!: ${chalk.bold.red(Getting.answer)}`);
        }


        // Store user's answer in the array
        Asyn_Data_Base.push({
            Question: oneObject.question,
            YourAns: Getting.answer,
            CorrectAnswer: oneObject.correctAnswer,
            Result: Getting.answer === oneObject.correctAnswer ? 'Correct' : 'Wrong'
        });

        // Show the result summary
        let correctAnswers = Asyn_Data_Base.filter((item) => item.Result === 'Correct').length;
        let wrongAnswers = Asyn_Data_Base.filter((item) => item.Result === 'Wrong').length;

        console.log('\n');
        console.log('Total Questions:', chalk.white(Asyn_Data_Base.length));
        console.log(chalk.green.italic('Correct Answers:', correctAnswers));
        console.log(chalk.red.italic('Wrong Answers:', wrongAnswers));
    }

    showResults5();

    // ye reset kar dega last value mein jitne bhi question save honge unko jab sary question complete ho jaenge
    Last_value_A = 0;
}


async function showResults5() {

    let table = new Table({
        head: [
            chalk.white.bold('Question'),
            chalk.white.bold('Your Answer'),
            chalk.white.bold('Result')
        ],

        colWidths: [70, 30, 10]
    });

    Asyn_Data_Base.forEach((item) => {
        table.push([
            item.Question,
            item.YourAns,
            item.Result === 'Correct' ? chalk.green.bold(item.Result) : chalk.red.bold(item.Result)
        ]);
    });

    console.log(table.toString());


// table show krwany ke bad kya karna hai
    let what = await inquirer.prompt([
        {
            name: 'toDo',
            message: 'What do you want to do?',
            type: 'list',
            choices: ['Continue', 'Exit']
        }
    ]);

    if (what.toDo === 'Continue') {
        await Asynchronous();
    } 
    else {
        await main();
    }
}


// <------------------------------------------------END---------------------------------------->
// Synchronous function quix ka function

async function Synchronous(){

    
    console.log('\n');
    console.log(chalk.bgGrey.bold.italic('\t Welcome to Synchronous Test Quiz'));
    console.log('\n');

    for (let i = Last_value_S; i < Synchronous_question.length; i++) {
        let oneObject = Synchronous_question[i];

        let Getting = await inquirer.prompt([
            {
                name: 'answer',
                message: oneObject.question,
                type: 'list',
                choices: [...oneObject.choices, '\n Check Results', 'Exit']
            }
        ]);


        if (Getting.answer === oneObject.correctAnswer) {
            console.log(`You choose a correct Answer:  ${chalk.bold.green(Getting.answer)}`);
        } 
        else if (Getting.answer === '\n Check Results') {
            Last_value_S = i; 
            await showResults6();
            return;
        } 
        else if (Getting.answer === 'Exit') {
            Last_value_S
            await main();
            return;
        } 
        else {
            console.log(`Your Answer is wrong!: ${chalk.bold.red(Getting.answer)}`);
        }


        Syn_Data_Base.push({
            Question: oneObject.question,
            YourAns: Getting.answer,
            CorrectAnswer: oneObject.correctAnswer,
            Result: Getting.answer === oneObject.correctAnswer ? 'Correct' : 'Wrong'
        });


        let correctAnswers = Syn_Data_Base.filter((item) => item.Result === 'Correct').length;
        let wrongAnswers = Syn_Data_Base.filter((item) => item.Result === 'Wrong').length;


        console.log('\n');
        console.log('Total Questions:', chalk.white(Syn_Data_Base.length));
        console.log(chalk.green.italic('Correct Answers:', correctAnswers));
        console.log(chalk.red.italic('Wrong Answers:', wrongAnswers));
    }

    showResults6();

    // ye reset kar dega last value mein jitne bhi question save honge unko jab sary question complete ho jaenge
    Last_value_S = 0;
}


async function showResults6() {

    let table = new Table({
        head: [
            chalk.white.bold('Question'),
            chalk.white.bold('Your Answer'),
            chalk.white.bold('Result')
        ],

        colWidths: [70, 30, 10]
    });

    Syn_Data_Base.forEach((item) => {
        table.push([
            item.Question,
            item.YourAns,
            item.Result === 'Correct' ? chalk.green.bold(item.Result) : chalk.red.bold(item.Result)
        ]);
    });

    console.log(table.toString());


// table show krwany ke bad kya karna hai
    let what = await inquirer.prompt([
        {
            name: 'toDo',
            message: 'What do you want to do?',
            type: 'list',
            choices: ['Continue', 'Exit']
        }
    ]);

    if (what.toDo === 'Continue') {
        await Synchronous();
    } 
    else {
        await main();
    }
}



// <------------------------------------------------END---------------------------------------->
// Array quiz

async function Arrays(){

    
    console.log('\n');
    console.log(chalk.bgGrey.bold.italic('\t Welcome to Arrays Test Quiz'));
    console.log('\n');

    for (let i = Last_value_Ar; i < Array_questions.length; i++) {
        let oneObject = Array_questions[i];

        let Getting = await inquirer.prompt([
            {
                name: 'answer',
                message: oneObject.question,
                type: 'list',
                choices: [...oneObject.choices, '\n Check Results', 'Exit']
            }
        ]);


        if (Getting.answer === oneObject.correctAnswer) {
            console.log(`You choose a correct Answer:  ${chalk.bold.green(Getting.answer)}`);
        } 
        else if (Getting.answer === '\n Check Results') {
            Last_value_Ar = i; 
            await showResults7();
            return;
        } 
        else if (Getting.answer === 'Exit') {
            Last_value_Ar = i; 
            await main();
            return;
        } 
        else {
            console.log(`Your Answer is wrong!: ${chalk.bold.red(Getting.answer)}`);
        }


        Array_Data_Base.push({
            Question: oneObject.question,
            YourAns: Getting.answer,
            CorrectAnswer: oneObject.correctAnswer,
            Result: Getting.answer === oneObject.correctAnswer ? 'Correct' : 'Wrong'
        });

        let correctAnswers = Array_Data_Base.filter((item) => item.Result === 'Correct').length;
        let wrongAnswers = Array_Data_Base.filter((item) => item.Result === 'Wrong').length;

        console.log('\n');
        console.log('Total Questions:', chalk.white(Array_Data_Base.length));
        console.log(chalk.green.italic('Correct Answers:', correctAnswers));
        console.log(chalk.red.italic('Wrong Answers:', wrongAnswers));
    }

    showResults7();

    // ye reset kar dega last value mein jitne bhi question save honge unko jab sary question complete ho jaenge
    Last_value_Ar = 0;
}


async function showResults7() {

    let table = new Table({
        head: [
            chalk.white.bold('Question'),
            chalk.white.bold('Your Answer'),
            chalk.white.bold('Result')
        ],

        colWidths: [70, 30, 10]
    });

    Array_Data_Base.forEach((item) => {
        table.push([
            item.Question,
            item.YourAns,
            item.Result === 'Correct' ? chalk.green.bold(item.Result) : chalk.red.bold(item.Result)
        ]);
    });

    console.log(table.toString());


// table show krwany ke bad kya karna hai
    let what = await inquirer.prompt([
        {
            name: 'toDo',
            message: 'What do you want to do?',
            type: 'list',
            choices: ['Continue', 'Exit']
        }
    ]);

    if (what.toDo === 'Continue') {
        await Arrays();
    } 
    else {
        await main();
    }
}



// is function main ham all data arrays ko apas mein jor kar result nikal rhy hain....
async function All_Data() {
    
    let Mixing_Data = [

        ...Veriable_Data_Base,
        ...Modules_Data_Base,
        ...Loops_Data_Base,
        ...js_ts_Data_Base,
        ...Asyn_Data_Base,
        ...Syn_Data_Base,
        ...Array_Data_Base

    ];
    

    // yahn par ham total array numbers or correct answers nikal rhy hain or sath percentage bhi....

    let correct_Answers = Mixing_Data.filter(item => item.Result === 'Correct').length;
    let total_Questions = Mixing_Data.length;
    let percentage = (correct_Answers / total_Questions) * 100;
    

    let Grade = "";

    if (percentage >= 90) {
        Grade = '1st Grade';
    } 
    else if (percentage >= 80) {
        Grade = '2nd Grade';
    } 
    else if (percentage >= 70) {
        Grade = '3rd Grade';
    }
     else if (percentage >= 60) {
        Grade = '4th Grade';
    }
     else {
        Grade = '5th Grade';
    }

    
    // Table Create kar rhy hain
    let table = new Table({

        head: [
              chalk.bold.white('Total Questions'), 
              chalk.bold.red('Attempted Questions'), 
              chalk.bold.green('Percentage'),
              chalk.bold.yellow('Result')
              ],

        colWidths: [20, 25, 15, 20]
    });

    // Add data to the table
    table.push(
        [total_Questions, correct_Answers, `${percentage.toFixed(2)}%`, Grade]
    );

    // Display the table
    console.log(table.toString());
}


// main function calling
main();
