var logger = (function() {

    function log(x, override) {
        var msg = _createMessage(x);

        _logToDOM(msg, override);
        _logToConsole(msg);
    }

    function _createMessage(x) {
        var msg = x && typeof x === 'object'
            ? JSON.stringify(x, null, 2)
            : x;
    
        if (String(msg).startsWith('----')) {
            msg = '\n' + msg;
        }

        return msg;
    }

    function _logToDOM(x, override) {
        if (override) {
            document.getElementById('root').innerHTML = x;
        } else {
            document.getElementById('root').innerHTML += '\n' + x;
        }
    }

    function _logToConsole(x) {
        console.log(x);
    }

    return {
        log: log
    };
})();
