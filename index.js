function receivesAfunction(callback) {
    callback(); //Call the provided callback function
}

function returnsanamedFunction() {
    return function namedFunction() {
        //function body
    };
}

function returnsAnAnonymousFunction() {
    return () => {
        //function body
    };
}