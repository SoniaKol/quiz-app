/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  indexes: [],
  // the questions in the quiz
  questions: [
    {
      text:
        'Which of the following data types is not a primitive type in JavaScript?',
      answers: {
        a: 'String',
        b: 'Number',
        c: 'Object',
        d: 'Boolean',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text:
        'Which of the following methods is used to convert a JSON object to a string in JavaScript?',
      answers: {
        a: 'JSON.parse()',
        b: 'JSON.stringify()',
        c: 'JSON.toString()',
        d: 'JSON.convert()',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text:
        'Which of the following statements about the scope of var, let, and const in JavaScript is true?',
      answers: {
        a: 'var is function-scoped, while let and const are block-scoped',
        b: 'var and let are both block-scoped, while const is function-scoped',
        c: 'let and const are function-scoped, while var is block-scoped',
        d: 'var, let, and const are all block-scoped',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text:
        'Which method is used to round a number to the nearest integer in JavaScript?',
      answers: {
        a: 'Math.round()',
        b: 'Math.floor()',
        c: 'Math.ceil()',
        d: 'Math.random()',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text: 'In JavaScript, what does the === operator compare?',
      answers: {
        a: 'Values only',
        b: 'Values and types',
        c: 'References only',
        d: 'Memory addresses',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text:
        'Which method is used to remove whitespace from both ends of a string in JavaScript?',
      answers: {
        a: 'trim()',
        b: 'strip()',
        c: 'cut()',
        d: 'slice()',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text:
        'Which of the following is used to handle exceptions in JavaScript?',
      answers: {
        a: 'catch',
        b: 'error',
        c: 'exception',
        d: 'try-catch',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text:
        'Which of the following methods adds a new element to the end of an array?',
      answers: {
        a: 'push()',
        b: 'pop()',
        c: 'shift()',
        d: 'unshift()',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text:
        'Which of the following functions is used to call a function after a specified delay in JavaScript?',
      answers: {
        a: 'setInterval()',
        b: 'setTimeout()',
        c: 'delay()',
        d: 'wait()',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text:
        'Which of the following is the correct way to check if a variable x is an array in JavaScript?',
      answers: {
        a: 'x.isArray()',
        b: 'Array.isArray(x)',
        c: 'x.type() === "array"',
        d: ' typeof x === "array"',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text:
        "What is the correct syntax for referring to an external script called 'app.js'?",
      answers: {
        a: "<script href='app.js'></script>",
        b: "<script src='app.js'></script>",
        c: "<script ref='app.js'></script>",
        d: "<script name='app.js'></script>",
      },
      correct: 'b',
    },
    {
      text:
        'Which of the following is a correct way to declare a JavaScript variable?',
      answers: {
        a: 'let varName;',
        b: 'var varName;',
        c: 'const varName;',
        d: 'All of the above',
      },
      correct: 'd',
    },
    {
      text: 'How do you create a function in JavaScript?',
      answers: {
        a: 'function:myFunction()',
        b: 'function = myFunction()',
        c: 'function myFunction()',
        d: 'def myFunction()',
      },
      correct: 'c',
    },
    {
      text:
        'Which of the following is the correct way to write a comment in JavaScript?',
      answers: {
        a: '// This is a comment',
        b: "' This is a comment",
        c: '<!-- This is a comment -->',
        d: '# This is a comment',
      },
      correct: 'a',
    },
    {
      text: 'How can you add a single-line comment in JavaScript?',
      answers: {
        a: "' This is a comment",
        b: '// This is a comment',
        c: '/* This is a comment */',
        d: '# This is a comment',
      },
      correct: 'b',
    },
    {
      text: "What does the '===' operator do in JavaScript?",
      answers: {
        a: 'Compares values only',
        b: 'Compares both value and type',
        c: 'Assigns a value',
        d: 'Checks if a value is undefined',
      },
      correct: 'b',
    },
    {
      text: "What will be the output of '2' + 3 in JavaScript?",
      answers: {
        a: '5',
        b: '23',
        c: 'undefined',
        d: 'NaN',
      },
      correct: 'b',
    },
    {
      text:
        'Which method can be used to round a number to the nearest integer in JavaScript?',
      answers: {
        a: 'Math.floor()',
        b: 'Math.ceil()',
        c: 'Math.round()',
        d: 'Math.trunc()',
      },
      correct: 'c',
    },
    {
      text: 'How can you detect the client’s browser name in JavaScript?',
      answers: {
        a: 'navigator.browserName',
        b: 'navigator.appName',
        c: 'window.browserName',
        d: 'window.appName',
      },
      correct: 'b',
    },
    {
      text: "What is the result of 'typeof null' in JavaScript?",
      answers: {
        a: "'object'",
        b: "'null'",
        c: "'undefined'",
        d: "'number'",
      },
      correct: 'a',
    },
    {
      text:
        'Which built-in method can be used to convert an object into a JSON string?',
      answers: {
        a: 'JSON.stringify()',
        b: 'JSON.parse()',
        c: 'Object.toJSON()',
        d: 'Object.stringify()',
      },
      correct: 'a',
    },
    {
      text: "What is the purpose of the 'this' keyword in JavaScript?",
      answers: {
        a: 'It refers to the global object',
        b: 'It refers to the current object',
        c: 'It refers to the parent object',
        d: "It refers to the function's arguments",
      },
      correct: 'b',
    },
    {
      text: 'Which of the following is not a valid JavaScript data type?',
      answers: {
        a: 'undefined',
        b: 'boolean',
        c: 'float',
        d: 'string',
      },
      correct: 'c',
    },
    {
      text: "What does the 'Array.prototype.map()' method do?",
      answers: {
        a: 'It maps an array to an object',
        b: 'It iterates over each element in an array and creates a new array',
        c: 'It filters elements of an array',
        d: 'It sorts the array elements',
      },
      correct: 'b',
    },
    {
      text:
        'Which of the following is used to check if a variable has been declared?',
      answers: {
        a: 'typeof',
        b: 'instanceof',
        c: 'isNaN',
        d: 'hasOwnProperty',
      },
      correct: 'a',
    },
    {
      text: "What will 'console.log(0.1 + 0.2 === 0.3)' output?",
      answers: {
        a: 'true',
        b: 'false',
        c: 'undefined',
        d: 'NaN',
      },
      correct: 'b',
    },
    {
      text:
        'Which keyword is used to prevent an object’s properties from being modified?',
      answers: {
        a: 'Object.preventExtensions()',
        b: 'Object.freeze()',
        c: 'Object.seal()',
        d: 'Object.protect()',
      },
      correct: 'b',
    },
    {
      text: 'How do you remove the first element from an array in JavaScript?',
      answers: {
        a: 'array.pop()',
        b: 'array.shift()',
        c: 'array.unshift()',
        d: 'array.splice(0, 1)',
      },
      correct: 'b',
    },
    {
      text:
        'Which of the following methods adds one or more elements to the end of an array?',
      answers: {
        a: 'push()',
        b: 'pop()',
        c: 'shift()',
        d: 'concat()',
      },
      correct: 'a',
    },
    {
      text: "What does the 'typeof NaN' expression return?",
      answers: {
        a: "'undefined'",
        b: "'number'",
        c: "'NaN'",
        d: "'object'",
      },
      correct: 'b',
    },
    {
      text: "What is the result of 'null == undefined' in JavaScript?",
      answers: {
        a: 'true',
        b: 'false',
        c: 'undefined',
        d: 'null',
      },
      correct: 'a',
    },
    {
      text: 'Which of the following is a JavaScript framework?',
      answers: {
        a: 'React',
        b: 'Django',
        c: 'Flask',
        d: 'Laravel',
      },
      correct: 'a',
    },
    {
      text: 'How can you create an array in JavaScript?',
      answers: {
        a: 'var arr = ();',
        b: 'var arr = [];',
        c: 'var arr = {};',
        d: 'var arr = <>;',
      },
      correct: 'b',
    },
    {
      text: 'Which method is used to find the index of an element in an array?',
      answers: {
        a: 'indexOf()',
        b: 'findIndex()',
        c: 'search()',
        d: 'find()',
      },
      correct: 'a',
    },
    {
      text: "What will be the output of 'console.log(typeof NaN)'?",
      answers: {
        a: "'NaN'",
        b: "'undefined'",
        c: "'number'",
        d: "'object'",
      },
      correct: 'c',
    },
    {
      text:
        'How do you declare a JavaScript variable that cannot be reassigned?',
      answers: {
        a: 'var',
        b: 'let',
        c: 'const',
        d: 'static',
      },
      correct: 'c',
    },
    {
      text:
        'Which of the following methods is used to merge two or more arrays?',
      answers: {
        a: 'concat()',
        b: 'push()',
        c: 'merge()',
        d: 'splice()',
      },
      correct: 'a',
    },
    {
      text: 'How can you check if a variable is an array?',
      answers: {
        a: 'Array.isArray(var)',
        b: "typeof var === 'array'",
        c: 'var.isArray()',
        d: 'var instanceof Array',
      },
      correct: 'a',
    },
    {
      text: "What does 'JSON.parse()' do?",
      answers: {
        a: 'Converts a JSON string into a JavaScript object',
        b: 'Converts a JavaScript object into a JSON string',
        c: 'Parses a JSON file from the server',
        d: 'None of the above',
      },
      correct: 'a',
    },
    {
      text: "What will 'console.log(1 + '2' + 3)' output?",
      answers: {
        a: "'123'",
        b: '6',
        c: "'15'",
        d: "'33'",
      },
      correct: 'a',
    },
    {
      text: 'Which of the following is used to create an object in JavaScript?',
      answers: {
        a: 'new Object()',
        b: 'new object()',
        c: 'Object.create()',
        d: 'Both a and c',
      },
      correct: 'd',
    },
    {
      text: 'How do you convert a string to a number in JavaScript?',
      answers: {
        a: 'Number(str)',
        b: 'parseInt(str)',
        c: 'parseFloat(str)',
        d: 'All of the above',
      },
      correct: 'd',
    },
    {
      text: 'Which event occurs when the user clicks on an HTML element?',
      answers: {
        a: 'onchange',
        b: 'onclick',
        c: 'onmouseclick',
        d: 'onmouseover',
      },
      correct: 'b',
    },
    {
      text: "What does 'use strict' do in JavaScript?",
      answers: {
        a: 'Enforces stricter parsing and error handling in code',
        b: 'Prevents the use of undeclared variables',
        c: 'Changes previously accepted bad syntax into real errors',
        d: 'All of the above',
      },
      correct: 'd',
    },
    {
      text: 'Which of the following is a way to declare a class in JavaScript?',
      answers: {
        a: 'class MyClass {}',
        b: 'function MyClass() {}',
        c: 'Both a and b',
        d: 'None of the above',
      },
      correct: 'c',
    },
    {
      text: "What is the output of 'console.log([] + [])'?",
      answers: {
        a: "'' (empty string)",
        b: '[]',
        c: "'undefined'",
        d: "'[object Object]'",
      },
      correct: 'a',
    },
    {
      text: 'How can you copy an object in JavaScript?',
      answers: {
        a: 'Object.assign({}, obj)',
        b: 'obj.copy()',
        c: 'copy(obj)',
        d: 'clone(obj)',
      },
      correct: 'a',
    },
    {
      text: 'Which of the following is true about JavaScript closures?',
      answers: {
        a: 'They allow functions to access variables from an enclosing scope',
        b: 'They are created every time a function is created',
        c: 'They provide data encapsulation',
        d: 'All of the above',
      },
      correct: 'd',
    },
    {
      text: "What is the purpose of the 'return' statement in JavaScript?",
      answers: {
        a: 'To stop the execution of a function and return a value',
        b: 'To exit a loop',
        c: 'To call a function recursively',
        d: 'To create a new variable',
      },
      correct: 'a',
    },
    {
      text:
        'Which of the following methods is used to add elements to the beginning of an array?',
      answers: {
        a: 'push()',
        b: 'pop()',
        c: 'shift()',
        d: 'unshift()',
      },
      correct: 'd',
    },
    {
      text:
        "Which of the following is true about JavaScript's 'const' keyword?",
      answers: {
        a: 'It allows reassignment of the variable',
        b:
          'It prevents reassignment but allows mutation of the object it refers to',
        c: 'It makes the variable read-only',
        d: 'It creates an immutable variable',
      },
      correct: 'b',
    },
    {
      text:
        "What will be the output of 'console.log(typeof NaN === typeof Infinity)'?",
      answers: {
        a: 'true',
        b: 'false',
        c: 'undefined',
        d: 'NaN',
      },
      correct: 'a',
    },
    {
      text: 'How do you declare an asynchronous function in JavaScript?',
      answers: {
        a: 'async function myFunction() {}',
        b: 'function async myFunction() {}',
        c: 'async: function myFunction() {}',
        d: 'function myFunction() async {}',
      },
      correct: 'a',
    },
    {
      text:
        'Which of the following methods returns a promise that resolves when all of the promises in an iterable have resolved?',
      answers: {
        a: 'Promise.all()',
        b: 'Promise.any()',
        c: 'Promise.resolve()',
        d: 'Promise.race()',
      },
      correct: 'a',
    },
    {
      text: "What is the value of 'this' in the global scope in JavaScript?",
      answers: {
        a: 'The global object (window in browsers)',
        b: 'undefined',
        c: 'null',
        d: 'The current function',
      },
      correct: 'a',
    },
    {
      text: 'How do you define a default parameter in a JavaScript function?',
      answers: {
        a: "function myFunction(param = 'default') {}",
        b: 'function myFunction(default param) {}',
        c: "function myFunction(param: 'default') {}",
        d: 'function myFunction(param?) {}',
      },
      correct: 'a',
    },
    {
      text:
        'Which array method creates a new array with all elements that pass a test?',
      answers: {
        a: 'filter()',
        b: 'map()',
        c: 'reduce()',
        d: 'forEach()',
      },
      correct: 'a',
    },
    {
      text: "What does the 'await' keyword do in JavaScript?",
      answers: {
        a: 'Pauses the execution of the function until the promise is resolved',
        b: 'Waits for a specific time before continuing',
        c: 'Converts a promise into a synchronous function',
        d: 'None of the above',
      },
      correct: 'a',
    },
    {
      text: 'Which of the following is a JavaScript module syntax?',
      answers: {
        a: "import { myFunction } from './myModule.js';",
        b: "include 'myModule.js';",
        c: "require('myModule.js');",
        d: "loadModule('myModule.js');",
      },
      correct: 'a',
    },
    {
      text: "What is the output of 'console.log([] == false)'?",
      answers: {
        a: 'true',
        b: 'false',
        c: 'undefined',
        d: 'NaN',
      },
      correct: 'a',
    },
    {
      text: "What will 'console.log(!![]);' output?",
      answers: {
        a: 'true',
        b: 'false',
        c: 'undefined',
        d: 'null',
      },
      correct: 'a',
    },
    {
      text:
        'Which of the following statements is true about JavaScript closures?',
      answers: {
        a: 'They only work with global variables',
        b: 'They can capture variables from their surrounding scope',
        c: "They are only created when using 'this' keyword",
        d: 'They cannot be used inside loops',
      },
      correct: 'b',
    },
    {
      text: "What is the difference between '==' and '===' in JavaScript?",
      answers: {
        a:
          "'==' checks value equality, '===' checks both value and type equality",
        b: "'==' checks reference equality, '===' checks value equality",
        c: "'==' checks type equality, '===' checks reference equality",
        d: 'There is no difference',
      },
      correct: 'a',
    },
    {
      text: "What will be the output of 'console.log(2 ** 3);'?",
      answers: {
        a: '8',
        b: '6',
        c: '9',
        d: '16',
      },
      correct: 'a',
    },
    {
      text: 'How can you add a property to an object in JavaScript?',
      answers: {
        a: "object.newProp = 'value';",
        b: "object['newProp'] = 'value';",
        c: "Object.defineProperty(object, 'newProp', { value: 'value' });",
        d: 'All of the above',
      },
      correct: 'd',
    },
    {
      text:
        'Which of the following methods can be used to stop an interval timer in JavaScript?',
      answers: {
        a: 'clearInterval()',
        b: 'clearTimeout()',
        c: 'stopInterval()',
        d: 'resetTimer()',
      },
      correct: 'a',
    },
    {
      text: "What is the output of 'console.log([] + {})'?",
      answers: {
        a: "'[object Object]'",
        b: "'[object Object][object Object]'",
        c: "'{}'",
        d: "'[]'",
      },
      correct: 'a',
    },
    {
      text: 'Which of the following is not a reserved keyword in JavaScript?',
      answers: {
        a: 'interface',
        b: 'package',
        c: 'throws',
        d: 'module',
      },
      correct: 'd',
    },
    {
      text: "What will 'console.log(0 || 1);' output?",
      answers: {
        a: '1',
        b: '0',
        c: 'true',
        d: 'false',
      },
      correct: 'a',
    },
    {
      text:
        'Which JavaScript method can be used to select HTML elements by their class name?',
      answers: {
        a: 'getElementsByClassName()',
        b: 'getElementsByTagName()',
        c: 'querySelectorAll()',
        d: 'getElementById()',
      },
      correct: 'a',
    },
  ],
};
