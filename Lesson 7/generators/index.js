var _awaiter = function(generator) {
    return new Promise(function(resolve, reject) {
        var step = function(result) {
            if (result.done) {
                return resolve(result.value);
            } else {
                return new Promise(function(resolve) {
                    resolve(result.value);
                })
                .then(function(value) {
                    try { step(generator.next(value)) } catch (e) { reject(e); }
                })
                .catch(function(value) {
                    try { step(generator.throw(value)); } catch (e) { reject(e); }
                });
            }
        }
        step(generator.next());
    });
}

function generator() {
    var response = yield fetch('https://jsonplaceholder.typicode.com/users/1');
    var json = yield response.json();
    console.log(json);
}

_awaiter(generator());
