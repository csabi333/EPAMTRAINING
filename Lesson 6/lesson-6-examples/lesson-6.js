//async/non-blocking-code

console.log("Before setTimeout");

setTimeout(
    function () {
        console.log("Inside setTimeout");
    },
    1000 // one sec
);

console.log("After setTimeout");

// ------------------------------------------


// sync/blocking-code

function waitSec(num) {
    const second = num * 1000;
    const start = new Date().getTime();
    while (new Date().getTime() - start < second )
        ;
}

console.log('Before wait');
waitSec(3);
console.log(`After wait`);

// -------------------------------------------


// fake sync request

function getSynchronously() {
    waitSec(5);
    return response;
}

// --------------------------------------------

// prmoise example

var happyCase,
    sadCase;

var promise = new Promise(function(resolve, reject){
    happyCase = resolve;
    sadCase = reject;
});

promise.then(function (resolvedValue) {
    console.log(resolvedValue);
});

promise.catch(function (error) {
    console.error(error);
});

// --------------------------------------------


function myFetch(url, options, onSucces) {
    var request = new XMLHttpRequest();

    request.onload = function() {
        onSucces(this.responseText);
    }

    request.open(options.method || 'GET', url, true);

    request.send();
}

myFetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'GET'
}, function (responseText) {
    console.log(JSON.parse(responseText));
});

myFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {
        method: 'GET'
    },
    function (responseText) {
        // console.log(JSON.parse(responseText));
        responseText = JSON.parse(responseText);
        var ul = document.querySelector('ul');
        responseText.forEach(function(todo) {
            var li = document.createElement('li');
            li.innerHTML = '<div>' + todo.title + '</div>';

            ul.appendChild(li);
        });
    }
);