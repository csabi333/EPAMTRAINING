class commentService{
    
    constructor(http){
        this._http=http;
    }
    
    fetchComments(postId, top, skip){
        
        var params ={
            postId:postId,
            _limit:top || 4,
            _start: skip || 0
        }
        
        return this._http.get(`https://jsonplaceholder.typicode.com/comments?${http.getQueryString(params)}`);
    }
}

const CommentService = new commentService(http);

/*
var CommentService = (function(http) {

     function fetchComments (postId, top, skip) {
        var params = {
            postId: postId,
            _limit: top || 4,
            _start: skip || 0
        };

        return http.get(`https://jsonplaceholder.typicode.com/comments?${http.getQueryString(params)}`);
    }

    return {
        fetchComments: fetchComments
    };

})(http);
*/