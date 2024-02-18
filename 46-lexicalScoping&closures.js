// 1. LEXICAL SCOPING
// JavaScript uses lexical scoping, meaning that the inner function has access to variables in its outer scope.

function outer(){
    let username = "Kajal";
    function inner(){
        console.log("Inner: ", username);
    }
    inner();
}

outer();


// 2. CLOSURES
// Closures are closely related to lexical scoping.
// A closure is formed when an inner function accesses variables from its outer scope, even after the outer function has finished executing. 

function outerFunction() {
    const outerVariable = 'I am from the outer scope';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const closureExample = outerFunction();
closureExample(); 

// In this example, outerFunction returns innerFunction, creating a closure. 
// Even after outerFunction has finished executing, closureExample still has access to outerVariable. This demonstrates how closures retain access to variables from their lexical scope, even when invoked outside of that scope.
