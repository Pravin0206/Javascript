// () => First paranthesis is used for function declaration
// () => Second paramthesis is used for function execution

(function chai(){
    console.log(`DB Connected`);
})();
// Semicolon is important to terminate first iife function

// Arrow function
(() => {
    console.log(`DB Connected TWo`);
})();

// Passing parameters in iife function
( (name) => {
    console.log(`DB Connected ${name}`);
})('hitesh')