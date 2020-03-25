

class profileService{
    
    constructor(http){
    this._http=http;
    }
    
    fetchProfile(){
        
        var that = this; //  ¯\_(ツ)_/¯  promise does not keep the this for methods to call each other
        
        return this._http.get('https://jsonplaceholder.typicode.com/users/1').then(
            function(profile){
                return that.createProfileFromResponse(profile);
            });
    }
    
        
    createProfileFromResponse(response){
        return {
            id: response.id,
            name: response.name,
            email: response.email
        };
    }
    }
    
    const ProfileService = new profileService(http);

