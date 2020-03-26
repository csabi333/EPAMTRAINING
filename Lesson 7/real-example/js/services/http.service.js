class Http{
    
    constructor(fetch){
        this._fetch=fetch;
    }
    
    get(url,headers){
        
        var that = this;
        
        var config ={
            method:'GET',
            headers:headers || {}
        }
        console.log('GET',url)
    
        return fetch(url,config)
            .then(function(response){
                  if(!response.ok){
                    return Promise.reject({
                        status: response.status,
                        message:response.statusText
                            })
                    }
                    return response.json();
                  })
            .then(function(response){
                    return that._delay(response);
            })
    }
    
    _delay(response){
        return new Promise(function(resolve){
            setTimeout(resolve.bind(null, response), parseInt(Math.random() * 2000 +500));
        });}

    getQueryString(params){
        return Object.keys(params)
        .filter(function(key){return !!params[key]})
        .map(function(key){return `${key}=${params[key]}` }).join('&');
    }
    
    notImplemented(url,handlers){
        return Promise.reject('Not implemented');
    }
    
    post(){
        return this.notImplemented();
    }
    
    delete(){
        return this.notImplemented();
    }
}

const http = new Http(window.fetch);

/*
var http = (function(fetch) {

    var get = function(url, headers) {
        var config = {
            method: 'GET',
            headers: headers || {}
        };

        console.log('GET', url);

        return fetch(url, config)
            .then(function(response) {
                if (!response.ok) {
                    return Promise.reject({
                        status: response.status,
                        message: response.statusText
                    });
                }

                return response.json();
            })
            .then(function(response) {
                return _delay(response);
            });
    }

    var _delay = function(response) {
        return new Promise(function(resolve) {
            setTimeout(resolve.bind(null, response), parseInt(Math.random() * 2000 + 500));
        });
    }

    var getQueryString = function(params) {
        return Object.keys(params)
            .filter(function(key) { return !!params[key] })
            .map(function(key) { return `${key}=${params[key]}` }).join('&');
    }

    var notImplemented = function(url, headers) {
        return Promise.reject('Not implemented');
    }

    return {
        get: get,
        post: notImplemented,
        delete: notImplemented,
        getQueryString: getQueryString
    };

})(window.fetch);
*/