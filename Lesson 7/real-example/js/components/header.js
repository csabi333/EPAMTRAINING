class Header{
    constructor(profileService){
        this.profileService=profileService;
        this.template=`<header><img src="/css/epamsocial-logo-white.png" alt="EPAM Social Logo"height="40"></img>
            <h1 class="title">Example</h1>
            <div id="user" class="user"></div>
            </header>`;  /*the picture isnt implemented with a promise but it looks better now*/
    }
    
    init(){
        var user = document.getElementById('user');
        return this._fetchProfile(user);
    }
    
    _fetchProfile(user){
        
        var that=this;
        
        return ProfileService.fetchProfile().then(function(profile){
            user.innerHTML=`
                <div class="data">
                    <div class="name">${profile.name}</div>
                    <div class="email">${profile.email}</div>
                </div>
                <div class="avatar">${that._getAvatar(profile.name)}</div>`;
        });
    }
    
    _getAvatar(name){
        return name.split(' ')
                .map(function(x){return x.substring(0,1)})
                .join('');
    }
}

const header = new Header(profileService);

/*
var header = (function(profileService) {

    var template = `<header>
        <h1 class="title">Example</h1>
        <div id="user" class="user"></div>
    </header>`;

    var init = function() {
        var user = document.getElementById('user');
        return _fetchProfile(user);   
    }

    var _fetchProfile = function(user) {
        return ProfileService.fetchProfile().then(function(profile) {
            user.innerHTML = `
                <div class="data">
                    <div class="name">${profile.name}</div>
                    <div class="email">${profile.email}</div>
                </div>
                <div class="avatar">${_getAvatar(profile.name)}</div>
            `;
        });
    }

    var _getAvatar = function(name) {
        return name
            .split(' ')
            .map(function(x) { return x.substring(0, 1) })
            .join('');
    }

    return {
        init: init,
        template: template
    };

})(profileService);
*/