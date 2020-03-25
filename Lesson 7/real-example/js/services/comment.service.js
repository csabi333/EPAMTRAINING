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

/*
class CommentService{
fetchComments (postId,top,skip){
return http.get(`https://jsonplaceholder.typicode.com/comments?${http.getQueryString(postId+"40")}`);
};
}
*/

