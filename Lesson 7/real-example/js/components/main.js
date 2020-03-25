var main = (function(profileService, postService, commentService) {

    var template = `<main>
        <h1>My posts</h1>
        <div id="main">Loading...</div>
    </main>`;

    var init = function() {
        return fetchPosts();
    }

    var fetchPosts = function(top, skip) {
        return ProfileService.fetchProfile()
            .then(function(profile) {
                return profile.id;
            })
            .then(function(id) {
                return postService.fetchPosts(id, top, skip);
            })
            .then(function(posts) {
                _renderPosts(posts);
                return posts;
            })
            .then(function(posts) {

                var comments = posts.map(function(post) {
                    return commentService.fetchComments(post.id).then(function(comments) {
                        _renderComments(comments);
                    });
                });

                return Promise.all(comments);
            });
    }

    var _renderPosts = function(posts) {
        var main = document.getElementById('main');
        var postElements = posts
            .map(function(post) {
                return `<div class="post post-${post.id}">
                    <div class="title">${post.title}</div>
                    <div class="body">${post.body}</div>
                    <div class="comments">Loading...</div>
                </div>`;
            })
            .join('');

        if (main.innerHTML && main.innerHTML !== 'Loading...') {
            main.innerHTML += postElements;
        } else {
            main.innerHTML = postElements;
        }
        
    }

    var _renderComments = function(comments) {
        if (!comments || !comments[0]) {
            return;
        }

        var id = comments[0].postId;
        var commentSection = document.querySelector(`.post-${id} .comments`);
        var commentElements = comments
            .map(function(comment) {
                return `<div class="comment">
                    <div class="name">${comment.name} <span class="email">${comment.email}</span></div>
                    <div class="comment-body">${comment.body}</div>
                </div>`
            })
            .join('');

        if (commentSection.innerHTML && commentSection.innerHTML !== 'Loading...') {
            commentSection.innerHTML += commentElements;
        } else {
            commentSection.innerHTML = commentElements;
        }
    }

    return {
        init: init,
        template: template,
        fetchPosts: fetchPosts
    };

})(ProfileService, PostService, CommentService);
