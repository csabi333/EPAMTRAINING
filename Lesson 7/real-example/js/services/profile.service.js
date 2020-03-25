var ProfileService = (function(http) {

    fetchProfile = function() {
        return http.get('https://jsonplaceholder.typicode.com/users/1').then(function(profile) {
            return _createProfileFromResponse(profile);
        });
    }

    _createProfileFromResponse = function(response) {
        return {
            id: response.id,
            name: response.name,
            email: response.email
        };
    }

    return {
        fetchProfile: fetchProfile
    };

})(http);
