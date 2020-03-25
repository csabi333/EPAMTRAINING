var CommentService = (function(http) {

    fetchComments = function(postId, top, skip) {
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
