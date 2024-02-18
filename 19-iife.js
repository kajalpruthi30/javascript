// Immediately Invoked Function Expressions (IIFE)

// Purpose of IIFE Function
// 1. Immediate Execution
// 2. Encapsulation
// 3. Avoiding Global Pollution
// 4. Isolation

(function iifeSyntax(){
    console.log("IIFE")
})();

( () => {
    console.log("Function")
})();