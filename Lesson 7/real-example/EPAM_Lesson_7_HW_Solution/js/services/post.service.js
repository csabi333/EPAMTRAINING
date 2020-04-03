class postService{
    
    constructor(http){
        this._http=http;
    }
    
    fetchPosts(userId, top, skip){
        
        var params ={
            userId:userId,
            _limit:top || 3,
            _start:skip || 0
        }
        
        return this._http.get(`https://jsonplaceholder.typicode.com/posts?${http.getQueryString(params)}`);
    }
}

const PostService = new postService(http);

/*
var PostService = (function(http) {

    fetchPosts = function(userId, top, skip) {
        var params = {
            userId: userId,
            _limit: top || 3,
            _start: skip || 0
        };

        return http.get(`https://jsonplaceholder.typicode.com/posts?${http.getQueryString(params)}`);
    }

    return {
        fetchPosts: fetchPosts
    };

})(http);*/